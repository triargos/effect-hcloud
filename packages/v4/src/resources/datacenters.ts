/**
 * Datacenters — generated from the Hetzner Cloud OpenAPI spec. Do not edit by hand.
 */
import { Effect, Schema } from "effect";
import { HttpClient, HttpClientRequest } from "effect/unstable/http";
import { handleHetznerError, type HetznerErrors } from "../errors.js";
import { decodeJson } from "../internal/http.js";
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
        networkZone: Schema.String,
      }).pipe(Schema.encodeKeys({ networkZone: "network_zone" })),
      serverTypes: Schema.Struct({
        supported: Schema.Array(Schema.Int),
        available: Schema.Array(Schema.Int),
        availableForMigration: Schema.Array(Schema.Int),
      }).pipe(Schema.encodeKeys({ availableForMigration: "available_for_migration" })),
    }).pipe(Schema.encodeKeys({ serverTypes: "server_types" })),
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
        networkZone: Schema.String,
      }).pipe(Schema.encodeKeys({ networkZone: "network_zone" })),
      serverTypes: Schema.Struct({
        supported: Schema.Array(Schema.Int),
        available: Schema.Array(Schema.Int),
        availableForMigration: Schema.Array(Schema.Int),
      }).pipe(Schema.encodeKeys({ availableForMigration: "available_for_migration" })),
    }).pipe(Schema.encodeKeys({ serverTypes: "server_types" }))),
    recommendation: Schema.Int,
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
        Effect.flatMap(decodeJson(GetDatacenterResponse)),
        Effect.catch(handleHetznerError),
        Effect.withSpan("HetznerClient.datacenters.get"),
      ),

    /** List Data Centers */
    list: (query?: ListDatacentersQuery): Effect.Effect<ListDatacentersResponse, HetznerErrors> =>
      HttpClientRequest.get("/datacenters").pipe(
        HttpClientRequest.setUrlParams(toUrlParams({ name: query?.name, sort: query?.sort, page: query?.page, per_page: query?.perPage })),
        http.execute,
        Effect.flatMap(decodeJson(ListDatacentersResponse)),
        Effect.catch(handleHetznerError),
        Effect.withSpan("HetznerClient.datacenters.list"),
      ),
});

export type DatacentersApi = ReturnType<typeof makeDatacenters>;
