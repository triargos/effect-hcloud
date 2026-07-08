/**
 * Locations — generated from the Hetzner Cloud OpenAPI spec. Do not edit by hand.
 */
import { Effect, Schema } from "effect";
import { HttpClientRequest, HttpClientResponse } from "@effect/platform";
import type { HttpClient } from "@effect/platform";
import { handleHetznerError, type HetznerErrors } from "../errors.js";
import { toUrlParams } from "../internal/url-params.js";


export const GetLocationResponse = Schema.Struct({
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
  });
export type GetLocationResponse = typeof GetLocationResponse.Type;

export const ListLocationsResponse = Schema.Struct({
    locations: Schema.Array(Schema.Struct({
      id: Schema.Int,
      name: Schema.String,
      description: Schema.String,
      country: Schema.String,
      city: Schema.String,
      latitude: Schema.Number,
      longitude: Schema.Number,
      networkZone: Schema.propertySignature(Schema.String).pipe(Schema.fromKey("network_zone")),
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
export type ListLocationsResponse = typeof ListLocationsResponse.Type;
export interface ListLocationsQuery {
  name?: string;
  sort?: ReadonlyArray<"id" | "id:asc" | "id:desc" | "name" | "name:asc" | "name:desc">;
  page?: number;
  perPage?: number;
}


export const makeLocations = (http: HttpClient.HttpClient) => ({
    /** Get a Location */
    get: (id: number): Effect.Effect<GetLocationResponse, HetznerErrors> =>
      HttpClientRequest.get(`/locations/${id}`).pipe(
        http.execute,
        Effect.flatMap(HttpClientResponse.schemaBodyJson(GetLocationResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.locations.get"),
      ),

    /** List Locations */
    list: (query?: ListLocationsQuery): Effect.Effect<ListLocationsResponse, HetznerErrors> =>
      HttpClientRequest.get("/locations").pipe(
        HttpClientRequest.setUrlParams(toUrlParams({ name: query?.name, sort: query?.sort, page: query?.page, per_page: query?.perPage })),
        http.execute,
        Effect.flatMap(HttpClientResponse.schemaBodyJson(ListLocationsResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.locations.list"),
      ),
});

export type LocationsApi = ReturnType<typeof makeLocations>;
