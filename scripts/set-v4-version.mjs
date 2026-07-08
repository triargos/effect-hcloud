/**
 * Derive the v4 (`next`) version from the v3 (`latest`) version so the two
 * majors stay in lockstep — they are generated from the same spec + generator,
 * so a v3 minor/patch bump implies the identical change in v4. v4 keeps major 2
 * and a monotonic `-beta.<run>` prerelease id (the CI run number, 0 locally).
 *
 *   v3 1.4.2  +  run 37   →  v4 2.4.2-beta.37
 *
 * Run from the repo root: `node scripts/set-v4-version.mjs`.
 */
import { readFileSync, writeFileSync } from "node:fs";

const v3 = JSON.parse(readFileSync("packages/v3/package.json", "utf8"));
const [, minor, patch] = v3.version.split(".");
const build = process.env.GITHUB_RUN_NUMBER ?? "0";

const path = "packages/v4/package.json";
const v4 = JSON.parse(readFileSync(path, "utf8"));
v4.version = `2.${minor}.${patch}-beta.${build}`;
writeFileSync(path, `${JSON.stringify(v4, null, 2)}\n`);

console.log(`v4 version → ${v4.version} (mirrors v3 ${v3.version})`);
