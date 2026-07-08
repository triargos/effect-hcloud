/**
 * Pricing — generated from the Hetzner Cloud OpenAPI spec. Do not edit by hand.
 */
import { Effect, Schema } from "effect";
import { HttpClientRequest, HttpClientResponse } from "@effect/platform";
import type { HttpClient } from "@effect/platform";
import { handleHetznerError, type HetznerErrors } from "../errors.js";
import { toUrlParams } from "../internal/url-params.js";


export const GetPricingResponse = Schema.Struct({
    pricing: Schema.Struct({
      currency: Schema.String,
      vatRate: Schema.propertySignature(Schema.String).pipe(Schema.fromKey("vat_rate")),
      primaryIps: Schema.propertySignature(Schema.Array(Schema.Struct({
        type: Schema.Literal("ipv4", "ipv6"),
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
        })),
      }))).pipe(Schema.fromKey("primary_ips")),
      floatingIps: Schema.propertySignature(Schema.Array(Schema.Struct({
        type: Schema.Literal("ipv4", "ipv6"),
        prices: Schema.Array(Schema.Struct({
          location: Schema.String,
          priceMonthly: Schema.propertySignature(Schema.Struct({
            net: Schema.String,
            gross: Schema.String,
          })).pipe(Schema.fromKey("price_monthly")),
        })),
      }))).pipe(Schema.fromKey("floating_ips")),
      image: Schema.Struct({
        pricePerGbMonth: Schema.propertySignature(Schema.Struct({
          net: Schema.String,
          gross: Schema.String,
        })).pipe(Schema.fromKey("price_per_gb_month")),
      }),
      volume: Schema.Struct({
        pricePerGbMonth: Schema.propertySignature(Schema.Struct({
          net: Schema.String,
          gross: Schema.String,
        })).pipe(Schema.fromKey("price_per_gb_month")),
      }),
      serverBackup: Schema.propertySignature(Schema.Struct({
        percentage: Schema.String,
      })).pipe(Schema.fromKey("server_backup")),
      serverTypes: Schema.propertySignature(Schema.Array(Schema.Struct({
        id: Schema.Int,
        name: Schema.String,
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
      }))).pipe(Schema.fromKey("server_types")),
      loadBalancerTypes: Schema.propertySignature(Schema.Array(Schema.Struct({
        id: Schema.Int,
        name: Schema.String,
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
      floatingIp: Schema.propertySignature(Schema.Struct({
        priceMonthly: Schema.propertySignature(Schema.Struct({
          net: Schema.String,
          gross: Schema.String,
        })).pipe(Schema.fromKey("price_monthly")),
      })).pipe(Schema.fromKey("floating_ip")),
    }),
  });
export type GetPricingResponse = typeof GetPricingResponse.Type;


export const makePricing = (http: HttpClient.HttpClient) => ({
    /** Get all prices */
    get: (): Effect.Effect<GetPricingResponse, HetznerErrors> =>
      HttpClientRequest.get("/pricing").pipe(
        http.execute,
        Effect.flatMap(HttpClientResponse.schemaBodyJson(GetPricingResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.pricing.get"),
      ),
});

export type PricingApi = ReturnType<typeof makePricing>;
