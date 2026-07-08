/**
 * Orchestrator: vendored spec → IR → both emitted packages (packages/v3,
 * packages/v4) over the same IR. Reproducible: reads only spec/cloud.spec.json.
 */
import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { buildIR, type ResourceIR } from "./ir.ts";
import { emitResource } from "./emit-resource.ts";
import { v3Profile, v4Profile } from "./profiles.ts";
import * as coreV3 from "./core-v3.ts";
import * as coreV4 from "./core-v4.ts";
import type { OpenApiSpec } from "./openapi.ts";

const ROOT = new URL("../../", import.meta.url).pathname;
const SPEC = join(ROOT, "spec/cloud.spec.json");

async function write(path: string, content: string) {
  await mkdir(dirname(path), { recursive: true });
  await writeFile(path, content);
}

/**
 * Write package.json while preserving the existing `version`. The version is owned
 * by Changesets (v3) / set-v4-version.mjs (v4) — everything else is template-owned.
 * Without this, regenerating (which the release workflow does before publishing)
 * would revert a bumped version back to the template default, so nothing new ever
 * publishes. Runs after any bump; the version field is the one thing generate must
 * not clobber.
 */
async function writePackageJson(path: string, generated: string) {
  const next = JSON.parse(generated) as { version: string };
  const existing = await readFile(path, "utf8").catch(() => null);
  if (existing) next.version = (JSON.parse(existing) as { version?: string }).version ?? next.version;
  await write(path, JSON.stringify(next, null, 2) + "\n");
}

/** Files shared verbatim between the two targets (pure TS / dialect-agnostic Schema + build config). */
async function writeShared(pkg: string, resources: ResourceIR[]) {
  await write(join(pkg, "src/resources/index.ts"), coreV3.resourcesIndexTs(resources));
  await write(join(pkg, "src/internal/url-params.ts"), coreV3.urlParamsTs);
  await write(join(pkg, "src/pagination.ts"), coreV3.paginationTs);
  await write(join(pkg, "src/index.ts"), coreV3.indexTs);
  await write(join(pkg, "tsconfig.json"), coreV3.tsconfigJson);
  await write(join(pkg, "tsconfig.build.json"), coreV3.tsconfigBuildJson);
}

async function emit(target: "v3" | "v4", resources: ResourceIR[]) {
  const pkg = join(ROOT, "packages", target);
  const profile = target === "v3" ? v3Profile : v4Profile;
  const core = target === "v3" ? coreV3 : coreV4;

  await rm(join(pkg, "src"), { recursive: true, force: true });
  for (const r of resources) {
    await write(join(pkg, "src/resources", `${r.key}.ts`), emitResource(r, profile));
  }
  await writeShared(pkg, resources);
  await write(join(pkg, "src/errors.ts"), core.errorsTs);
  await write(join(pkg, "src/client.ts"), core.clientTs(resources));
  await writePackageJson(join(pkg, "package.json"), core.packageJson());
  if (target === "v4") await write(join(pkg, "src/internal/http.ts"), coreV4.internalHttpTs);

  const ops = resources.reduce((n, r) => n + r.operations.length, 0);
  console.log(`${target}: emitted ${resources.length} resources, ${ops} operations → packages/${target}/src`);
}

const spec = JSON.parse(await readFile(SPEC, "utf8")) as OpenApiSpec;
const resources = buildIR(spec);
await emit("v3", resources);
await emit("v4", resources);
