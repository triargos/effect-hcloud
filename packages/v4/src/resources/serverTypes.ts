/**
 * ServerTypes — generated from the Hetzner Cloud OpenAPI spec. Do not edit by hand.
 */
import { Effect, Schema } from "effect";
import { HttpClient, HttpClientRequest } from "effect/unstable/http";
import { handleHetznerError, type HetznerErrors } from "../errors.js";
import { decodeJson } from "../internal/http.js";
import { toUrlParams } from "../internal/url-params.js";


export const GetServerTypeResponse = Schema.Struct({
    server_type: Schema.Struct({
      id: Schema.Int,
      name: Schema.String,
      description: Schema.String,
      cores: Schema.Number,
      memory: Schema.Number,
      disk: Schema.Number,
      deprecated: Schema.Boolean,
      prices: Schema.Array(Schema.Struct({
        location: Schema.String,
        price_hourly: Schema.Struct({
          net: Schema.String,
          gross: Schema.String,
        }),
        price_monthly: Schema.Struct({
          net: Schema.String,
          gross: Schema.String,
        }),
        included_traffic: Schema.Int,
        price_per_tb_traffic: Schema.Struct({
          net: Schema.String,
          gross: Schema.String,
        }),
      })),
      storage_type: Schema.Literals(["local", "network"]),
      cpu_type: Schema.Literals(["shared", "dedicated"]),
      category: Schema.optional(Schema.String),
      architecture: Schema.Literals(["x86", "arm"]),
      deprecation: Schema.optional(Schema.NullOr(Schema.Struct({
        unavailable_after: Schema.String,
        announced: Schema.String,
      }))),
      locations: Schema.Array(Schema.Struct({
        id: Schema.Int,
        name: Schema.String,
        deprecation: Schema.NullOr(Schema.Struct({
          unavailable_after: Schema.String,
          announced: Schema.String,
        })),
        recommended: Schema.Boolean,
        available: Schema.Boolean,
      })),
    }),
  });
export type GetServerTypeResponse = typeof GetServerTypeResponse.Type;

export const ListServerTypesResponse = Schema.Struct({
    server_types: Schema.Array(Schema.Struct({
      id: Schema.Int,
      name: Schema.String,
      description: Schema.String,
      cores: Schema.Number,
      memory: Schema.Number,
      disk: Schema.Number,
      deprecated: Schema.Boolean,
      prices: Schema.Array(Schema.Struct({
        location: Schema.String,
        price_hourly: Schema.Struct({
          net: Schema.String,
          gross: Schema.String,
        }),
        price_monthly: Schema.Struct({
          net: Schema.String,
          gross: Schema.String,
        }),
        included_traffic: Schema.Int,
        price_per_tb_traffic: Schema.Struct({
          net: Schema.String,
          gross: Schema.String,
        }),
      })),
      storage_type: Schema.Literals(["local", "network"]),
      cpu_type: Schema.Literals(["shared", "dedicated"]),
      category: Schema.optional(Schema.String),
      architecture: Schema.Literals(["x86", "arm"]),
      deprecation: Schema.optional(Schema.NullOr(Schema.Struct({
        unavailable_after: Schema.String,
        announced: Schema.String,
      }))),
      locations: Schema.Array(Schema.Struct({
        id: Schema.Int,
        name: Schema.String,
        deprecation: Schema.NullOr(Schema.Struct({
          unavailable_after: Schema.String,
          announced: Schema.String,
        })),
        recommended: Schema.Boolean,
        available: Schema.Boolean,
      })),
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
export type ListServerTypesResponse = typeof ListServerTypesResponse.Type;
export interface ListServerTypesQuery {
  name?: string;
  page?: number;
  per_page?: number;
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
        HttpClientRequest.setUrlParams(toUrlParams(query)),
        http.execute,
        Effect.flatMap(decodeJson(ListServerTypesResponse)),
        Effect.catch(handleHetznerError),
        Effect.withSpan("HetznerClient.serverTypes.list"),
      ),
});

export type ServerTypesApi = ReturnType<typeof makeServerTypes>;
