/**
 * Cross-check ATM10 manifest CF project IDs against pack_files and mods in DB.
 * Reports: how many manifest mods have a cfProject match in the DB,
 * and lists any that are in pack_files but NOT linked to a mod row.
 */
import { PrismaClient } from '@prisma/client';
const db = new PrismaClient();

// Get all pack_files for ATM10 (packVersionId=1) of type "mod"
const packFiles = await db.packFile.findMany({
    where: { packVersionId: 1, fileType: 'mod' },
    select: { id: true, manifestFileId: true, fileName: true, cfProject: true, cfFile: true, status: true, modId: true },
});

console.log(`Total pack_files (mod type): ${packFiles.length}`);

// Group by status
const byStatus = {};
for (const f of packFiles) {
    byStatus[f.status] = (byStatus[f.status] ?? 0) + 1;
}
console.log('By status:', JSON.stringify(byStatus));

// For files that have a cfProject, check if there's a mod in DB with that curseforgeId
const cfProjectIds = [...new Set(packFiles.filter(f => f.cfProject).map(f => f.cfProject))];
console.log(`Unique CF project IDs in manifest: ${cfProjectIds.length}`);

const modsWithCf = await db.mod.findMany({
    where: { curseforgeId: { in: cfProjectIds } },
    select: { id: true, modId: true, displayName: true, curseforgeId: true, version: true },
});
console.log(`Mods in DB matching by curseforgeId: ${modsWithCf.length}`);

// Files that have modId set (linked during sync via jar hash)
const linked = packFiles.filter(f => f.modId !== null);
const notLinked = packFiles.filter(f => f.modId === null);
console.log(`\nLinked to a mod row (modId set): ${linked.length}`);
console.log(`NOT linked (no modId): ${notLinked.length}`);

// For not-linked, check if their cfProject appears in the mods table
const cfMap = new Map(modsWithCf.map(m => [m.curseforgeId, m]));
const notLinkedButCfMatch = notLinked.filter(f => f.cfProject && cfMap.has(f.cfProject));
const notLinkedNoCfMatch  = notLinked.filter(f => !f.cfProject || !cfMap.has(f.cfProject));

console.log(`Not-linked but CF project IS in DB: ${notLinkedButCfMatch.length}`);
console.log(`Not-linked and CF project NOT in DB: ${notLinkedNoCfMatch.length}`);

if (notLinkedNoCfMatch.length > 0) {
    console.log('\nSample of mods missing from DB entirely:');
    for (const f of notLinkedNoCfMatch.slice(0, 10)) {
        console.log(`  cfProject=${f.cfProject} cfFile=${f.cfFile} name=${f.fileName} status=${f.status}`);
    }
}

// Spot-check: verify a few linked modIds actually exist
console.log('\nSpot-check 5 linked entries:');
const sample = linked.slice(0, 5);
for (const f of sample) {
    const mod = await db.mod.findUnique({ where: { id: f.modId }, select: { id: true, modId: true, displayName: true, curseforgeId: true } });
    console.log(`  packFile.fileName="${f.fileName}" → mod.id=${mod?.id} mod.modId="${mod?.modId}" mod.displayName="${mod?.displayName}" mod.curseforgeId=${mod?.curseforgeId}`);
}

await db.$disconnect();
