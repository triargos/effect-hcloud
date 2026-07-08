/**
 * The Hetzner Cloud error model. Every API failure comes back as a
 * `{ error: { code, message, details } }` envelope; `handleHetznerError` decodes
 * it into one typed error per documented code (`NotFoundError`, `RateLimitError`, …).
 * Anything unmapped — an unknown code, a response that didn't decode, or a
 * transport failure — collapses to the generic `HetznerError`, with the underlying
 * value kept in `cause`. So every method's error channel is `HetznerErrors`.
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

/**
 * Every failure that isn't a recognized API error code — an unmapped code, a
 * response body that didn't decode, or a transport failure — collapses to this.
 * The underlying value (platform error, raw body, or `{ code, details, status }`)
 * is preserved in `cause`.
 */
export class HetznerError extends Schema.TaggedError<HetznerError>()("HetznerError", {
  message: Schema.String,
  cause: Schema.Defect,
}) {}

/** The error channel of every client method: a typed API error, or the generic `HetznerError`. */
export type HetznerErrors =
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
  | HetznerError;

type Payload = { message: string; details?: unknown };

const CODE_MAP: Record<string, (p: Payload) => HetznerErrors> = {
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
 * Map any platform-level failure to a typed `HetznerErrors`. Used as
 * `Effect.catchAll(handleHetznerError)` at the tail of every operation.
 */
export const handleHetznerError = (
  error: RequestError | ResponseError | ParseError | HttpBodyError,
): Effect.Effect<never, HetznerErrors> => {
  if (error._tag === "ResponseError") {
    const status = error.response.status;
    return error.response.json.pipe(
      Effect.matchEffect({
        onFailure: () => Effect.fail(new HetznerError({ message: error.message, cause: error })),
        onSuccess: (body) => {
          const parsed = Schema.decodeUnknownOption(ErrorEnvelope)(body);
          if (Option.isNone(parsed)) {
            return Effect.fail(new HetznerError({ message: error.message, cause: body }));
          }
          const { code, message, details } = parsed.value.error;
          const make = CODE_MAP[code];
          return Effect.fail(
            make ? make({ message, details }) : new HetznerError({ message, cause: { code, details, status } }),
          );
        },
      }),
    );
  }
  if (error._tag === "ParseError") {
    return Effect.fail(new HetznerError({ message: `Failed to decode Hetzner response: ${error.message}`, cause: error }));
  }
  const reason = "message" in error ? String((error as { message: unknown }).message) : String(error);
  return Effect.fail(new HetznerError({ message: `Hetzner request failed: ${reason}`, cause: error }));
};
