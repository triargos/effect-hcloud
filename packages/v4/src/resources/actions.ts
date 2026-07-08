/**
 * Actions — generated from the Hetzner Cloud OpenAPI spec. Do not edit by hand.
 */
import { Effect, Schema } from "effect";
import { HttpClient, HttpClientRequest } from "effect/unstable/http";
import { handleHetznerError, type HetznerError } from "../errors.js";
import { decodeJson } from "../internal/http.js";
import { toUrlParams } from "../internal/url-params.js";


export const GetActionResponse = Schema.Struct({
    action: Schema.Struct({
      id: Schema.Int,
      command: Schema.String,
      status: Schema.Literals(["running", "success", "error"]),
      started: Schema.String,
      finished: Schema.NullOr(Schema.String),
      progress: Schema.Int,
      resources: Schema.Array(Schema.Struct({
        id: Schema.Int,
        type: Schema.String,
      })),
      error: Schema.NullOr(Schema.Struct({
        code: Schema.String,
        message: Schema.String,
      })),
    }),
  });
export type GetActionResponse = typeof GetActionResponse.Type;

export const GetActionsResponse = Schema.Struct({
    actions: Schema.Array(Schema.Struct({
      id: Schema.Int,
      command: Schema.String,
      status: Schema.Literals(["running", "success", "error"]),
      started: Schema.String,
      finished: Schema.NullOr(Schema.String),
      progress: Schema.Int,
      resources: Schema.Array(Schema.Struct({
        id: Schema.Int,
        type: Schema.String,
      })),
      error: Schema.NullOr(Schema.Struct({
        code: Schema.String,
        message: Schema.String,
      })),
    })),
  });
export type GetActionsResponse = typeof GetActionsResponse.Type;
export interface GetActionsQuery {
  id: ReadonlyArray<number>;
}


export const makeActions = (http: HttpClient.HttpClient) => ({
    /** Get an Action */
    get: (id: number): Effect.Effect<GetActionResponse, HetznerError> =>
      HttpClientRequest.get(`/actions/${id}`).pipe(
        http.execute,
        Effect.flatMap(decodeJson(GetActionResponse)),
        Effect.catch(handleHetznerError),
        Effect.withSpan("HetznerClient.actions.get"),
      ),

    /** Get multiple Actions */
    getActions: (query?: GetActionsQuery): Effect.Effect<GetActionsResponse, HetznerError> =>
      HttpClientRequest.get("/actions").pipe(
        HttpClientRequest.setUrlParams(toUrlParams(query)),
        http.execute,
        Effect.flatMap(decodeJson(GetActionsResponse)),
        Effect.catch(handleHetznerError),
        Effect.withSpan("HetznerClient.actions.getActions"),
      ),
});

export type ActionsApi = ReturnType<typeof makeActions>;
