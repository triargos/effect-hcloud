/**
 * Isos — generated from the Hetzner Cloud OpenAPI spec. Do not edit by hand.
 */
import { Effect, Schema } from "effect";
import { HttpClient, HttpClientRequest } from "effect/unstable/http";
import { handleHetznerError, type HetznerError } from "../errors.js";
import { decodeJson } from "../internal/http.js";
import { toUrlParams } from "../internal/url-params.js";


export const GetIsoResponse = Schema.Struct({
    iso: Schema.Struct({
      id: Schema.Int,
      name: Schema.NullOr(Schema.String),
      description: Schema.String,
      type: Schema.NullOr(Schema.Literals(["public", "private"])),
      deprecation: Schema.NullOr(Schema.Struct({
        unavailable_after: Schema.String,
        announced: Schema.String,
      })),
      architecture: Schema.NullOr(Schema.Literals(["x86", "arm"])),
    }),
  });
export type GetIsoResponse = typeof GetIsoResponse.Type;

export const ListIsosResponse = Schema.Struct({
    isos: Schema.Array(Schema.Struct({
      id: Schema.Int,
      name: Schema.NullOr(Schema.String),
      description: Schema.String,
      type: Schema.NullOr(Schema.Literals(["public", "private"])),
      deprecation: Schema.NullOr(Schema.Struct({
        unavailable_after: Schema.String,
        announced: Schema.String,
      })),
      architecture: Schema.NullOr(Schema.Literals(["x86", "arm"])),
    })),
    meta: Schema.Struct({
      pagination: Schema.Struct({
        page: Schema.Int,
        per_page: Schema.Int,
        previous_page: Schema.NullOr(Schema.Int),
        next_page: Schema.NullOr(Schema.Int),
        last_page: Schema.NullOr(Schema.Int),
        total_entries: Schema.NullOr(Schema.Int),
      }),
    }),
  });
export type ListIsosResponse = typeof ListIsosResponse.Type;
export interface ListIsosQuery {
  name?: string;
  architecture?: "x86" | "arm";
  include_architecture_wildcard?: boolean;
  page?: number;
  per_page?: number;
}


export const makeIsos = (http: HttpClient.HttpClient) => ({
    /** Get an ISO */
    get: (id: number): Effect.Effect<GetIsoResponse, HetznerError> =>
      HttpClientRequest.get(`/isos/${id}`).pipe(
        http.execute,
        Effect.flatMap(decodeJson(GetIsoResponse)),
        Effect.catch(handleHetznerError),
        Effect.withSpan("HetznerClient.isos.get"),
      ),

    /** List ISOs */
    list: (query?: ListIsosQuery): Effect.Effect<ListIsosResponse, HetznerError> =>
      HttpClientRequest.get("/isos").pipe(
        HttpClientRequest.setUrlParams(toUrlParams(query)),
        http.execute,
        Effect.flatMap(decodeJson(ListIsosResponse)),
        Effect.catch(handleHetznerError),
        Effect.withSpan("HetznerClient.isos.list"),
      ),
});

export type IsosApi = ReturnType<typeof makeIsos>;
