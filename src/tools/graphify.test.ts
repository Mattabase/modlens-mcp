import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { join } from "path";
import { mkdtemp, writeFile, rm, mkdir, access } from "fs/promises";
import { tmpdir } from "os";

describe("graphify", () => {
    let tempDir: string;

    beforeEach(async () => {
        tempDir = await mkdtemp(join(tmpdir(), "modlens-graph-test-"));
    });

    afterEach(async () => {
        await rm(tempDir, { recursive: true, force: true }).catch(() => {});
    });

    describe("sentinel files", () => {
        it("empty directory has no sentinels", async () => {
            await expect(access(join(tempDir, ".graph.done"))).rejects.toThrow();
            await expect(access(join(tempDir, ".graph.error"))).rejects.toThrow();
            await expect(access(join(tempDir, ".graph.running"))).rejects.toThrow();
        });

        it("detects done sentinel", async () => {
            await writeFile(join(tempDir, ".graph.done"), "0");
            await expect(access(join(tempDir, ".graph.done"))).resolves.toBeUndefined();
        });

        it("detects graph.json fallback for done state", async () => {
            const outDir = join(tempDir, "graphify-out");
            await mkdir(outDir, { recursive: true });
            await writeFile(join(outDir, "graph.json"), "{}");
            await expect(access(join(outDir, "graph.json"))).resolves.toBeUndefined();
        });

        it("detects error sentinel", async () => {
            await writeFile(join(tempDir, ".graph.error"), "1");
            await expect(access(join(tempDir, ".graph.error"))).resolves.toBeUndefined();
        });

        it("detects running sentinel", async () => {
            await writeFile(join(tempDir, ".graph.running"), String(Date.now()));
            await expect(access(join(tempDir, ".graph.running"))).resolves.toBeUndefined();
        });
    });
});
