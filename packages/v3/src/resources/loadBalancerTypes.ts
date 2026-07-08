/**
 * LoadBalancerTypes — generated from the Hetzner Cloud OpenAPI spec. Do not edit by hand.
 */
import { Effect, Schema } from "effect";
import { HttpClientRequest, HttpClientResponse } from "@effect/platform";
import type { HttpClient } from "@effect/platform";
import { handleHetznerError, type HetznerErrors } from "../errors.js";
import { toUrlParams } from "../internal/url-params.js";


export const GetLoadBalancerTypeResponse = Schema.Struct({
    loadBalancerType: Schema.propertySignature(Schema.Struct({
      id: Schema.Int,
      name: Schema.String,
      description: Schema.String,
      maxConnections: Schema.propertySignature(Schema.Int).pipe(Schema.fromKey("max_connections")),
      maxServices: Schema.propertySignature(Schema.Int).pipe(Schema.fromKey("max_services")),
      maxTargets: Schema.propertySignature(Schema.Int).pipe(Schema.fromKey("max_targets")),
      maxAssignedCertificates: Schema.propertySignature(Schema.Int).pipe(Schema.fromKey("max_assigned_certificates")),
      deprecated: Schema.NullOr(Schema.String),
      deprecation: Schema.NullOr(Schema.Struct({
        unavailableAfter: Schema.propertySignature(Schema.String).pipe(Schema.fromKey("unavailable_after")),
        announced: Schema.String,
      })),
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
    })).pipe(Schema.fromKey("load_balancer_type")),
  });
export type GetLoadBalancerTypeResponse = typeof GetLoadBalancerTypeResponse.Type;

export const ListLoadBalancerTypesResponse = Schema.Struct({
    loadBalancerTypes: Schema.propertySignature(Schema.Array(Schema.Struct({
      id: Schema.Int,
      name: Schema.String,
      description: Schema.String,
      maxConnections: Schema.propertySignature(Schema.Int).pipe(Schema.fromKey("max_connections")),
      maxServices: Schema.propertySignature(Schema.Int).pipe(Schema.fromKey("max_services")),
      maxTargets: Schema.propertySignature(Schema.Int).pipe(Schema.fromKey("max_targets")),
      maxAssignedCertificates: Schema.propertySignature(Schema.Int).pipe(Schema.fromKey("max_assigned_certificates")),
      deprecated: Schema.NullOr(Schema.String),
      deprecation: Schema.NullOr(Schema.Struct({
        unavailableAfter: Schema.propertySignature(Schema.String).pipe(Schema.fromKey("unavailable_after")),
        announced: Schema.String,
      })),
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
    }))).pipe(Schema.fromKey("load_balancer_types")),
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
export type ListLoadBalancerTypesResponse = typeof ListLoadBalancerTypesResponse.Type;
export interface ListLoadBalancerTypesQuery {
  name?: string;
  page?: number;
  perPage?: number;
}


export const makeLoadBalancerTypes = (http: HttpClient.HttpClient) => ({
    /** Get a Load Balancer Type */
    get: (id: number): Effect.Effect<GetLoadBalancerTypeResponse, HetznerErrors> =>
      HttpClientRequest.get(`/load_balancer_types/${id}`).pipe(
        http.execute,
        Effect.flatMap(HttpClientResponse.schemaBodyJson(GetLoadBalancerTypeResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.loadBalancerTypes.get"),
      ),

    /** List Load Balancer Types */
    list: (query?: ListLoadBalancerTypesQuery): Effect.Effect<ListLoadBalancerTypesResponse, HetznerErrors> =>
      HttpClientRequest.get("/load_balancer_types").pipe(
        HttpClientRequest.setUrlParams(toUrlParams({ name: query?.name, page: query?.page, per_page: query?.perPage })),
        http.execute,
        Effect.flatMap(HttpClientResponse.schemaBodyJson(ListLoadBalancerTypesResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.loadBalancerTypes.list"),
      ),
});

export type LoadBalancerTypesApi = ReturnType<typeof makeLoadBalancerTypes>;
