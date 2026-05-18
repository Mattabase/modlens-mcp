/**
 * sqlite-vec helpers for vector operations on a SQLite backend.
 * Uses float32 blobs stored in separate vec0 virtual tables.
 *
 * Requires: `npm run db:vector:sqlite` run once to create the vec0 tables.
 */
import { detectBackend } from "../db-backend.js";

type VecRow = { id: number; similarity: number };

let _vecDb: import("better-sqlite3").Database | null = null;

async function getVecDb(): Promise<import("better-sqlite3").Database> {
    if (_vecDb) return _vecDb;
    const url = process.env.DATABASE_URL ?? "";
    const path = url.replace(/^file:\/\//, "").replace(/^file:/, "");
    const Database = (await import("better-sqlite3")).default;
    const db = new Database(path);
    try {
        const { createRequire } = await import("module");
        const require = createRequire(import.meta.url);
        const sqliteVec = require("sqlite-vec");
        sqliteVec.load(db);
    } catch {
        // sqlite-vec not installed — vector search unavailable
    }
    _vecDb = db;
    return db;
}

function float32Blob(vec: number[]): Buffer {
    const buf = Buffer.allocUnsafe(vec.length * 4);
    for (let i = 0; i < vec.length; i++) buf.writeFloatLE(vec[i], i * 4);
    return buf;
}

// ── doc_entries ───────────────────────────────────────────────────────────────

export async function upsertDocEmbedding(id: number, vec: number[]): Promise<void> {
    const db = await getVecDb();
    // Store blob in Prisma table
    const prisma = await import("../db.js").then((m) => m.getDb());
    await (prisma as any).docEntry.update({ where: { id }, data: { embedding: float32Blob(vec) } });
    // Upsert into vec0 table if available
    try {
        db.prepare(`INSERT OR REPLACE INTO vec_doc_entries(rowid, embedding) VALUES (?, ?)`).run(id, float32Blob(vec));
    } catch { /* vec0 unavailable */ }
}

export async function searchDocsByVector(vec: number[], limit = 5): Promise<VecRow[]> {
    const db = await getVecDb();
    try {
        const rows = db.prepare(
            `SELECT rowid AS id, distance FROM vec_doc_entries
             WHERE embedding MATCH ? AND k = ?
             ORDER BY distance`,
        ).all(float32Blob(vec), limit) as Array<{ id: number; distance: number }>;
        return rows.map((r) => ({ id: r.id, similarity: 1 - r.distance }));
    } catch {
        return [];
    }
}

// ── primers ───────────────────────────────────────────────────────────────────

export async function upsertPrimerEmbedding(id: number, vec: number[]): Promise<void> {
    const db = await getVecDb();
    const prisma = await import("../db.js").then((m) => m.getDb());
    await (prisma as any).primer.update({ where: { id }, data: { embedding: float32Blob(vec) } });
    try {
        db.prepare(`INSERT OR REPLACE INTO vec_primers(rowid, embedding) VALUES (?, ?)`).run(id, float32Blob(vec));
    } catch { /* vec0 unavailable */ }
}

export async function searchPrimersByVector(vec: number[], limit = 5): Promise<VecRow[]> {
    const db = await getVecDb();
    try {
        const rows = db.prepare(
            `SELECT rowid AS id, distance FROM vec_primers
             WHERE embedding MATCH ? AND k = ?
             ORDER BY distance`,
        ).all(float32Blob(vec), limit) as Array<{ id: number; distance: number }>;
        return rows.map((r) => ({ id: r.id, similarity: 1 - r.distance }));
    } catch {
        return [];
    }
}

// ── mc_source_files ───────────────────────────────────────────────────────────

export async function upsertSourceEmbedding(id: number, vec: number[]): Promise<void> {
    const db = await getVecDb();
    const prisma = await import("../db.js").then((m) => m.getDb());
    await (prisma as any).mcSourceFile.update({ where: { id }, data: { embedding: float32Blob(vec) } });
    try {
        db.prepare(`INSERT OR REPLACE INTO vec_mc_source(rowid, embedding) VALUES (?, ?)`).run(id, float32Blob(vec));
    } catch { /* vec0 unavailable */ }
}

export async function searchSourceByVector(
    vec: number[], mcVersionId: number, limit = 10,
): Promise<Array<{ id: number; class_name: string; similarity: number }>> {
    const db = await getVecDb();
    try {
        const rows = db.prepare(
            `SELECT v.rowid AS id, s.class_name, v.distance FROM vec_mc_source v
             JOIN mc_source_files s ON s.id = v.rowid
             WHERE v.embedding MATCH ? AND v.k = ? AND s.mc_version_id = ?
             ORDER BY v.distance`,
        ).all(float32Blob(vec), limit, mcVersionId) as Array<{ id: number; class_name: string; distance: number }>;
        return rows.map((r) => ({ id: r.id, class_name: r.class_name, similarity: 1 - r.distance }));
    } catch {
        return [];
    }
}

// ── mod_source_files ──────────────────────────────────────────────────────────

export async function upsertModSourceEmbedding(id: number, vec: number[]): Promise<void> {
    const db = await getVecDb();
    const prisma = await import("../db.js").then((m) => m.getDb());
    await (prisma as any).modSourceFile.update({ where: { id }, data: { embedding: float32Blob(vec) } });
    try {
        db.prepare(`INSERT OR REPLACE INTO vec_mod_source(rowid, embedding) VALUES (?, ?)`).run(id, float32Blob(vec));
    } catch { /* vec0 unavailable */ }
}

export async function searchModSourceByVector(
    vec: number[], modId: number, limit = 10,
): Promise<Array<{ id: number; class_name: string; similarity: number }>> {
    const db = await getVecDb();
    try {
        const rows = db.prepare(
            `SELECT v.rowid AS id, s.class_name, v.distance FROM vec_mod_source v
             JOIN mod_source_files s ON s.id = v.rowid
             WHERE v.embedding MATCH ? AND v.k = ? AND s.mod_id = ?
             ORDER BY v.distance`,
        ).all(float32Blob(vec), limit, modId) as Array<{ id: number; class_name: string; distance: number }>;
        return rows.map((r) => ({ id: r.id, class_name: r.class_name, similarity: 1 - r.distance }));
    } catch {
        return [];
    }
}

// ── Class-name → ID lookups (for diff semantic enrichment) ───────────────────

export async function findSourceIdsByClassNames(
    classNames: string[], mcVersionId: number,
): Promise<Map<string, number>> {
    if (classNames.length === 0) return new Map();
    const db = await getVecDb();
    const placeholders = classNames.map(() => "?").join(",");
    try {
        const rows = db.prepare(
            `SELECT id, class_name FROM mc_source_files
             WHERE mc_version_id = ? AND class_name IN (${placeholders}) AND embedding IS NOT NULL`,
        ).all(mcVersionId, ...classNames) as Array<{ id: number; class_name: string }>;
        return new Map(rows.map((r) => [r.class_name, r.id]));
    } catch {
        return new Map();
    }
}

export async function findModSourceIdsByClassNames(
    classNames: string[], modId: number,
): Promise<Map<string, number>> {
    if (classNames.length === 0) return new Map();
    const db = await getVecDb();
    const placeholders = classNames.map(() => "?").join(",");
    try {
        const rows = db.prepare(
            `SELECT id, class_name FROM mod_source_files
             WHERE mod_id = ? AND class_name IN (${placeholders}) AND embedding IS NOT NULL`,
        ).all(modId, ...classNames) as Array<{ id: number; class_name: string }>;
        return new Map(rows.map((r) => [r.class_name, r.id]));
    } catch {
        return new Map();
    }
}
