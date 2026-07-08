---
"@triargos/effect-hcloud": minor
---

Initial release of the Effect-native Hetzner Cloud SDK, generated from the official OpenAPI spec.

- Complete coverage: 189 operations across 19 resource groups (`servers`, `volumes`, `networks`, `loadBalancers`, `firewalls`, `zones`, …).
- Typed inputs, outputs, and errors as Effect Schema; every method returns `Effect<Output, HetznerError>`.
- Resource-grouped client — `HetznerClient.servers.create(...)`, with per-resource actions folded in (`servers.powerOn(id)`).
- Dual-target from one generator: Effect v3 (`latest`) and Effect v4 (`next`), identical surface.
