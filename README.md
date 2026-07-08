# @triargos/effect-hcloud

Effect-native SDK for the [Hetzner Cloud API](https://docs.hetzner.cloud/) — all **189
operations** across **19 resource groups**, with typed inputs, outputs, and errors as
[Effect Schema](https://effect.website/docs/schema/introduction/). Generated from the
official OpenAPI spec.

```ts
const server = yield* hetzner.servers.create({
  name: "web-1",
  serverType: "cx22",
  image: "ubuntu-24.04",
})
```

## Install

The package ships as **two majors of one name** so both Effect v3 and Effect v4 consumers get
the identical surface — only the `effect` you install changes.

| | Effect | HTTP layer | install |
|---|---|---|---|
| **v3** (`1.x`, `latest`) | `effect@^3` | `@effect/platform` | `pnpm add @triargos/effect-hcloud effect @effect/platform` |
| **v4** (`2.x`, `next`) | `effect@^4` (beta) | `effect/unstable/http` | `pnpm add @triargos/effect-hcloud@next effect@next` |

When Effect v4 leaves beta, `next` is promoted to `latest`.

## Usage

Provide `HetznerClient.layer({ token })` plus an HTTP layer, then yield the client:

```ts
import { Effect } from "effect"
import { FetchHttpClient } from "@effect/platform"      // v3  (v4: from "effect/unstable/http")
import { HetznerClient } from "@triargos/effect-hcloud"

const program = Effect.gen(function* () {
  const hetzner = yield* HetznerClient

  const { server, rootPassword } = yield* hetzner.servers.create({
    name: "web-1",
    serverType: "cx22",
    image: "ubuntu-24.04",
  })

  yield* hetzner.servers.powerOn(server.id)
  return yield* hetzner.serverTypes.list()
}).pipe(
  Effect.provide(HetznerClient.layer({ token: process.env.HCLOUD_TOKEN! })),
  Effect.provide(FetchHttpClient.layer),
)
```

The client exposes one namespace per resource group (`servers`, `volumes`, `networks`,
`loadBalancers`, `firewalls`, `zones`, …); per-resource actions are folded in
(`servers.powerOn(id)`, `volumes.attach(id, …)`). Setting the token from an env var, a
`Redacted`, or Effect `Config` all work — see the `HetznerConfig` type.

## Errors

Every method returns `Effect<Output, HetznerErrors>`. `HetznerErrors` is a discriminated
union: one typed error per documented Hetzner code — `NotFoundError`, `UniquenessError`,
`RateLimitError`, `InvalidInputError`, `ForbiddenError`, … — plus a generic `HetznerError`
(`{ message, cause }`) for anything unmapped: an unknown code, a response that didn't decode,
or a transport failure. Narrow by tag:

```ts
yield* hetzner.servers.get(id).pipe(
  Effect.catchTag("NotFoundError", () => Effect.succeed(null)),
  Effect.catchTag("RateLimitError", (e) => backOff(e)),
  Effect.catchTag("HetznerError", (e) => Effect.logError(e.cause)), // everything else
)
```

## Contributing

The SDK source under `packages/*/src` is fully generated from the vendored OpenAPI spec —
don't edit it by hand. See [CONTRIBUTING.md](./CONTRIBUTING.md) for the generator, local dev,
and release setup.

## License

MIT
