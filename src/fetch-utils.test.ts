import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { fetchWithRetry, DOWNLOAD_OPTS, safeJson } from "./fetch-utils.js";

function mockFetch(...responses: Array<{ status: number; ok: boolean; body?: string }>) {
    let call = 0;
    return vi.fn().mockImplementation(() => {
        const r = responses[Math.min(call++, responses.length - 1)];
        return Promise.resolve({
            ok: r.ok,
            status: r.status,
            text: async () => r.body ?? "",
        });
    });
}

beforeEach(() => {
    vi.useFakeTimers();
});

afterEach(() => {
    vi.useRealTimers();
    vi.unstubAllGlobals();
});

// ── Happy path ────────────────────────────────────────────────────────────────

describe("fetchWithRetry — happy path", () => {
    it("returns a 200 response immediately", async () => {
        vi.stubGlobal("fetch", mockFetch({ status: 200, ok: true }));
        const res = await fetchWithRetry("https://example.com/api");
        expect(res.status).toBe(200);
        expect((fetch as ReturnType<typeof vi.fn>).mock.calls).toHaveLength(1);
    });
});

// ── 4xx pass-through (no retry) ───────────────────────────────────────────────

describe("fetchWithRetry — 4xx pass-through (no retry)", () => {
    it("returns 404 without retrying", async () => {
        const fakeFetch = mockFetch({ status: 404, ok: false });
        vi.stubGlobal("fetch", fakeFetch);
        const res = await fetchWithRetry("https://example.com/api");
        expect(res.status).toBe(404);
        expect(fakeFetch.mock.calls).toHaveLength(1);
    });

    it("returns 401 without retrying", async () => {
        const fakeFetch = mockFetch({ status: 401, ok: false });
        vi.stubGlobal("fetch", fakeFetch);
        const res = await fetchWithRetry("https://example.com/api");
        expect(res.status).toBe(401);
        expect(fakeFetch.mock.calls).toHaveLength(1);
    });
});

// ── 5xx retry ────────────────────────────────────────────────────────────────

describe("fetchWithRetry — 5xx retry", () => {
    it("retries up to MAX_RETRIES times on 5xx then returns last response", async () => {
        const fakeFetch = mockFetch(
            { status: 503, ok: false },
            { status: 503, ok: false },
            { status: 503, ok: false },
            { status: 200, ok: true },
        );
        vi.stubGlobal("fetch", fakeFetch);

        const promise = fetchWithRetry("https://example.com/api", undefined, { retries: 3, backoffMs: 100 });
        await vi.runAllTimersAsync();
        const res = await promise;

        expect(res.status).toBe(200);
        expect(fakeFetch.mock.calls).toHaveLength(4);
    });

    it("returns last 5xx response after all retries exhausted", async () => {
        const fakeFetch = mockFetch(
            { status: 503, ok: false },
            { status: 503, ok: false },
            { status: 503, ok: false },
            { status: 503, ok: false },
        );
        vi.stubGlobal("fetch", fakeFetch);

        const promise = fetchWithRetry("https://example.com/api", undefined, { retries: 3, backoffMs: 100 });
        await vi.runAllTimersAsync();
        const res = await promise;

        expect(res.status).toBe(503);
        expect(fakeFetch.mock.calls).toHaveLength(4);
    });

    it("succeeds on second attempt after one 5xx", async () => {
        const fakeFetch = mockFetch(
            { status: 500, ok: false },
            { status: 200, ok: true },
        );
        vi.stubGlobal("fetch", fakeFetch);

        const promise = fetchWithRetry("https://example.com/api", undefined, { retries: 2, backoffMs: 10 });
        await vi.runAllTimersAsync();
        const res = await promise;

        expect(res.status).toBe(200);
        expect(fakeFetch.mock.calls).toHaveLength(2);
    });
});

// ── Network error retry ───────────────────────────────────────────────────────

describe("fetchWithRetry — network errors", () => {
    it("retries on network error (fetch rejects)", async () => {
        let call = 0;
        const fakeFetch = vi.fn().mockImplementation(() => {
            if (++call < 3) return Promise.reject(new Error("ECONNREFUSED"));
            return Promise.resolve({ ok: true, status: 200, text: async () => "" });
        });
        vi.stubGlobal("fetch", fakeFetch);

        const promise = fetchWithRetry("https://example.com/api", undefined, { retries: 3, backoffMs: 10 });
        await vi.runAllTimersAsync();
        const res = await promise;

        expect(res.status).toBe(200);
        expect(fakeFetch.mock.calls.length).toBeGreaterThanOrEqual(3);
    });

    it("throws the last network error after all retries exhausted", async () => {
        // retries: 0 avoids backoff timers — single fetch, immediate rejection
        const fakeFetch = vi.fn().mockImplementation(() => Promise.reject(new Error("ECONNREFUSED")));
        vi.stubGlobal("fetch", fakeFetch);

        await expect(
            fetchWithRetry("https://example.com/api", undefined, { retries: 0 })
        ).rejects.toThrow("ECONNREFUSED");
    });
});

// ── Options ───────────────────────────────────────────────────────────────────

describe("fetchWithRetry — options", () => {
    it("respects custom retries=0 — returns 5xx without retrying", async () => {
        const fakeFetch = mockFetch(
            { status: 500, ok: false },
            { status: 200, ok: true },
        );
        vi.stubGlobal("fetch", fakeFetch);

        const promise = fetchWithRetry("https://example.com/api", undefined, { retries: 0 });
        await vi.runAllTimersAsync();
        const res = await promise;
        // With retries=0, the 5xx is returned immediately (no second attempt)
        expect(res.status).toBe(500);
        expect(fakeFetch.mock.calls).toHaveLength(1);
    });

    it("DOWNLOAD_OPTS has increased timeout and fewer retries", () => {
        expect(DOWNLOAD_OPTS.timeoutMs).toBeGreaterThan(10_000);
        expect(DOWNLOAD_OPTS.retries).toBeLessThan(4);
    });
});

// ── safeJson ──────────────────────────────────────────────────────────────────

describe("safeJson", () => {
    it("parses valid JSON from a Response", async () => {
        const res = new Response(JSON.stringify({ foo: 42 }));
        const data = await safeJson<{ foo: number }>(res, "test");
        expect(data).toEqual({ foo: 42 });
    });

    it("throws with a clear message on HTML response", async () => {
        const res = new Response("<html><body>Error</body></html>");
        await expect(safeJson(res, "test API")).rejects.toThrow(
            /test API: expected JSON but got: <html>/
        );
    });

    it("throws with a clear message on empty response", async () => {
        const res = new Response("");
        await expect(safeJson(res, "test")).rejects.toThrow(/expected JSON but got:/);
    });
});
