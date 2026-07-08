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
      network_zone: Schema.String,
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
      network_zone: Schema.String,
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
export type ListLocationsResponse = typeof ListLocationsResponse.Type;
export interface ListLocationsQuery {
  name?: string;
  sort?: ReadonlyArray<"id" | "id:asc" | "id:desc" | "name" | "name:asc" | "name:desc">;
  page?: number;
  per_page?: number;
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
        HttpClientRequest.setUrlParams(toUrlParams(query)),
        http.execute,
        Effect.flatMap(HttpClientResponse.schemaBodyJson(ListLocationsResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.locations.list"),
      ),
});

export type LocationsApi = ReturnType<typeof makeLocations>;
