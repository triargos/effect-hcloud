/**
 * Datacenters — generated from the Hetzner Cloud OpenAPI spec. Do not edit by hand.
 */
import { Effect, Schema } from "effect";
import { HttpClientRequest, HttpClientResponse } from "@effect/platform";
import type { HttpClient } from "@effect/platform";
import { handleHetznerError, type HetznerError } from "../errors.js";
import { toUrlParams } from "../internal/url-params.js";


export const GetDatacenterResponse = Schema.Struct({
    datacenter: Schema.Struct({
      id: Schema.Int,
      name: Schema.String,
      description: Schema.String,
      location: Schema.Struct({
        id: Schema.Int,
        name: Schema.String,
        description: Schema.String,
        country: Schema.String,
        city: Schema.String,
        latitude: Schema.Number,
        longitude: Schema.Number,
        network_zone: Schema.String,
      }),
      server_types: Schema.Struct({
        supported: Schema.Array(Schema.Int),
        available: Schema.Array(Schema.Int),
        available_for_migration: Schema.Array(Schema.Int),
      }),
    }),
  });
export type GetDatacenterResponse = typeof GetDatacenterResponse.Type;

export const ListDatacentersResponse = Schema.Struct({
    datacenters: Schema.Array(Schema.Struct({
      id: Schema.Int,
      name: Schema.String,
      description: Schema.String,
      location: Schema.Struct({
        id: Schema.Int,
        name: Schema.String,
        description: Schema.String,
        country: Schema.String,
        city: Schema.String,
        latitude: Schema.Number,
        longitude: Schema.Number,
        network_zone: Schema.String,
      }),
      server_types: Schema.Struct({
        supported: Schema.Array(Schema.Int),
        available: Schema.Array(Schema.Int),
        available_for_migration: Schema.Array(Schema.Int),
      }),
    })),
    recommendation: Schema.Int,
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
export type ListDatacentersResponse = typeof ListDatacentersResponse.Type;
export interface ListDatacentersQuery {
  name?: string;
  sort?: ReadonlyArray<"id" | "id:asc" | "id:desc" | "name" | "name:asc" | "name:desc">;
  page?: number;
  per_page?: number;
}


export const makeDatacenters = (http: HttpClient.HttpClient) => ({
    /** Get a Data Center */
    get: (id: number): Effect.Effect<GetDatacenterResponse, HetznerError> =>
      HttpClientRequest.get(`/datacenters/${id}`).pipe(
        http.execute,
        Effect.flatMap(HttpClientResponse.schemaBodyJson(GetDatacenterResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.datacenters.get"),
      ),

    /** List Data Centers */
    list: (query?: ListDatacentersQuery): Effect.Effect<ListDatacentersResponse, HetznerError> =>
      HttpClientRequest.get("/datacenters").pipe(
        HttpClientRequest.setUrlParams(toUrlParams(query)),
        http.execute,
        Effect.flatMap(HttpClientResponse.schemaBodyJson(ListDatacentersResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.datacenters.list"),
      ),
});

export type DatacentersApi = ReturnType<typeof makeDatacenters>;
