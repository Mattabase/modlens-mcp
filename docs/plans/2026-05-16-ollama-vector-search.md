# Ollama + pgvector Semantic Search Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add optional semantic (vector) search to `docs`, `primers`, and MC source FTS using Ollama for local embeddings and `pgvector` for storage, reducing the token cost of search results by improving retrieval precision.

**Architecture:** Ollama runs locally and provides embeddings via its REST API (`/api/embeddings`). PostgreSQL gains the `pgvector` extension (already available in Postgres 16 images). New `embedding` columns (`vector(768)`) are added to `doc_entries`, `primers`, and `mc_source_files`. A thin `src/embeddings.ts` module wraps the Ollama call. Semantic search is **opt-in** — if `OLLAMA_URL` is not set, all existing keyword/FTS paths are used unchanged. New `semantic` actions are added to the `docs`, `primers`, and `mc_source` tools.

**Tech Stack:** `pgvector` Postgres extension, Ollama REST API (`nomic-embed-text` model, 768-dim), raw `prisma.$queryRaw` for vector queries (Prisma doesn't natively support pgvector), `OLLAMA_URL` env var (default `http://localhost:11434`).

---

## Scope

Three independent sub-features, each shippable alone:

| Sub-feature | Token reduction | Effort |
|---|---|---|
| **A** — `docs` semantic search | High (small table, high semantic gap) | Low |
| **B** — `primers` semantic search | High (long content, version-range queries gain from semantics) | Low |
| **C** — `mc_source_files` semantic search | Medium (large table, needs chunking) | High |

> Implement A → B → C in order. Each task block is independently committable.

---

## Prerequisites (do first)

- [ ] Confirm Ollama is installed: `ollama --version`
- [ ] Pull the embedding model: `ollama pull nomic-embed-text`
- [ ] Verify it works: `curl http://localhost:11434/api/embeddings -d '{"model":"nomic-embed-text","prompt":"test"}'`
- [ ] Note the output vector dimension (should be 768)

---

## File Map

| File | Action | Purpose |
|---|---|---|
| `src/embeddings.ts` | **Create** | Ollama client — `embed(text): Promise<number[]>`, `isOllamaAvailable(): Promise<bool>` |
| `src/repositories/embeddings.ts` | **Create** | Raw SQL helpers — `upsertDocEmbedding`, `upsertPrimerEmbedding`, `upsertSourceEmbedding`, `searchDocsByVector`, `searchPrimersByVector`, `searchSourceByVector` |
| `prisma/schema.prisma` | **Modify** | Add `embedding Unsupported("vector(768)")?` columns to `DocEntry`, `Primer`, `McSourceFile` |
| `scripts/enable-pgvector.mjs` | **Create** | One-shot script: `CREATE EXTENSION IF NOT EXISTS vector; ALTER TABLE ... ADD COLUMN IF NOT EXISTS embedding vector(768);` + `CREATE INDEX` |
| `src/tools/docs.ts` | **Modify** | Add `semantic_search` action |
| `src/tools/primers.ts` | **Modify** | Add `semantic_search` action + embed on `ingest` when Ollama available |
| `src/tools/mc-fts.ts` | **Modify** | Add `search_semantic` action + embed during `index` (chunked) |
| `src/server.ts` | **Modify** | Expose new actions in tool schemas for `docs`, `primers`, `mc_source` |
| `docker-compose.yml` | **Modify** | Switch image to `pgvector/pgvector:pg16` (includes the extension) |
| `.env.example` | **Create** | Document `OLLAMA_URL`, `OLLAMA_EMBED_MODEL` |
| `tests/embeddings.test.ts` | **Create** | Unit tests (mock Ollama), integration tests (skip if `OLLAMA_URL` not set) |

---

## Task 1 — Docker: switch to pgvector image

**Files:** `docker-compose.yml`

- [ ] Open `docker-compose.yml`. Change `image: postgres:16` to `image: pgvector/pgvector:pg16`
- [ ] Run `docker compose down && docker compose up -d` — verify it starts healthy
- [ ] Verify extension is available: `docker exec <container> psql -U modlens -c "SELECT * FROM pg_available_extensions WHERE name = 'vector';"`
- [ ] Commit: `git commit -m "chore: switch to pgvector/pgvector:pg16 image"`

---

## Task 2 — Enable extension + add columns

**Files:** `scripts/enable-pgvector.mjs` (new)

- [ ] Create `scripts/enable-pgvector.mjs`:

```js
// scripts/enable-pgvector.mjs
import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();
await db.$executeRawUnsafe(`CREATE EXTENSION IF NOT EXISTS vector`);
await db.$executeRawUnsafe(`ALTER TABLE doc_entries ADD COLUMN IF NOT EXISTS embedding vector(768)`);
await db.$executeRawUnsafe(`ALTER TABLE primers ADD COLUMN IF NOT EXISTS embedding vector(768)`);
await db.$executeRawUnsafe(`ALTER TABLE mc_source_files ADD COLUMN IF NOT EXISTS embedding vector(768)`);
// HNSW indexes — fast approximate nearest-neighbour
await db.$executeRawUnsafe(`CREATE INDEX IF NOT EXISTS doc_entries_embedding_idx ON doc_entries USING hnsw (embedding vector_cosine_ops)`);
await db.$executeRawUnsafe(`CREATE INDEX IF NOT EXISTS primers_embedding_idx ON primers USING hnsw (embedding vector_cosine_ops)`);
await db.$executeRawUnsafe(`CREATE INDEX IF NOT EXISTS mc_source_files_embedding_idx ON mc_source_files USING hnsw (embedding vector_cosine_ops)`);
await db.$disconnect();
console.log("pgvector enabled and columns added");
```

- [ ] Run: `node scripts/enable-pgvector.mjs` — should print "pgvector enabled"
- [ ] Add to `package.json` scripts: `"db:vector": "node scripts/enable-pgvector.mjs"`
- [ ] Update `prisma/schema.prisma` — add `embedding Unsupported("vector(768)")?` to `DocEntry`, `Primer`, `McSourceFile` (Prisma ignores it at the TS level, raw SQL handles it)
- [ ] Commit: `git commit -m "feat: enable pgvector extension and add embedding columns"`

---

## Task 3 — Ollama embeddings client

**Files:** `src/embeddings.ts` (new), `tests/embeddings.test.ts` (new)

- [ ] **Write the failing test first** — `tests/embeddings.test.ts`:

```ts
import { describe, it, expect, vi } from "vitest";
import { embed, isOllamaAvailable, chunkText } from "../src/embeddings.js";

describe("embed", () => {
    it("calls Ollama and returns a number array", async () => {
        const mockFetch = vi.fn().mockResolvedValue({
            ok: true,
            json: async () => ({ embedding: Array(768).fill(0.1) }),
        });
        vi.stubGlobal("fetch", mockFetch);
        const result = await embed("hello world");
        expect(result).toHaveLength(768);
        expect(typeof result[0]).toBe("number");
    });

    it("throws if Ollama returns non-ok", async () => {
        vi.stubGlobal("fetch", vi.fn().mockResolvedValue({ ok: false, status: 500 }));
        await expect(embed("test")).rejects.toThrow("Ollama embed failed");
    });
});

describe("chunkText", () => {
    it("splits long text into overlapping chunks under maxChars", () => {
        const text = "a".repeat(5000);
        const chunks = chunkText(text, 1000, 100);
        expect(chunks.length).toBeGreaterThan(1);
        chunks.forEach(c => expect(c.length).toBeLessThanOrEqual(1000));
    });

    it("returns single chunk for short text", () => {
        expect(chunkText("short", 1000, 100)).toHaveLength(1);
    });
});

describe("isOllamaAvailable", () => {
    it("returns true when Ollama responds", async () => {
        vi.stubGlobal("fetch", vi.fn().mockResolvedValue({ ok: true }));
        expect(await isOllamaAvailable()).toBe(true);
    });
    it("returns false on network error", async () => {
        vi.stubGlobal("fetch", vi.fn().mockRejectedValue(new Error("ECONNREFUSED")));
        expect(await isOllamaAvailable()).toBe(false);
    });
});
```

- [ ] Run `npx vitest run tests/embeddings.test.ts` — confirm it fails (module not found)
- [ ] Create `src/embeddings.ts`:

```ts
const OLLAMA_URL   = process.env.OLLAMA_URL        ?? "http://localhost:11434";
const EMBED_MODEL  = process.env.OLLAMA_EMBED_MODEL ?? "nomic-embed-text";

/** Embed a single text string. Throws if Ollama is unreachable or returns error. */
export async function embed(text: string): Promise<number[]> {
    const res = await fetch(`${OLLAMA_URL}/api/embeddings`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ model: EMBED_MODEL, prompt: text }),
    });
    if (!res.ok) throw new Error(`Ollama embed failed: ${res.status}`);
    const { embedding } = await res.json() as { embedding: number[] };
    return embedding;
}

/** Returns false if Ollama is not running — used to gate optional features. */
export async function isOllamaAvailable(): Promise<boolean> {
    try {
        const res = await fetch(`${OLLAMA_URL}/api/tags`, { signal: AbortSignal.timeout(2000) });
        return res.ok;
    } catch {
        return false;
    }
}

/**
 * Split text into overlapping chunks for embedding.
 * maxChars: max characters per chunk (default 1500 — ~375 tokens)
 * overlap: character overlap between chunks (default 200)
 */
export function chunkText(text: string, maxChars = 1500, overlap = 200): string[] {
    if (text.length <= maxChars) return [text];
    const chunks: string[] = [];
    let start = 0;
    while (start < text.length) {
        chunks.push(text.slice(start, start + maxChars));
        start += maxChars - overlap;
    }
    return chunks;
}
```

- [ ] Run tests — should pass
- [ ] Commit: `git commit -m "feat: add Ollama embeddings client with chunking"`

---

## Task 4 — Repository layer for vector queries

**Files:** `src/repositories/embeddings.ts` (new), extend tests

- [ ] Create `src/repositories/embeddings.ts`:

```ts
import { db } from "../db.js";

type VecRow = { id: number; similarity: number };

/** Store embedding for a doc_entry. */
export async function upsertDocEmbedding(id: number, vec: number[]): Promise<void> {
    await db().$executeRawUnsafe(
        `UPDATE doc_entries SET embedding = $1::vector WHERE id = $2`,
        `[${vec.join(",")}]`, id
    );
}

/** Cosine similarity search across doc_entries. Returns ids ordered by similarity. */
export async function searchDocsByVector(vec: number[], limit = 5): Promise<VecRow[]> {
    return db().$queryRawUnsafe<VecRow[]>(
        `SELECT id, 1 - (embedding <=> $1::vector) AS similarity
         FROM doc_entries
         WHERE embedding IS NOT NULL
         ORDER BY embedding <=> $1::vector
         LIMIT $2`,
        `[${vec.join(",")}]`, limit
    );
}

/** Store embedding for a primer. */
export async function upsertPrimerEmbedding(id: number, vec: number[]): Promise<void> {
    await db().$executeRawUnsafe(
        `UPDATE primers SET embedding = $1::vector WHERE id = $2`,
        `[${vec.join(",")}]`, id
    );
}

/** Cosine similarity search across primers. */
export async function searchPrimersByVector(vec: number[], limit = 5): Promise<VecRow[]> {
    return db().$queryRawUnsafe<VecRow[]>(
        `SELECT id, 1 - (embedding <=> $1::vector) AS similarity
         FROM primers
         WHERE embedding IS NOT NULL
         ORDER BY embedding <=> $1::vector
         LIMIT $2`,
        `[${vec.join(",")}]`, limit
    );
}

/** Store embedding for an mc_source_file chunk (chunkIdx distinguishes multiple chunks per file). */
export async function upsertSourceEmbedding(id: number, vec: number[]): Promise<void> {
    await db().$executeRawUnsafe(
        `UPDATE mc_source_files SET embedding = $1::vector WHERE id = $2`,
        `[${vec.join(",")}]`, id
    );
}

/** Cosine similarity search across mc_source_files for a given mcVersionId. */
export async function searchSourceByVector(
    vec: number[], mcVersionId: number, limit = 10
): Promise<(VecRow & { class_name: string })[]> {
    return db().$queryRawUnsafe<(VecRow & { class_name: string })[]>(
        `SELECT id, class_name, 1 - (embedding <=> $1::vector) AS similarity
         FROM mc_source_files
         WHERE mc_version_id = $3 AND embedding IS NOT NULL
         ORDER BY embedding <=> $1::vector
         LIMIT $2`,
        `[${vec.join(",")}]`, limit, mcVersionId
    );
}
```

- [ ] Add integration test (skipped unless `OLLAMA_URL` set + db running):

```ts
describe.skipIf(!process.env.OLLAMA_URL)("vector repo integration", () => {
    it("round-trips a doc embedding", async () => {
        const vec = Array(768).fill(0.0);
        vec[0] = 1.0;
        // needs a real doc_entry row — use a seeded one
        const row = await db().docEntry.findFirst();
        if (!row) return;
        await upsertDocEmbedding(row.id, vec);
        const results = await searchDocsByVector(vec, 1);
        expect(results[0].id).toBe(row.id);
    });
});
```

- [ ] Commit: `git commit -m "feat: add vector repository helpers for doc/primer/source embedding search"`

---

## Task 5A — docs: embed on ingest, add semantic_search action

**Files:** `src/tools/docs.ts`, `src/server.ts`

- [ ] In `ingestDocumentation`, after creating/updating a row, try embedding if Ollama is available:

```ts
import { isOllamaAvailable, embed } from "../embeddings.js";
import { upsertDocEmbedding } from "../repositories/embeddings.js";

// After create/update:
if (await isOllamaAvailable()) {
    const text = [e.title, e.summary, e.className].filter(Boolean).join(" ");
    try {
        const vec = await embed(text);
        await upsertDocEmbedding(id, vec);
    } catch { /* non-fatal — embedding is optional */ }
}
```

- [ ] Add `semanticSearch` export to `docs.ts`:

```ts
export async function semanticSearchDocumentation(query: string, limit = 5) {
    const vec = await embed(query);
    const rows = await searchDocsByVector(vec, limit);
    if (!rows.length) return { results: [] };
    const ids = rows.map(r => r.id);
    const entries = await db().docEntry.findMany({ where: { id: { in: ids } } });
    const byId = Object.fromEntries(entries.map(e => [e.id, e]));
    return { results: rows.map(r => ({ similarity: r.similarity, ...byId[r.id] })) };
}
```

- [ ] Add `semantic_search` to the `docs` action enum in `server.ts`
- [ ] Add handler in the switch: `case "semantic_search": result = await semanticSearchDocumentation(query!, limit); break;`
- [ ] Build: `npm run build`
- [ ] Manual test (if Ollama running): call `docs` with `action=semantic_search, query="how do I register a block in NeoForge"`
- [ ] Commit: `git commit -m "feat: semantic search for docs via Ollama pgvector"`

---

## Task 5B — primers: embed on ingest, add semantic_search action

**Files:** `src/tools/primers.ts`, `src/server.ts`

- [ ] Mirror Task 5A pattern: embed `[title, summary, content].filter(Boolean).join("\n\n")` after ingest
- [ ] For `content` (long text), use `chunkText` — embed the first chunk only (summary/title usually sufficient for primers)
- [ ] Add `semanticSearchPrimers` export and `semantic_search` action in tool + server
- [ ] Commit: `git commit -m "feat: semantic search for primers via Ollama pgvector"`

---

## Task 5C — mc_source: embed during index, add search_semantic action

**Files:** `src/tools/mc-fts.ts`, `src/server.ts`

> ⚠ This is the large task. `mc_source_files` can have 100K+ rows. Embedding all of them takes hours and is optional. Gate it behind a separate `index_semantic` action rather than running automatically during `index`.

- [ ] Add `indexMcSourceSemantic(version: string, batchSize = 50)` to `mc-fts.ts`:
  - Fetch all `mc_source_files` rows for the version where `embedding IS NULL`
  - For each: `chunkText(content, 1500, 200)` → embed **first chunk only** (class declaration + first ~1500 chars)
  - `upsertSourceEmbedding(row.id, vec)`
  - Process in batches of `batchSize` with a `100ms` pause between batches (avoid overloading Ollama)
  - Return progress: `{ indexed: N, remaining: M, estimatedMinutes }`
- [ ] Add `searchMcSourceSemantic(version, query, limit)` using `searchSourceByVector`
- [ ] Add `index_semantic` and `search_semantic` to `mc_source` action enum in `server.ts`
- [ ] Note: `index_semantic` should warn if Ollama is not available
- [ ] Commit: `git commit -m "feat: semantic index and search for MC source via Ollama pgvector"`

---

## Task 6 — Backfill command + env docs

**Files:** `src/cli.ts`, `.env.example` (new), `README.md`

- [ ] Add `backfill-embeddings` CLI command:
  ```
  node dist/cli.js backfill-embeddings [--type docs|primers|source] [--version 26.1.2]
  ```
  Calls `ingestDocumentation` re-embed on all existing rows, or `indexMcSourceSemantic`.

- [ ] Create `.env.example`:
  ```
  DATABASE_URL=postgresql://modlens:modlens@localhost:5433/modlens
  # Optional — enables semantic search features
  OLLAMA_URL=http://localhost:11434
  OLLAMA_EMBED_MODEL=nomic-embed-text
  # Optional — platform API keys
  CURSEFORGE_API_KEY=
  MODRINTH_TOKEN=
  ```

- [ ] Add to README under a new **Semantic Search (optional)** section:
  ```
  ### Semantic Search (optional)
  Install Ollama and pull the embedding model:
  ollama pull nomic-embed-text
  Set OLLAMA_URL=http://localhost:11434 in .env.
  Then run: node dist/cli.js backfill-embeddings --type docs
  Semantic search is automatically used when available — keyword search is the fallback.
  ```

- [ ] Commit: `git commit -m "feat: backfill-embeddings CLI command, .env.example, README semantic search docs"`

---

## Task 7 — Tests pass, final check

- [ ] Run full test suite: `npx vitest run` — all existing tests should still pass
- [ ] Run new embedding tests: `npx vitest run tests/embeddings.test.ts`
- [ ] Build: `npm run build`
- [ ] Push: `git push`

---

## Notes for the implementer

- **Ollama is always optional.** Every call to `isOllamaAvailable()` is a 2-second timeout check. If it returns false, the feature silently falls back to keyword/FTS search. Never throw or warn the user if Ollama is absent.
- **pgvector dimension must match the model.** `nomic-embed-text` produces 768-dim vectors. If someone uses a different model, the column definition must change. The `OLLAMA_EMBED_MODEL` env var is there for this, but changing models requires re-running `enable-pgvector.mjs` with a new dimension and re-embedding all rows.
- **mc_source_files embedding is slow.** ATM11 has ~113K indexed classes. At ~50ms per Ollama call, embedding all of them takes ~1.5 hours. The backfill CLI uses batching + pauses to prevent OOM. Most users will not need this — `docs` and `primers` embedding is the high-value low-effort win.
- **Prisma can't represent `vector` type.** Use `Unsupported("vector(768)")` in schema.prisma (Prisma will ignore it at codegen time). All vector reads/writes go through `$queryRawUnsafe` / `$executeRawUnsafe`. This is intentional — don't try to work around it with a JSON column.
