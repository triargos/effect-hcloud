/**
 * Isos — generated from the Hetzner Cloud OpenAPI spec. Do not edit by hand.
 */
import { Effect, Schema } from "effect";
import { HttpClient, HttpClientRequest } from "effect/unstable/http";
import { handleHetznerError, type HetznerErrors } from "../errors.js";
import { decodeJson } from "../internal/http.js";
import { toUrlParams } from "../internal/url-params.js";


export const GetIsoResponse = Schema.Struct({
    iso: Schema.Struct({
      id: Schema.Int,
      name: Schema.NullOr(Schema.String),
      description: Schema.String,
      type: Schema.NullOr(Schema.Literals(["public", "private"])),
      deprecation: Schema.NullOr(Schema.Struct({
        unavailableAfter: Schema.String,
        announced: Schema.String,
      }).pipe(Schema.encodeKeys({ unavailableAfter: "unavailable_after" }))),
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
        unavailableAfter: Schema.String,
        announced: Schema.String,
      }).pipe(Schema.encodeKeys({ unavailableAfter: "unavailable_after" }))),
      architecture: Schema.NullOr(Schema.Literals(["x86", "arm"])),
    })),
    meta: Schema.Struct({
      pagination: Schema.Struct({
        page: Schema.Int,
        perPage: Schema.Int,
        previousPage: Schema.NullOr(Schema.Int),
        nextPage: Schema.NullOr(Schema.Int),
        lastPage: Schema.NullOr(Schema.Int),
        totalEntries: Schema.NullOr(Schema.Int),
      }).pipe(Schema.encodeKeys({ perPage: "per_page", previousPage: "previous_page", nextPage: "next_page", lastPage: "last_page", totalEntries: "total_entries" })),
    }),
  });
export type ListIsosResponse = typeof ListIsosResponse.Type;
export interface ListIsosQuery {
  name?: string;
  architecture?: "x86" | "arm";
  includeArchitectureWildcard?: boolean;
  page?: number;
  perPage?: number;
}


export const makeIsos = (http: HttpClient.HttpClient) => ({
    /** Get an ISO */
    get: (id: number): Effect.Effect<GetIsoResponse, HetznerErrors> =>
      HttpClientRequest.get(`/isos/${id}`).pipe(
        http.execute,
        Effect.flatMap(decodeJson(GetIsoResponse)),
        Effect.catch(handleHetznerError),
        Effect.withSpan("HetznerClient.isos.get"),
      ),

    /** List ISOs */
    list: (query?: ListIsosQuery): Effect.Effect<ListIsosResponse, HetznerErrors> =>
      HttpClientRequest.get("/isos").pipe(
        HttpClientRequest.setUrlParams(toUrlParams({ name: query?.name, architecture: query?.architecture, include_architecture_wildcard: query?.includeArchitectureWildcard, page: query?.page, per_page: query?.perPage })),
        http.execute,
        Effect.flatMap(decodeJson(ListIsosResponse)),
        Effect.catch(handleHetznerError),
        Effect.withSpan("HetznerClient.isos.list"),
      ),
});

export type IsosApi = ReturnType<typeof makeIsos>;
