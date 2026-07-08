/**
 * The two emit profiles. The v3/v4 delta is deliberately tiny: import block,
 * schema dialect, the response-decode combinator (renamed schemaBodyJson →
 * schemaJson in effect@4), and the catch-all (catchAll → catch).
 */
import { v3, v4 } from "./dialect.ts";
import type { Profile } from "./emit-resource.ts";

export const v3Profile: Profile = {
  dialect: v3,
  header:
    `import { Effect, Schema } from "effect";\n` +
    `import { HttpClientRequest, HttpClientResponse } from "@effect/platform";\n` +
    `import type { HttpClient } from "@effect/platform";\n` +
    `import { handleHetznerError, type HetznerError } from "../errors.js";\n` +
    `import { toUrlParams } from "../internal/url-params.js";\n`,
  responseDecode: "HttpClientResponse.schemaBodyJson",
  catchAll: "Effect.catchAll",
};

export const v4Profile: Profile = {
  dialect: v4,
  header:
    `import { Effect, Schema } from "effect";\n` +
    `import { HttpClient, HttpClientRequest } from "effect/unstable/http";\n` +
    `import { handleHetznerError, type HetznerError } from "../errors.js";\n` +
    `import { decodeJson } from "../internal/http.js";\n` +
    `import { toUrlParams } from "../internal/url-params.js";\n`,
  responseDecode: "decodeJson",
  catchAll: "Effect.catch",
};
