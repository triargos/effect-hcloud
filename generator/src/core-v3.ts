/**
 * Static (non-per-operation) files of the v3 package: the base HTTP client +
 * grouped HetznerClient, the error model, and small runtime helpers. Only
 * client.ts depends on the resource list; the rest are constant templates.
 */
import type { ResourceIR } from "./ir.ts";

export const urlParamsTs = `/**
 * Turn a query object into URL param pairs: skips undefined/null, stringifies
 * scalars, and expands arrays into repeated keys (Hetzner's list filters).
 */
export const toUrlParams = (
  query: object | undefined,
): ReadonlyArray<readonly [string, string]> => {
  if (!query) return [];
  const out: Array<[string, string]> = [];
  for (const [key, value] of Object.entries(query as Record<string, unknown>)) {
    if (value === undefined || value === null) continue;
    if (Array.isArray(value)) {
      for (const item of value) if (item !== undefined && item !== null) out.push([key, String(item)]);
    } else {
      out.push([key, String(value)]);
    }
  }
  return out;
};
`;

export const errorsTs = `/**
 * The Hetzner Cloud error model. Every API failure comes back as a
 * \`{ error: { code, message, details } }\` envelope; \`handleHetznerError\` decodes
 * it into one typed error per documented code, falling back to
 * \`UnknownHetznerError\` for codes we don't model yet. Transport and response-decode
 * failures are surfaced as typed errors too (never thrown as defects), so every
 * method's error channel is exactly \`HetznerError\`.
 */
import { Effect, Option, Schema } from "effect";
import type { HttpBodyError } from "@effect/platform/HttpBody";
import type { RequestError, ResponseError } from "@effect/platform/HttpClientError";
import type { ParseError } from "effect/ParseResult";

const ErrorPayload = Schema.Struct({
  code: Schema.String,
  message: Schema.String,
  details: Schema.optional(Schema.Unknown),
});
const ErrorEnvelope = Schema.Struct({ error: ErrorPayload });

const errorFields = { message: Schema.String, details: Schema.optional(Schema.Unknown) };

export class InvalidInputError extends Schema.TaggedError<InvalidInputError>()("InvalidInputError", errorFields) {}
export class UnauthorizedError extends Schema.TaggedError<UnauthorizedError>()("UnauthorizedError", errorFields) {}
export class ForbiddenError extends Schema.TaggedError<ForbiddenError>()("ForbiddenError", errorFields) {}
export class NotFoundError extends Schema.TaggedError<NotFoundError>()("NotFoundError", errorFields) {}
export class ConflictError extends Schema.TaggedError<ConflictError>()("ConflictError", errorFields) {}
export class LockedError extends Schema.TaggedError<LockedError>()("LockedError", errorFields) {}
export class UniquenessError extends Schema.TaggedError<UniquenessError>()("UniquenessError", errorFields) {}
export class ProtectedError extends Schema.TaggedError<ProtectedError>()("ProtectedError", errorFields) {}
export class ResourceLimitError extends Schema.TaggedError<ResourceLimitError>()("ResourceLimitError", errorFields) {}
export class ResourceUnavailableError extends Schema.TaggedError<ResourceUnavailableError>()("ResourceUnavailableError", errorFields) {}
export class RateLimitError extends Schema.TaggedError<RateLimitError>()("RateLimitError", errorFields) {}
export class MaintenanceError extends Schema.TaggedError<MaintenanceError>()("MaintenanceError", errorFields) {}
export class ServiceError extends Schema.TaggedError<ServiceError>()("ServiceError", errorFields) {}

/** An API error whose \`code\` we don't model yet — the \`code\` is preserved verbatim. */
export class UnknownHetznerError extends Schema.TaggedError<UnknownHetznerError>()("UnknownHetznerError", {
  code: Schema.String,
  message: Schema.String,
  details: Schema.optional(Schema.Unknown),
  status: Schema.optional(Schema.Number),
}) {}

/** The server's success response did not match the generated schema. */
export class HetznerParseError extends Schema.TaggedError<HetznerParseError>()("HetznerParseError", {
  message: Schema.String,
}) {}

/** The request never produced an HTTP response (network / body-encoding failure). */
export class HetznerTransportError extends Schema.TaggedError<HetznerTransportError>()("HetznerTransportError", {
  message: Schema.String,
}) {}

export type HetznerError =
  | InvalidInputError
  | UnauthorizedError
  | ForbiddenError
  | NotFoundError
  | ConflictError
  | LockedError
  | UniquenessError
  | ProtectedError
  | ResourceLimitError
  | ResourceUnavailableError
  | RateLimitError
  | MaintenanceError
  | ServiceError
  | UnknownHetznerError
  | HetznerParseError
  | HetznerTransportError;

type Payload = { message: string; details?: unknown };

const CODE_MAP: Record<string, (p: Payload) => HetznerError> = {
  invalid_input: (p) => new InvalidInputError(p),
  unauthorized: (p) => new UnauthorizedError(p),
  forbidden: (p) => new ForbiddenError(p),
  not_found: (p) => new NotFoundError(p),
  conflict: (p) => new ConflictError(p),
  locked: (p) => new LockedError(p),
  uniqueness_error: (p) => new UniquenessError(p),
  protected: (p) => new ProtectedError(p),
  resource_limit_exceeded: (p) => new ResourceLimitError(p),
  resource_unavailable: (p) => new ResourceUnavailableError(p),
  rate_limit_exceeded: (p) => new RateLimitError(p),
  maintenance: (p) => new MaintenanceError(p),
  service_error: (p) => new ServiceError(p),
};

/**
 * Map any platform-level failure to a typed HetznerError. Used as
 * \`Effect.catchAll(handleHetznerError)\` at the tail of every operation.
 */
export const handleHetznerError = (
  error: RequestError | ResponseError | ParseError | HttpBodyError,
): Effect.Effect<never, HetznerError> => {
  if (error._tag === "ResponseError") {
    const status = error.response.status;
    return error.response.json.pipe(
      Effect.matchEffect({
        onFailure: () =>
          Effect.fail(new UnknownHetznerError({ code: "unparseable_response", message: error.message, status })),
        onSuccess: (body) => {
          const parsed = Schema.decodeUnknownOption(ErrorEnvelope)(body);
          if (Option.isNone(parsed)) {
            return Effect.fail(new UnknownHetznerError({ code: "unknown", message: error.message, details: body, status }));
          }
          const { code, message, details } = parsed.value.error;
          const make = CODE_MAP[code];
          return Effect.fail(make ? make({ message, details }) : new UnknownHetznerError({ code, message, details, status }));
        },
      }),
    );
  }
  if (error._tag === "ParseError") {
    return Effect.fail(new HetznerParseError({ message: \`Failed to decode Hetzner response: \${error.message}\` }));
  }
  const reason = "message" in error ? String((error as { message: unknown }).message) : String(error);
  return Effect.fail(new HetznerTransportError({ message: \`Hetzner request failed: \${reason}\` }));
};
`;

export const paginationTs = `import { Schema } from "effect";

/** Pagination metadata returned by every list endpoint under \`meta.pagination\`. */
export const Pagination = Schema.Struct({
  page: Schema.Int,
  per_page: Schema.Int,
  previous_page: Schema.NullOr(Schema.Int),
  next_page: Schema.NullOr(Schema.Int),
  last_page: Schema.NullOr(Schema.Int),
  total_entries: Schema.NullOr(Schema.Int),
});
export type Pagination = typeof Pagination.Type;
`;

export function clientTs(resources: ResourceIR[]): string {
  const imports = resources
    .map((r) => `import { make${r.pascal}, type ${r.pascal}Api } from "./resources/${r.key}.js";`)
    .join("\n");
  const apiFields = resources.map((r) => `  readonly ${r.key}: ${r.pascal}Api;`).join("\n");
  const apiConstruct = resources.map((r) => `    ${r.key}: make${r.pascal}(http),`).join("\n");

  return `/**
 * The Hetzner Cloud client. Yield \`HetznerClient\` from an Effect and call
 * \`client.servers.create(...)\` etc. Provide \`HetznerClient.layer({ token })\`
 * plus an \`HttpClient\` layer (e.g. \`FetchHttpClient.layer\`).
 */
import { Context, Effect, Layer, Redacted } from "effect";
import { HttpClient, HttpClientRequest } from "@effect/platform";
${imports}

const DEFAULT_BASE_URL = "https://api.hetzner.cloud/v1";

export interface HetznerConfig {
  /** API token for the Hetzner Cloud project. */
  readonly token: string | Redacted.Redacted<string>;
  /** Override the base URL (defaults to ${"`"}${"$"}{DEFAULT_BASE_URL}${"`"}). */
  readonly baseUrl?: string;
}

/** The resolved client surface: one namespace per resource group. */
export interface HetznerClientApi {
${apiFields}
}

const makeHttp = (config: HetznerConfig): Effect.Effect<HttpClient.HttpClient, never, HttpClient.HttpClient> =>
  Effect.map(HttpClient.HttpClient, (base) => {
    const token = typeof config.token === "string" ? config.token : Redacted.value(config.token);
    return base.pipe(
      HttpClient.mapRequest((request) =>
        request.pipe(
          HttpClientRequest.acceptJson,
          HttpClientRequest.prependUrl(config.baseUrl ?? DEFAULT_BASE_URL),
          HttpClientRequest.setHeader("Authorization", \`Bearer \${token}\`),
        ),
      ),
      HttpClient.filterStatusOk,
      HttpClient.retryTransient({ times: 3 }),
    );
  });

/** Build the client surface directly (requires an \`HttpClient\` in context). */
export const make = (config: HetznerConfig): Effect.Effect<HetznerClientApi, never, HttpClient.HttpClient> =>
  Effect.map(makeHttp(config), (http) => ({
${apiConstruct}
  }));

export class HetznerClient extends Context.Tag("HetznerClient")<HetznerClient, HetznerClientApi>() {
  /** Layer providing a fully-wired client. Compose with an \`HttpClient\` layer. */
  static layer = (config: HetznerConfig): Layer.Layer<HetznerClient, never, HttpClient.HttpClient> =>
    Layer.effect(HetznerClient, make(config));
}
`;
}

export function resourcesIndexTs(resources: ResourceIR[]): string {
  return resources.map((r) => `export * from "./${r.key}.js";`).join("\n") + "\n";
}

export const indexTs = `export * from "./client.js";
export * from "./errors.js";
export { Pagination } from "./pagination.js";
export * from "./resources/index.js";
`;

export function packageJson(): string {
  return JSON.stringify(
    {
      name: "@triargos/effect-hcloud",
      version: "1.0.0",
      description: "Effect-native SDK for the Hetzner Cloud API (Effect v3), generated from the official OpenAPI spec.",
      license: "MIT",
      type: "module",
      main: "./dist/index.js",
      module: "./dist/index.js",
      types: "./dist/index.d.ts",
      exports: { ".": { types: "./dist/index.d.ts", import: "./dist/index.js" } },
      files: ["dist"],
      sideEffects: false,
      keywords: ["hetzner", "hcloud", "effect", "effect-ts", "sdk", "openapi"],
      repository: { type: "git", url: "git+https://github.com/triargos/effect-hcloud.git", directory: "packages/v3" },
      homepage: "https://github.com/triargos/effect-hcloud#readme",
      scripts: {
        typecheck: "tsc -p tsconfig.json",
        build: "tsc -p tsconfig.build.json",
      },
      peerDependencies: { effect: "^3.19.0", "@effect/platform": "^0.94.0" },
      devDependencies: { effect: "^3.19.13", "@effect/platform": "^0.94.0", typescript: "^5.9.3" },
      // provenance:true makes `npm publish` attach a provenance attestation via CI OIDC.
      publishConfig: { access: "public", tag: "latest", provenance: true },
    },
    null,
    2,
  ) + "\n";
}

export const tsconfigJson = `{
  "extends": "../../tsconfig.base.json",
  "compilerOptions": {
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "noEmit": true,
    "noUnusedLocals": false
  },
  "include": ["src"]
}
`;

export const tsconfigBuildJson = `{
  "extends": "../../tsconfig.base.json",
  "compilerOptions": {
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "noEmit": false,
    "outDir": "dist",
    "rootDir": "src",
    "declaration": true,
    "declarationMap": true,
    "sourceMap": true
  },
  "include": ["src"]
}
`;
