/**
 * LoadBalancerTypes — generated from the Hetzner Cloud OpenAPI spec. Do not edit by hand.
 */
import { Effect, Schema } from "effect";
import { HttpClient, HttpClientRequest } from "effect/unstable/http";
import { handleHetznerError, type HetznerError } from "../errors.js";
import { decodeJson } from "../internal/http.js";
import { toUrlParams } from "../internal/url-params.js";


export const GetLoadBalancerTypeResponse = Schema.Struct({
    load_balancer_type: Schema.Struct({
      id: Schema.Int,
      name: Schema.String,
      description: Schema.String,
      max_connections: Schema.Int,
      max_services: Schema.Int,
      max_targets: Schema.Int,
      max_assigned_certificates: Schema.Int,
      deprecated: Schema.NullOr(Schema.String),
      deprecation: Schema.NullOr(Schema.Struct({
        unavailable_after: Schema.String,
        announced: Schema.String,
      })),
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
    }),
  });
export type GetLoadBalancerTypeResponse = typeof GetLoadBalancerTypeResponse.Type;

export const ListLoadBalancerTypesResponse = Schema.Struct({
    load_balancer_types: Schema.Array(Schema.Struct({
      id: Schema.Int,
      name: Schema.String,
      description: Schema.String,
      max_connections: Schema.Int,
      max_services: Schema.Int,
      max_targets: Schema.Int,
      max_assigned_certificates: Schema.Int,
      deprecated: Schema.NullOr(Schema.String),
      deprecation: Schema.NullOr(Schema.Struct({
        unavailable_after: Schema.String,
        announced: Schema.String,
      })),
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
export type ListLoadBalancerTypesResponse = typeof ListLoadBalancerTypesResponse.Type;
export interface ListLoadBalancerTypesQuery {
  name?: string;
  page?: number;
  per_page?: number;
}


export const makeLoadBalancerTypes = (http: HttpClient.HttpClient) => ({
    /** Get a Load Balancer Type */
    get: (id: number): Effect.Effect<GetLoadBalancerTypeResponse, HetznerError> =>
      HttpClientRequest.get(`/load_balancer_types/${id}`).pipe(
        http.execute,
        Effect.flatMap(decodeJson(GetLoadBalancerTypeResponse)),
        Effect.catch(handleHetznerError),
        Effect.withSpan("HetznerClient.loadBalancerTypes.get"),
      ),

    /** List Load Balancer Types */
    list: (query?: ListLoadBalancerTypesQuery): Effect.Effect<ListLoadBalancerTypesResponse, HetznerError> =>
      HttpClientRequest.get("/load_balancer_types").pipe(
        HttpClientRequest.setUrlParams(toUrlParams(query)),
        http.execute,
        Effect.flatMap(decodeJson(ListLoadBalancerTypesResponse)),
        Effect.catch(handleHetznerError),
        Effect.withSpan("HetznerClient.loadBalancerTypes.list"),
      ),
});

export type LoadBalancerTypesApi = ReturnType<typeof makeLoadBalancerTypes>;
