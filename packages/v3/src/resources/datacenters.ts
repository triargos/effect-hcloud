/**
 * Datacenters — generated from the Hetzner Cloud OpenAPI spec. Do not edit by hand.
 */
import { Effect, Schema } from "effect";
import { HttpClientRequest, HttpClientResponse } from "@effect/platform";
import type { HttpClient } from "@effect/platform";
import { handleHetznerError, type HetznerErrors } from "../errors.js";
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
        networkZone: Schema.propertySignature(Schema.String).pipe(Schema.fromKey("network_zone")),
      }),
      serverTypes: Schema.propertySignature(Schema.Struct({
        supported: Schema.Array(Schema.Int),
        available: Schema.Array(Schema.Int),
        availableForMigration: Schema.propertySignature(Schema.Array(Schema.Int)).pipe(Schema.fromKey("available_for_migration")),
      })).pipe(Schema.fromKey("server_types")),
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
        networkZone: Schema.propertySignature(Schema.String).pipe(Schema.fromKey("network_zone")),
      }),
      serverTypes: Schema.propertySignature(Schema.Struct({
        supported: Schema.Array(Schema.Int),
        available: Schema.Array(Schema.Int),
        availableForMigration: Schema.propertySignature(Schema.Array(Schema.Int)).pipe(Schema.fromKey("available_for_migration")),
      })).pipe(Schema.fromKey("server_types")),
    })),
    recommendation: Schema.Int,
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
export type ListDatacentersResponse = typeof ListDatacentersResponse.Type;
export interface ListDatacentersQuery {
  name?: string;
  sort?: ReadonlyArray<"id" | "id:asc" | "id:desc" | "name" | "name:asc" | "name:desc">;
  page?: number;
  perPage?: number;
}


export const makeDatacenters = (http: HttpClient.HttpClient) => ({
    /** Get a Data Center */
    get: (id: number): Effect.Effect<GetDatacenterResponse, HetznerErrors> =>
      HttpClientRequest.get(`/datacenters/${id}`).pipe(
        http.execute,
        Effect.flatMap(HttpClientResponse.schemaBodyJson(GetDatacenterResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.datacenters.get"),
      ),

    /** List Data Centers */
    list: (query?: ListDatacentersQuery): Effect.Effect<ListDatacentersResponse, HetznerErrors> =>
      HttpClientRequest.get("/datacenters").pipe(
        HttpClientRequest.setUrlParams(toUrlParams({ name: query?.name, sort: query?.sort, page: query?.page, per_page: query?.perPage })),
        http.execute,
        Effect.flatMap(HttpClientResponse.schemaBodyJson(ListDatacentersResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.datacenters.list"),
      ),
});

export type DatacentersApi = ReturnType<typeof makeDatacenters>;
