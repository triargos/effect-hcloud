# Contributing

`@triargos/effect-hcloud` is **generated** from the official Hetzner Cloud OpenAPI spec.
`packages/*/src` is build output — edit the generator under `generator/src`, not the emitted
files.

## How it works

```
spec/cloud.spec.json        official OpenAPI 3.1 spec (vendored, reproducible)
        │  generator/src/ir.ts
        ▼
runtime-agnostic IR         resources · methods · path/query params · request/response/error shapes
        │  emit-resource.ts (one emitter, two Profiles)
   ┌────┴────┐
   ▼         ▼
packages/v3  packages/v4    identical `HetznerClient.servers.create` surface
```

- **Grouping** is by first path segment; per-resource `… Actions` fold into the resource
  (`servers.powerOn`, `volumes.attach`). Method names come from HTTP semantics + the action
  verb, with a deterministic collision fallback — 189 operations, **zero name collisions**.
- **Schema mapping** (`generator/src/emit-schema.ts`) is the shared core: OpenAPI 3.1
  type-arrays → `Schema.NullOr`, enums → `Schema.Literal(s)`, objects → `Schema.Struct`,
  `additionalProperties` → `Schema.Record`, required/optional, `integer` → `Schema.Int`.
- **The only v3/v4 delta** is a small `Profile` (`generator/src/profiles.ts`): the import
  block, the schema dialect (`Schema.Literals` vs `Schema.Literal`, `Record`/`Union` arity,
  `Schema.Defect()` vs `Schema.Defect`), the response decoder (`schemaBodyJson` vs a
  `schemaJson` wrapper), and the catch-all (`Effect.catchAll` vs `Effect.catch`).

## Local development

Tooling: **pnpm** (package manager) + **Node 24** (runs the generator's TypeScript natively —
no bundler/transpiler). v4 lives under `packages/` but is intentionally *not* a workspace
member (so Changesets never sees two same-named packages), so it installs standalone with
`--ignore-workspace`; `pnpm bootstrap` does both.

```bash
pnpm bootstrap              # pnpm install (root + v3 workspace) + v4 (--ignore-workspace)
pnpm fetch-spec             # re-vendor spec/cloud.spec.json from docs.hetzner.cloud
pnpm generate               # spec → packages/v3/src + packages/v4/src  (node generate.ts)
pnpm typecheck              # tsc both packages (0 errors expected)
pnpm build                  # tsc → packages/*/dist (runnable ESM + .d.ts)
pnpm regen                  # fetch-spec + generate + typecheck
```

A spec bump is `pnpm regen` followed by a diff of `packages/*/src`. CI fails if the committed
output doesn't match a fresh `pnpm generate`.

## Releasing

Releases run in CI via [Changesets](https://github.com/changesets/changesets) with **npm
trusted publishing (OIDC) + provenance — no `NPM_TOKEN`**.

Both dirs publish to the single name `@triargos/effect-hcloud`, so only the v3 line is
Changesets-managed (Changesets requires unique names, and its prerelease mode is
workspace-global). v4 is versioned in **lockstep** — same spec + generator — so a v3 `1.4.2`
release implies v4 `2.4.2-beta.<run>` (`scripts/set-v4-version.mjs`).

### One-time npm setup (per the `@triargos/effect-hcloud` package)

1. **Claim the name** with a first manual publish (trusted publishing can't bootstrap a
   non-existent package): `pnpm build:v3 && pnpm -C packages/v3 publish --no-provenance` using
   a short-lived granular automation token, then delete the token. (`--no-provenance` because
   provenance needs a CI OIDC provider, which a local publish doesn't have.)
2. On npmjs.com → the package → **Settings → Trusted Publisher → GitHub Actions**: repository
   `triargos/effect-hcloud`, workflow `.github/workflows/release.yml`. One config covers both
   the `latest` and `next` publishes.
3. Remove any `NPM_TOKEN` secret — it's no longer used.

### The flow (`.github/workflows/release.yml`)

- Push to `main` with a changeset → the [changesets action](https://github.com/changesets/action)
  opens a **"Version Packages"** PR (bumps v3, writes `CHANGELOG.md`).
- Merge that PR → the workflow builds, then publishes **v3 → `latest`** (`changeset publish`)
  and **v4 → `next`** (`set-v4-version.mjs` + `pnpm publish`). Both attach provenance via
  `publishConfig.provenance` + the job's `id-token: write`.

Add a changeset for any spec/generator change:

```bash
pnpm changeset             # pick bump + write a summary → .changeset/*.md, commit it
```

## Repository layout

```
spec/            cloud.spec.json (vendored) + fetch.ts
generator/src/   openapi.ts ir.ts naming.ts emit-schema.ts emit-ts-type.ts
                 dialect.ts profiles.ts emit-resource.ts core-v3.ts core-v4.ts generate.ts
scripts/         set-v4-version.mjs
packages/v3/     @triargos/effect-hcloud 1.x  (effect@3 + @effect/platform)
packages/v4/     @triargos/effect-hcloud 2.x  (effect@4)
```
