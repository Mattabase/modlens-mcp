# ModLens Companion Mod — Plan C: modlens-mcp Tools (companion_install + companion)

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add two new tools to modlens-mcp — `companion_install` (downloads + installs the companion JAR to Gradle run dirs, pack instances, or explicit paths) and `companion` (communicates with a running companion mod over HTTP). Also add a `companion_manage` action for Tracy JVM arg patching.

**Architecture:** Two new tool files in `src/tools/`: `companion-install.ts` (GitHub release fetching, SHA256 verification, multi-target installation, Tracy arg patching) and `companion.ts` (HTTP client to companion mod — auth token loading, all action dispatchers). Both wired into `src/server.ts`. Uses Node 18+ built-in `fetch` and `createWriteStream`/`pipeline` (same pattern as `platform.ts`).

**Tech Stack:** TypeScript ESM, Node 18+ built-in `fetch`, `crypto.createHash`, `fs/promises`, `stream/promises`, zod (already in deps)

---

## File Map

```
src/tools/
  companion-install.ts    NEW — JAR download, SHA256 verify, install targets, Tracy arg patching
  companion.ts            NEW — HTTP client for all companion endpoints
src/server.ts             MODIFY — add companion_install and companion tool definitions
```

---

## Task 1: companion-install.ts

- [ ] **Step 1: Create `src/tools/companion-install.ts`**

  ```typescript
  import { createWriteStream } from "fs";
  import { mkdir, readFile, writeFile, readdir, stat, copyFile, unlink } from "fs/promises";
  import { pipeline } from "stream/promises";
  import { createHash } from "crypto";
  import { join, dirname, basename } from "path";
  import { existsSync } from "fs";

  const COMPANION_REPOS: Record<string, string> = {
      neoforge: "Mattabase/modlens-companion",
      fabric:   "Mattabase/modlens-companion",
  };

  // ---------------------------------------------------------------------------
  // GitHub release resolution
  // ---------------------------------------------------------------------------

  interface ReleaseAsset {
      name: string;
      browser_download_url: string;
      size: number;
  }

  interface Release {
      tag_name: string;
      assets: ReleaseAsset[];
  }

  export async function fetchLatestRelease(loader: string, mcVersion: string): Promise<{
      release: Release;
      jarAsset: ReleaseAsset;
      sha256Asset: ReleaseAsset | null;
  }> {
      const repo = COMPANION_REPOS[loader.toLowerCase()];
      if (!repo) throw new Error(`Unknown loader: ${loader}. Supported: neoforge, fabric`);

      const url = `https://api.github.com/repos/${repo}/releases`;
      const res = await fetch(url, { headers: { "User-Agent": "modlens-mcp" } });
      if (!res.ok) throw new Error(`GitHub API error: ${res.status} ${await res.text()}`);
      const releases: Release[] = await res.json() as Release[];

      const tagPrefix = `mc-${mcVersion}-`;
      const matching = releases.filter(r => r.tag_name.startsWith(tagPrefix));
      if (matching.length === 0)
          throw new Error(`No releases found for mc-${mcVersion} on loader ${loader}. Available tags: ${releases.map(r => r.tag_name).join(", ")}`);

      // Latest matching release is first
      const release = matching[0];
      const loaderName = loader.toLowerCase();
      const jarAsset = release.assets.find(a => a.name.includes(`-${loaderName}-`) && a.name.endsWith(".jar"));
      if (!jarAsset)
          throw new Error(`No JAR asset found for loader ${loaderName} in release ${release.tag_name}. Assets: ${release.assets.map(a => a.name).join(", ")}`);

      const sha256Asset = release.assets.find(a => a.name === "sha256.txt") ?? null;

      return { release, jarAsset, sha256Asset };
  }

  // ---------------------------------------------------------------------------
  // Download + verify
  // ---------------------------------------------------------------------------

  async function downloadFile(url: string, destPath: string): Promise<void> {
      await mkdir(dirname(destPath), { recursive: true });
      const res = await fetch(url, { headers: { "User-Agent": "modlens-mcp" } });
      if (!res.ok || !res.body) throw new Error(`Download failed: ${res.status} ${url}`);
      await pipeline(res.body as any, createWriteStream(destPath));
  }

  async function sha256File(filePath: string): Promise<string> {
      const data = await readFile(filePath);
      return createHash("sha256").update(data).digest("hex");
  }

  async function verifyChecksum(jarPath: string, sha256Asset: ReleaseAsset, jarName: string): Promise<void> {
      const checksumPath = jarPath + ".sha256.txt";
      await downloadFile(sha256Asset.browser_download_url, checksumPath);
      const checksumContent = await readFile(checksumPath, "utf8");
      // Format: "<hash>  <filename>\n..."
      const line = checksumContent.split("\n").find(l => l.includes(jarName));
      if (!line) throw new Error(`SHA256 for ${jarName} not found in checksum file`);
      const expected = line.split(/\s+/)[0];
      const actual = await sha256File(jarPath);
      await unlink(checksumPath);
      if (actual !== expected)
          throw new Error(`SHA256 mismatch for ${jarName}: expected ${expected}, got ${actual}`);
  }

  // ---------------------------------------------------------------------------
  // Install target detection
  // ---------------------------------------------------------------------------

  async function isGradleProject(dir: string): Promise<boolean> {
      return existsSync(join(dir, "build.gradle")) || existsSync(join(dir, "build.gradle.kts")) || existsSync(join(dir, "settings.gradle"));
  }

  async function isPackInstance(dir: string): Promise<boolean> {
      return existsSync(join(dir, "mods"));
  }

  /** Returns the run/mods dir for a Gradle project. Creates it if missing. */
  async function resolveGradleRunModsDir(projectDir: string, runType: "client" | "server" | "both"): Promise<string[]> {
      const loaderDirs = ["neoforge", "fabric", "forge", ""];
      const dirs: string[] = [];
      for (const sub of loaderDirs) {
          const base = sub ? join(projectDir, sub) : projectDir;
          for (const run of runType === "both" ? ["runs/client", "runs/server"] : [`runs/${runType}`]) {
              const modsDir = join(base, run, "mods");
              if (existsSync(join(base, "build.gradle")) || existsSync(join(base, "build.gradle.kts"))) {
                  await mkdir(modsDir, { recursive: true });
                  dirs.push(modsDir);
              }
          }
      }
      if (dirs.length === 0) {
          // Fallback: just use run/mods at root
          const fallback = join(projectDir, "run", "mods");
          await mkdir(fallback, { recursive: true });
          dirs.push(fallback);
      }
      return dirs;
  }

  // ---------------------------------------------------------------------------
  // Main install function
  // ---------------------------------------------------------------------------

  export async function installCompanion(opts: {
      mcVersion: string;
      loader: string;
      gradleProject?: string;
      packInstance?: string;
      targetDir?: string;
      runType?: "client" | "server" | "both";
      force?: boolean;
      patchTracyArgs?: boolean;
  }): Promise<{
      installed: string[];
      jarName: string;
      version: string;
      checksum: string;
      tracyArgPatched?: string[];
  }> {
      const { mcVersion, loader, gradleProject, packInstance, targetDir, runType = "both", force = false, patchTracyArgs = false } = opts;

      // 1. Resolve release
      const { release, jarAsset, sha256Asset } = await fetchLatestRelease(loader, mcVersion);
      const jarName = jarAsset.name;
      const modVersion = release.tag_name.replace(`mc-${mcVersion}-`, "");

      // 2. Download to a temp location
      const tmp = join(process.cwd(), ".modlens-install-tmp");
      await mkdir(tmp, { recursive: true });
      const tmpJar = join(tmp, jarName);
      await downloadFile(jarAsset.browser_download_url, tmpJar);

      // 3. Verify checksum
      if (sha256Asset) await verifyChecksum(tmpJar, sha256Asset, jarName);
      const checksum = await sha256File(tmpJar);

      // 4. Resolve install targets
      const installDirs: string[] = [];

      if (targetDir) {
          await mkdir(targetDir, { recursive: true });
          installDirs.push(targetDir);
      }
      if (gradleProject && await isGradleProject(gradleProject)) {
          const dirs = await resolveGradleRunModsDir(gradleProject, runType);
          installDirs.push(...dirs);
      }
      if (packInstance && await isPackInstance(packInstance)) {
          installDirs.push(join(packInstance, "mods"));
      }
      if (installDirs.length === 0) {
          throw new Error(
              `No install target found. Provide at least one of: gradleProject (path with build.gradle), ` +
              `packInstance (path with mods/ folder), or targetDir (explicit path).`
          );
      }

      // 5. Remove old companion JARs and copy new one
      const installed: string[] = [];
      for (const dir of installDirs) {
          await mkdir(dir, { recursive: true });
          // Remove old companion JARs in this dir
          const existing = await readdir(dir).catch(() => []);
          for (const f of existing) {
              if (f.startsWith("modlens-companion-") && f.endsWith(".jar")) {
                  await unlink(join(dir, f));
              }
          }
          const dest = join(dir, jarName);
          await copyFile(tmpJar, dest);
          installed.push(dest);
      }

      // 6. Clean up temp
      await unlink(tmpJar).catch(() => {});

      // 7. Optionally patch Tracy JVM args into Gradle run configs
      const tracyArgPatched: string[] = [];
      if (patchTracyArgs && gradleProject) {
          const patched = await patchTracyJvmArgs(gradleProject);
          tracyArgPatched.push(...patched);
      }

      return { installed, jarName, version: modVersion, checksum, tracyArgPatched };
  }

  // ---------------------------------------------------------------------------
  // Tracy JVM arg patching
  // ---------------------------------------------------------------------------

  /**
   * Patches Gradle run configurations to add the Tracy agent JVM arg.
   * Handles: neoforge/build.gradle, fabric/build.gradle, root build.gradle
   * Also patches Prism/MultiMC instance.cfg if present.
   */
  async function patchTracyJvmArgs(projectDir: string): Promise<string[]> {
      const TRACY_ARG = "-Djava.library.path=${tracyLibDir}";
      const TRACY_COMMENT = "// Added by modlens-mcp companion_install --patchTracyArgs";
      const patched: string[] = [];

      const candidates = [
          join(projectDir, "neoforge", "build.gradle"),
          join(projectDir, "fabric", "build.gradle"),
          join(projectDir, "build.gradle"),
      ];

      for (const f of candidates) {
          if (!existsSync(f)) continue;
          let content = await readFile(f, "utf8");
          if (content.includes("tracy") || content.includes("TracyAgent")) continue; // already patched
          // Insert jvmArg into runs blocks
          content = content.replace(
              /(runs\s*\{[^}]*configureEach\s*\{)/,
              `$1\n            ${TRACY_COMMENT}\n            jvmArg("-agentpath:\${rootProject.findProperty('tracyAgentPath') ?: ''}")`
          );
          if (content !== (await readFile(f, "utf8"))) {
              await writeFile(f, content, "utf8");
              patched.push(f);
          }
      }

      // Prism/MultiMC instance.cfg
      const instanceCfg = join(projectDir, "instance.cfg");
      if (existsSync(instanceCfg)) {
          let cfg = await readFile(instanceCfg, "utf8");
          if (!cfg.includes("TracyAgent")) {
              cfg += `\nJvmArgs=-agentpath:TRACY_AGENT_PATH_HERE\n`;
              await writeFile(instanceCfg, cfg, "utf8");
              patched.push(instanceCfg);
          }
      }

      return patched;
  }

  // ---------------------------------------------------------------------------
  // List available releases
  // ---------------------------------------------------------------------------

  export async function listCompanionReleases(loader?: string): Promise<Release[]> {
      const repo = COMPANION_REPOS[loader?.toLowerCase() ?? "neoforge"];
      const res = await fetch(`https://api.github.com/repos/${repo}/releases`, { headers: { "User-Agent": "modlens-mcp" } });
      if (!res.ok) throw new Error(`GitHub API error: ${res.status}`);
      return res.json() as Promise<Release[]>;
  }
  ```

- [ ] **Step 2: Build check**

  ```bash
  cd D:\Downloads\modlens-mcp
  npm run build
  ```

  Expected: `tsc` exits 0, no errors in `companion-install.ts`.

- [ ] **Step 3: Commit**

  ```bash
  git add src/tools/companion-install.ts
  git commit -m "feat: companion-install.ts (GitHub release fetch, SHA256 verify, multi-target install, Tracy arg patch)"
  ```

---

## Task 2: companion.ts — HTTP client

- [ ] **Step 1: Create `src/tools/companion.ts`**

  ```typescript
  import { readFile } from "fs/promises";
  import { join } from "path";
  import { existsSync } from "fs";

  // ---------------------------------------------------------------------------
  // Connection helpers
  // ---------------------------------------------------------------------------

  interface CompanionConn {
      baseUrl: string;
      token: string;
  }

  async function resolveConn(opts: {
      host?: string;
      port?: number;
      tokenFile?: string;
      gameDir?: string;
  }): Promise<CompanionConn> {
      const host = opts.host ?? "localhost";
      const port = opts.port ?? 25580;
      const baseUrl = `http://${host}:${port}`;

      // Token resolution: explicit tokenFile > gameDir/.modlens/token.txt > cwd/.modlens/token.txt
      let tokenPath = opts.tokenFile;
      if (!tokenPath && opts.gameDir) tokenPath = join(opts.gameDir, ".modlens", "token.txt");
      if (!tokenPath) tokenPath = join(process.cwd(), ".modlens", "token.txt");

      if (!existsSync(tokenPath!))
          throw new Error(`Token file not found at ${tokenPath}. Is the companion mod running? Check gameDir/.modlens/token.txt`);

      const token = (await readFile(tokenPath!, "utf8")).trim();
      return { baseUrl, token };
  }

  async function companionGet(conn: CompanionConn, path: string): Promise<unknown> {
      const res = await fetch(`${conn.baseUrl}${path}`, {
          headers: { Authorization: `Bearer ${conn.token}` },
      });
      if (!res.ok) throw new Error(`Companion HTTP error ${res.status} for ${path}: ${await res.text()}`);
      return res.json();
  }

  async function companionPost(conn: CompanionConn, path: string, body?: unknown): Promise<unknown> {
      const res = await fetch(`${conn.baseUrl}${path}`, {
          method: "POST",
          headers: {
              Authorization: `Bearer ${conn.token}`,
              "Content-Type": "application/json",
          },
          body: body !== undefined ? JSON.stringify(body) : undefined,
      });
      if (!res.ok) throw new Error(`Companion HTTP error ${res.status} for POST ${path}: ${await res.text()}`);
      return res.json();
  }

  async function companionDelete(conn: CompanionConn, path: string): Promise<unknown> {
      const res = await fetch(`${conn.baseUrl}${path}`, {
          method: "DELETE",
          headers: { Authorization: `Bearer ${conn.token}` },
      });
      if (!res.ok) throw new Error(`Companion HTTP error ${res.status} for DELETE ${path}: ${await res.text()}`);
      return res.json();
  }

  // ---------------------------------------------------------------------------
  // Exported action dispatcher
  // ---------------------------------------------------------------------------

  export type CompanionAction =
      | "ping"
      | "loaded_mods"
      | "registry"
      | "tags"
      | "recipes"
      | "loot"
      | "configs"
      | "event_listeners"
      | "capabilities"
      | "network_log"
      | "file_dump"
      | "tag_conflicts"
      | "recipe_conflicts"
      | "spark_summary"
      | "perf_snapshot"
      | "logs"
      | "log_errors"
      | "thread_dump"
      | "tracy_start"
      | "tracy_stop"
      | "tracy_status"
      | "cmd_run"
      | "screenshot"
      | "inject_recipe"
      | "inject_tag"
      | "inject_loot"
      | "inject_clear"
      | "config_set"
      | "watch_event"
      | "watch_event_poll"
      | "watch_event_cancel"
      | "watch_alert"
      | "watch_alerts_check";

  export interface CompanionOpts {
      action: CompanionAction;
      host?: string;
      port?: number;
      tokenFile?: string;
      gameDir?: string;
      // query params
      registry?: string;
      tagRegistry?: string;
      recipeType?: string;
      lootTable?: string;
      limit?: number;
      since?: string;
      // write opts
      command?: string;
      dumpType?: string;
      eventClass?: string;
      durationSecs?: number;
      alertType?: string;
      alertFilter?: string;
      subscriptionId?: string;
      injectPayload?: string;
      configModId?: string;
      configKey?: string;
      configValue?: string;
      tracyDuration?: number;
  }

  export async function runCompanionAction(opts: CompanionOpts): Promise<unknown> {
      const conn = await resolveConn(opts);

      switch (opts.action) {
          case "ping":
              return companionGet(conn, "/ping");

          case "loaded_mods":
              return companionGet(conn, "/raw/loaded-mods");

          case "registry": {
              const q = new URLSearchParams();
              if (opts.registry) q.set("type", opts.registry);
              if (opts.limit) q.set("limit", String(opts.limit));
              return companionGet(conn, `/raw/registry?${q}`);
          }

          case "tags": {
              const q = new URLSearchParams();
              if (opts.tagRegistry) q.set("registry", opts.tagRegistry);
              return companionGet(conn, `/raw/tags?${q}`);
          }

          case "recipes": {
              const q = new URLSearchParams();
              if (opts.recipeType) q.set("type", opts.recipeType);
              return companionGet(conn, `/raw/recipes?${q}`);
          }

          case "loot": {
              if (!opts.lootTable) throw new Error("lootTable required for loot action");
              return companionGet(conn, `/raw/loot?table=${encodeURIComponent(opts.lootTable)}`);
          }

          case "configs":
              return companionGet(conn, "/raw/configs");

          case "event_listeners":
              return companionGet(conn, "/raw/event-listeners");

          case "capabilities":
              return companionGet(conn, "/raw/capabilities");

          case "network_log": {
              const q = new URLSearchParams();
              if (opts.limit) q.set("limit", String(opts.limit));
              return companionGet(conn, `/raw/network-log?${q}`);
          }

          case "file_dump": {
              if (!opts.dumpType) throw new Error("dumpType required for file_dump action");
              return companionPost(conn, `/dump/${opts.dumpType}`);
          }

          case "tag_conflicts":
              return companionGet(conn, "/smart/tag-conflicts");

          case "recipe_conflicts":
              return companionGet(conn, "/smart/recipe-conflicts");

          case "spark_summary":
              return companionGet(conn, "/smart/spark/summary");

          case "perf_snapshot":
              return companionGet(conn, "/smart/perf/snapshot");

          case "logs": {
              const q = new URLSearchParams();
              if (opts.limit) q.set("limit", String(opts.limit));
              return companionGet(conn, `/smart/logs/structured?${q}`);
          }

          case "log_errors": {
              const q = new URLSearchParams();
              if (opts.since) q.set("since", opts.since);
              return companionGet(conn, `/smart/logs/errors?${q}`);
          }

          case "thread_dump":
              return companionGet(conn, "/smart/thread-dump");

          case "tracy_start":
              return companionPost(conn, "/smart/tracy/start",
                  opts.tracyDuration ? { duration: opts.tracyDuration } : undefined);

          case "tracy_stop":
              return companionPost(conn, "/smart/tracy/stop");

          case "tracy_status":
              return companionGet(conn, "/smart/tracy/status");

          case "cmd_run": {
              if (!opts.command) throw new Error("command required for cmd_run action");
              return companionPost(conn, "/cmd/run", { command: opts.command });
          }

          case "screenshot":
              return companionPost(conn, "/cmd/screenshot");

          case "inject_recipe": {
              if (!opts.injectPayload) throw new Error("injectPayload (JSON string) required for inject_recipe");
              return companionPost(conn, "/inject/recipe", JSON.parse(opts.injectPayload));
          }

          case "inject_tag": {
              if (!opts.injectPayload) throw new Error("injectPayload (JSON string) required for inject_tag");
              return companionPost(conn, "/inject/tag", JSON.parse(opts.injectPayload));
          }

          case "inject_loot": {
              if (!opts.injectPayload) throw new Error("injectPayload (JSON string) required for inject_loot");
              return companionPost(conn, "/inject/loot", JSON.parse(opts.injectPayload));
          }

          case "inject_clear":
              return companionDelete(conn, "/inject/all");

          case "config_set": {
              if (!opts.configModId || !opts.configKey || opts.configValue === undefined)
                  throw new Error("configModId, configKey, and configValue required for config_set");
              return companionPost(conn, "/config/set", {
                  modId: opts.configModId,
                  key: opts.configKey,
                  value: opts.configValue,
              });
          }

          case "watch_event": {
              if (!opts.eventClass) throw new Error("eventClass required for watch_event");
              return companionPost(conn, "/watch/event", {
                  eventClass: opts.eventClass,
                  durationSeconds: opts.durationSecs ?? 30,
                  maxEntries: opts.limit ?? 100,
              });
          }

          case "watch_event_poll": {
              if (!opts.subscriptionId) throw new Error("subscriptionId required for watch_event_poll");
              return companionGet(conn, `/watch/event?subscriptionId=${encodeURIComponent(opts.subscriptionId)}`);
          }

          case "watch_event_cancel": {
              if (!opts.subscriptionId) throw new Error("subscriptionId required for watch_event_cancel");
              return companionDelete(conn, `/watch/event?subscriptionId=${encodeURIComponent(opts.subscriptionId)}`);
          }

          case "watch_alert": {
              if (!opts.alertType) throw new Error("alertType required for watch_alert");
              return companionPost(conn, "/watch/alert", {
                  type: opts.alertType,
                  filter: opts.alertFilter,
              });
          }

          case "watch_alerts_check":
              return companionGet(conn, "/watch/alerts");

          default:
              throw new Error(`Unknown companion action: ${(opts as CompanionOpts).action}`);
      }
  }
  ```

- [ ] **Step 2: Build check**

  ```bash
  npm run build
  ```

  Expected: no errors.

- [ ] **Step 3: Commit**

  ```bash
  git add src/tools/companion.ts
  git commit -m "feat: companion.ts HTTP client (all 29 action dispatchers)"
  ```

---

## Task 3: Wire both tools into server.ts

- [ ] **Step 1: Add imports to server.ts**

  Find the line:
  ```typescript
  import { generateReport } from "./tools/reports.js";
  ```
  Add after it:
  ```typescript
  import { installCompanion, listCompanionReleases } from "./tools/companion-install.js";
  import { runCompanionAction } from "./tools/companion.js";
  ```

- [ ] **Step 2: Add `companion_install` tool**

  Find `// ── 20. pack_tools` and add before it:

  ```typescript
  // ── 19b. companion_install ────────────────────────────────────────────────────

  server.tool(
      "companion_install",
      "Download and install the ModLens companion mod JAR from GitHub releases. " +
      "The companion mod provides live runtime data (registries, tags, recipes, perf, Tracy, Spark) to modlens-mcp. " +
      "action=install: download + verify + install the JAR (mcVersion, loader required). " +
      "action=list: list available releases (loader optional). " +
      "Install targets (at least one required for install): gradleProject (path with build.gradle — installs to runs/client/mods and runs/server/mods), " +
      "packInstance (path with mods/ folder — Prism/CurseForge/MultiMC), targetDir (explicit absolute path). " +
      "patchTracyArgs=true also patches Gradle run configs to add the Tracy profiler JVM agent arg.",
      {
          action:        z.enum(["install", "list"]).describe("Operation"),
          mcVersion:     z.string().optional().describe("MC version, e.g. '26.1.2' or '1.21.1' (install)"),
          loader:        z.string().optional().describe("Loader: 'neoforge' or 'fabric' (install)"),
          gradleProject: z.string().optional().describe("Absolute path to Gradle mod project root (install)"),
          packInstance:  z.string().optional().describe("Absolute path to Prism/CurseForge/MultiMC instance (install)"),
          targetDir:     z.string().optional().describe("Explicit absolute path to drop the JAR (install)"),
          runType:       z.enum(["client", "server", "both"]).optional().describe("Which Gradle run dirs to target (default: both)"),
          force:         z.boolean().optional().describe("Re-download even if already installed"),
          patchTracyArgs:z.boolean().optional().describe("Patch Gradle run configs to add Tracy JVM agent arg"),
      },
      async ({ action, mcVersion, loader, gradleProject, packInstance, targetDir, runType, force, patchTracyArgs }) => {
          if (action === "list") {
              const releases = await listCompanionReleases(loader);
              return out(releases.map(r => ({ tag: r.tag_name, assets: r.assets.map(a => a.name) })));
          }
          if (!mcVersion) throw new Error("mcVersion required for install action");
          if (!loader) throw new Error("loader required for install action");
          const result = await installCompanion({
              mcVersion, loader, gradleProject, packInstance, targetDir,
              runType: runType as any, force, patchTracyArgs,
          });
          return out(result);
      }
  );
  ```

- [ ] **Step 3: Add `companion` tool**

  Add after the `companion_install` tool, before `// ── 20. pack_tools`:

  ```typescript
  // ── 19c. companion ────────────────────────────────────────────────────────────

  server.tool(
      "companion",
      "Communicate with a running ModLens companion mod instance over HTTP. " +
      "The companion must be running (start with runServer/runClient or in a pack instance). " +
      "Token is read automatically from <gameDir>/.modlens/token.txt or the explicit tokenFile param. " +
      "RAW actions (live data): ping, loaded_mods, registry, tags, recipes, loot, configs, event_listeners, capabilities, network_log, file_dump. " +
      "SMART actions (pre-processed): tag_conflicts, recipe_conflicts, spark_summary, perf_snapshot, logs, log_errors, thread_dump, tracy_start, tracy_stop, tracy_status. " +
      "WRITE/CONTROL actions: cmd_run (run a server command), screenshot, inject_recipe, inject_tag, inject_loot, inject_clear, config_set. " +
      "WATCH actions: watch_event (subscribe to event class), watch_event_poll (check buffered events), watch_event_cancel, watch_alert (one-shot alert), watch_alerts_check.",
      {
          action:         z.enum([
              "ping","loaded_mods","registry","tags","recipes","loot","configs","event_listeners","capabilities","network_log","file_dump",
              "tag_conflicts","recipe_conflicts","spark_summary","perf_snapshot","logs","log_errors","thread_dump",
              "tracy_start","tracy_stop","tracy_status",
              "cmd_run","screenshot","inject_recipe","inject_tag","inject_loot","inject_clear","config_set",
              "watch_event","watch_event_poll","watch_event_cancel","watch_alert","watch_alerts_check"
          ]).describe("Action to perform"),
          host:           z.string().optional().describe("Companion host (default: localhost)"),
          port:           z.number().optional().describe("Companion port (default: 25580)"),
          tokenFile:      z.string().optional().describe("Absolute path to token.txt (default: <gameDir>/.modlens/token.txt or cwd/.modlens/token.txt)"),
          gameDir:        z.string().optional().describe("Absolute path to game dir — used to resolve token.txt default"),
          registry:       z.string().optional().describe("Registry type for 'registry' action, e.g. 'item', 'block', 'minecraft:entity_type'"),
          tagRegistry:    z.string().optional().describe("Registry type for 'tags' action"),
          recipeType:     z.string().optional().describe("Recipe type for 'recipes' action, e.g. 'crafting', 'smelting'"),
          lootTable:      z.string().optional().describe("Resource location for 'loot' action, e.g. 'minecraft:blocks/stone'"),
          limit:          z.number().optional().describe("Max entries for registry/network_log/logs/watch_event"),
          since:          z.string().optional().describe("ISO timestamp for 'log_errors' delta mode"),
          command:        z.string().optional().describe("Server command to run, e.g. '/reload' (cmd_run)"),
          dumpType:       z.string().optional().describe("Dump type: 'registry', 'recipes', 'tags', 'all' (file_dump)"),
          eventClass:     z.string().optional().describe("Fully-qualified event class to watch, e.g. 'net.neoforged.neoforge.event.entity.living.LivingDeathEvent'"),
          durationSecs:   z.number().optional().describe("Watch duration in seconds (watch_event, default 30)"),
          alertType:      z.string().optional().describe("Alert type: 'block_place', 'entity_spawn', 'log_error' (watch_alert)"),
          alertFilter:    z.string().optional().describe("Filter expression for alert (e.g. block id, entity type)"),
          subscriptionId: z.string().optional().describe("Subscription ID returned by watch_event (for poll/cancel)"),
          injectPayload:  z.string().optional().describe("JSON string payload for inject_recipe / inject_tag / inject_loot"),
          configModId:    z.string().optional().describe("Mod ID for config_set"),
          configKey:      z.string().optional().describe("Config key path for config_set"),
          configValue:    z.string().optional().describe("New config value (as string) for config_set"),
          tracyDuration:  z.number().optional().describe("Tracy capture duration in seconds (tracy_start)"),
      },
      async (params) => {
          const result = await runCompanionAction(params as any);
          return out(result);
      }
  );
  ```

- [ ] **Step 4: Build**

  ```bash
  npm run build
  ```

  Expected: `BUILD SUCCESSFUL`, no TypeScript errors.

- [ ] **Step 5: Smoke test — companion ping**

  With a companion mod running locally (from Plan B Task 9):
  ```bash
  TOKEN=$(cat neoforge/runs/server/.modlens/token.txt)
  # Test direct curl
  curl -H "Authorization: Bearer $TOKEN" http://localhost:25580/ping
  # Expected: {"status":"ok","mod":"modlens_companion"}
  ```

  Then test via the MCP tool by starting modlens-mcp and calling:
  ```json
  { "tool": "companion", "params": { "action": "ping", "gameDir": "D:/Downloads/modlens-companion/neoforge/runs/server" } }
  ```

  Expected response: `{"status":"ok","mod":"modlens_companion"}`

- [ ] **Step 6: Commit and push**

  ```bash
  git add -A
  git commit -m "feat: companion_install + companion tools wired into server.ts"
  git push
  ```

---

## Task 4: Update spec to close the loop

- [ ] **Step 1: Amend spec section 2 repo table**

  Open `D:\Downloads\modlens-mcp\docs\superpowers\specs\2026-05-15-companion-mod-design.md`.
  Update Section 2 to note that both loaders live in `Mattabase/modlens-companion` (single repo, branches `mc-26.1.2` / `mc-1.21.1`).

- [ ] **Step 2: Commit spec update**

  ```bash
  git add docs/
  git commit -m "docs: update spec — single companion repo confirmed"
  git push
  ```

---

## Done

All three plans complete:
- **Plan A** — repo scaffold, Gradle multiloader structure, CI that builds + releases both loader JARs
- **Plan B** — HTTP server, config, token auth, all raw + smart + write/control endpoint handlers
- **Plan C** — `companion_install` and `companion` tools in modlens-mcp
