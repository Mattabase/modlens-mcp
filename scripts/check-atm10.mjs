import { PrismaClient } from '@prisma/client';
const db = new PrismaClient();

const stats = await db.mod.aggregate({ _min: { id: true }, _max: { id: true } });
const totalMods = await db.mod.count();
const atm10Files = await db.packFile.count({ where: { packVersionId: 1, fileType: 'mod' } });
const atm10WithModId = await db.packFile.count({ where: { packVersionId: 1, fileType: 'mod', modId: { not: null } } });
const atm10NotSynced = await db.packFile.count({ where: { packVersionId: 1, fileType: 'mod', status: 'not_synced' } });
const atm10AlreadyIngested = await db.packFile.count({ where: { packVersionId: 1, fileType: 'mod', status: 'already_ingested' } });
const atm10Ingested = await db.packFile.count({ where: { packVersionId: 1, fileType: 'mod', status: 'ingested' } });

const lowestAtm10Mod = await db.packFile.findFirst({ where: { packVersionId: 1, modId: { not: null } }, orderBy: { modId: 'asc' }, select: { modId: true, fileName: true } });
const highestAtm10Mod = await db.packFile.findFirst({ where: { packVersionId: 1, modId: { not: null } }, orderBy: { modId: 'desc' }, select: { modId: true, fileName: true } });

console.log(JSON.stringify({
    totalModsInDb: totalMods,
    dbModIdRange: stats,
    atm10Files,
    atm10WithModId,
    atm10Ingested,
    atm10AlreadyIngested,
    atm10NotSynced,
    lowestAtm10Mod,
    highestAtm10Mod,
}, null, 2));

await db.$disconnect();
