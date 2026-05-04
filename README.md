# modlens-mcp

MCP server and CLI for browsing, decompiling, and analyzing Minecraft mod JARs.

Store mod metadata, class indexes, mixin targets, AT/AW entries, and decompiled source in a local PostgreSQL database. Query everything via AI (MCP) or command line (CLI).

## Prerequisites

- **Node.js 22+**
- **Docker** (for PostgreSQL)
- **JDK 21+** (Eclipse Adoptium recommended — `findJava()` scans `C:/Program Files/Eclipse Adoptium` first)
- A CurseForge API key (optional — needed only for `sync-curseforge`)

## Setup

```bash
git clone https://github.com/Mattabase/modlens-mcp
cd modlens-mcp
npm install

# Start PostgreSQL
docker compose up -d

# Create .env
echo DATABASE_URL=postgresql://modlens:modlens@localhost:5433/modlens > .env
# echo CURSEFORGE_API_KEY=<your key> >> .env   # optional

# Apply schema
npx prisma db push

# Build
npm run build
```

## MCP Configuration

Add to your MCP config (`mcp.json`):

```json
{
  "modlens": {
    "command": "node",
    "args": ["D:/Downloads/modlens-mcp/dist/server.js"],
    "env": {
      "DATABASE_URL": "postgresql://modlens:modlens@localhost:5433/modlens"
    }
  }
}
```

---

## CLI

All MCP tools are available from the command line:

```
node dist/cli.js <command> [args] [--flags]
```

Run without arguments (or `--help`) to print the full command list.

### Quick Reference

| Command | Description |
|---------|-------------|
| `stats` | DB statistics |
| `list` | List all mods |
| `get <modId>` | Get mod metadata |
| `search <query>` | Search mods |
| `deps <modId>` | List dependencies |
| `ingest <jarPath>` | Ingest a mod JAR |
| `ingest-neoforge <version>` | Download + ingest NeoForge |
| `ingest-fabric-api <version>` | Download + ingest Fabric API |
| `batch-ingest <dir>` | Ingest all JARs in a directory |
| `reindex` | Index class names for un-indexed mods |
| `decompile <dbId>` | Decompile entire mod JAR |
| `decompile-class <dbId> <class>` | Decompile a single class |
| `source <dbId> [path]` | Browse decompiled source |
| `search-source <query>` | Search decompiled source |
| `search-class <dbId> <query>` | Search for a class by name |
| `members <dbId> <class>` | List methods and fields |
| `bytecode <dbId> <class>` | Raw javap bytecode |
| `refs <dbId> <target>` | Find references |
| `inheritance <dbId> <class>` | Inheritance chain |
| `diff <dbIdA> <dbIdB>` | Compare two mod versions |
| `mixin-targets <modId>` | MC classes this mod injects into |
| `resolve-mixins <dbId>` | Parse `@Mixin` bytecode → update DB |
| `mixin-conflicts <targetClass>` | Mods injecting into the same class |
| `at-entries <dbId>` | Access Transformer entries |
| `aw-entries <dbId>` | Access Widener entries |
| `sync-modrinth <dbId>` | Look up on Modrinth |
| `sync-curseforge <dbId>` | Look up on CurseForge |
| `check-updates <dbId>` | Check for newer versions |
| `download-source <dbId>` | Download GitHub/GitLab source |
| `mc-versions` | List Minecraft versions |
| `neoforge-versions` | List NeoForge versions |
| `fabric-api-versions` | List Fabric API versions |
| `batch-resolve-mixins` | Resolve `@Mixin` targets for all mods |

### Flags Reference

```
list               --loader=neoforge  --mc-version=1.21  --has-mixins  --decompiled  --limit=50
search             --loader=  --mc-version=  --limit=20
deps               --recursive
ingest             --skip-source  --skip-index
ingest-neoforge    --skip-index
ingest-fabric-api  --skip-index
batch-ingest       --index
reindex            --db-id=N
search-source      --db-id=N  --regex  --limit=50
mc-versions        --type=release|snapshot|all
neoforge-versions  --mc-version=1.21.1  --limit=20
fabric-api-versions  --mc-version=1.21.1  --limit=20
```

---

## MCP Tools Reference

### Database & Catalog

#### `ingest_mod`
Process a mod JAR: parse manifest, extract mixin/AT/AW info, compute hashes, look up on Modrinth/CurseForge, and store in the database.

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `jarPath` | string | — | Absolute path to the mod `.jar` file |
| `skipSource` | boolean | `false` | Skip Modrinth/CurseForge source lookup |

#### `list_mods`
List mods in the database.

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `loader` | enum | — | `fabric`, `neoforge`, `forge`, `quilt`, `unknown` |
| `mcVersion` | string | — | Partial MC version match, e.g. `1.21` |
| `hasMixins` | boolean | — | Filter to mods with mixin configs |
| `decompiled` | boolean | — | Filter to mods that have been decompiled |
| `limit` | number | `50` | Max results |

#### `get_mod_details`
Get full metadata for a mod by its database ID (number) or `mod_id` string.

#### `search_mods`
Search mods by name, `mod_id`, or description. Supports `loader` and `mcVersion` filters.

#### `get_dependencies`
Get the dependency list for a mod. Set `recursive: true` to resolve transitive dependencies that are also in the database.

#### `get_db_stats`
Database statistics: total mods, decompiled count, loader breakdown, indexed class count.

---

### Source & Decompile

#### `decompile_mod`
Decompile an entire mod JAR using Vineflower. Downloads Vineflower automatically on first use. Results are cached.

| Parameter | Type | Description |
|-----------|------|-------------|
| `dbId` | number | Database ID of the mod |

#### `decompile_mod_class`
Decompile a single class from a mod JAR on demand. Much faster than decompiling the whole JAR.

| Parameter | Type | Description |
|-----------|------|-------------|
| `dbId` | number | Database ID of the mod |
| `className` | string | Internal class name (slashes or dots), e.g. `com/example/mymod/MyClass` |

#### `get_mod_source`
Browse or read decompiled source files for a mod. Omit `path` for a directory listing.

#### `search_source`
Search across decompiled source files using text or regex. Scope to a single mod with `dbId`.

---

### Bytecode Analysis

#### `search_mod_class`
Search for a class in a mod JAR by name. Supports CamelCase acronyms, prefix, and substring matching.

#### `get_mod_class_members`
List all methods and fields for a class, including `@Inject` mixin targets, `@Shadow` annotations, and AT/AW strings.

#### `get_mod_class_bytecode`
Get raw JVM bytecode (`javap` output) for a class.

#### `find_mod_references`
Find all classes in a mod that reference a given class, method, or field.

| Target format | Example |
|---------------|---------|
| Class | `com/example/MyClass` |
| Method | `com/example/MyClass:myMethod:(I)V` |
| Field | `com/example/MyClass:myField:I` |

#### `get_mod_inheritance`
Get the inheritance chain for a class: superclass, interfaces, subclasses, and implementors.

#### `diff_mod_versions`
Compare two mod JARs (by database ID) and list added and removed classes.

---

### Mixin Analysis

#### `get_mixin_targets`
Get the list of Minecraft classes that a mod injects into via `@Mixin`, plus which mixin config files are present.

#### `resolve_mixin_targets`
Read the `@Mixin` annotations from a mod's bytecode to discover the actual Minecraft target classes (e.g. `net/minecraft/world/entity/LivingEntity`). Updates the database so `get_mixin_conflicts` works correctly. **Run once per mod after ingest.**

#### `get_mixin_conflicts`
Find all mods in the database that inject into the same Minecraft target class.

```
get_mixin_conflicts("net/minecraft/world/entity/LivingEntity")
```

#### `get_at_entries`
Get all Access Transformer entries declared by a mod (NeoForge/Forge AT format).

#### `get_aw_entries`
Get all Access Widener entries declared by a mod (Fabric/Quilt AW format).

---

### Platform Integration

#### `sync_modrinth`
Look up a mod on Modrinth by its SHA-512 hash and store the project ID, slug, and source URL.

#### `sync_curseforge`
Look up a mod on CurseForge by its Murmur2 fingerprint. Requires `CURSEFORGE_API_KEY`.

#### `check_updates`
Check both Modrinth and CurseForge for a newer version of a mod.

#### `download_source`
Download the GitHub/GitLab source code for a mod. Requires `sync_modrinth` or `sync_curseforge` to have run first.

---

### Class Indexing

#### `reindex_classes`
Index (or re-index) class names for mods that have no class records yet. Run after batch ingest. Omit `dbId` to process all un-indexed mods.

---

### Version Listing

#### `list_mc_versions`
List Minecraft versions from Mojang's Piston Meta.

| Parameter | Type | Default |
|-----------|------|---------|
| `type` | enum | `release` | `release`, `snapshot`, or `all` |

#### `list_neoforge_versions`
List NeoForge loader versions from the NeoForge Maven repository. Optionally filter by `mcVersion` (e.g. `1.21.1`).

#### `list_fabric_api_versions`
List Fabric API versions from Modrinth. Optionally filter by `mcVersion`.

---

### NeoForge / Fabric API Ingest

#### `ingest_neoforge`
Download a NeoForge universal JAR from Maven and ingest it. Use `list_neoforge_versions` to find version strings.

```
ingest_neoforge("21.1.228")
```

Once ingested, all bytecode tools work on it: `search_mod_class`, `get_mod_class_members`, `find_mod_references`, `get_mod_inheritance`, etc.

#### `ingest_fabric_api`
Download a Fabric API JAR from Modrinth and ingest it. Use `list_fabric_api_versions` to find version strings.

```
ingest_fabric_api("0.116.11+1.21.1")
```

---

## Typical Workflows

### Ingest a modpack

```bash
# 1. Ingest all mods and index classes
node dist/cli.js batch-ingest /path/to/mods --index

# 2. Resolve mixin targets (enables conflict detection)
node dist/cli.js batch-resolve-mixins

# 3. Ingest the loader itself for cross-reference
node dist/cli.js ingest-neoforge 21.1.228
```

### Find mixin conflicts

```bash
node dist/cli.js mixin-conflicts net/minecraft/world/entity/LivingEntity
```

### Explore a mod

```bash
node dist/cli.js search apotheosis            # find it
node dist/cli.js get 2                         # view metadata
node dist/cli.js mixin-targets 2               # what MC classes it injects into
node dist/cli.js at-entries 2                  # access transformers
node dist/cli.js decompile-class 2 com/shadows/apotheosis/mixin/LivingEntityMixin
```

### Check for updates

```bash
node dist/cli.js sync-modrinth 2
node dist/cli.js check-updates 2
```
