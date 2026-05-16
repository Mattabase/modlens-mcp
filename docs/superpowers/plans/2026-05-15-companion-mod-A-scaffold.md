# ModLens Companion Mod — Plan A: Project Scaffold & CI

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Create two GitHub repos (`modlens-companion-neoforge` and `modlens-companion-fabric`... wait — actually one repo using the PolyLib multiloader template, producing separate NeoForge and Fabric JARs per MC version), with GitHub Actions CI that builds and releases both JARs tagged `mc-<mcVersion>-<modVersion>`.

**Architecture:** Clone PolyLib's multiloader template structure exactly (`common/`, `neoforge/`, `fabric/` subprojects, `buildSrc/` with `multiloader-common.gradle` and `multiloader-loader.gradle` plugins). The mod ID is `modlens_companion`. CI builds on push and creates a GitHub Release with both loader JARs and a `sha256.txt` checksum file attached as assets.

**Tech Stack:** Java 25, MC 26.1.2, NeoForge 26.1.2.22-beta, Fabric 0.146.1+26.1.2 / Fabric Loader 0.19.2, Gradle 8+, PolyLib multiloader template, GitHub Actions

---

## File Map

### New Repos
- `Mattabase/modlens-companion` — single repo, both loaders (branches: `mc-26.1.2`, `mc-1.21.1`)

### Files to Create (mc-26.1.2 branch)
```
gradle.properties
settings.gradle
build.gradle
gradlew / gradlew.bat / gradle/wrapper/
buildSrc/build.gradle
buildSrc/src/main/groovy/multiloader-common.gradle
buildSrc/src/main/groovy/multiloader-loader.gradle
common/build.gradle
common/src/main/java/net/mattabase/modlenscompanion/ModLensCompanionCommon.java
common/src/main/java/net/mattabase/modlenscompanion/ModLensCompanionClient.java
common/src/main/resources/modlens_companion.mixins.json
neoforge/build.gradle
neoforge/src/main/java/net/mattabase/modlenscompanion/neoforge/ModLensCompanionNeoForge.java
neoforge/src/main/resources/META-INF/neoforge.mods.toml
neoforge/src/main/resources/META-INF/services/net.neoforged.fml.common.BuiltInModLoader  (if needed)
fabric/build.gradle
fabric/src/main/java/net/mattabase/modlenscompanion/fabric/ModLensCompanionFabric.java
fabric/src/main/resources/fabric.mod.json
fabric/src/main/resources/modlens_companion.fabric.mixins.json
.github/workflows/build-and-release.yml
.gitignore
README.md
```

---

## Task 1: Create GitHub repo and branch

- [ ] **Step 1: Create repo on GitHub**

  Go to https://github.com/new. Create repo `modlens-companion` under `Mattabase`, public, no template, no README (we'll push manually). Note the remote URL: `https://github.com/Mattabase/modlens-companion.git`

- [ ] **Step 2: Init locally**

  ```bash
  mkdir D:\Downloads\modlens-companion
  cd D:\Downloads\modlens-companion
  git init
  git remote add origin https://github.com/Mattabase/modlens-companion.git
  git checkout -b mc-26.1.2
  ```

---

## Task 2: Copy and adapt PolyLib buildSrc

- [ ] **Step 1: Copy buildSrc from PolyLib**

  ```powershell
  Copy-Item -Recurse "C:\Antigravity\PolyLib\buildSrc" "D:\Downloads\modlens-companion\buildSrc"
  Copy-Item -Recurse "C:\Antigravity\PolyLib\gradle" "D:\Downloads\modlens-companion\gradle"
  Copy-Item "C:\Antigravity\PolyLib\gradlew" "D:\Downloads\modlens-companion\gradlew"
  Copy-Item "C:\Antigravity\PolyLib\gradlew.bat" "D:\Downloads\modlens-companion\gradlew.bat"
  ```

- [ ] **Step 2: Create `buildSrc/src/main/groovy/multiloader-common.gradle`**

  Copy from PolyLib's version but strip PolyLib-specific repos not needed here (BlameJared, TerraformersMC, Sponge can stay — they don't hurt). No changes needed to the plugin itself.

- [ ] **Step 3: Create `buildSrc/src/main/groovy/multiloader-loader.gradle`**

  Copy from `C:\Antigravity\PolyLib\buildSrc\src\main\groovy\multiloader-loader.gradle` unchanged.

---

## Task 3: Root gradle files

- [ ] **Step 1: Create `gradle.properties`**

  ```properties
  # Every field here must be added to buildSrc/src/main/groovy/multiloader-common.gradle expandProps map.

  # Project
  version=1.0.0
  group=net.mattabase.modlenscompanion
  java_version=25

  # Common
  minecraft_version=26.1.2
  mod_name=ModLens Companion
  mod_author=Mattabase
  mod_id=modlens_companion
  license=MIT
  credits=
  description=ModLens runtime companion — exposes live registry, recipe, tag, performance and profiler data to the ModLens MCP tool.
  minecraft_version_range=[26.1.2, 26.2)
  neo_form_version=26.1.2-1

  # Fabric
  fabric_version=0.146.1+26.1.2
  fabric_loader_version=0.19.2

  # NeoForge
  neoforge_version=26.1.2.22-beta
  neoforge_loader_version_range=[4,)

  # Gradle
  org.gradle.jvmargs=-Xmx3G
  org.gradle.daemon=false
  ```

- [ ] **Step 2: Create `settings.gradle`**

  ```groovy
  pluginManagement {
      repositories {
          gradlePluginPortal()
          mavenCentral()
          exclusiveContent {
              forRepository {
                  maven {
                      name = 'Fabric'
                      url = uri('https://maven.fabricmc.net')
                  }
              }
              filter {
                  includeGroupAndSubgroups('net.fabricmc')
              }
          }
      }
  }

  plugins {
      id 'org.gradle.toolchains.foojay-resolver-convention' version '1.0.0'
  }

  rootProject.name = 'modlens-companion'
  include('common')
  include('fabric')
  include('neoforge')
  ```

- [ ] **Step 3: Create root `build.gradle`**

  ```groovy
  // Root build file — tasks that apply to all subprojects
  subprojects {
      apply plugin: 'java'
      repositories {
          mavenCentral()
          maven { name = 'NeoForge'; url = 'https://maven.neoforged.net/releases' }
          maven { name = 'Fabric'; url = 'https://maven.fabricmc.net' }
      }
  }
  ```

---

## Task 4: common/ subproject

- [ ] **Step 1: Create `common/build.gradle`**

  ```groovy
  plugins {
      id 'multiloader-common'
      id 'net.neoforged.moddev'
  }

  neoForge {
      neoFormVersion = neo_form_version
  }

  dependencies {
      compileOnly group: 'org.spongepowered', name: 'mixin', version: '0.8.5'
      compileOnly group: 'io.github.llamalad7', name: 'mixinextras-common', version: '0.5.3'
      annotationProcessor group: 'io.github.llamalad7', name: 'mixinextras-common', version: '0.5.3'
  }
  ```

- [ ] **Step 2: Create `ModLensCompanionCommon.java`**

  Path: `common/src/main/java/net/mattabase/modlenscompanion/ModLensCompanionCommon.java`

  ```java
  package net.mattabase.modlenscompanion;

  import org.slf4j.Logger;
  import org.slf4j.LoggerFactory;

  public class ModLensCompanionCommon {
      public static final String MOD_ID = "modlens_companion";
      public static final Logger LOGGER = LoggerFactory.getLogger(MOD_ID);

      public static void init() {
          LOGGER.info("ModLens Companion initialising");
          // HTTP server, config, and feature subsystems initialised here in later plans
      }
  }
  ```

- [ ] **Step 3: Create `ModLensCompanionClient.java`**

  Path: `common/src/main/java/net/mattabase/modlenscompanion/ModLensCompanionClient.java`

  ```java
  package net.mattabase.modlenscompanion;

  public class ModLensCompanionClient {
      public static void init() {
          ModLensCompanionCommon.LOGGER.info("ModLens Companion client initialising");
      }
  }
  ```

- [ ] **Step 4: Create mixin config**

  Path: `common/src/main/resources/modlens_companion.mixins.json`

  ```json
  {
    "required": true,
    "minVersion": "0.8",
    "package": "net.mattabase.modlenscompanion.mixin",
    "compatibilityLevel": "JAVA_25",
    "mixins": [],
    "client": [],
    "injectors": {
      "defaultRequire": 1
    }
  }
  ```

---

## Task 5: neoforge/ subproject

- [ ] **Step 1: Create `neoforge/build.gradle`**

  ```groovy
  plugins {
      id "com.gradleup.shadow" version "9.2.2"
      id 'multiloader-loader'
      id 'net.neoforged.moddev'
  }

  neoForge {
      version = neoforge_version
      runs {
          configureEach {
              ideName = "NeoForge ${it.name.capitalize()} (${project.path})"
          }
          client {
              client()
              gameDirectory = this.mkdir(this.file("runs/client"))
          }
          server {
              server()
              this.file("runs/server").createParentDirectories()
              gameDirectory = this.mkdir(this.file("runs/server"))
          }
      }
      mods {
          "${mod_id}" {
              sourceSet sourceSets.main
          }
      }
  }

  jar { archiveClassifier = 'dev' }
  ```

- [ ] **Step 2: Create `ModLensCompanionNeoForge.java`**

  Path: `neoforge/src/main/java/net/mattabase/modlenscompanion/neoforge/ModLensCompanionNeoForge.java`

  ```java
  package net.mattabase.modlenscompanion.neoforge;

  import net.mattabase.modlenscompanion.ModLensCompanionCommon;
  import net.neoforged.bus.api.IEventBus;
  import net.neoforged.fml.common.Mod;

  @Mod(ModLensCompanionCommon.MOD_ID)
  public class ModLensCompanionNeoForge {
      public ModLensCompanionNeoForge(IEventBus modBus) {
          ModLensCompanionCommon.init();
      }
  }
  ```

- [ ] **Step 3: Create `neoforge.mods.toml`**

  Path: `neoforge/src/main/resources/META-INF/neoforge.mods.toml`

  ```toml
  modLoader = "javafml"
  loaderVersion = "${neoforge_loader_version_range}"
  license = "${license}"

  [[mods]]
  modId = "${mod_id}"
  version = "${version}"
  displayName = "${mod_name}"
  authors = "${mod_author}"
  description = '''${description}'''

  [[mixins]]
  config = "${mod_id}.mixins.json"
  [[mixins]]
  config = "${mod_id}.neoforge.mixins.json"

  [[dependencies.${mod_id}]]
  modId = "neoforge"
  type = "required"
  versionRange = "[${neoforge_version},)"
  ordering = "NONE"
  side = "BOTH"

  [[dependencies.${mod_id}]]
  modId = "minecraft"
  type = "required"
  versionRange = "${minecraft_version_range}"
  ordering = "NONE"
  side = "BOTH"
  ```

- [ ] **Step 4: Create NeoForge mixin config**

  Path: `neoforge/src/main/resources/modlens_companion.neoforge.mixins.json`

  ```json
  {
    "required": true,
    "minVersion": "0.8",
    "package": "net.mattabase.modlenscompanion.neoforge.mixin",
    "compatibilityLevel": "JAVA_25",
    "mixins": [],
    "client": [],
    "injectors": { "defaultRequire": 1 }
  }
  ```

---

## Task 6: fabric/ subproject

- [ ] **Step 1: Create `fabric/build.gradle`**

  ```groovy
  plugins {
      id "com.gradleup.shadow" version "9.2.2"
      id 'multiloader-loader'
      id 'net.fabricmc.fabric-loom'
  }

  dependencies {
      minecraft "com.mojang:minecraft:${minecraft_version}"
      implementation "net.fabricmc:fabric-loader:${fabric_loader_version}"
      implementation "net.fabricmc.fabric-api:fabric-api:${fabric_version}"
  }

  loom {
      def aw = project(':common').file("src/main/resources/${mod_id}.accesswidener")
      if (aw.exists()) { accessWidenerPath.set(aw) }
      runs {
          client {
              client()
              setConfigName('Fabric Client')
              ideConfigGenerated(true)
              runDir('runs/client')
          }
          server {
              server()
              setConfigName('Fabric Server')
              ideConfigGenerated(true)
              runDir('runs/server')
          }
      }
  }

  jar { archiveClassifier = 'dev' }

  shadowJar {
      dependsOn(jar)
      configurations = [project.configurations.shadow]
      mainSpec.sourcePaths.clear()
      from(zipTree(jar.archiveFile))
  }
  ```

- [ ] **Step 2: Create `ModLensCompanionFabric.java`**

  Path: `fabric/src/main/java/net/mattabase/modlenscompanion/fabric/ModLensCompanionFabric.java`

  ```java
  package net.mattabase.modlenscompanion.fabric;

  import net.fabricmc.api.ModInitializer;
  import net.mattabase.modlenscompanion.ModLensCompanionCommon;

  public class ModLensCompanionFabric implements ModInitializer {
      @Override
      public void onInitialize() {
          ModLensCompanionCommon.init();
      }
  }
  ```

- [ ] **Step 3: Create `fabric.mod.json`**

  Path: `fabric/src/main/resources/fabric.mod.json`

  ```json
  {
    "schemaVersion": 1,
    "id": "modlens_companion",
    "version": "${version}",
    "name": "ModLens Companion",
    "description": "ModLens runtime companion mod.",
    "authors": ["Mattabase"],
    "license": "MIT",
    "environment": "*",
    "entrypoints": {
      "main": ["net.mattabase.modlenscompanion.fabric.ModLensCompanionFabric"]
    },
    "mixins": [
      "modlens_companion.mixins.json",
      "modlens_companion.fabric.mixins.json"
    ],
    "depends": {
      "fabricloader": ">=${fabric_loader_version}",
      "fabric-api": "*",
      "minecraft": "${minecraft_version_range}"
    }
  }
  ```

- [ ] **Step 4: Create Fabric mixin config**

  Path: `fabric/src/main/resources/modlens_companion.fabric.mixins.json`

  ```json
  {
    "required": true,
    "minVersion": "0.8",
    "package": "net.mattabase.modlenscompanion.fabric.mixin",
    "compatibilityLevel": "JAVA_25",
    "mixins": [],
    "client": [],
    "injectors": { "defaultRequire": 1 }
  }
  ```

---

## Task 7: .gitignore and verify build compiles

- [ ] **Step 1: Create `.gitignore`**

  ```gitignore
  .gradle/
  build/
  */build/
  runs/
  */runs/
  out/
  .idea/
  *.iml
  .modlens/
  *.jar
  !gradle/wrapper/gradle-wrapper.jar
  ```

- [ ] **Step 2: Test compile NeoForge**

  ```bash
  cd D:\Downloads\modlens-companion
  ./gradlew :neoforge:compileJava --stacktrace
  ```

  Expected: `BUILD SUCCESSFUL`

- [ ] **Step 3: Test compile Fabric**

  ```bash
  ./gradlew :fabric:compileJava --stacktrace
  ```

  Expected: `BUILD SUCCESSFUL`

- [ ] **Step 4: Commit scaffold**

  ```bash
  git add -A
  git commit -m "chore: initial multiloader scaffold (mc-26.1.2)"
  git push -u origin mc-26.1.2
  ```

---

## Task 8: GitHub Actions CI — build and release

- [ ] **Step 1: Create `.github/workflows/build-and-release.yml`**

  ```yaml
  name: Build & Release

  on:
    push:
      branches: [ "mc-*" ]
    workflow_dispatch:
      inputs:
        norelease:
          description: 'Skip release creation'
          required: false
          default: 'false'

  jobs:
    build:
      runs-on: ubuntu-latest
      timeout-minutes: 30
      if: "!contains(github.event.head_commit.message, '[ciskip]')"
      permissions:
        contents: write
      steps:
        - uses: actions/checkout@v4

        - name: Set up JDK 25
          uses: actions/setup-java@v4
          with:
            distribution: temurin
            java-version: '25'

        - name: Build with Gradle
          run: |
            chmod +x ./gradlew
            ./gradlew :neoforge:build :fabric:build --no-daemon --stacktrace

        - name: Collect JARs and checksums
          id: collect
          run: |
            BRANCH="${GITHUB_REF_NAME}"
            MOD_VERSION=$(grep '^version=' gradle.properties | cut -d= -f2)
            MC_VERSION=$(grep '^minecraft_version=' gradle.properties | cut -d= -f2)
            TAG="mc-${MC_VERSION}-${MOD_VERSION}"
            echo "tag=${TAG}" >> $GITHUB_OUTPUT
            mkdir -p dist
            # NeoForge shadow JAR (the shaded one, not -dev)
            find neoforge/build/libs -name "*-all.jar" -o -name "*.jar" | grep -v dev | grep -v sources | grep -v javadoc | head -1 | xargs -I{} cp {} dist/modlens-companion-neoforge-mc${MC_VERSION}-${MOD_VERSION}.jar
            # Fabric shadow JAR
            find fabric/build/libs -name "*-all.jar" -o -name "*.jar" | grep -v dev | grep -v sources | grep -v javadoc | head -1 | xargs -I{} cp {} dist/modlens-companion-fabric-mc${MC_VERSION}-${MOD_VERSION}.jar
            cd dist && sha256sum *.jar > sha256.txt && cd ..

        - name: Create GitHub Release
          if: "inputs.norelease != 'true'"
          uses: softprops/action-gh-release@v2
          with:
            tag_name: ${{ steps.collect.outputs.tag }}
            name: "ModLens Companion ${{ steps.collect.outputs.tag }}"
            body: "Automated release from branch ${{ github.ref_name }}"
            files: |
              dist/modlens-companion-neoforge-*.jar
              dist/modlens-companion-fabric-*.jar
              dist/sha256.txt
          env:
            GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
  ```

- [ ] **Step 2: Commit and push**

  ```bash
  git add .github/
  git commit -m "ci: build and release workflow"
  git push
  ```

- [ ] **Step 3: Verify CI passes on GitHub**

  Open `https://github.com/Mattabase/modlens-companion/actions` and confirm the workflow runs green and a release is created with both JARs and `sha256.txt` attached.

---

## Task 9: Update spec to record final repo name

- [ ] **Step 1: Amend spec section 2**

  Open `D:\Downloads\modlens-mcp\docs\superpowers\specs\2026-05-15-companion-mod-design.md` and update Section 2 to reflect that both loaders live in `Mattabase/modlens-companion` (single repo) rather than two separate repos. Commit the spec update.

---

## Done

Plan B covers: HTTP server, config system, token auth, and all raw + smart data endpoints.
Plan C covers: `companion_install` and `companion` tools in modlens-mcp.
