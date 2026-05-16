import { readFileSync } from 'fs';
// Load .env
for (const line of readFileSync('d:/Downloads/modlens-mcp/.env', 'utf8').split('\n')) {
    const m = line.match(/^([^#=]+)=(.*)$/);
    if (m) process.env[m[1].trim()] ??= m[2].trim().replace(/^["']|["']$/g, '');
}
import { PrismaClient } from '@prisma/client';
const db = new PrismaClient();
const cfFilled = await db.mod.count({ where: { curseforgeId: { not: null } } });
const mrFilled = await db.mod.count({ where: { modrinthId:   { not: null } } });
console.log(`curseforgeId populated: ${cfFilled} / 821`);
console.log(`modrinthId populated:   ${mrFilled} / 821`);
await db.$disconnect();
