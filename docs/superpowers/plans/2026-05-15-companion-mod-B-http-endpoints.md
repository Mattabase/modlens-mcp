# ModLens Companion Mod — Plan B: HTTP Server, Config, Auth & Data Endpoints

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Implement the companion mod's embedded HTTP server (localhost:25580, token-auth), config system (`modlens-companion.toml`), and all raw + smart data endpoints. Also implement the MCP→companion write/control endpoints (command execution, volatile injection, config hot-set, event watches, alerts, thread dump, Tracy control, screenshot).

**Architecture:** The HTTP server runs on a single virtual thread using the JDK built-in `com.sun.net.httpserver.HttpServer` (no additional library needed, available since Java 6, fully functional in Java 25). Config is loaded from `<gameDir>/config/modlens-companion.toml` using a minimal TOML parser (jankson is already on the classpath via PolyLib). Token is generated with `SecureRandom` and written to `<gameDir>/.modlens/token.txt`. All handler classes live in `common/` except loader-specific event hooks in `neoforge/` and `fabric/`.

**Tech Stack:** Java 25, `com.sun.net.httpserver.HttpServer`, Gson (bundled with MC), jankson (already on classpath), NeoForge event bus / Fabric lifecycle events, Spark API (optional reflective bridge), Tracy Java API (optional reflective bridge)

---

## File Map

```
common/src/main/java/net/mattabase/modlenscompanion/
  server/
    CompanionHttpServer.java        — starts/stops HttpServer, registers routes
    RequestHandler.java             — shared util: read body, write JSON response, verify token
    TokenAuth.java                  — generates/loads token from .modlens/token.txt
  config/
    CompanionConfig.java            — loads modlens-companion.toml, holds typed fields
  handlers/
    raw/
      RegistryHandler.java          — GET /raw/registry
      TagHandler.java               — GET /raw/tags
      RecipeHandler.java            — GET /raw/recipes
      LootHandler.java              — GET /raw/loot
      ConfigsHandler.java           — GET /raw/configs
      EventListenersHandler.java    — GET /raw/event-listeners  (loader-specific impl via interface)
      CapabilitiesHandler.java      — GET /raw/capabilities     (loader-specific impl via interface)
      NetworkLogHandler.java        — GET /raw/network-log
      LoadedModsHandler.java        — GET /raw/loaded-mods
      DumpHandler.java              — POST /dump/<type>
    smart/
      TagConflictsHandler.java      — GET /smart/tag-conflicts
      RecipeConflictsHandler.java   — GET /smart/recipe-conflicts
      TracyHandler.java             — POST/GET /smart/tracy/*
      SparkHandler.java             — GET /smart/spark/summary
      PerfSnapshotHandler.java      — GET /smart/perf/snapshot
      LogsHandler.java              — GET /smart/logs/structured  GET /smart/logs/errors
      ThreadDumpHandler.java        — GET /smart/thread-dump
    cmd/
      CommandHandler.java           — POST /cmd/run
      ScreenshotHandler.java        — POST /cmd/screenshot
    inject/
      InjectHandler.java            — POST/DELETE /inject/*
    config_set/
      ConfigSetHandler.java         — POST /config/set
    watch/
      WatchEventHandler.java        — POST/GET/DELETE /watch/event
      WatchAlertHandler.java        — POST/GET /watch/alert*
  platform/
    IEventListenerProvider.java     — common interface for event-listener enumeration
    ICapabilityProvider.java        — common interface for capability enumeration
  network/
    NetworkLogBuffer.java           — circular buffer for packet capture
  ModLensCompanionCommon.java       — updated: calls CompanionHttpServer.start()

neoforge/src/main/java/net/mattabase/modlenscompanion/neoforge/
  platform/
    NeoForgeEventListenerProvider.java   — implements IEventListenerProvider
    NeoForgeCapabilityProvider.java      — implements ICapabilityProvider
  events/
    NeoForgeLifecycleEvents.java         — registers server start/stop hooks to start/stop HTTP server

fabric/src/main/java/net/mattabase/modlenscompanion/fabric/
  platform/
    FabricEventListenerProvider.java     — implements IEventListenerProvider (reflection-based)
    FabricCapabilityProvider.java        — implements ICapabilityProvider (no-op in v1)
  events/
    FabricLifecycleEvents.java           — registers ServerLifecycleEvents.SERVER_STARTED/STOPPING
```

---

## Task 1: Config system

- [ ] **Step 1: Create `CompanionConfig.java`**

  Path: `common/src/main/java/net/mattabase/modlenscompanion/config/CompanionConfig.java`

  ```java
  package net.mattabase.modlenscompanion.config;

  import blue.endless.jankson.Jankson;
  import blue.endless.jankson.JsonObject;
  import net.mattabase.modlenscompanion.ModLensCompanionCommon;

  import java.io.IOException;
  import java.nio.file.Files;
  import java.nio.file.Path;

  public class CompanionConfig {
      // [server]
      public int port = 25580;
      public boolean enabled = true;
      public int networkLogBuffer = 500;
      public int logBufferSize = 2000;
      // [auth]
      public String staticToken = "";
      // [tracy]
      public boolean tracyEnabled = true;
      public String tracyOutputDir = ".modlens/profiler";
      public int tracyMaxCaptureSeconds = 120;
      // [spark]
      public boolean sparkEnabled = true;
      // [inject]
      public boolean allowVolatileRecipes = true;
      public boolean allowVolatileTags = true;
      public boolean allowVolatileLoot = true;
      public boolean persistAcrossReload = false;
      // [watch]
      public int maxEventBuffer = 1000;
      public int maxSubscriptions = 10;
      public int alertTtlSeconds = 300;
      // [dump]
      public String dumpOutputDir = ".modlens/dumps";
      public int maxDumpFiles = 20;

      private static CompanionConfig instance;

      public static CompanionConfig get() {
          if (instance == null) instance = new CompanionConfig();
          return instance;
      }

      public static void load(Path configDir) {
          Path file = configDir.resolve("modlens-companion.toml");
          CompanionConfig cfg = new CompanionConfig();
          if (Files.exists(file)) {
              try {
                  Jankson jankson = Jankson.builder().build();
                  JsonObject obj = jankson.load(file.toFile());
                  // [server]
                  JsonObject server = obj.getObject("server");
                  if (server != null) {
                      if (server.containsKey("port")) cfg.port = server.getInt("port", 25580);
                      if (server.containsKey("enabled")) cfg.enabled = server.getBoolean("enabled", true);
                      if (server.containsKey("network_log_buffer")) cfg.networkLogBuffer = server.getInt("network_log_buffer", 500);
                      if (server.containsKey("log_buffer_size")) cfg.logBufferSize = server.getInt("log_buffer_size", 2000);
                  }
                  // [auth]
                  JsonObject auth = obj.getObject("auth");
                  if (auth != null && auth.containsKey("static_token"))
                      cfg.staticToken = auth.get(String.class, "static_token");
                  // [tracy]
                  JsonObject tracy = obj.getObject("tracy");
                  if (tracy != null) {
                      if (tracy.containsKey("enabled")) cfg.tracyEnabled = tracy.getBoolean("enabled", true);
                      if (tracy.containsKey("output_dir")) cfg.tracyOutputDir = tracy.get(String.class, "output_dir");
                      if (tracy.containsKey("max_capture_seconds")) cfg.tracyMaxCaptureSeconds = tracy.getInt("max_capture_seconds", 120);
                  }
                  // [spark]
                  JsonObject spark = obj.getObject("spark");
                  if (spark != null && spark.containsKey("enabled")) cfg.sparkEnabled = spark.getBoolean("enabled", true);
                  // [inject]
                  JsonObject inject = obj.getObject("inject");
                  if (inject != null) {
                      if (inject.containsKey("allow_volatile_recipes")) cfg.allowVolatileRecipes = inject.getBoolean("allow_volatile_recipes", true);
                      if (inject.containsKey("allow_volatile_tags")) cfg.allowVolatileTags = inject.getBoolean("allow_volatile_tags", true);
                      if (inject.containsKey("allow_volatile_loot")) cfg.allowVolatileLoot = inject.getBoolean("allow_volatile_loot", true);
                      if (inject.containsKey("persist_across_reload")) cfg.persistAcrossReload = inject.getBoolean("persist_across_reload", false);
                  }
                  // [watch]
                  JsonObject watch = obj.getObject("watch");
                  if (watch != null) {
                      if (watch.containsKey("max_event_buffer")) cfg.maxEventBuffer = watch.getInt("max_event_buffer", 1000);
                      if (watch.containsKey("max_subscriptions")) cfg.maxSubscriptions = watch.getInt("max_subscriptions", 10);
                      if (watch.containsKey("alert_ttl_seconds")) cfg.alertTtlSeconds = watch.getInt("alert_ttl_seconds", 300);
                  }
                  // [dump]
                  JsonObject dump = obj.getObject("dump");
                  if (dump != null) {
                      if (dump.containsKey("output_dir")) cfg.dumpOutputDir = dump.get(String.class, "output_dir");
                      if (dump.containsKey("max_dump_files")) cfg.maxDumpFiles = dump.getInt("max_dump_files", 20);
                  }
              } catch (Exception e) {
                  ModLensCompanionCommon.LOGGER.warn("Failed to load modlens-companion.toml, using defaults: {}", e.getMessage());
              }
          } else {
              try { writeDefaults(file, cfg); } catch (IOException e) {
                  ModLensCompanionCommon.LOGGER.warn("Could not write default config: {}", e.getMessage());
              }
          }
          instance = cfg;
          ModLensCompanionCommon.LOGGER.info("ModLens Companion config loaded (port={}, enabled={})", cfg.port, cfg.enabled);
      }

      private static void writeDefaults(Path file, CompanionConfig cfg) throws IOException {
          Files.createDirectories(file.getParent());
          String defaults = """
              [server]
              port = 25580
              enabled = true
              network_log_buffer = 500
              log_buffer_size = 2000

              [auth]
              static_token = ""

              [tracy]
              enabled = true
              output_dir = ".modlens/profiler"
              max_capture_seconds = 120

              [spark]
              enabled = true

              [inject]
              allow_volatile_recipes = true
              allow_volatile_tags = true
              allow_volatile_loot = true
              persist_across_reload = false

              [watch]
              max_event_buffer = 1000
              max_subscriptions = 10
              alert_ttl_seconds = 300

              [dump]
              output_dir = ".modlens/dumps"
              max_dump_files = 20
              """;
          Files.writeString(file, defaults);
      }
  }
  ```

- [ ] **Step 2: Compile-check common**

  ```bash
  cd D:\Downloads\modlens-companion
  ./gradlew :common:compileJava --stacktrace
  ```

  Expected: `BUILD SUCCESSFUL`

- [ ] **Step 3: Commit**

  ```bash
  git add common/src/main/java/net/mattabase/modlenscompanion/config/
  git commit -m "feat: config system (modlens-companion.toml via jankson)"
  ```

---

## Task 2: Token auth

- [ ] **Step 1: Create `TokenAuth.java`**

  Path: `common/src/main/java/net/mattabase/modlenscompanion/server/TokenAuth.java`

  ```java
  package net.mattabase.modlenscompanion.server;

  import net.mattabase.modlenscompanion.ModLensCompanionCommon;
  import net.mattabase.modlenscompanion.config.CompanionConfig;

  import java.io.IOException;
  import java.nio.file.Files;
  import java.nio.file.Path;
  import java.security.SecureRandom;

  public class TokenAuth {
      private static String token;

      public static void init(Path gameDir) {
          CompanionConfig cfg = CompanionConfig.get();
          if (!cfg.staticToken.isBlank()) {
              token = cfg.staticToken;
              ModLensCompanionCommon.LOGGER.info("ModLens Companion using static token from config");
              return;
          }
          Path tokenFile = gameDir.resolve(".modlens/token.txt");
          try {
              if (Files.exists(tokenFile)) {
                  token = Files.readString(tokenFile).strip();
                  ModLensCompanionCommon.LOGGER.info("ModLens Companion loaded existing token from {}", tokenFile);
              } else {
                  byte[] bytes = new byte[32];
                  new SecureRandom().nextBytes(bytes);
                  token = bytesToHex(bytes);
                  Files.createDirectories(tokenFile.getParent());
                  Files.writeString(tokenFile, token);
                  ModLensCompanionCommon.LOGGER.info("ModLens Companion generated new token at {}", tokenFile);
              }
          } catch (IOException e) {
              throw new RuntimeException("ModLens Companion: failed to initialise token", e);
          }
      }

      /** Returns true if the Authorization header is valid. */
      public static boolean verify(String authHeader) {
          if (authHeader == null) return false;
          if (!authHeader.startsWith("Bearer ")) return false;
          String provided = authHeader.substring(7).strip();
          // Constant-time comparison to prevent timing attacks
          return constantTimeEquals(provided, token);
      }

      private static boolean constantTimeEquals(String a, String b) {
          if (a.length() != b.length()) return false;
          int diff = 0;
          for (int i = 0; i < a.length(); i++) diff |= a.charAt(i) ^ b.charAt(i);
          return diff == 0;
      }

      private static String bytesToHex(byte[] bytes) {
          StringBuilder sb = new StringBuilder(bytes.length * 2);
          for (byte b : bytes) sb.append(String.format("%02x", b));
          return sb.toString();
      }
  }
  ```

- [ ] **Step 2: Commit**

  ```bash
  git add common/src/main/java/net/mattabase/modlenscompanion/server/TokenAuth.java
  git commit -m "feat: token auth (SecureRandom, constant-time verify)"
  ```

---

## Task 3: HTTP server core + RequestHandler

- [ ] **Step 1: Create `RequestHandler.java`**

  Path: `common/src/main/java/net/mattabase/modlenscompanion/server/RequestHandler.java`

  ```java
  package net.mattabase.modlenscompanion.server;

  import com.google.gson.Gson;
  import com.google.gson.GsonBuilder;
  import com.sun.net.httpserver.HttpExchange;

  import java.io.IOException;
  import java.io.InputStream;
  import java.io.OutputStream;
  import java.nio.charset.StandardCharsets;
  import java.util.Map;

  public class RequestHandler {
      public static final Gson GSON = new GsonBuilder().setPrettyPrinting().create();

      /** Returns true if auth passed; sends 401 and returns false otherwise. */
      public static boolean checkAuth(HttpExchange ex) throws IOException {
          String auth = ex.getRequestHeaders().getFirst("Authorization");
          if (!TokenAuth.verify(auth)) {
              sendJson(ex, 401, Map.of("error", "Unauthorized"));
              return false;
          }
          return true;
      }

      public static void sendJson(HttpExchange ex, int status, Object body) throws IOException {
          byte[] bytes = GSON.toJson(body).getBytes(StandardCharsets.UTF_8);
          ex.getResponseHeaders().set("Content-Type", "application/json; charset=utf-8");
          ex.sendResponseHeaders(status, bytes.length);
          try (OutputStream os = ex.getResponseBody()) { os.write(bytes); }
      }

      public static String readBody(HttpExchange ex) throws IOException {
          try (InputStream is = ex.getRequestBody()) {
              return new String(is.readAllBytes(), StandardCharsets.UTF_8);
          }
      }

      public static Map<String, String> parseQuery(HttpExchange ex) {
          String query = ex.getRequestURI().getQuery();
          if (query == null || query.isBlank()) return Map.of();
          Map<String, String> result = new java.util.HashMap<>();
          for (String pair : query.split("&")) {
              String[] kv = pair.split("=", 2);
              result.put(kv[0], kv.length > 1 ? java.net.URLDecoder.decode(kv[1], StandardCharsets.UTF_8) : "");
          }
          return result;
      }
  }
  ```

- [ ] **Step 2: Create `CompanionHttpServer.java`**

  Path: `common/src/main/java/net/mattabase/modlenscompanion/server/CompanionHttpServer.java`

  ```java
  package net.mattabase.modlenscompanion.server;

  import com.sun.net.httpserver.HttpServer;
  import net.mattabase.modlenscompanion.ModLensCompanionCommon;
  import net.mattabase.modlenscompanion.config.CompanionConfig;
  import net.mattabase.modlenscompanion.handlers.raw.*;
  import net.mattabase.modlenscompanion.handlers.smart.*;
  import net.mattabase.modlenscompanion.handlers.cmd.*;
  import net.mattabase.modlenscompanion.handlers.inject.*;
  import net.mattabase.modlenscompanion.handlers.watch.*;

  import java.io.IOException;
  import java.net.InetSocketAddress;
  import java.nio.file.Path;
  import java.util.Map;
  import java.util.concurrent.Executors;

  public class CompanionHttpServer {
      private static HttpServer server;

      public static void start(Path gameDir) {
          CompanionConfig cfg = CompanionConfig.get();
          if (!cfg.enabled) {
              ModLensCompanionCommon.LOGGER.info("ModLens Companion HTTP server disabled by config");
              return;
          }
          TokenAuth.init(gameDir);
          try {
              server = HttpServer.create(new InetSocketAddress("127.0.0.1", cfg.port), 0);
              server.setExecutor(Executors.newVirtualThreadPerTaskExecutor());

              // Raw endpoints
              server.createContext("/raw/registry",       new RegistryHandler());
              server.createContext("/raw/tags",           new TagHandler());
              server.createContext("/raw/recipes",        new RecipeHandler());
              server.createContext("/raw/loot",           new LootHandler());
              server.createContext("/raw/configs",        new ConfigsHandler());
              server.createContext("/raw/event-listeners",new EventListenersHandler());
              server.createContext("/raw/capabilities",   new CapabilitiesHandler());
              server.createContext("/raw/network-log",    new NetworkLogHandler());
              server.createContext("/raw/loaded-mods",    new LoadedModsHandler());
              server.createContext("/dump",               new DumpHandler(gameDir));

              // Smart endpoints
              server.createContext("/smart/tag-conflicts",    new TagConflictsHandler());
              server.createContext("/smart/recipe-conflicts", new RecipeConflictsHandler());
              server.createContext("/smart/tracy",            new TracyHandler(gameDir));
              server.createContext("/smart/spark/summary",    new SparkHandler());
              server.createContext("/smart/perf/snapshot",    new PerfSnapshotHandler());
              server.createContext("/smart/logs",             new LogsHandler());
              server.createContext("/smart/thread-dump",      new ThreadDumpHandler());

              // MCP→companion write endpoints
              server.createContext("/cmd/run",        new CommandHandler());
              server.createContext("/cmd/screenshot", new ScreenshotHandler());
              server.createContext("/inject",         new InjectHandler(gameDir));
              server.createContext("/config/set",     new ConfigSetHandler());
              server.createContext("/watch/event",    new WatchEventHandler());
              server.createContext("/watch/alert",    new WatchAlertHandler());

              // Ping
              server.createContext("/ping", ex -> {
                  if (!RequestHandler.checkAuth(ex)) return;
                  RequestHandler.sendJson(ex, 200, Map.of("status", "ok", "mod", ModLensCompanionCommon.MOD_ID));
              });

              server.start();
              ModLensCompanionCommon.LOGGER.info("ModLens Companion HTTP server listening on 127.0.0.1:{}", cfg.port);
          } catch (IOException e) {
              ModLensCompanionCommon.LOGGER.error("ModLens Companion failed to start HTTP server: {}", e.getMessage());
          }
      }

      public static void stop() {
          if (server != null) {
              server.stop(1);
              ModLensCompanionCommon.LOGGER.info("ModLens Companion HTTP server stopped");
          }
      }
  }
  ```

- [ ] **Step 3: Update `ModLensCompanionCommon.init()` to accept gameDir**

  ```java
  public static void init(Path gameDir) {
      LOGGER.info("ModLens Companion initialising");
      CompanionConfig.load(gameDir.resolve("config"));
      CompanionHttpServer.start(gameDir);
  }
  ```

  Update NeoForge and Fabric entrypoints to pass `server.getServerDirectory().toPath()` (NeoForge) and `FabricLoader.getInstance().getGameDir()` (Fabric).

- [ ] **Step 4: Compile-check**

  ```bash
  ./gradlew :common:compileJava --stacktrace
  ```

  Expected: `BUILD SUCCESSFUL` (handler classes don't exist yet — they'll be stub-created in next tasks)

- [ ] **Step 5: Commit**

  ```bash
  git add -A
  git commit -m "feat: HTTP server core + request handler + token auth wiring"
  ```

---

## Task 4: Raw endpoint handlers

Implement each handler as a minimal class. Every handler follows the same pattern: check auth, parse query params, query the live MC server state, return JSON.

- [ ] **Step 1: Create `RegistryHandler.java`**

  Path: `common/src/main/java/net/mattabase/modlenscompanion/handlers/raw/RegistryHandler.java`

  ```java
  package net.mattabase.modlenscompanion.handlers.raw;

  import com.sun.net.httpserver.HttpExchange;
  import com.sun.net.httpserver.HttpHandler;
  import net.mattabase.modlenscompanion.server.RequestHandler;
  import net.minecraft.core.registries.BuiltInRegistries;
  import net.minecraft.resources.ResourceLocation;
  import net.minecraft.core.Registry;

  import java.io.IOException;
  import java.util.ArrayList;
  import java.util.List;
  import java.util.Map;

  public class RegistryHandler implements HttpHandler {
      @Override
      public void handle(HttpExchange ex) throws IOException {
          if (!RequestHandler.checkAuth(ex)) return;
          Map<String, String> params = RequestHandler.parseQuery(ex);
          String type = params.getOrDefault("type", "item");
          int limit = Integer.parseInt(params.getOrDefault("limit", "5000"));

          ResourceLocation registryId = ResourceLocation.tryParse(type.contains(":") ? type : "minecraft:" + type);
          var optReg = BuiltInRegistries.REGISTRY.getOptional(registryId);
          if (optReg.isEmpty()) {
              RequestHandler.sendJson(ex, 400, Map.of("error", "Unknown registry: " + type));
              return;
          }
          Registry<?> registry = optReg.get();
          List<String> entries = new ArrayList<>();
          for (ResourceLocation key : registry.keySet()) {
              entries.add(key.toString());
              if (entries.size() >= limit) break;
          }
          RequestHandler.sendJson(ex, 200, Map.of("registry", type, "count", entries.size(), "entries", entries));
      }
  }
  ```

- [ ] **Step 2: Create `TagHandler.java`**

  ```java
  package net.mattabase.modlenscompanion.handlers.raw;

  import com.sun.net.httpserver.HttpExchange;
  import com.sun.net.httpserver.HttpHandler;
  import net.mattabase.modlenscompanion.server.RequestHandler;
  import net.minecraft.core.Registry;
  import net.minecraft.core.registries.BuiltInRegistries;
  import net.minecraft.resources.ResourceLocation;
  import net.minecraft.tags.TagKey;

  import java.io.IOException;
  import java.util.*;

  public class TagHandler implements HttpHandler {
      @Override
      public void handle(HttpExchange ex) throws IOException {
          if (!RequestHandler.checkAuth(ex)) return;
          Map<String, String> params = RequestHandler.parseQuery(ex);
          String regType = params.getOrDefault("registry", "item");
          ResourceLocation registryId = ResourceLocation.tryParse(regType.contains(":") ? regType : "minecraft:" + regType);
          var optReg = BuiltInRegistries.REGISTRY.getOptional(registryId);
          if (optReg.isEmpty()) {
              RequestHandler.sendJson(ex, 400, Map.of("error", "Unknown registry: " + regType));
              return;
          }
          Registry<?> registry = optReg.get();
          Map<String, List<String>> tagMap = new LinkedHashMap<>();
          registry.getTags().forEach(pair -> {
              String tagName = pair.getFirst().location().toString();
              List<String> members = new ArrayList<>();
              pair.getSecond().forEach(holder -> holder.unwrapKey()
                  .ifPresent(k -> members.add(k.location().toString())));
              tagMap.put(tagName, members);
          });
          RequestHandler.sendJson(ex, 200, Map.of("registry", regType, "tagCount", tagMap.size(), "tags", tagMap));
      }
  }
  ```

- [ ] **Step 3: Create `LoadedModsHandler.java`** — NeoForge and Fabric expose mod lists differently; use a platform interface.

  Create interface `common/src/main/java/net/mattabase/modlenscompanion/platform/IModListProvider.java`:

  ```java
  package net.mattabase.modlenscompanion.platform;

  import java.util.List;
  import java.util.Map;

  public interface IModListProvider {
      /** Returns list of {modId, version, name} maps. */
      List<Map<String, String>> getLoadedMods();
  }
  ```

  Register it via `ServiceLoader` — NeoForge impl uses `ModList.get()`, Fabric impl uses `FabricLoader.getInstance().getAllMods()`. Create:

  - `neoforge/src/main/java/net/mattabase/modlenscompanion/neoforge/platform/NeoForgeModListProvider.java`
  - `fabric/src/main/java/net/mattabase/modlenscompanion/fabric/platform/FabricModListProvider.java`
  - `neoforge/src/main/resources/META-INF/services/net.mattabase.modlenscompanion.platform.IModListProvider` (file containing full class name)
  - `fabric/src/main/resources/META-INF/services/net.mattabase.modlenscompanion.platform.IModListProvider`

  Then `LoadedModsHandler` uses `ServiceLoader.load(IModListProvider.class).findFirst()`.

- [ ] **Step 4: Create remaining raw handlers (stub implementations)**

  Create each of these files — for now they each return the raw data by delegating to the live server. All follow the same pattern as `RegistryHandler`. Full implementations are in the sub-steps below.

  - `RecipeHandler.java` — iterates `server.getRecipeManager().getRecipes()`, groups by type
  - `LootHandler.java` — `server.getLootData().getLootTable(ResourceLocation)`, serialises via `LootTable.DIRECT_CODEC`
  - `ConfigsHandler.java` — uses `ModConfigs` (NeoForge) / Fabric Config API; returns all config paths + values via platform interface `IConfigProvider`
  - `NetworkLogHandler.java` — reads from `NetworkLogBuffer.getInstance()` (created in Task 5)
  - `DumpHandler.java` — writes a full dump JSON to `<gameDir>/.modlens/dumps/<type>-<ts>.json` asynchronously, returns `{"status":"writing","file":"..."}` immediately
  - `EventListenersHandler.java` — delegates to `IEventListenerProvider` (platform-specific, see Task 6)
  - `CapabilitiesHandler.java` — delegates to `ICapabilityProvider`

- [ ] **Step 5: Compile-check both loaders**

  ```bash
  ./gradlew :neoforge:compileJava :fabric:compileJava --stacktrace
  ```

- [ ] **Step 6: Commit**

  ```bash
  git add -A
  git commit -m "feat: raw endpoint handlers (registry, tags, recipes, loot, configs, mods, dump)"
  ```

---

## Task 5: Network log buffer

- [ ] **Step 1: Create `NetworkLogBuffer.java`**

  Path: `common/src/main/java/net/mattabase/modlenscompanion/network/NetworkLogBuffer.java`

  ```java
  package net.mattabase.modlenscompanion.network;

  import net.mattabase.modlenscompanion.config.CompanionConfig;

  import java.time.Instant;
  import java.util.*;
  import java.util.concurrent.ConcurrentLinkedDeque;

  public class NetworkLogBuffer {
      private static NetworkLogBuffer instance;
      private final ConcurrentLinkedDeque<Map<String, Object>> buffer = new ConcurrentLinkedDeque<>();

      public static NetworkLogBuffer getInstance() {
          if (instance == null) instance = new NetworkLogBuffer();
          return instance;
      }

      public void log(String direction, String packetClass, int bytes) {
          int cap = CompanionConfig.get().networkLogBuffer;
          while (buffer.size() >= cap) buffer.pollFirst();
          buffer.addLast(Map.of(
              "ts", Instant.now().toString(),
              "dir", direction,      // "S2C" or "C2S"
              "packet", packetClass,
              "bytes", bytes
          ));
      }

      public List<Map<String, Object>> getLast(int limit) {
          List<Map<String, Object>> result = new ArrayList<>(buffer);
          int from = Math.max(0, result.size() - limit);
          return result.subList(from, result.size());
      }
  }
  ```

  The Netty pipeline injection (to actually capture packets) is loader-specific and added in Task 6. The buffer itself is common.

- [ ] **Step 2: Commit**

  ```bash
  git add -A
  git commit -m "feat: network log circular buffer"
  ```

---

## Task 6: Loader-specific platform providers

- [ ] **Step 1: NeoForge event listener provider**

  Path: `neoforge/src/main/java/net/mattabase/modlenscompanion/neoforge/platform/NeoForgeEventListenerProvider.java`

  ```java
  package net.mattabase.modlenscompanion.neoforge.platform;

  import net.mattabase.modlenscompanion.platform.IEventListenerProvider;
  import net.neoforged.bus.api.IEventBus;
  import net.neoforged.fml.ModList;

  import java.lang.reflect.Field;
  import java.util.*;

  public class NeoForgeEventListenerProvider implements IEventListenerProvider {
      @Override
      public List<Map<String, String>> getEventListeners() {
          List<Map<String, String>> result = new ArrayList<>();
          // Walk ModList to find registered event bus listeners via reflection on the bus's listener map
          ModList.get().getMods().forEach(info -> {
              try {
                  // NeoForge stores listeners in the mod event bus
                  // Use reflection to access the bus's listenerOwners map
                  // Class path: net.neoforged.bus.EventBus (may vary by version — fail gracefully)
                  // For each listener found, emit {modId, eventClass, listenerClass}
                  result.add(Map.of("modId", info.getModId(), "note", "bus reflection in progress"));
              } catch (Exception e) {
                  result.add(Map.of("modId", info.getModId(), "error", e.getMessage()));
              }
          });
          return result;
      }
  }
  ```

  NOTE: The full reflection implementation requires inspecting NeoForge's `EventBus` internal listener list. The placeholder above compiles and returns a graceful result. Fill in the reflection once the bus class structure is confirmed by running `./gradlew :neoforge:decompile` or inspecting the NeoForge source.

- [ ] **Step 2: NeoForge lifecycle events**

  Path: `neoforge/src/main/java/net/mattabase/modlenscompanion/neoforge/events/NeoForgeLifecycleEvents.java`

  ```java
  package net.mattabase.modlenscompanion.neoforge.events;

  import net.mattabase.modlenscompanion.server.CompanionHttpServer;
  import net.neoforged.bus.api.SubscribeEvent;
  import net.neoforged.neoforge.event.server.ServerStartedEvent;
  import net.neoforged.neoforge.event.server.ServerStoppingEvent;
  import net.neoforged.fml.common.EventBusSubscriber;
  import net.mattabase.modlenscompanion.ModLensCompanionCommon;

  @EventBusSubscriber(modid = ModLensCompanionCommon.MOD_ID)
  public class NeoForgeLifecycleEvents {
      @SubscribeEvent
      public static void onServerStarted(ServerStartedEvent event) {
          CompanionHttpServer.start(event.getServer().getServerDirectory().toPath());
      }

      @SubscribeEvent
      public static void onServerStopping(ServerStoppingEvent event) {
          CompanionHttpServer.stop();
      }
  }
  ```

- [ ] **Step 3: Fabric lifecycle events**

  Path: `fabric/src/main/java/net/mattabase/modlenscompanion/fabric/events/FabricLifecycleEvents.java`

  ```java
  package net.mattabase.modlenscompanion.fabric.events;

  import net.fabricmc.fabric.api.event.lifecycle.v1.ServerLifecycleEvents;
  import net.mattabase.modlenscompanion.server.CompanionHttpServer;
  import net.fabricmc.loader.api.FabricLoader;

  public class FabricLifecycleEvents {
      public static void register() {
          ServerLifecycleEvents.SERVER_STARTED.register(server ->
              CompanionHttpServer.start(FabricLoader.getInstance().getGameDir()));
          ServerLifecycleEvents.SERVER_STOPPING.register(server ->
              CompanionHttpServer.stop());
      }
  }
  ```

  Call `FabricLifecycleEvents.register()` from `ModLensCompanionFabric.onInitialize()`.

- [ ] **Step 4: Compile-check both loaders**

  ```bash
  ./gradlew :neoforge:compileJava :fabric:compileJava --stacktrace
  ```

- [ ] **Step 5: Commit**

  ```bash
  git add -A
  git commit -m "feat: loader-specific platform providers and lifecycle hooks"
  ```

---

## Task 7: Smart endpoint handlers

- [ ] **Step 1: Create `TagConflictsHandler.java`**

  Path: `common/src/main/java/net/mattabase/modlenscompanion/handlers/smart/TagConflictsHandler.java`

  Uses the same tag registry walk as `TagHandler`, but correlates with datapacks to find `replace: true` collisions. For each registry, walk `server.getPackRepository()` sources, parse each tag JSON for `"replace": true`, and report which tag + which datapack wins.

  ```java
  // (Abbreviated — full implementation follows the pattern of TagHandler + datapack source walk)
  // Returns: List<{tag, registry, winner_pack, losers: []}>
  ```

- [ ] **Step 2: Create `ThreadDumpHandler.java`**

  Path: `common/src/main/java/net/mattabase/modlenscompanion/handlers/smart/ThreadDumpHandler.java`

  ```java
  package net.mattabase.modlenscompanion.handlers.smart;

  import com.sun.net.httpserver.HttpExchange;
  import com.sun.net.httpserver.HttpHandler;
  import net.mattabase.modlenscompanion.server.RequestHandler;

  import java.io.IOException;
  import java.lang.management.ManagementFactory;
  import java.lang.management.ThreadInfo;
  import java.lang.management.ThreadMXBean;
  import java.util.*;

  public class ThreadDumpHandler implements HttpHandler {
      @Override
      public void handle(HttpExchange ex) throws IOException {
          if (!RequestHandler.checkAuth(ex)) return;
          ThreadMXBean mx = ManagementFactory.getThreadMXBean();
          ThreadInfo[] infos = mx.dumpAllThreads(true, true);
          List<Map<String, Object>> threads = new ArrayList<>();
          for (ThreadInfo ti : infos) {
              Map<String, Object> t = new LinkedHashMap<>();
              t.put("id", ti.getThreadId());
              t.put("name", ti.getThreadName());
              t.put("state", ti.getThreadState().name());
              t.put("blockedOn", ti.getLockName());
              List<String> stack = new ArrayList<>();
              for (StackTraceElement ste : ti.getStackTrace()) stack.add(ste.toString());
              t.put("stack", stack);
              threads.add(t);
          }
          long[] deadlocked = mx.findDeadlockedThreads();
          RequestHandler.sendJson(ex, 200, Map.of(
              "threadCount", threads.size(),
              "deadlockedThreadIds", deadlocked != null ? Arrays.stream(deadlocked).boxed().toList() : List.of(),
              "threads", threads
          ));
      }
  }
  ```

- [ ] **Step 3: Create `LogsHandler.java`**

  Attach a custom `ch.qos.logback.core.AppenderBase` (or Log4j `AbstractAppender`) during init that feeds into a `ConcurrentLinkedDeque<LogEntry>` (size capped by `logBufferSize`). `GET /smart/logs/structured?limit=N` returns last N. `GET /smart/logs/errors?since=<timestamp>` returns ERROR/WARN entries after the given ISO timestamp.

- [ ] **Step 4: Create `TracyHandler.java`**

  On `POST /smart/tracy/start`: check if Tracy agent class `com.tracy.TracyProfiler` (or the actual class name — verify against the Tracy Java API release) is on the classpath via `Class.forName`. If absent, return `{"available": false}`. If present, invoke `start()` reflectively and record start time + output path. On `POST /smart/tracy/stop`: invoke `stop()` reflectively, move output file to `.modlens/profiler/`. On `GET /smart/tracy/status`: return current state.

- [ ] **Step 5: Create `SparkHandler.java`**

  Detect Spark via `Class.forName("me.lucko.spark.api.Spark")`. If absent return `{"available": false}`. If present, use Spark's API via the `SparkProvider` to get `HealthReport` and the `TpsData`. Return structured JSON summary.

- [ ] **Step 6: Create `PerfSnapshotHandler.java`**

  Return: server TPS (via `MinecraftServer.getAverageTickTime()`), loaded chunk count, entity counts per type (top 20), memory usage from `Runtime.getRuntime()`.

- [ ] **Step 7: Compile-check and commit**

  ```bash
  ./gradlew :neoforge:compileJava :fabric:compileJava --stacktrace
  git add -A
  git commit -m "feat: smart endpoint handlers (tag-conflicts, thread-dump, logs, tracy, spark, perf)"
  ```

---

## Task 8: Write/control endpoint handlers

- [ ] **Step 1: Create `CommandHandler.java`** (`POST /cmd/run`)

  ```java
  // Executes via server.getCommands().performPrefixedCommand(...)
  // Captures output via a custom CommandSourceStack that records feedback
  // Returns {success: bool, output: [lines]}
  ```

- [ ] **Step 2: Create `ScreenshotHandler.java`** (`POST /cmd/screenshot`)

  Client-side only — NeoForge: fire `ScreenshotEvent` / call `Screenshot.grab(...)`. Fabric: call `Screenshot.grab(...)` via client thread. Return base64-encoded PNG bytes. Returns `{"available": false}` on dedicated server.

- [ ] **Step 3: Create `InjectHandler.java`** (`POST/DELETE /inject/*`)

  Maintains a `VolatileOverlayManager` singleton:
  - `POST /inject/recipe` — deserialises recipe JSON, adds to a volatile `Map<ResourceLocation, Recipe<?>>` overlay
  - `POST /inject/tag` — adds entries to a volatile tag overlay map
  - `POST /inject/loot` — adds loot table override
  - `DELETE /inject/all` — clears all volatile maps
  - If `persistAcrossReload` is false, registers a mixin on `RecipeManager.apply()` to call `VolatileOverlayManager.clear()` after reload

- [ ] **Step 4: Create `ConfigSetHandler.java`** (`POST /config/set`)

  ```java
  // Uses ModConfigs (NeoForge) or Fabric Config API (Fabric) via platform interface IConfigWriter
  // Finds config by modId, then uses reflection to set the field by key, marks config dirty
  // Returns {modId, key, oldValue, newValue}
  ```

- [ ] **Step 5: Create `WatchEventHandler.java`** and `WatchAlertHandler.java`**

  `WatchEventHandler`:
  - `POST /watch/event {eventClass, durationSeconds, maxEntries}` — registers a temporary NeoForge/Fabric event listener on the named class via reflection; buffers occurrences as JSON; returns `{subscriptionId}`
  - `GET /watch/event?subscriptionId=X` — returns buffered events so far
  - `DELETE /watch/event?subscriptionId=X` — cancels subscription and deregisters listener

  `WatchAlertHandler`:
  - `POST /watch/alert {type, filter}` — supported types: `block_place`, `entity_spawn`, `log_error`; auto-cancels after first trigger or TTL
  - `GET /watch/alerts` — returns all fired alerts

- [ ] **Step 6: Compile-check and commit**

  ```bash
  ./gradlew :neoforge:compileJava :fabric:compileJava --stacktrace
  git add -A
  git commit -m "feat: write/control endpoints (cmd, screenshot, inject, config-set, watch)"
  ```

---

## Task 9: Full build + CI push

- [ ] **Step 1: Full build both loaders**

  ```bash
  ./gradlew :neoforge:build :fabric:build --no-daemon
  ```

  Expected: `BUILD SUCCESSFUL`, JARs in `neoforge/build/libs/` and `fabric/build/libs/`

- [ ] **Step 2: Smoke test — start a NeoForge `runServer`**

  ```bash
  ./gradlew :neoforge:runServer
  ```

  In logs confirm:
  - `ModLens Companion config loaded (port=25580, enabled=true)`
  - `ModLens Companion generated new token at .../runs/server/.modlens/token.txt`
  - `ModLens Companion HTTP server listening on 127.0.0.1:25580`

  Then curl:
  ```bash
  TOKEN=$(cat neoforge/runs/server/.modlens/token.txt)
  curl -H "Authorization: Bearer $TOKEN" http://localhost:25580/ping
  # Expected: {"status":"ok","mod":"modlens_companion"}
  curl -H "Authorization: Bearer $TOKEN" "http://localhost:25580/raw/loaded-mods"
  # Expected: JSON list of loaded mods
  curl -H "Authorization: Bearer $TOKEN" "http://localhost:25580/smart/thread-dump"
  # Expected: JSON thread dump
  ```

- [ ] **Step 3: Push and verify CI release**

  ```bash
  git push
  ```

  Confirm on GitHub Actions that both JARs and `sha256.txt` appear on the release.

---

Done. Plan C covers: `companion_install` and `companion` tools in modlens-mcp.
