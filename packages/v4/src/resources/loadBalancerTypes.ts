/**
 * LoadBalancerTypes — generated from the Hetzner Cloud OpenAPI spec. Do not edit by hand.
 */
import { Effect, Schema } from "effect";
import { HttpClient, HttpClientRequest } from "effect/unstable/http";
import { handleHetznerError, type HetznerErrors } from "../errors.js";
import { decodeJson } from "../internal/http.js";
import { toUrlParams } from "../internal/url-params.js";


export const GetLoadBalancerTypeResponse = Schema.Struct({
    loadBalancerType: Schema.Struct({
      id: Schema.Int,
      name: Schema.String,
      description: Schema.String,
      maxConnections: Schema.Int,
      maxServices: Schema.Int,
      maxTargets: Schema.Int,
      maxAssignedCertificates: Schema.Int,
      deprecated: Schema.NullOr(Schema.String),
      deprecation: Schema.NullOr(Schema.Struct({
        unavailableAfter: Schema.String,
        announced: Schema.String,
      }).pipe(Schema.encodeKeys({ unavailableAfter: "unavailable_after" }))),
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
    }).pipe(Schema.encodeKeys({ maxConnections: "max_connections", maxServices: "max_services", maxTargets: "max_targets", maxAssignedCertificates: "max_assigned_certificates" })),
  }).pipe(Schema.encodeKeys({ loadBalancerType: "load_balancer_type" }));
export type GetLoadBalancerTypeResponse = typeof GetLoadBalancerTypeResponse.Type;

export const ListLoadBalancerTypesResponse = Schema.Struct({
    loadBalancerTypes: Schema.Array(Schema.Struct({
      id: Schema.Int,
      name: Schema.String,
      description: Schema.String,
      maxConnections: Schema.Int,
      maxServices: Schema.Int,
      maxTargets: Schema.Int,
      maxAssignedCertificates: Schema.Int,
      deprecated: Schema.NullOr(Schema.String),
      deprecation: Schema.NullOr(Schema.Struct({
        unavailableAfter: Schema.String,
        announced: Schema.String,
      }).pipe(Schema.encodeKeys({ unavailableAfter: "unavailable_after" }))),
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
    }).pipe(Schema.encodeKeys({ maxConnections: "max_connections", maxServices: "max_services", maxTargets: "max_targets", maxAssignedCertificates: "max_assigned_certificates" }))),
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
  }).pipe(Schema.encodeKeys({ loadBalancerTypes: "load_balancer_types" }));
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
        Effect.flatMap(decodeJson(GetLoadBalancerTypeResponse)),
        Effect.catch(handleHetznerError),
        Effect.withSpan("HetznerClient.loadBalancerTypes.get"),
      ),

    /** List Load Balancer Types */
    list: (query?: ListLoadBalancerTypesQuery): Effect.Effect<ListLoadBalancerTypesResponse, HetznerErrors> =>
      HttpClientRequest.get("/load_balancer_types").pipe(
        HttpClientRequest.setUrlParams(toUrlParams({ name: query?.name, page: query?.page, per_page: query?.perPage })),
        http.execute,
        Effect.flatMap(decodeJson(ListLoadBalancerTypesResponse)),
        Effect.catch(handleHetznerError),
        Effect.withSpan("HetznerClient.loadBalancerTypes.list"),
      ),
});

export type LoadBalancerTypesApi = ReturnType<typeof makeLoadBalancerTypes>;
