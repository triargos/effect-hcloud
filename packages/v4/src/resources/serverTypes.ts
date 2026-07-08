/**
 * ServerTypes — generated from the Hetzner Cloud OpenAPI spec. Do not edit by hand.
 */
import { Effect, Schema } from "effect";
import { HttpClient, HttpClientRequest } from "effect/unstable/http";
import { handleHetznerError, type HetznerErrors } from "../errors.js";
import { decodeJson } from "../internal/http.js";
import { toUrlParams } from "../internal/url-params.js";


export const GetServerTypeResponse = Schema.Struct({
    serverType: Schema.Struct({
      id: Schema.Int,
      name: Schema.String,
      description: Schema.String,
      cores: Schema.Number,
      memory: Schema.Number,
      disk: Schema.Number,
      deprecated: Schema.Boolean,
      prices: Schema.Array(Schema.Struct({
        location: Schema.String,
        priceHourly: Schema.Struct({
          net: Schema.String,
          gross: Schema.String,
        }),
        priceMonthly: Schema.Struct({
          net: Schema.String,
          gross: Schema.String,
        }),
        includedTraffic: Schema.Int,
        pricePerTbTraffic: Schema.Struct({
          net: Schema.String,
          gross: Schema.String,
        }),
      }).pipe(Schema.encodeKeys({ priceHourly: "price_hourly", priceMonthly: "price_monthly", includedTraffic: "included_traffic", pricePerTbTraffic: "price_per_tb_traffic" }))),
      storageType: Schema.Literals(["local", "network"]),
      cpuType: Schema.Literals(["shared", "dedicated"]),
      category: Schema.optional(Schema.String),
      architecture: Schema.Literals(["x86", "arm"]),
      deprecation: Schema.optional(Schema.NullOr(Schema.Struct({
        unavailableAfter: Schema.String,
        announced: Schema.String,
      }).pipe(Schema.encodeKeys({ unavailableAfter: "unavailable_after" })))),
      locations: Schema.Array(Schema.Struct({
        id: Schema.Int,
        name: Schema.String,
        deprecation: Schema.NullOr(Schema.Struct({
          unavailableAfter: Schema.String,
          announced: Schema.String,
        }).pipe(Schema.encodeKeys({ unavailableAfter: "unavailable_after" }))),
        recommended: Schema.Boolean,
        available: Schema.Boolean,
      })),
    }).pipe(Schema.encodeKeys({ storageType: "storage_type", cpuType: "cpu_type" })),
  }).pipe(Schema.encodeKeys({ serverType: "server_type" }));
export type GetServerTypeResponse = typeof GetServerTypeResponse.Type;

export const ListServerTypesResponse = Schema.Struct({
    serverTypes: Schema.Array(Schema.Struct({
      id: Schema.Int,
      name: Schema.String,
      description: Schema.String,
      cores: Schema.Number,
      memory: Schema.Number,
      disk: Schema.Number,
      deprecated: Schema.Boolean,
      prices: Schema.Array(Schema.Struct({
        location: Schema.String,
        priceHourly: Schema.Struct({
          net: Schema.String,
          gross: Schema.String,
        }),
        priceMonthly: Schema.Struct({
          net: Schema.String,
          gross: Schema.String,
        }),
        includedTraffic: Schema.Int,
        pricePerTbTraffic: Schema.Struct({
          net: Schema.String,
          gross: Schema.String,
        }),
      }).pipe(Schema.encodeKeys({ priceHourly: "price_hourly", priceMonthly: "price_monthly", includedTraffic: "included_traffic", pricePerTbTraffic: "price_per_tb_traffic" }))),
      storageType: Schema.Literals(["local", "network"]),
      cpuType: Schema.Literals(["shared", "dedicated"]),
      category: Schema.optional(Schema.String),
      architecture: Schema.Literals(["x86", "arm"]),
      deprecation: Schema.optional(Schema.NullOr(Schema.Struct({
        unavailableAfter: Schema.String,
        announced: Schema.String,
      }).pipe(Schema.encodeKeys({ unavailableAfter: "unavailable_after" })))),
      locations: Schema.Array(Schema.Struct({
        id: Schema.Int,
        name: Schema.String,
        deprecation: Schema.NullOr(Schema.Struct({
          unavailableAfter: Schema.String,
          announced: Schema.String,
        }).pipe(Schema.encodeKeys({ unavailableAfter: "unavailable_after" }))),
        recommended: Schema.Boolean,
        available: Schema.Boolean,
      })),
    }).pipe(Schema.encodeKeys({ storageType: "storage_type", cpuType: "cpu_type" }))),
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
  }).pipe(Schema.encodeKeys({ serverTypes: "server_types" }));
export type ListServerTypesResponse = typeof ListServerTypesResponse.Type;
export interface ListServerTypesQuery {
  name?: string;
  page?: number;
  perPage?: number;
}


export const makeServerTypes = (http: HttpClient.HttpClient) => ({
    /** Get a Server Type */
    get: (id: number): Effect.Effect<GetServerTypeResponse, HetznerErrors> =>
      HttpClientRequest.get(`/server_types/${id}`).pipe(
        http.execute,
        Effect.flatMap(decodeJson(GetServerTypeResponse)),
        Effect.catch(handleHetznerError),
        Effect.withSpan("HetznerClient.serverTypes.get"),
      ),

    /** List Server Types */
    list: (query?: ListServerTypesQuery): Effect.Effect<ListServerTypesResponse, HetznerErrors> =>
      HttpClientRequest.get("/server_types").pipe(
        HttpClientRequest.setUrlParams(toUrlParams({ name: query?.name, page: query?.page, per_page: query?.perPage })),
        http.execute,
        Effect.flatMap(decodeJson(ListServerTypesResponse)),
        Effect.catch(handleHetznerError),
        Effect.withSpan("HetznerClient.serverTypes.list"),
      ),
});

export type ServerTypesApi = ReturnType<typeof makeServerTypes>;
