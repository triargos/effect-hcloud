# effect-hcloud

A generator that produces **`@triargos/effect-hcloud`** — an Effect-native SDK for the
[Hetzner Cloud API](https://docs.hetzner.cloud/), covering all **189 operations** across
**19 resource groups**, with input, output, and error values mapped to
[Effect Schema](https://effect.website/docs/schema/introduction/).

```ts
const server = yield* hetzner.servers.create({
  name: "web-1",
  server_type: "cx22",
  image: "ubuntu-24.04",
})
```

The SDK is **generated deterministically from the official OpenAPI spec** and published as
**two majors of one package**, so both Effect v3 and Effect v4 consumers get the same
surface:

| Install | Effect | HTTP layer | npm tag |
|---|---|---|---|
| `@triargos/effect-hcloud` (`1.x`) | `effect@^3` | `@effect/platform` | `latest` |
| `@triargos/effect-hcloud@next` (`2.x`) | `effect@^4` (beta) | `effect/unstable/http` | `next` |

When Effect v4 leaves beta, `next` is promoted to `latest`. The public API
(`HetznerClient.servers.create`, the typed error union, the schema types) is **identical**
across the two — only the `effect` you install changes.

## Usage

```ts
import { Effect } from "effect"
import { FetchHttpClient } from "@effect/platform"      // v3  (v4: "effect/unstable/http")
import { HetznerClient, NotFoundError } from "@triargos/effect-hcloud"

const program = Effect.gen(function* () {
  const hetzner = yield* HetznerClient

  const { server, root_password } = yield* hetzner.servers.create({
    name: "web-1",
    server_type: "cx22",
    image: "ubuntu-24.04",
  })

  yield* hetzner.servers.powerOn(server.id)
  const types = yield* hetzner.serverTypes.list()
  return { server, types }
}).pipe(
  // Errors are a typed union — narrow the ones you care about.
  Effect.catchTag("NotFoundError", (e) => Effect.logError(e.message)),
  Effect.provide(HetznerClient.layer({ token: process.env.HCLOUD_TOKEN! })),
  Effect.provide(FetchHttpClient.layer),
)
```

Every method returns `Effect<Output, HetznerError>` where `HetznerError` is a discriminated
union of the documented Hetzner error codes (`NotFoundError`, `UniquenessError`,
`RateLimitError`, `InvalidInputError`, …) plus `UnknownHetznerError` /
`HetznerParseError` / `HetznerTransportError` for everything else.

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
  block, the schema dialect (`Schema.Literals` vs `Schema.Literal`, `Record` arity, `Union`
  arity), the response decoder (`schemaBodyJson` vs a `schemaJson` wrapper), and the
  catch-all (`Effect.catchAll` vs `Effect.catch`).

## Development

```bash
bun install                 # generator deps (bun)
npm run fetch-spec          # re-vendor spec/cloud.spec.json from docs.hetzner.cloud
npm run generate            # spec → packages/v3/src + packages/v4/src
npm run typecheck           # tsc both packages (0 errors expected)
npm run build               # tsc → packages/*/dist (runnable ESM + .d.ts)
npm run regen               # fetch-spec + generate + typecheck
```

`packages/*/src` is fully generated — **edit the generator, not the output.** A spec bump is
`npm run regen` followed by a diff of `packages/*/src`.

## Publishing

Releases run in CI via [Changesets](https://github.com/changesets/changesets) with **npm
trusted publishing (OIDC) + provenance — no `NPM_TOKEN`**.

Both dirs publish to the single name `@triargos/effect-hcloud`, so only the v3 line is
Changesets-managed (Changesets requires unique names, and its prerelease mode is
workspace-global). v4 is versioned in **lockstep** — it's generated from the same spec +
generator, so a v3 `1.4.2` release implies v4 `2.4.2-beta.<run>` (`scripts/set-v4-version.mjs`).

### One-time npm setup (per the `@triargos/effect-hcloud` package)

1. **Claim the name** with a first manual publish (trusted publishing can't bootstrap a
   non-existent package): `cd packages/v3 && npm run build && npm publish` using a
   short-lived granular automation token, then delete the token.
2. On npmjs.com → the package → **Settings → Trusted Publisher → GitHub Actions**: set
   repository `triargos/effect-hcloud` and workflow `.github/workflows/release.yml`. One
   config covers both the `latest` and `next` publishes (same name, same repo/workflow).
3. Remove any `NPM_TOKEN` secret — it's no longer used.

### The flow (`.github/workflows/release.yml`)

- Push to `main` with a changeset → the [changesets action](https://github.com/changesets/action)
  opens a **"Version Packages"** PR (bumps v3, writes `CHANGELOG.md`).
- Merge that PR → the workflow builds, then publishes **v3 → `latest`** (`changeset publish`)
  and **v4 → `next`** (`set-v4-version.mjs` + `npm publish`). Both attach provenance via
  `publishConfig.provenance` + the job's `id-token: write`.

Add a changeset for any spec/generator change:

```bash
npm run changeset        # pick bump + write a summary → .changeset/*.md, commit it
```

Requirements the workflow already encodes: `permissions: id-token: write`, `npm@latest`
(trusted publishing needs npm ≥ 11.5.1), and `repository` + `publishConfig.provenance` in
each `package.json`.

## Repository layout

```
spec/            cloud.spec.json (vendored) + fetch.ts
generator/src/   openapi.ts ir.ts naming.ts emit-schema.ts emit-ts-type.ts
                 dialect.ts profiles.ts emit-resource.ts core-v3.ts core-v4.ts generate.ts
packages/v3/     @triargos/effect-hcloud 1.x  (effect@3 + @effect/platform)
packages/v4/     @triargos/effect-hcloud 2.x  (effect@4)
```
