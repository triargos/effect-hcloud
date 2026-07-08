/**
 * Locations — generated from the Hetzner Cloud OpenAPI spec. Do not edit by hand.
 */
import { Effect, Schema } from "effect";
import { HttpClient, HttpClientRequest } from "effect/unstable/http";
import { handleHetznerError, type HetznerErrors } from "../errors.js";
import { decodeJson } from "../internal/http.js";
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
      networkZone: Schema.String,
    }).pipe(Schema.encodeKeys({ networkZone: "network_zone" })),
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
      networkZone: Schema.String,
    }).pipe(Schema.encodeKeys({ networkZone: "network_zone" }))),
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
        Effect.flatMap(decodeJson(GetLocationResponse)),
        Effect.catch(handleHetznerError),
        Effect.withSpan("HetznerClient.locations.get"),
      ),

    /** List Locations */
    list: (query?: ListLocationsQuery): Effect.Effect<ListLocationsResponse, HetznerErrors> =>
      HttpClientRequest.get("/locations").pipe(
        HttpClientRequest.setUrlParams(toUrlParams({ name: query?.name, sort: query?.sort, page: query?.page, per_page: query?.perPage })),
        http.execute,
        Effect.flatMap(decodeJson(ListLocationsResponse)),
        Effect.catch(handleHetznerError),
        Effect.withSpan("HetznerClient.locations.list"),
      ),
});

export type LocationsApi = ReturnType<typeof makeLocations>;
