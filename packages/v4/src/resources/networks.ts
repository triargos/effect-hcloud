/**
 * Networks — generated from the Hetzner Cloud OpenAPI spec. Do not edit by hand.
 */
import { Effect, Schema } from "effect";
import { HttpClient, HttpClientRequest } from "effect/unstable/http";
import { handleHetznerError, type HetznerError } from "../errors.js";
import { decodeJson } from "../internal/http.js";
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
      status: Schema.Literals(["running", "success", "error"]),
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
    type: Schema.Literals(["cloud", "server", "vswitch"]),
    ip_range: Schema.optional(Schema.String),
    network_zone: Schema.String,
    vswitch_id: Schema.optional(Schema.Int),
  });
export type AddNetworkSubnetRequest = typeof AddNetworkSubnetRequest.Type;
export const AddNetworkSubnetResponse = Schema.Struct({
    action: Schema.Struct({
      id: Schema.Int,
      command: Schema.String,
      status: Schema.Literals(["running", "success", "error"]),
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
    ip_range: Schema.String,
  });
export type ChangeNetworkIpRangeRequest = typeof ChangeNetworkIpRangeRequest.Type;
export const ChangeNetworkIpRangeResponse = Schema.Struct({
    action: Schema.Struct({
      id: Schema.Int,
      command: Schema.String,
      status: Schema.Literals(["running", "success", "error"]),
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
      status: Schema.Literals(["running", "success", "error"]),
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
    ip_range: Schema.String,
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    subnets: Schema.optional(Schema.Array(Schema.Struct({
      type: Schema.Literals(["cloud", "server", "vswitch"]),
      ip_range: Schema.optional(Schema.String),
      network_zone: Schema.String,
      vswitch_id: Schema.optional(Schema.Int),
    }))),
    routes: Schema.optional(Schema.Array(Schema.Struct({
      destination: Schema.String,
      gateway: Schema.String,
    }))),
    expose_routes_to_vswitch: Schema.optional(Schema.Boolean),
  });
export type CreateNetworkRequest = typeof CreateNetworkRequest.Type;
export const CreateNetworkResponse = Schema.Struct({
    network: Schema.optional(Schema.Struct({
      id: Schema.Int,
      name: Schema.String,
      ip_range: Schema.String,
      subnets: Schema.Array(Schema.Struct({
        type: Schema.Literals(["cloud", "server", "vswitch"]),
        ip_range: Schema.optional(Schema.String),
        network_zone: Schema.String,
        gateway: Schema.String,
        vswitch_id: Schema.optional(Schema.NullOr(Schema.Int)),
      })),
      routes: Schema.Array(Schema.Struct({
        destination: Schema.String,
        gateway: Schema.String,
      })),
      servers: Schema.Array(Schema.Int),
      load_balancers: Schema.optional(Schema.Array(Schema.Int)),
      protection: Schema.Struct({
        delete: Schema.Boolean,
      }),
      labels: Schema.Record(Schema.String, Schema.String),
      created: Schema.String,
      expose_routes_to_vswitch: Schema.Boolean,
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
      status: Schema.Literals(["running", "success", "error"]),
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
    ip_range: Schema.String,
  });
export type DeleteNetworkSubnetRequest = typeof DeleteNetworkSubnetRequest.Type;
export const DeleteNetworkSubnetResponse = Schema.Struct({
    action: Schema.Struct({
      id: Schema.Int,
      command: Schema.String,
      status: Schema.Literals(["running", "success", "error"]),
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
      ip_range: Schema.String,
      subnets: Schema.Array(Schema.Struct({
        type: Schema.Literals(["cloud", "server", "vswitch"]),
        ip_range: Schema.optional(Schema.String),
        network_zone: Schema.String,
        gateway: Schema.String,
        vswitch_id: Schema.optional(Schema.NullOr(Schema.Int)),
      })),
      routes: Schema.Array(Schema.Struct({
        destination: Schema.String,
        gateway: Schema.String,
      })),
      servers: Schema.Array(Schema.Int),
      load_balancers: Schema.optional(Schema.Array(Schema.Int)),
      protection: Schema.Struct({
        delete: Schema.Boolean,
      }),
      labels: Schema.Record(Schema.String, Schema.String),
      created: Schema.String,
      expose_routes_to_vswitch: Schema.Boolean,
    })),
  });
export type GetNetworkResponse = typeof GetNetworkResponse.Type;

export const GetNetworkActionResponse = Schema.Struct({
    action: Schema.Struct({
      id: Schema.Int,
      command: Schema.String,
      status: Schema.Literals(["running", "success", "error"]),
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
      status: Schema.Literals(["running", "success", "error"]),
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
      ip_range: Schema.String,
      subnets: Schema.Array(Schema.Struct({
        type: Schema.Literals(["cloud", "server", "vswitch"]),
        ip_range: Schema.optional(Schema.String),
        network_zone: Schema.String,
        gateway: Schema.String,
        vswitch_id: Schema.optional(Schema.NullOr(Schema.Int)),
      })),
      routes: Schema.Array(Schema.Struct({
        destination: Schema.String,
        gateway: Schema.String,
      })),
      servers: Schema.Array(Schema.Int),
      load_balancers: Schema.optional(Schema.Array(Schema.Int)),
      protection: Schema.Struct({
        delete: Schema.Boolean,
      }),
      labels: Schema.Record(Schema.String, Schema.String),
      created: Schema.String,
      expose_routes_to_vswitch: Schema.Boolean,
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
export type ListNetworksResponse = typeof ListNetworksResponse.Type;
export interface ListNetworksQuery {
  sort?: ReadonlyArray<"id" | "id:asc" | "id:desc" | "name" | "name:asc" | "name:desc" | "created" | "created:asc" | "created:desc">;
  name?: string;
  label_selector?: string;
  page?: number;
  per_page?: number;
}

export const ListNetworkActionsResponse = Schema.Struct({
    actions: Schema.Array(Schema.Struct({
      id: Schema.Int,
      command: Schema.String,
      status: Schema.Literals(["running", "success", "error"]),
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
        per_page: Schema.Int,
        previous_page: Schema.NullOr(Schema.Int),
        next_page: Schema.NullOr(Schema.Int),
        last_page: Schema.NullOr(Schema.Int),
        total_entries: Schema.NullOr(Schema.Int),
      }),
    }),
  });
export type ListNetworkActionsResponse = typeof ListNetworkActionsResponse.Type;
export interface ListNetworkActionsQuery {
  sort?: ReadonlyArray<"id" | "id:asc" | "id:desc" | "command" | "command:asc" | "command:desc" | "status" | "status:asc" | "status:desc" | "started" | "started:asc" | "started:desc" | "finished" | "finished:asc" | "finished:desc">;
  status?: ReadonlyArray<"running" | "success" | "error">;
  page?: number;
  per_page?: number;
}

export const ListNetworksActionsResponse = Schema.Struct({
    actions: Schema.Array(Schema.Struct({
      id: Schema.Int,
      command: Schema.String,
      status: Schema.Literals(["running", "success", "error"]),
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
        per_page: Schema.Int,
        previous_page: Schema.NullOr(Schema.Int),
        next_page: Schema.NullOr(Schema.Int),
        last_page: Schema.NullOr(Schema.Int),
        total_entries: Schema.NullOr(Schema.Int),
      }),
    }),
  });
export type ListNetworksActionsResponse = typeof ListNetworksActionsResponse.Type;
export interface ListNetworksActionsQuery {
  id?: ReadonlyArray<number>;
  sort?: ReadonlyArray<"id" | "id:asc" | "id:desc" | "command" | "command:asc" | "command:desc" | "status" | "status:asc" | "status:desc" | "started" | "started:asc" | "started:desc" | "finished" | "finished:asc" | "finished:desc">;
  status?: ReadonlyArray<"running" | "success" | "error">;
  page?: number;
  per_page?: number;
}

export const UpdateNetworkRequest = Schema.Struct({
    name: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    expose_routes_to_vswitch: Schema.optional(Schema.Boolean),
  });
export type UpdateNetworkRequest = typeof UpdateNetworkRequest.Type;
export const UpdateNetworkResponse = Schema.Struct({
    network: Schema.optional(Schema.Struct({
      id: Schema.Int,
      name: Schema.String,
      ip_range: Schema.String,
      subnets: Schema.Array(Schema.Struct({
        type: Schema.Literals(["cloud", "server", "vswitch"]),
        ip_range: Schema.optional(Schema.String),
        network_zone: Schema.String,
        gateway: Schema.String,
        vswitch_id: Schema.optional(Schema.NullOr(Schema.Int)),
      })),
      routes: Schema.Array(Schema.Struct({
        destination: Schema.String,
        gateway: Schema.String,
      })),
      servers: Schema.Array(Schema.Int),
      load_balancers: Schema.optional(Schema.Array(Schema.Int)),
      protection: Schema.Struct({
        delete: Schema.Boolean,
      }),
      labels: Schema.Record(Schema.String, Schema.String),
      created: Schema.String,
      expose_routes_to_vswitch: Schema.Boolean,
    })),
  });
export type UpdateNetworkResponse = typeof UpdateNetworkResponse.Type;


export const makeNetworks = (http: HttpClient.HttpClient) => ({
    /** Add a route to a Network */
    addRoute: (id: number, body: AddNetworkRouteRequest): Effect.Effect<AddNetworkRouteResponse, HetznerError> =>
      HttpClientRequest.post(`/networks/${id}/actions/add_route`).pipe(
        HttpClientRequest.schemaBodyJson(AddNetworkRouteRequest)(body),
        Effect.flatMap(http.execute),
        Effect.flatMap(decodeJson(AddNetworkRouteResponse)),
        Effect.catch(handleHetznerError),
        Effect.withSpan("HetznerClient.networks.addRoute"),
      ),

    /** Add a subnet to a Network */
    addSubnet: (id: number, body: AddNetworkSubnetRequest): Effect.Effect<AddNetworkSubnetResponse, HetznerError> =>
      HttpClientRequest.post(`/networks/${id}/actions/add_subnet`).pipe(
        HttpClientRequest.schemaBodyJson(AddNetworkSubnetRequest)(body),
        Effect.flatMap(http.execute),
        Effect.flatMap(decodeJson(AddNetworkSubnetResponse)),
        Effect.catch(handleHetznerError),
        Effect.withSpan("HetznerClient.networks.addSubnet"),
      ),

    /** Change IP range of a Network */
    changeIpRange: (id: number, body: ChangeNetworkIpRangeRequest): Effect.Effect<ChangeNetworkIpRangeResponse, HetznerError> =>
      HttpClientRequest.post(`/networks/${id}/actions/change_ip_range`).pipe(
        HttpClientRequest.schemaBodyJson(ChangeNetworkIpRangeRequest)(body),
        Effect.flatMap(http.execute),
        Effect.flatMap(decodeJson(ChangeNetworkIpRangeResponse)),
        Effect.catch(handleHetznerError),
        Effect.withSpan("HetznerClient.networks.changeIpRange"),
      ),

    /** Change Network Protection */
    changeProtection: (id: number, body: ChangeNetworkProtectionRequest): Effect.Effect<ChangeNetworkProtectionResponse, HetznerError> =>
      HttpClientRequest.post(`/networks/${id}/actions/change_protection`).pipe(
        HttpClientRequest.schemaBodyJson(ChangeNetworkProtectionRequest)(body),
        Effect.flatMap(http.execute),
        Effect.flatMap(decodeJson(ChangeNetworkProtectionResponse)),
        Effect.catch(handleHetznerError),
        Effect.withSpan("HetznerClient.networks.changeProtection"),
      ),

    /** Create a Network */
    create: (body: CreateNetworkRequest): Effect.Effect<CreateNetworkResponse, HetznerError> =>
      HttpClientRequest.post("/networks").pipe(
        HttpClientRequest.schemaBodyJson(CreateNetworkRequest)(body),
        Effect.flatMap(http.execute),
        Effect.flatMap(decodeJson(CreateNetworkResponse)),
        Effect.catch(handleHetznerError),
        Effect.withSpan("HetznerClient.networks.create"),
      ),

    /** Delete a Network */
    delete: (id: number): Effect.Effect<void, HetznerError> =>
      http.del(`/networks/${id}`).pipe(
        Effect.asVoid,
        Effect.catch(handleHetznerError),
        Effect.withSpan("HetznerClient.networks.delete"),
      ),

    /** Delete a route from a Network */
    deleteRoute: (id: number, body: DeleteNetworkRouteRequest): Effect.Effect<DeleteNetworkRouteResponse, HetznerError> =>
      HttpClientRequest.post(`/networks/${id}/actions/delete_route`).pipe(
        HttpClientRequest.schemaBodyJson(DeleteNetworkRouteRequest)(body),
        Effect.flatMap(http.execute),
        Effect.flatMap(decodeJson(DeleteNetworkRouteResponse)),
        Effect.catch(handleHetznerError),
        Effect.withSpan("HetznerClient.networks.deleteRoute"),
      ),

    /** Delete a subnet from a Network */
    deleteSubnet: (id: number, body: DeleteNetworkSubnetRequest): Effect.Effect<DeleteNetworkSubnetResponse, HetznerError> =>
      HttpClientRequest.post(`/networks/${id}/actions/delete_subnet`).pipe(
        HttpClientRequest.schemaBodyJson(DeleteNetworkSubnetRequest)(body),
        Effect.flatMap(http.execute),
        Effect.flatMap(decodeJson(DeleteNetworkSubnetResponse)),
        Effect.catch(handleHetznerError),
        Effect.withSpan("HetznerClient.networks.deleteSubnet"),
      ),

    /** Get a Network */
    get: (id: number): Effect.Effect<GetNetworkResponse, HetznerError> =>
      HttpClientRequest.get(`/networks/${id}`).pipe(
        http.execute,
        Effect.flatMap(decodeJson(GetNetworkResponse)),
        Effect.catch(handleHetznerError),
        Effect.withSpan("HetznerClient.networks.get"),
      ),

    /** Get an Action for a Network */
    getAction: (id: number, action_id: number): Effect.Effect<GetNetworkActionResponse, HetznerError> =>
      HttpClientRequest.get(`/networks/${id}/actions/${action_id}`).pipe(
        http.execute,
        Effect.flatMap(decodeJson(GetNetworkActionResponse)),
        Effect.catch(handleHetznerError),
        Effect.withSpan("HetznerClient.networks.getAction"),
      ),

    /** Get an Action */
    getNetworksAction: (id: number): Effect.Effect<GetNetworksActionResponse, HetznerError> =>
      HttpClientRequest.get(`/networks/actions/${id}`).pipe(
        http.execute,
        Effect.flatMap(decodeJson(GetNetworksActionResponse)),
        Effect.catch(handleHetznerError),
        Effect.withSpan("HetznerClient.networks.getNetworksAction"),
      ),

    /** List Networks */
    list: (query?: ListNetworksQuery): Effect.Effect<ListNetworksResponse, HetznerError> =>
      HttpClientRequest.get("/networks").pipe(
        HttpClientRequest.setUrlParams(toUrlParams(query)),
        http.execute,
        Effect.flatMap(decodeJson(ListNetworksResponse)),
        Effect.catch(handleHetznerError),
        Effect.withSpan("HetznerClient.networks.list"),
      ),

    /** List Actions for a Network */
    listActions: (id: number, query?: ListNetworkActionsQuery): Effect.Effect<ListNetworkActionsResponse, HetznerError> =>
      HttpClientRequest.get(`/networks/${id}/actions`).pipe(
        HttpClientRequest.setUrlParams(toUrlParams(query)),
        http.execute,
        Effect.flatMap(decodeJson(ListNetworkActionsResponse)),
        Effect.catch(handleHetznerError),
        Effect.withSpan("HetznerClient.networks.listActions"),
      ),

    /** List Actions */
    listNetworksActions: (query?: ListNetworksActionsQuery): Effect.Effect<ListNetworksActionsResponse, HetznerError> =>
      HttpClientRequest.get("/networks/actions").pipe(
        HttpClientRequest.setUrlParams(toUrlParams(query)),
        http.execute,
        Effect.flatMap(decodeJson(ListNetworksActionsResponse)),
        Effect.catch(handleHetznerError),
        Effect.withSpan("HetznerClient.networks.listNetworksActions"),
      ),

    /** Update a Network */
    update: (id: number, body: UpdateNetworkRequest): Effect.Effect<UpdateNetworkResponse, HetznerError> =>
      HttpClientRequest.put(`/networks/${id}`).pipe(
        HttpClientRequest.schemaBodyJson(UpdateNetworkRequest)(body),
        Effect.flatMap(http.execute),
        Effect.flatMap(decodeJson(UpdateNetworkResponse)),
        Effect.catch(handleHetznerError),
        Effect.withSpan("HetznerClient.networks.update"),
      ),
});

export type NetworksApi = ReturnType<typeof makeNetworks>;
