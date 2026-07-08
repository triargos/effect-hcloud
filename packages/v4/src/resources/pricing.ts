/**
 * Pricing — generated from the Hetzner Cloud OpenAPI spec. Do not edit by hand.
 */
import { Effect, Schema } from "effect";
import { HttpClient, HttpClientRequest } from "effect/unstable/http";
import { handleHetznerError, type HetznerErrors } from "../errors.js";
import { decodeJson } from "../internal/http.js";
import { toUrlParams } from "../internal/url-params.js";


export const GetPricingResponse = Schema.Struct({
    pricing: Schema.Struct({
      currency: Schema.String,
      vatRate: Schema.String,
      primaryIps: Schema.Array(Schema.Struct({
        type: Schema.Literals(["ipv4", "ipv6"]),
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
        }).pipe(Schema.encodeKeys({ priceHourly: "price_hourly", priceMonthly: "price_monthly" }))),
      })),
      floatingIps: Schema.Array(Schema.Struct({
        type: Schema.Literals(["ipv4", "ipv6"]),
        prices: Schema.Array(Schema.Struct({
          location: Schema.String,
          priceMonthly: Schema.Struct({
            net: Schema.String,
            gross: Schema.String,
          }),
        }).pipe(Schema.encodeKeys({ priceMonthly: "price_monthly" }))),
      })),
      image: Schema.Struct({
        pricePerGbMonth: Schema.Struct({
          net: Schema.String,
          gross: Schema.String,
        }),
      }).pipe(Schema.encodeKeys({ pricePerGbMonth: "price_per_gb_month" })),
      volume: Schema.Struct({
        pricePerGbMonth: Schema.Struct({
          net: Schema.String,
          gross: Schema.String,
        }),
      }).pipe(Schema.encodeKeys({ pricePerGbMonth: "price_per_gb_month" })),
      serverBackup: Schema.Struct({
        percentage: Schema.String,
      }),
      serverTypes: Schema.Array(Schema.Struct({
        id: Schema.Int,
        name: Schema.String,
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
      })),
      loadBalancerTypes: Schema.Array(Schema.Struct({
        id: Schema.Int,
        name: Schema.String,
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
      })),
      floatingIp: Schema.Struct({
        priceMonthly: Schema.Struct({
          net: Schema.String,
          gross: Schema.String,
        }),
      }).pipe(Schema.encodeKeys({ priceMonthly: "price_monthly" })),
    }).pipe(Schema.encodeKeys({ vatRate: "vat_rate", primaryIps: "primary_ips", floatingIps: "floating_ips", serverBackup: "server_backup", serverTypes: "server_types", loadBalancerTypes: "load_balancer_types", floatingIp: "floating_ip" })),
  });
export type GetPricingResponse = typeof GetPricingResponse.Type;


export const makePricing = (http: HttpClient.HttpClient) => ({
    /** Get all prices */
    get: (): Effect.Effect<GetPricingResponse, HetznerErrors> =>
      HttpClientRequest.get("/pricing").pipe(
        http.execute,
        Effect.flatMap(decodeJson(GetPricingResponse)),
        Effect.catch(handleHetznerError),
        Effect.withSpan("HetznerClient.pricing.get"),
      ),
});

export type PricingApi = ReturnType<typeof makePricing>;
