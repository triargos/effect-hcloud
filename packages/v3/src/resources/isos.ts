/**
 * Isos — generated from the Hetzner Cloud OpenAPI spec. Do not edit by hand.
 */
import { Effect, Schema } from "effect";
import { HttpClientRequest, HttpClientResponse } from "@effect/platform";
import type { HttpClient } from "@effect/platform";
import { handleHetznerError, type HetznerErrors } from "../errors.js";
import { toUrlParams } from "../internal/url-params.js";


export const GetIsoResponse = Schema.Struct({
    iso: Schema.Struct({
      id: Schema.Int,
      name: Schema.NullOr(Schema.String),
      description: Schema.String,
      type: Schema.NullOr(Schema.Literal("public", "private")),
      deprecation: Schema.NullOr(Schema.Struct({
        unavailableAfter: Schema.propertySignature(Schema.String).pipe(Schema.fromKey("unavailable_after")),
        announced: Schema.String,
      })),
      architecture: Schema.NullOr(Schema.Literal("x86", "arm")),
    }),
  });
export type GetIsoResponse = typeof GetIsoResponse.Type;

export const ListIsosResponse = Schema.Struct({
    isos: Schema.Array(Schema.Struct({
      id: Schema.Int,
      name: Schema.NullOr(Schema.String),
      description: Schema.String,
      type: Schema.NullOr(Schema.Literal("public", "private")),
      deprecation: Schema.NullOr(Schema.Struct({
        unavailableAfter: Schema.propertySignature(Schema.String).pipe(Schema.fromKey("unavailable_after")),
        announced: Schema.String,
      })),
      architecture: Schema.NullOr(Schema.Literal("x86", "arm")),
    })),
    meta: Schema.Struct({
      pagination: Schema.Struct({
        page: Schema.Int,
        perPage: Schema.propertySignature(Schema.Int).pipe(Schema.fromKey("per_page")),
        previousPage: Schema.propertySignature(Schema.NullOr(Schema.Int)).pipe(Schema.fromKey("previous_page")),
        nextPage: Schema.propertySignature(Schema.NullOr(Schema.Int)).pipe(Schema.fromKey("next_page")),
        lastPage: Schema.propertySignature(Schema.NullOr(Schema.Int)).pipe(Schema.fromKey("last_page")),
        totalEntries: Schema.propertySignature(Schema.NullOr(Schema.Int)).pipe(Schema.fromKey("total_entries")),
      }),
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
        Effect.flatMap(HttpClientResponse.schemaBodyJson(GetIsoResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.isos.get"),
      ),

    /** List ISOs */
    list: (query?: ListIsosQuery): Effect.Effect<ListIsosResponse, HetznerErrors> =>
      HttpClientRequest.get("/isos").pipe(
        HttpClientRequest.setUrlParams(toUrlParams({ name: query?.name, architecture: query?.architecture, include_architecture_wildcard: query?.includeArchitectureWildcard, page: query?.page, per_page: query?.perPage })),
        http.execute,
        Effect.flatMap(HttpClientResponse.schemaBodyJson(ListIsosResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.isos.list"),
      ),
});

export type IsosApi = ReturnType<typeof makeIsos>;
