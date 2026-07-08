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
      vat_rate: Schema.String,
      primary_ips: Schema.Array(Schema.Struct({
        type: Schema.Literals(["ipv4", "ipv6"]),
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
        })),
      })),
      floating_ips: Schema.Array(Schema.Struct({
        type: Schema.Literals(["ipv4", "ipv6"]),
        prices: Schema.Array(Schema.Struct({
          location: Schema.String,
          price_monthly: Schema.Struct({
            net: Schema.String,
            gross: Schema.String,
          }),
        })),
      })),
      image: Schema.Struct({
        price_per_gb_month: Schema.Struct({
          net: Schema.String,
          gross: Schema.String,
        }),
      }),
      volume: Schema.Struct({
        price_per_gb_month: Schema.Struct({
          net: Schema.String,
          gross: Schema.String,
        }),
      }),
      server_backup: Schema.Struct({
        percentage: Schema.String,
      }),
      server_types: Schema.Array(Schema.Struct({
        id: Schema.Int,
        name: Schema.String,
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
      load_balancer_types: Schema.Array(Schema.Struct({
        id: Schema.Int,
        name: Schema.String,
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
      floating_ip: Schema.Struct({
        price_monthly: Schema.Struct({
          net: Schema.String,
          gross: Schema.String,
        }),
      }),
    }),
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
