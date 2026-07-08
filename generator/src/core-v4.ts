/**
 * Static files of the v4 package (effect@4). Mirrors core-v3.ts but with v4
 * idioms: `effect/unstable/http`, `Schema.TaggedErrorClass`, `Context.Service`,
 * `HttpClientResponse.schemaJson`, and a single `HttpClientError` failure tag.
 * The pure helpers (url-params, pagination) are shared with the v3 core.
 */
import type { ResourceIR } from "./ir.ts";

/**
 * v4-only: decode a JSON response body against `schema`. effect@4's
 * `HttpClientResponse.schemaJson` decodes the whole `{ status, headers, body }`
 * envelope, so we wrap the payload schema under `body` and unwrap the result.
 */
export const internalHttpTs = `import { Effect, Schema } from "effect";
import { HttpClientResponse } from "effect/unstable/http";

export const decodeJson =
  <A, I, RD, RE>(schema: Schema.Codec<A, I, RD, RE>) =>
  (response: HttpClientResponse.HttpClientResponse) =>
    HttpClientResponse.schemaJson(Schema.Struct({ body: schema }))(response).pipe(
      Effect.map((decoded) => decoded.body),
    );
`;

export const errorsTs = `/**
 * The Hetzner Cloud error model (Effect v4). Every API failure is a
 * \`{ error: { code, message, details } }\` envelope; \`handleHetznerError\` decodes it
 * into one typed error per documented code and falls back to \`UnknownHetznerError\`.
 * Response-decode and transport failures surface as typed errors, so every
 * method's error channel is exactly \`HetznerError\`.
 */
import { Effect, Schema } from "effect";
import type { HttpClientResponse } from "effect/unstable/http";
import { decodeJson } from "./internal/http.js";

const ErrorPayload = Schema.Struct({
  code: Schema.String,
  message: Schema.String,
  details: Schema.optional(Schema.Unknown),
});
const ErrorEnvelope = Schema.Struct({ error: ErrorPayload });

const errorFields = { message: Schema.String, details: Schema.optional(Schema.Unknown) };

export class InvalidInputError extends Schema.TaggedErrorClass<InvalidInputError>()("InvalidInputError", errorFields) {}
export class UnauthorizedError extends Schema.TaggedErrorClass<UnauthorizedError>()("UnauthorizedError", errorFields) {}
export class ForbiddenError extends Schema.TaggedErrorClass<ForbiddenError>()("ForbiddenError", errorFields) {}
export class NotFoundError extends Schema.TaggedErrorClass<NotFoundError>()("NotFoundError", errorFields) {}
export class ConflictError extends Schema.TaggedErrorClass<ConflictError>()("ConflictError", errorFields) {}
export class LockedError extends Schema.TaggedErrorClass<LockedError>()("LockedError", errorFields) {}
export class UniquenessError extends Schema.TaggedErrorClass<UniquenessError>()("UniquenessError", errorFields) {}
export class ProtectedError extends Schema.TaggedErrorClass<ProtectedError>()("ProtectedError", errorFields) {}
export class ResourceLimitError extends Schema.TaggedErrorClass<ResourceLimitError>()("ResourceLimitError", errorFields) {}
export class ResourceUnavailableError extends Schema.TaggedErrorClass<ResourceUnavailableError>()("ResourceUnavailableError", errorFields) {}
export class RateLimitError extends Schema.TaggedErrorClass<RateLimitError>()("RateLimitError", errorFields) {}
export class MaintenanceError extends Schema.TaggedErrorClass<MaintenanceError>()("MaintenanceError", errorFields) {}
export class ServiceError extends Schema.TaggedErrorClass<ServiceError>()("ServiceError", errorFields) {}

/** An API error whose \`code\` we don't model yet — the \`code\` is preserved verbatim. */
export class UnknownHetznerError extends Schema.TaggedErrorClass<UnknownHetznerError>()("UnknownHetznerError", {
  code: Schema.String,
  message: Schema.String,
  details: Schema.optional(Schema.Unknown),
  status: Schema.optional(Schema.Number),
}) {}

/** The server's success response did not match the generated schema. */
export class HetznerParseError extends Schema.TaggedErrorClass<HetznerParseError>()("HetznerParseError", {
  message: Schema.String,
}) {}

/** The request never produced an HTTP response (network / body-encoding failure). */
export class HetznerTransportError extends Schema.TaggedErrorClass<HetznerTransportError>()("HetznerTransportError", {
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

const isTagged = (e: unknown, tag: string): e is { readonly _tag: string; readonly message?: unknown } =>
  typeof e === "object" && e !== null && "_tag" in e && (e as { _tag: unknown })._tag === tag;

const messageOf = (e: unknown): string =>
  typeof e === "object" && e !== null && "message" in e ? String((e as { message: unknown }).message) : String(e);

/**
 * Map any platform-level failure (HttpClientError / SchemaError / HttpBodyError)
 * to a typed HetznerError. Used as \`Effect.catch(handleHetznerError)\`.
 */
export const handleHetznerError = (error: unknown): Effect.Effect<never, HetznerError> => {
  if (isTagged(error, "HttpClientError")) {
    const response =
      "response" in error ? (error as { response?: HttpClientResponse.HttpClientResponse }).response : undefined;
    const message = messageOf(error);
    if (!response) return Effect.fail(new HetznerTransportError({ message }));
    const status = response.status;
    return decodeJson(ErrorEnvelope)(response).pipe(
      Effect.matchEffect({
        onFailure: () =>
          Effect.fail(new UnknownHetznerError({ code: "unparseable_response", message, status })),
        onSuccess: (decoded) => {
          const { code, message: m, details } = decoded.error;
          const make = CODE_MAP[code];
          return Effect.fail(make ? make({ message: m, details }) : new UnknownHetznerError({ code, message: m, details, status }));
        },
      }),
    );
  }
  return Effect.fail(new HetznerParseError({ message: \`Failed to decode Hetzner response: \${messageOf(error)}\` }));
};
`;

export function clientTs(resources: ResourceIR[]): string {
  const imports = resources
    .map((r) => `import { make${r.pascal}, type ${r.pascal}Api } from "./resources/${r.key}.js";`)
    .join("\n");
  const apiFields = resources.map((r) => `  readonly ${r.key}: ${r.pascal}Api;`).join("\n");
  const apiConstruct = resources.map((r) => `    ${r.key}: make${r.pascal}(http),`).join("\n");

  return `/**
 * The Hetzner Cloud client (Effect v4). Yield \`HetznerClient\` from an Effect and
 * call \`client.servers.create(...)\`. Provide \`HetznerClient.layer({ token })\` plus
 * an \`HttpClient\` layer (e.g. \`FetchHttpClient.layer\`).
 */
import { Context, Effect, Layer, Redacted } from "effect";
import { HttpClient, HttpClientRequest } from "effect/unstable/http";
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
          HttpClientRequest.bearerToken(token),
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

export class HetznerClient extends Context.Service<HetznerClient, HetznerClientApi>()("effect-hcloud/HetznerClient") {
  /** Layer providing a fully-wired client. Compose with an \`HttpClient\` layer. */
  static layer = (config: HetznerConfig): Layer.Layer<HetznerClient, never, HttpClient.HttpClient> =>
    Layer.effect(HetznerClient, make(config));
}
`;
}

export function packageJson(): string {
  return JSON.stringify(
    {
      name: "@triargos/effect-hcloud",
      version: "2.0.0-beta.0",
      description: "Effect-native SDK for the Hetzner Cloud API (Effect v4), generated from the official OpenAPI spec.",
      license: "MIT",
      type: "module",
      main: "./dist/index.js",
      module: "./dist/index.js",
      types: "./dist/index.d.ts",
      exports: { ".": { types: "./dist/index.d.ts", import: "./dist/index.js" } },
      files: ["dist"],
      sideEffects: false,
      keywords: ["hetzner", "hcloud", "effect", "effect-ts", "sdk", "openapi"],
      repository: { type: "git", url: "git+https://github.com/triargos/effect-hcloud.git", directory: "packages/v4" },
      homepage: "https://github.com/triargos/effect-hcloud#readme",
      scripts: {
        typecheck: "tsc -p tsconfig.json",
        build: "tsc -p tsconfig.build.json",
      },
      peerDependencies: { effect: "^4.0.0-beta.94" },
      devDependencies: { effect: "4.0.0-beta.94", typescript: "^5.9.3" },
      // provenance:true makes `npm publish` attach a provenance attestation via CI OIDC.
      publishConfig: { access: "public", tag: "next", provenance: true },
    },
    null,
    2,
  ) + "\n";
}
