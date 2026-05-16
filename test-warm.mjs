/**
 * Quick test of mc_data tool (recipes, etc.) to verify caching works on warm run.
 */
import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio.js";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const serverPath = join(__dirname, "dist", "server.js");

const transport = new StdioClientTransport({
  command: "node",
  args: [serverPath],
  env: { ...process.env },
});
const client = new Client({ name: "test-client", version: "1.0.0" });
await client.connect(transport);

let passed = 0, failed = 0;
const errors = [];

async function call(toolName, args, label) {
  const start = Date.now();
  try {
    const r = await client.callTool({ name: toolName, arguments: args });
    const text = r.content?.[0]?.text ?? "";
    const ms = Date.now() - start;
    console.log(`  ✅ ${label} (${ms}ms)`);
    passed++;
    return text;
  } catch (e) {
    const ms = Date.now() - start;
    const msg = e?.message ?? String(e);
    console.log(`  ❌ ${label} (${ms}ms): ${msg.slice(0, 150)}`);
    errors.push({ label, msg });
    failed++;
    return null;
  }
}

console.log("=== mc_data (warm cache) ===");
await call("mc_data", { action: "recipes", version: "26.1.2" }, "mc_data/recipes (list all)");
await call("mc_data", { action: "recipes", version: "26.1.2", type: "crafting_shaped" }, "mc_data/recipes (crafting_shaped filter)");
await call("mc_data", { action: "get_recipe", recipeId: "crafting_table", version: "26.1.2" }, "mc_data/get_recipe");
await call("mc_data", { action: "find_recipes_for", item: "iron_ingot", version: "26.1.2" }, "mc_data/find_recipes_for");
await call("mc_data", { action: "loot_tables", version: "26.1.2" }, "mc_data/loot_tables");
await call("mc_data", { action: "get_loot_table", path: "blocks/iron_ore", version: "26.1.2" }, "mc_data/get_loot_table");
await call("mc_data", { action: "lang", version: "26.1.2", filter: "iron", limit: 5 }, "mc_data/lang");
await call("mc_data", { action: "blockstate", version: "26.1.2", block: "stone" }, "mc_data/blockstate");
await call("mc_data", { action: "model", version: "26.1.2", modelPath: "block/stone" }, "mc_data/model");
await call("mc_data", { action: "biomes", version: "26.1.2" }, "mc_data/biomes");
await call("mc_data", { action: "get_biome", biomeId: "desert", version: "26.1.2" }, "mc_data/get_biome");
await call("mc_data", { action: "damage_types", version: "26.1.2" }, "mc_data/damage_types");
await call("mc_data", { action: "enchantments", version: "26.1.2" }, "mc_data/enchantments");
await call("mc_data", { action: "advancements", version: "26.1.2" }, "mc_data/advancements");
await call("mc_data", { action: "structures", version: "26.1.2" }, "mc_data/structures");
await call("mc_data", { action: "particles", version: "26.1.2" }, "mc_data/particles");
await call("mc_data", { action: "entity_attributes", version: "26.1.2" }, "mc_data/entity_attributes");

console.log("\n=== mc_files (warm cache) ===");
await call("mc_files", { action: "list_files", dirPath: "minecraft/recipes", version: "26.1.2", branch: "data" }, "mc_files/list_files");
await call("mc_files", { action: "get_data", filePath: "minecraft/recipes/crafting_table.json", version: "26.1.2" }, "mc_files/get_data");
await call("mc_files", { action: "atlas", version: "26.1.2" }, "mc_files/atlas");

console.log(`\nRESULTS: ${passed} passed, ${failed} failed`);
if (errors.length) for (const { label, msg } of errors) console.log(`  ❌ ${label}: ${msg.slice(0,200)}`);

await client.close();
process.exit(failed > 0 ? 1 : 0);
