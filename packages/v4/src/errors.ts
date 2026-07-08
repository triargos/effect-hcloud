/**
 * The Hetzner Cloud error model (Effect v4). Every API failure is a
 * `{ error: { code, message, details } }` envelope; `handleHetznerError` decodes it
 * into one typed error per documented code and falls back to `UnknownHetznerError`.
 * Response-decode and transport failures surface as typed errors, so every
 * method's error channel is exactly `HetznerError`.
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

/** An API error whose `code` we don't model yet — the `code` is preserved verbatim. */
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
 * to a typed HetznerError. Used as `Effect.catch(handleHetznerError)`.
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
  return Effect.fail(new HetznerParseError({ message: `Failed to decode Hetzner response: ${messageOf(error)}` }));
};
