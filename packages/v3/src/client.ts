/**
 * The Hetzner Cloud client. Yield `HetznerClient` from an Effect and call
 * `client.servers.create(...)` etc. Provide `HetznerClient.layer({ token })`
 * plus an `HttpClient` layer (e.g. `FetchHttpClient.layer`).
 */
import { Context, Effect, Layer, Redacted } from "effect";
import { HttpClient, HttpClientRequest } from "@effect/platform";
import { makeActions, type ActionsApi } from "./resources/actions.js";
import { makeCertificates, type CertificatesApi } from "./resources/certificates.js";
import { makeDatacenters, type DatacentersApi } from "./resources/datacenters.js";
import { makeFirewalls, type FirewallsApi } from "./resources/firewalls.js";
import { makeFloatingIps, type FloatingIpsApi } from "./resources/floatingIps.js";
import { makeImages, type ImagesApi } from "./resources/images.js";
import { makeIsos, type IsosApi } from "./resources/isos.js";
import { makeLoadBalancers, type LoadBalancersApi } from "./resources/loadBalancers.js";
import { makeLoadBalancerTypes, type LoadBalancerTypesApi } from "./resources/loadBalancerTypes.js";
import { makeLocations, type LocationsApi } from "./resources/locations.js";
import { makeNetworks, type NetworksApi } from "./resources/networks.js";
import { makePlacementGroups, type PlacementGroupsApi } from "./resources/placementGroups.js";
import { makePricing, type PricingApi } from "./resources/pricing.js";
import { makePrimaryIps, type PrimaryIpsApi } from "./resources/primaryIps.js";
import { makeServers, type ServersApi } from "./resources/servers.js";
import { makeServerTypes, type ServerTypesApi } from "./resources/serverTypes.js";
import { makeSshKeys, type SshKeysApi } from "./resources/sshKeys.js";
import { makeVolumes, type VolumesApi } from "./resources/volumes.js";
import { makeZones, type ZonesApi } from "./resources/zones.js";

const DEFAULT_BASE_URL = "https://api.hetzner.cloud/v1";

export interface HetznerConfig {
  /** API token for the Hetzner Cloud project. */
  readonly token: string | Redacted.Redacted<string>;
  /** Override the base URL (defaults to `${DEFAULT_BASE_URL}`). */
  readonly baseUrl?: string;
}

/** The resolved client surface: one namespace per resource group. */
export interface HetznerClientApi {
  readonly actions: ActionsApi;
  readonly certificates: CertificatesApi;
  readonly datacenters: DatacentersApi;
  readonly firewalls: FirewallsApi;
  readonly floatingIps: FloatingIpsApi;
  readonly images: ImagesApi;
  readonly isos: IsosApi;
  readonly loadBalancers: LoadBalancersApi;
  readonly loadBalancerTypes: LoadBalancerTypesApi;
  readonly locations: LocationsApi;
  readonly networks: NetworksApi;
  readonly placementGroups: PlacementGroupsApi;
  readonly pricing: PricingApi;
  readonly primaryIps: PrimaryIpsApi;
  readonly servers: ServersApi;
  readonly serverTypes: ServerTypesApi;
  readonly sshKeys: SshKeysApi;
  readonly volumes: VolumesApi;
  readonly zones: ZonesApi;
}

const makeHttp = (config: HetznerConfig): Effect.Effect<HttpClient.HttpClient, never, HttpClient.HttpClient> =>
  Effect.map(HttpClient.HttpClient, (base) => {
    const token = typeof config.token === "string" ? config.token : Redacted.value(config.token);
    return base.pipe(
      HttpClient.mapRequest((request) =>
        request.pipe(
          HttpClientRequest.acceptJson,
          HttpClientRequest.prependUrl(config.baseUrl ?? DEFAULT_BASE_URL),
          HttpClientRequest.setHeader("Authorization", `Bearer ${token}`),
        ),
      ),
      HttpClient.filterStatusOk,
      HttpClient.retryTransient({ times: 3 }),
    );
  });

/** Build the client surface directly (requires an `HttpClient` in context). */
export const make = (config: HetznerConfig): Effect.Effect<HetznerClientApi, never, HttpClient.HttpClient> =>
  Effect.map(makeHttp(config), (http) => ({
    actions: makeActions(http),
    certificates: makeCertificates(http),
    datacenters: makeDatacenters(http),
    firewalls: makeFirewalls(http),
    floatingIps: makeFloatingIps(http),
    images: makeImages(http),
    isos: makeIsos(http),
    loadBalancers: makeLoadBalancers(http),
    loadBalancerTypes: makeLoadBalancerTypes(http),
    locations: makeLocations(http),
    networks: makeNetworks(http),
    placementGroups: makePlacementGroups(http),
    pricing: makePricing(http),
    primaryIps: makePrimaryIps(http),
    servers: makeServers(http),
    serverTypes: makeServerTypes(http),
    sshKeys: makeSshKeys(http),
    volumes: makeVolumes(http),
    zones: makeZones(http),
  }));

export class HetznerClient extends Context.Tag("HetznerClient")<HetznerClient, HetznerClientApi>() {
  /** Layer providing a fully-wired client. Compose with an `HttpClient` layer. */
  static layer = (config: HetznerConfig): Layer.Layer<HetznerClient, never, HttpClient.HttpClient> =>
    Layer.effect(HetznerClient, make(config));
}
