/**
 * Networks — generated from the Hetzner Cloud OpenAPI spec. Do not edit by hand.
 */
import { Effect, Schema } from "effect";
import { HttpClientRequest, HttpClientResponse } from "@effect/platform";
import type { HttpClient } from "@effect/platform";
import { handleHetznerError, type HetznerErrors } from "../errors.js";
import { toUrlParams } from "../internal/url-params.js";


export const AddNetworkRouteRequest = Schema.Struct({
    destination: Schema.String,
    gateway: Schema.String,
  });
export type AddNetworkRouteRequest = typeof AddNetworkRouteRequest.Type;
export const AddNetworkRouteResponse = Schema.Struct({
    action: Schema.Struct({
      id: Schema.Int,
      command: Schema.String,
      status: Schema.Literal("running", "success", "error"),
      started: Schema.String,
      finished: Schema.NullOr(Schema.String),
      progress: Schema.Int,
      resources: Schema.Array(Schema.Struct({
        id: Schema.Int,
        type: Schema.String,
      })),
      error: Schema.NullOr(Schema.Struct({
        code: Schema.String,
        message: Schema.String,
      })),
    }),
  });
export type AddNetworkRouteResponse = typeof AddNetworkRouteResponse.Type;

export const AddNetworkSubnetRequest = Schema.Struct({
    type: Schema.Literal("cloud", "server", "vswitch"),
    ipRange: Schema.optional(Schema.String).pipe(Schema.fromKey("ip_range")),
    networkZone: Schema.propertySignature(Schema.String).pipe(Schema.fromKey("network_zone")),
    vswitchId: Schema.optional(Schema.Int).pipe(Schema.fromKey("vswitch_id")),
  });
export type AddNetworkSubnetRequest = typeof AddNetworkSubnetRequest.Type;
export const AddNetworkSubnetResponse = Schema.Struct({
    action: Schema.Struct({
      id: Schema.Int,
      command: Schema.String,
      status: Schema.Literal("running", "success", "error"),
      started: Schema.String,
      finished: Schema.NullOr(Schema.String),
      progress: Schema.Int,
      resources: Schema.Array(Schema.Struct({
        id: Schema.Int,
        type: Schema.String,
      })),
      error: Schema.NullOr(Schema.Struct({
        code: Schema.String,
        message: Schema.String,
      })),
    }),
  });
export type AddNetworkSubnetResponse = typeof AddNetworkSubnetResponse.Type;

export const ChangeNetworkIpRangeRequest = Schema.Struct({
    ipRange: Schema.propertySignature(Schema.String).pipe(Schema.fromKey("ip_range")),
  });
export type ChangeNetworkIpRangeRequest = typeof ChangeNetworkIpRangeRequest.Type;
export const ChangeNetworkIpRangeResponse = Schema.Struct({
    action: Schema.Struct({
      id: Schema.Int,
      command: Schema.String,
      status: Schema.Literal("running", "success", "error"),
      started: Schema.String,
      finished: Schema.NullOr(Schema.String),
      progress: Schema.Int,
      resources: Schema.Array(Schema.Struct({
        id: Schema.Int,
        type: Schema.String,
      })),
      error: Schema.NullOr(Schema.Struct({
        code: Schema.String,
        message: Schema.String,
      })),
    }),
  });
export type ChangeNetworkIpRangeResponse = typeof ChangeNetworkIpRangeResponse.Type;

export const ChangeNetworkProtectionRequest = Schema.Struct({
    delete: Schema.optional(Schema.Boolean),
  });
export type ChangeNetworkProtectionRequest = typeof ChangeNetworkProtectionRequest.Type;
export const ChangeNetworkProtectionResponse = Schema.Struct({
    action: Schema.Struct({
      id: Schema.Int,
      command: Schema.String,
      status: Schema.Literal("running", "success", "error"),
      started: Schema.String,
      finished: Schema.NullOr(Schema.String),
      progress: Schema.Int,
      resources: Schema.Array(Schema.Struct({
        id: Schema.Int,
        type: Schema.String,
      })),
      error: Schema.NullOr(Schema.Struct({
        code: Schema.String,
        message: Schema.String,
      })),
    }),
  });
export type ChangeNetworkProtectionResponse = typeof ChangeNetworkProtectionResponse.Type;

export const CreateNetworkRequest = Schema.Struct({
    name: Schema.String,
    ipRange: Schema.propertySignature(Schema.String).pipe(Schema.fromKey("ip_range")),
    labels: Schema.optional(Schema.Record({ key: Schema.String, value: Schema.String })),
    subnets: Schema.optional(Schema.Array(Schema.Struct({
      type: Schema.Literal("cloud", "server", "vswitch"),
      ipRange: Schema.optional(Schema.String).pipe(Schema.fromKey("ip_range")),
      networkZone: Schema.propertySignature(Schema.String).pipe(Schema.fromKey("network_zone")),
      vswitchId: Schema.optional(Schema.Int).pipe(Schema.fromKey("vswitch_id")),
    }))),
    routes: Schema.optional(Schema.Array(Schema.Struct({
      destination: Schema.String,
      gateway: Schema.String,
    }))),
    exposeRoutesToVswitch: Schema.optional(Schema.Boolean).pipe(Schema.fromKey("expose_routes_to_vswitch")),
  });
export type CreateNetworkRequest = typeof CreateNetworkRequest.Type;
export const CreateNetworkResponse = Schema.Struct({
    network: Schema.optional(Schema.Struct({
      id: Schema.Int,
      name: Schema.String,
      ipRange: Schema.propertySignature(Schema.String).pipe(Schema.fromKey("ip_range")),
      subnets: Schema.Array(Schema.Struct({
        type: Schema.Literal("cloud", "server", "vswitch"),
        ipRange: Schema.optional(Schema.String).pipe(Schema.fromKey("ip_range")),
        networkZone: Schema.propertySignature(Schema.String).pipe(Schema.fromKey("network_zone")),
        gateway: Schema.String,
        vswitchId: Schema.optional(Schema.NullOr(Schema.Int)).pipe(Schema.fromKey("vswitch_id")),
      })),
      routes: Schema.Array(Schema.Struct({
        destination: Schema.String,
        gateway: Schema.String,
      })),
      servers: Schema.Array(Schema.Int),
      loadBalancers: Schema.optional(Schema.Array(Schema.Int)).pipe(Schema.fromKey("load_balancers")),
      protection: Schema.Struct({
        delete: Schema.Boolean,
      }),
      labels: Schema.Record({ key: Schema.String, value: Schema.String }),
      created: Schema.String,
      exposeRoutesToVswitch: Schema.propertySignature(Schema.Boolean).pipe(Schema.fromKey("expose_routes_to_vswitch")),
    })),
  });
export type CreateNetworkResponse = typeof CreateNetworkResponse.Type;

export const DeleteNetworkRouteRequest = Schema.Struct({
    destination: Schema.String,
    gateway: Schema.String,
  });
export type DeleteNetworkRouteRequest = typeof DeleteNetworkRouteRequest.Type;
export const DeleteNetworkRouteResponse = Schema.Struct({
    action: Schema.Struct({
      id: Schema.Int,
      command: Schema.String,
      status: Schema.Literal("running", "success", "error"),
      started: Schema.String,
      finished: Schema.NullOr(Schema.String),
      progress: Schema.Int,
      resources: Schema.Array(Schema.Struct({
        id: Schema.Int,
        type: Schema.String,
      })),
      error: Schema.NullOr(Schema.Struct({
        code: Schema.String,
        message: Schema.String,
      })),
    }),
  });
export type DeleteNetworkRouteResponse = typeof DeleteNetworkRouteResponse.Type;

export const DeleteNetworkSubnetRequest = Schema.Struct({
    ipRange: Schema.propertySignature(Schema.String).pipe(Schema.fromKey("ip_range")),
  });
export type DeleteNetworkSubnetRequest = typeof DeleteNetworkSubnetRequest.Type;
export const DeleteNetworkSubnetResponse = Schema.Struct({
    action: Schema.Struct({
      id: Schema.Int,
      command: Schema.String,
      status: Schema.Literal("running", "success", "error"),
      started: Schema.String,
      finished: Schema.NullOr(Schema.String),
      progress: Schema.Int,
      resources: Schema.Array(Schema.Struct({
        id: Schema.Int,
        type: Schema.String,
      })),
      error: Schema.NullOr(Schema.Struct({
        code: Schema.String,
        message: Schema.String,
      })),
    }),
  });
export type DeleteNetworkSubnetResponse = typeof DeleteNetworkSubnetResponse.Type;

export const GetNetworkResponse = Schema.Struct({
    network: Schema.optional(Schema.Struct({
      id: Schema.Int,
      name: Schema.String,
      ipRange: Schema.propertySignature(Schema.String).pipe(Schema.fromKey("ip_range")),
      subnets: Schema.Array(Schema.Struct({
        type: Schema.Literal("cloud", "server", "vswitch"),
        ipRange: Schema.optional(Schema.String).pipe(Schema.fromKey("ip_range")),
        networkZone: Schema.propertySignature(Schema.String).pipe(Schema.fromKey("network_zone")),
        gateway: Schema.String,
        vswitchId: Schema.optional(Schema.NullOr(Schema.Int)).pipe(Schema.fromKey("vswitch_id")),
      })),
      routes: Schema.Array(Schema.Struct({
        destination: Schema.String,
        gateway: Schema.String,
      })),
      servers: Schema.Array(Schema.Int),
      loadBalancers: Schema.optional(Schema.Array(Schema.Int)).pipe(Schema.fromKey("load_balancers")),
      protection: Schema.Struct({
        delete: Schema.Boolean,
      }),
      labels: Schema.Record({ key: Schema.String, value: Schema.String }),
      created: Schema.String,
      exposeRoutesToVswitch: Schema.propertySignature(Schema.Boolean).pipe(Schema.fromKey("expose_routes_to_vswitch")),
    })),
  });
export type GetNetworkResponse = typeof GetNetworkResponse.Type;

export const GetNetworkActionResponse = Schema.Struct({
    action: Schema.Struct({
      id: Schema.Int,
      command: Schema.String,
      status: Schema.Literal("running", "success", "error"),
      started: Schema.String,
      finished: Schema.NullOr(Schema.String),
      progress: Schema.Int,
      resources: Schema.Array(Schema.Struct({
        id: Schema.Int,
        type: Schema.String,
      })),
      error: Schema.NullOr(Schema.Struct({
        code: Schema.String,
        message: Schema.String,
      })),
    }),
  });
export type GetNetworkActionResponse = typeof GetNetworkActionResponse.Type;

export const GetNetworksActionResponse = Schema.Struct({
    action: Schema.Struct({
      id: Schema.Int,
      command: Schema.String,
      status: Schema.Literal("running", "success", "error"),
      started: Schema.String,
      finished: Schema.NullOr(Schema.String),
      progress: Schema.Int,
      resources: Schema.Array(Schema.Struct({
        id: Schema.Int,
        type: Schema.String,
      })),
      error: Schema.NullOr(Schema.Struct({
        code: Schema.String,
        message: Schema.String,
      })),
    }),
  });
export type GetNetworksActionResponse = typeof GetNetworksActionResponse.Type;

export const ListNetworksResponse = Schema.Struct({
    networks: Schema.Array(Schema.Struct({
      id: Schema.Int,
      name: Schema.String,
      ipRange: Schema.propertySignature(Schema.String).pipe(Schema.fromKey("ip_range")),
      subnets: Schema.Array(Schema.Struct({
        type: Schema.Literal("cloud", "server", "vswitch"),
        ipRange: Schema.optional(Schema.String).pipe(Schema.fromKey("ip_range")),
        networkZone: Schema.propertySignature(Schema.String).pipe(Schema.fromKey("network_zone")),
        gateway: Schema.String,
        vswitchId: Schema.optional(Schema.NullOr(Schema.Int)).pipe(Schema.fromKey("vswitch_id")),
      })),
      routes: Schema.Array(Schema.Struct({
        destination: Schema.String,
        gateway: Schema.String,
      })),
      servers: Schema.Array(Schema.Int),
      loadBalancers: Schema.optional(Schema.Array(Schema.Int)).pipe(Schema.fromKey("load_balancers")),
      protection: Schema.Struct({
        delete: Schema.Boolean,
      }),
      labels: Schema.Record({ key: Schema.String, value: Schema.String }),
      created: Schema.String,
      exposeRoutesToVswitch: Schema.propertySignature(Schema.Boolean).pipe(Schema.fromKey("expose_routes_to_vswitch")),
    })),
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
export type ListNetworksResponse = typeof ListNetworksResponse.Type;
export interface ListNetworksQuery {
  sort?: ReadonlyArray<"id" | "id:asc" | "id:desc" | "name" | "name:asc" | "name:desc" | "created" | "created:asc" | "created:desc">;
  name?: string;
  labelSelector?: string;
  page?: number;
  perPage?: number;
}

export const ListNetworkActionsResponse = Schema.Struct({
    actions: Schema.Array(Schema.Struct({
      id: Schema.Int,
      command: Schema.String,
      status: Schema.Literal("running", "success", "error"),
      started: Schema.String,
      finished: Schema.NullOr(Schema.String),
      progress: Schema.Int,
      resources: Schema.Array(Schema.Struct({
        id: Schema.Int,
        type: Schema.String,
      })),
      error: Schema.NullOr(Schema.Struct({
        code: Schema.String,
        message: Schema.String,
      })),
    })),
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
export type ListNetworkActionsResponse = typeof ListNetworkActionsResponse.Type;
export interface ListNetworkActionsQuery {
  sort?: ReadonlyArray<"id" | "id:asc" | "id:desc" | "command" | "command:asc" | "command:desc" | "status" | "status:asc" | "status:desc" | "started" | "started:asc" | "started:desc" | "finished" | "finished:asc" | "finished:desc">;
  status?: ReadonlyArray<"running" | "success" | "error">;
  page?: number;
  perPage?: number;
}

export const ListNetworksActionsResponse = Schema.Struct({
    actions: Schema.Array(Schema.Struct({
      id: Schema.Int,
      command: Schema.String,
      status: Schema.Literal("running", "success", "error"),
      started: Schema.String,
      finished: Schema.NullOr(Schema.String),
      progress: Schema.Int,
      resources: Schema.Array(Schema.Struct({
        id: Schema.Int,
        type: Schema.String,
      })),
      error: Schema.NullOr(Schema.Struct({
        code: Schema.String,
        message: Schema.String,
      })),
    })),
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
export type ListNetworksActionsResponse = typeof ListNetworksActionsResponse.Type;
export interface ListNetworksActionsQuery {
  id?: ReadonlyArray<number>;
  sort?: ReadonlyArray<"id" | "id:asc" | "id:desc" | "command" | "command:asc" | "command:desc" | "status" | "status:asc" | "status:desc" | "started" | "started:asc" | "started:desc" | "finished" | "finished:asc" | "finished:desc">;
  status?: ReadonlyArray<"running" | "success" | "error">;
  page?: number;
  perPage?: number;
}

export const UpdateNetworkRequest = Schema.Struct({
    name: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record({ key: Schema.String, value: Schema.String })),
    exposeRoutesToVswitch: Schema.optional(Schema.Boolean).pipe(Schema.fromKey("expose_routes_to_vswitch")),
  });
export type UpdateNetworkRequest = typeof UpdateNetworkRequest.Type;
export const UpdateNetworkResponse = Schema.Struct({
    network: Schema.optional(Schema.Struct({
      id: Schema.Int,
      name: Schema.String,
      ipRange: Schema.propertySignature(Schema.String).pipe(Schema.fromKey("ip_range")),
      subnets: Schema.Array(Schema.Struct({
        type: Schema.Literal("cloud", "server", "vswitch"),
        ipRange: Schema.optional(Schema.String).pipe(Schema.fromKey("ip_range")),
        networkZone: Schema.propertySignature(Schema.String).pipe(Schema.fromKey("network_zone")),
        gateway: Schema.String,
        vswitchId: Schema.optional(Schema.NullOr(Schema.Int)).pipe(Schema.fromKey("vswitch_id")),
      })),
      routes: Schema.Array(Schema.Struct({
        destination: Schema.String,
        gateway: Schema.String,
      })),
      servers: Schema.Array(Schema.Int),
      loadBalancers: Schema.optional(Schema.Array(Schema.Int)).pipe(Schema.fromKey("load_balancers")),
      protection: Schema.Struct({
        delete: Schema.Boolean,
      }),
      labels: Schema.Record({ key: Schema.String, value: Schema.String }),
      created: Schema.String,
      exposeRoutesToVswitch: Schema.propertySignature(Schema.Boolean).pipe(Schema.fromKey("expose_routes_to_vswitch")),
    })),
  });
export type UpdateNetworkResponse = typeof UpdateNetworkResponse.Type;


export const makeNetworks = (http: HttpClient.HttpClient) => ({
    /** Add a route to a Network */
    addRoute: (id: number, body: AddNetworkRouteRequest): Effect.Effect<AddNetworkRouteResponse, HetznerErrors> =>
      HttpClientRequest.post(`/networks/${id}/actions/add_route`).pipe(
        HttpClientRequest.schemaBodyJson(AddNetworkRouteRequest)(body),
        Effect.flatMap(http.execute),
        Effect.flatMap(HttpClientResponse.schemaBodyJson(AddNetworkRouteResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.networks.addRoute"),
      ),

    /** Add a subnet to a Network */
    addSubnet: (id: number, body: AddNetworkSubnetRequest): Effect.Effect<AddNetworkSubnetResponse, HetznerErrors> =>
      HttpClientRequest.post(`/networks/${id}/actions/add_subnet`).pipe(
        HttpClientRequest.schemaBodyJson(AddNetworkSubnetRequest)(body),
        Effect.flatMap(http.execute),
        Effect.flatMap(HttpClientResponse.schemaBodyJson(AddNetworkSubnetResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.networks.addSubnet"),
      ),

    /** Change IP range of a Network */
    changeIpRange: (id: number, body: ChangeNetworkIpRangeRequest): Effect.Effect<ChangeNetworkIpRangeResponse, HetznerErrors> =>
      HttpClientRequest.post(`/networks/${id}/actions/change_ip_range`).pipe(
        HttpClientRequest.schemaBodyJson(ChangeNetworkIpRangeRequest)(body),
        Effect.flatMap(http.execute),
        Effect.flatMap(HttpClientResponse.schemaBodyJson(ChangeNetworkIpRangeResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.networks.changeIpRange"),
      ),

    /** Change Network Protection */
    changeProtection: (id: number, body: ChangeNetworkProtectionRequest): Effect.Effect<ChangeNetworkProtectionResponse, HetznerErrors> =>
      HttpClientRequest.post(`/networks/${id}/actions/change_protection`).pipe(
        HttpClientRequest.schemaBodyJson(ChangeNetworkProtectionRequest)(body),
        Effect.flatMap(http.execute),
        Effect.flatMap(HttpClientResponse.schemaBodyJson(ChangeNetworkProtectionResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.networks.changeProtection"),
      ),

    /** Create a Network */
    create: (body: CreateNetworkRequest): Effect.Effect<CreateNetworkResponse, HetznerErrors> =>
      HttpClientRequest.post("/networks").pipe(
        HttpClientRequest.schemaBodyJson(CreateNetworkRequest)(body),
        Effect.flatMap(http.execute),
        Effect.flatMap(HttpClientResponse.schemaBodyJson(CreateNetworkResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.networks.create"),
      ),

    /** Delete a Network */
    delete: (id: number): Effect.Effect<void, HetznerErrors> =>
      http.del(`/networks/${id}`).pipe(
        Effect.asVoid,
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.networks.delete"),
      ),

    /** Delete a route from a Network */
    deleteRoute: (id: number, body: DeleteNetworkRouteRequest): Effect.Effect<DeleteNetworkRouteResponse, HetznerErrors> =>
      HttpClientRequest.post(`/networks/${id}/actions/delete_route`).pipe(
        HttpClientRequest.schemaBodyJson(DeleteNetworkRouteRequest)(body),
        Effect.flatMap(http.execute),
        Effect.flatMap(HttpClientResponse.schemaBodyJson(DeleteNetworkRouteResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.networks.deleteRoute"),
      ),

    /** Delete a subnet from a Network */
    deleteSubnet: (id: number, body: DeleteNetworkSubnetRequest): Effect.Effect<DeleteNetworkSubnetResponse, HetznerErrors> =>
      HttpClientRequest.post(`/networks/${id}/actions/delete_subnet`).pipe(
        HttpClientRequest.schemaBodyJson(DeleteNetworkSubnetRequest)(body),
        Effect.flatMap(http.execute),
        Effect.flatMap(HttpClientResponse.schemaBodyJson(DeleteNetworkSubnetResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.networks.deleteSubnet"),
      ),

    /** Get a Network */
    get: (id: number): Effect.Effect<GetNetworkResponse, HetznerErrors> =>
      HttpClientRequest.get(`/networks/${id}`).pipe(
        http.execute,
        Effect.flatMap(HttpClientResponse.schemaBodyJson(GetNetworkResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.networks.get"),
      ),

    /** Get an Action for a Network */
    getAction: (id: number, actionId: number): Effect.Effect<GetNetworkActionResponse, HetznerErrors> =>
      HttpClientRequest.get(`/networks/${id}/actions/${actionId}`).pipe(
        http.execute,
        Effect.flatMap(HttpClientResponse.schemaBodyJson(GetNetworkActionResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.networks.getAction"),
      ),

    /** Get an Action */
    getNetworksAction: (id: number): Effect.Effect<GetNetworksActionResponse, HetznerErrors> =>
      HttpClientRequest.get(`/networks/actions/${id}`).pipe(
        http.execute,
        Effect.flatMap(HttpClientResponse.schemaBodyJson(GetNetworksActionResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.networks.getNetworksAction"),
      ),

    /** List Networks */
    list: (query?: ListNetworksQuery): Effect.Effect<ListNetworksResponse, HetznerErrors> =>
      HttpClientRequest.get("/networks").pipe(
        HttpClientRequest.setUrlParams(toUrlParams({ sort: query?.sort, name: query?.name, label_selector: query?.labelSelector, page: query?.page, per_page: query?.perPage })),
        http.execute,
        Effect.flatMap(HttpClientResponse.schemaBodyJson(ListNetworksResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.networks.list"),
      ),

    /** List Actions for a Network */
    listActions: (id: number, query?: ListNetworkActionsQuery): Effect.Effect<ListNetworkActionsResponse, HetznerErrors> =>
      HttpClientRequest.get(`/networks/${id}/actions`).pipe(
        HttpClientRequest.setUrlParams(toUrlParams({ sort: query?.sort, status: query?.status, page: query?.page, per_page: query?.perPage })),
        http.execute,
        Effect.flatMap(HttpClientResponse.schemaBodyJson(ListNetworkActionsResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.networks.listActions"),
      ),

    /** List Actions */
    listNetworksActions: (query?: ListNetworksActionsQuery): Effect.Effect<ListNetworksActionsResponse, HetznerErrors> =>
      HttpClientRequest.get("/networks/actions").pipe(
        HttpClientRequest.setUrlParams(toUrlParams({ id: query?.id, sort: query?.sort, status: query?.status, page: query?.page, per_page: query?.perPage })),
        http.execute,
        Effect.flatMap(HttpClientResponse.schemaBodyJson(ListNetworksActionsResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.networks.listNetworksActions"),
      ),

    /** Update a Network */
    update: (id: number, body: UpdateNetworkRequest): Effect.Effect<UpdateNetworkResponse, HetznerErrors> =>
      HttpClientRequest.put(`/networks/${id}`).pipe(
        HttpClientRequest.schemaBodyJson(UpdateNetworkRequest)(body),
        Effect.flatMap(http.execute),
        Effect.flatMap(HttpClientResponse.schemaBodyJson(UpdateNetworkResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.networks.update"),
      ),
});

export type NetworksApi = ReturnType<typeof makeNetworks>;
