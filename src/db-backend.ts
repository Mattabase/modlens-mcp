// src/db-backend.ts
/**
 * Backend detection from DATABASE_URL shape.
 * This is the single runtime signal for which DB driver to use.
 */

export type Backend = "postgres" | "pglite" | "sqlite";

export function detectBackend(): Backend {
    const url = process.env.DATABASE_URL ?? "";
    if (url.startsWith("file:") || url.endsWith(".db")) return "sqlite";
    if (url.startsWith("pglite://") || url.startsWith("pglite:")) return "pglite";
    return "postgres";
}

/**
 * Serialize an array to a JSON string for SQLite String columns.
 * On postgres/pglite, returns the original value unchanged.
 */
export function serializeArray<T>(value: T[]): T[] | string {
    if (detectBackend() === "sqlite") return JSON.stringify(value);
    return value;
}

/**
 * Deserialize a SQLite JSON string column back to an array.
 * On postgres/pglite, returns the original value unchanged.
 */
export function deserializeArray<T>(value: T[] | string | null | undefined): T[] {
    if (typeof value === "string") {
        try { return JSON.parse(value) as T[]; } catch { return []; }
    }
    return (value as T[]) ?? [];
}
