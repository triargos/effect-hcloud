/**
 * Derive the v4 (`next`) version from the v3 (`latest`) version so the two majors
 * stay in lockstep — they are generated from the same spec + generator, so a v3
 * minor/patch release implies the identical change in v4. v4 keeps major 2 and a
 * `-beta.0` prerelease id keyed to the v3 version (deterministic, so the release
 * job can publish-if-absent and stay idempotent):
 *
 *   v3 1.4.2  →  v4 2.4.2-beta.0
 *
 * Run from the repo root: `node scripts/set-v4-version.mjs`.
 */
import { readFileSync, writeFileSync } from "node:fs";

const v3 = JSON.parse(readFileSync("packages/v3/package.json", "utf8"));
const [, minor, patch] = v3.version.split(".");

const path = "packages/v4/package.json";
const v4 = JSON.parse(readFileSync(path, "utf8"));
v4.version = `2.${minor}.${patch}-beta.0`;
writeFileSync(path, `${JSON.stringify(v4, null, 2)}\n`);

console.log(`v4 version → ${v4.version} (mirrors v3 ${v3.version})`);
