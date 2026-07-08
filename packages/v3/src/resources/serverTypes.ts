/**
 * ServerTypes — generated from the Hetzner Cloud OpenAPI spec. Do not edit by hand.
 */
import { Effect, Schema } from "effect";
import { HttpClientRequest, HttpClientResponse } from "@effect/platform";
import type { HttpClient } from "@effect/platform";
import { handleHetznerError, type HetznerErrors } from "../errors.js";
import { toUrlParams } from "../internal/url-params.js";


export const GetServerTypeResponse = Schema.Struct({
    serverType: Schema.propertySignature(Schema.Struct({
      id: Schema.Int,
      name: Schema.String,
      description: Schema.String,
      cores: Schema.Number,
      memory: Schema.Number,
      disk: Schema.Number,
      deprecated: Schema.Boolean,
      prices: Schema.Array(Schema.Struct({
        location: Schema.String,
        priceHourly: Schema.propertySignature(Schema.Struct({
          net: Schema.String,
          gross: Schema.String,
        })).pipe(Schema.fromKey("price_hourly")),
        priceMonthly: Schema.propertySignature(Schema.Struct({
          net: Schema.String,
          gross: Schema.String,
        })).pipe(Schema.fromKey("price_monthly")),
        includedTraffic: Schema.propertySignature(Schema.Int).pipe(Schema.fromKey("included_traffic")),
        pricePerTbTraffic: Schema.propertySignature(Schema.Struct({
          net: Schema.String,
          gross: Schema.String,
        })).pipe(Schema.fromKey("price_per_tb_traffic")),
      })),
      storageType: Schema.propertySignature(Schema.Literal("local", "network")).pipe(Schema.fromKey("storage_type")),
      cpuType: Schema.propertySignature(Schema.Literal("shared", "dedicated")).pipe(Schema.fromKey("cpu_type")),
      category: Schema.optional(Schema.String),
      architecture: Schema.Literal("x86", "arm"),
      deprecation: Schema.optional(Schema.NullOr(Schema.Struct({
        unavailableAfter: Schema.propertySignature(Schema.String).pipe(Schema.fromKey("unavailable_after")),
        announced: Schema.String,
      }))),
      locations: Schema.Array(Schema.Struct({
        id: Schema.Int,
        name: Schema.String,
        deprecation: Schema.NullOr(Schema.Struct({
          unavailableAfter: Schema.propertySignature(Schema.String).pipe(Schema.fromKey("unavailable_after")),
          announced: Schema.String,
        })),
        recommended: Schema.Boolean,
        available: Schema.Boolean,
      })),
    })).pipe(Schema.fromKey("server_type")),
  });
export type GetServerTypeResponse = typeof GetServerTypeResponse.Type;

export const ListServerTypesResponse = Schema.Struct({
    serverTypes: Schema.propertySignature(Schema.Array(Schema.Struct({
      id: Schema.Int,
      name: Schema.String,
      description: Schema.String,
      cores: Schema.Number,
      memory: Schema.Number,
      disk: Schema.Number,
      deprecated: Schema.Boolean,
      prices: Schema.Array(Schema.Struct({
        location: Schema.String,
        priceHourly: Schema.propertySignature(Schema.Struct({
          net: Schema.String,
          gross: Schema.String,
        })).pipe(Schema.fromKey("price_hourly")),
        priceMonthly: Schema.propertySignature(Schema.Struct({
          net: Schema.String,
          gross: Schema.String,
        })).pipe(Schema.fromKey("price_monthly")),
        includedTraffic: Schema.propertySignature(Schema.Int).pipe(Schema.fromKey("included_traffic")),
        pricePerTbTraffic: Schema.propertySignature(Schema.Struct({
          net: Schema.String,
          gross: Schema.String,
        })).pipe(Schema.fromKey("price_per_tb_traffic")),
      })),
      storageType: Schema.propertySignature(Schema.Literal("local", "network")).pipe(Schema.fromKey("storage_type")),
      cpuType: Schema.propertySignature(Schema.Literal("shared", "dedicated")).pipe(Schema.fromKey("cpu_type")),
      category: Schema.optional(Schema.String),
      architecture: Schema.Literal("x86", "arm"),
      deprecation: Schema.optional(Schema.NullOr(Schema.Struct({
        unavailableAfter: Schema.propertySignature(Schema.String).pipe(Schema.fromKey("unavailable_after")),
        announced: Schema.String,
      }))),
      locations: Schema.Array(Schema.Struct({
        id: Schema.Int,
        name: Schema.String,
        deprecation: Schema.NullOr(Schema.Struct({
          unavailableAfter: Schema.propertySignature(Schema.String).pipe(Schema.fromKey("unavailable_after")),
          announced: Schema.String,
        })),
        recommended: Schema.Boolean,
        available: Schema.Boolean,
      })),
    }))).pipe(Schema.fromKey("server_types")),
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
        Effect.flatMap(HttpClientResponse.schemaBodyJson(GetServerTypeResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.serverTypes.get"),
      ),

    /** List Server Types */
    list: (query?: ListServerTypesQuery): Effect.Effect<ListServerTypesResponse, HetznerErrors> =>
      HttpClientRequest.get("/server_types").pipe(
        HttpClientRequest.setUrlParams(toUrlParams({ name: query?.name, page: query?.page, per_page: query?.perPage })),
        http.execute,
        Effect.flatMap(HttpClientResponse.schemaBodyJson(ListServerTypesResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.serverTypes.list"),
      ),
});

export type ServerTypesApi = ReturnType<typeof makeServerTypes>;
