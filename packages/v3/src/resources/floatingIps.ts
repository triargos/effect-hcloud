/**
 * FloatingIps — generated from the Hetzner Cloud OpenAPI spec. Do not edit by hand.
 */
import { Effect, Schema } from "effect";
import { HttpClientRequest, HttpClientResponse } from "@effect/platform";
import type { HttpClient } from "@effect/platform";
import { handleHetznerError, type HetznerErrors } from "../errors.js";
import { toUrlParams } from "../internal/url-params.js";


export const AssignFloatingIpRequest = Schema.Struct({
    server: Schema.NullOr(Schema.Int),
  });
export type AssignFloatingIpRequest = typeof AssignFloatingIpRequest.Type;
export const AssignFloatingIpResponse = Schema.Struct({
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
export type AssignFloatingIpResponse = typeof AssignFloatingIpResponse.Type;

export const ChangeFloatingIpDnsPtrRequest = Schema.Struct({
    ip: Schema.String,
    dnsPtr: Schema.optional(Schema.NullOr(Schema.String)).pipe(Schema.fromKey("dns_ptr")),
  });
export type ChangeFloatingIpDnsPtrRequest = typeof ChangeFloatingIpDnsPtrRequest.Type;
export const ChangeFloatingIpDnsPtrResponse = Schema.Struct({
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
export type ChangeFloatingIpDnsPtrResponse = typeof ChangeFloatingIpDnsPtrResponse.Type;

export const ChangeFloatingIpProtectionRequest = Schema.Struct({
    delete: Schema.Boolean,
  });
export type ChangeFloatingIpProtectionRequest = typeof ChangeFloatingIpProtectionRequest.Type;
export const ChangeFloatingIpProtectionResponse = Schema.Struct({
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
export type ChangeFloatingIpProtectionResponse = typeof ChangeFloatingIpProtectionResponse.Type;

export const CreateFloatingIpRequest = Schema.Struct({
    type: Schema.Literal("ipv4", "ipv6"),
    server: Schema.optional(Schema.NullOr(Schema.Int)),
    homeLocation: Schema.optional(Schema.Union(Schema.String, Schema.Int)).pipe(Schema.fromKey("home_location")),
    description: Schema.optional(Schema.NullOr(Schema.String)),
    name: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record({ key: Schema.String, value: Schema.String })),
  });
export type CreateFloatingIpRequest = typeof CreateFloatingIpRequest.Type;
export const CreateFloatingIpResponse = Schema.Struct({
    floatingIp: Schema.propertySignature(Schema.Struct({
      id: Schema.Int,
      name: Schema.String,
      description: Schema.NullOr(Schema.String),
      ip: Schema.String,
      type: Schema.Literal("ipv4", "ipv6"),
      server: Schema.NullOr(Schema.Int),
      dnsPtr: Schema.propertySignature(Schema.Array(Schema.Struct({
        ip: Schema.String,
        dnsPtr: Schema.propertySignature(Schema.String).pipe(Schema.fromKey("dns_ptr")),
      }))).pipe(Schema.fromKey("dns_ptr")),
      homeLocation: Schema.propertySignature(Schema.Struct({
        id: Schema.Int,
        name: Schema.String,
        description: Schema.String,
        country: Schema.String,
        city: Schema.String,
        latitude: Schema.Number,
        longitude: Schema.Number,
        networkZone: Schema.propertySignature(Schema.String).pipe(Schema.fromKey("network_zone")),
      })).pipe(Schema.fromKey("home_location")),
      blocked: Schema.Boolean,
      protection: Schema.Struct({
        delete: Schema.Boolean,
      }),
      labels: Schema.Record({ key: Schema.String, value: Schema.String }),
      created: Schema.String,
    })).pipe(Schema.fromKey("floating_ip")),
    action: Schema.optional(Schema.NullOr(Schema.Struct({
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
    }))),
  });
export type CreateFloatingIpResponse = typeof CreateFloatingIpResponse.Type;

export const GetFloatingIpResponse = Schema.Struct({
    floatingIp: Schema.propertySignature(Schema.Struct({
      id: Schema.Int,
      name: Schema.String,
      description: Schema.NullOr(Schema.String),
      ip: Schema.String,
      type: Schema.Literal("ipv4", "ipv6"),
      server: Schema.NullOr(Schema.Int),
      dnsPtr: Schema.propertySignature(Schema.Array(Schema.Struct({
        ip: Schema.String,
        dnsPtr: Schema.propertySignature(Schema.String).pipe(Schema.fromKey("dns_ptr")),
      }))).pipe(Schema.fromKey("dns_ptr")),
      homeLocation: Schema.propertySignature(Schema.Struct({
        id: Schema.Int,
        name: Schema.String,
        description: Schema.String,
        country: Schema.String,
        city: Schema.String,
        latitude: Schema.Number,
        longitude: Schema.Number,
        networkZone: Schema.propertySignature(Schema.String).pipe(Schema.fromKey("network_zone")),
      })).pipe(Schema.fromKey("home_location")),
      blocked: Schema.Boolean,
      protection: Schema.Struct({
        delete: Schema.Boolean,
      }),
      labels: Schema.Record({ key: Schema.String, value: Schema.String }),
      created: Schema.String,
    })).pipe(Schema.fromKey("floating_ip")),
  });
export type GetFloatingIpResponse = typeof GetFloatingIpResponse.Type;

export const GetFloatingIpActionResponse = Schema.Struct({
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
export type GetFloatingIpActionResponse = typeof GetFloatingIpActionResponse.Type;

export const GetFloatingIpsActionResponse = Schema.Struct({
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
export type GetFloatingIpsActionResponse = typeof GetFloatingIpsActionResponse.Type;

export const ListFloatingIpsResponse = Schema.Struct({
    floatingIps: Schema.propertySignature(Schema.Array(Schema.Struct({
      id: Schema.Int,
      name: Schema.String,
      description: Schema.NullOr(Schema.String),
      ip: Schema.String,
      type: Schema.Literal("ipv4", "ipv6"),
      server: Schema.NullOr(Schema.Int),
      dnsPtr: Schema.propertySignature(Schema.Array(Schema.Struct({
        ip: Schema.String,
        dnsPtr: Schema.propertySignature(Schema.String).pipe(Schema.fromKey("dns_ptr")),
      }))).pipe(Schema.fromKey("dns_ptr")),
      homeLocation: Schema.propertySignature(Schema.Struct({
        id: Schema.Int,
        name: Schema.String,
        description: Schema.String,
        country: Schema.String,
        city: Schema.String,
        latitude: Schema.Number,
        longitude: Schema.Number,
        networkZone: Schema.propertySignature(Schema.String).pipe(Schema.fromKey("network_zone")),
      })).pipe(Schema.fromKey("home_location")),
      blocked: Schema.Boolean,
      protection: Schema.Struct({
        delete: Schema.Boolean,
      }),
      labels: Schema.Record({ key: Schema.String, value: Schema.String }),
      created: Schema.String,
    }))).pipe(Schema.fromKey("floating_ips")),
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
export type ListFloatingIpsResponse = typeof ListFloatingIpsResponse.Type;
export interface ListFloatingIpsQuery {
  name?: string;
  labelSelector?: string;
  sort?: ReadonlyArray<"id" | "id:asc" | "id:desc" | "created" | "created:asc" | "created:desc">;
  page?: number;
  perPage?: number;
}

export const ListFloatingIpActionsResponse = Schema.Struct({
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
export type ListFloatingIpActionsResponse = typeof ListFloatingIpActionsResponse.Type;
export interface ListFloatingIpActionsQuery {
  sort?: ReadonlyArray<"id" | "id:asc" | "id:desc" | "command" | "command:asc" | "command:desc" | "status" | "status:asc" | "status:desc" | "started" | "started:asc" | "started:desc" | "finished" | "finished:asc" | "finished:desc">;
  status?: ReadonlyArray<"running" | "success" | "error">;
  page?: number;
  perPage?: number;
}

export const ListFloatingIpsActionsResponse = Schema.Struct({
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
export type ListFloatingIpsActionsResponse = typeof ListFloatingIpsActionsResponse.Type;
export interface ListFloatingIpsActionsQuery {
  id?: ReadonlyArray<number>;
  sort?: ReadonlyArray<"id" | "id:asc" | "id:desc" | "command" | "command:asc" | "command:desc" | "status" | "status:asc" | "status:desc" | "started" | "started:asc" | "started:desc" | "finished" | "finished:asc" | "finished:desc">;
  status?: ReadonlyArray<"running" | "success" | "error">;
  page?: number;
  perPage?: number;
}

export const UnassignFloatingIpResponse = Schema.Struct({
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
export type UnassignFloatingIpResponse = typeof UnassignFloatingIpResponse.Type;

export const UpdateFloatingIpRequest = Schema.Struct({
    description: Schema.optional(Schema.NullOr(Schema.String)),
    name: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record({ key: Schema.String, value: Schema.String })),
  });
export type UpdateFloatingIpRequest = typeof UpdateFloatingIpRequest.Type;
export const UpdateFloatingIpResponse = Schema.Struct({
    floatingIp: Schema.propertySignature(Schema.Struct({
      id: Schema.Int,
      name: Schema.String,
      description: Schema.NullOr(Schema.String),
      ip: Schema.String,
      type: Schema.Literal("ipv4", "ipv6"),
      server: Schema.NullOr(Schema.Int),
      dnsPtr: Schema.propertySignature(Schema.Array(Schema.Struct({
        ip: Schema.String,
        dnsPtr: Schema.propertySignature(Schema.String).pipe(Schema.fromKey("dns_ptr")),
      }))).pipe(Schema.fromKey("dns_ptr")),
      homeLocation: Schema.propertySignature(Schema.Struct({
        id: Schema.Int,
        name: Schema.String,
        description: Schema.String,
        country: Schema.String,
        city: Schema.String,
        latitude: Schema.Number,
        longitude: Schema.Number,
        networkZone: Schema.propertySignature(Schema.String).pipe(Schema.fromKey("network_zone")),
      })).pipe(Schema.fromKey("home_location")),
      blocked: Schema.Boolean,
      protection: Schema.Struct({
        delete: Schema.Boolean,
      }),
      labels: Schema.Record({ key: Schema.String, value: Schema.String }),
      created: Schema.String,
    })).pipe(Schema.fromKey("floating_ip")),
  });
export type UpdateFloatingIpResponse = typeof UpdateFloatingIpResponse.Type;


export const makeFloatingIps = (http: HttpClient.HttpClient) => ({
    /** Assign a Floating IP to a Server */
    assign: (id: number, body: AssignFloatingIpRequest): Effect.Effect<AssignFloatingIpResponse, HetznerErrors> =>
      HttpClientRequest.post(`/floating_ips/${id}/actions/assign`).pipe(
        HttpClientRequest.schemaBodyJson(AssignFloatingIpRequest)(body),
        Effect.flatMap(http.execute),
        Effect.flatMap(HttpClientResponse.schemaBodyJson(AssignFloatingIpResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.floatingIps.assign"),
      ),

    /** Change reverse DNS records for a Floating IP */
    changeDnsPtr: (id: number, body: ChangeFloatingIpDnsPtrRequest): Effect.Effect<ChangeFloatingIpDnsPtrResponse, HetznerErrors> =>
      HttpClientRequest.post(`/floating_ips/${id}/actions/change_dns_ptr`).pipe(
        HttpClientRequest.schemaBodyJson(ChangeFloatingIpDnsPtrRequest)(body),
        Effect.flatMap(http.execute),
        Effect.flatMap(HttpClientResponse.schemaBodyJson(ChangeFloatingIpDnsPtrResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.floatingIps.changeDnsPtr"),
      ),

    /** Change Floating IP Protection */
    changeProtection: (id: number, body: ChangeFloatingIpProtectionRequest): Effect.Effect<ChangeFloatingIpProtectionResponse, HetznerErrors> =>
      HttpClientRequest.post(`/floating_ips/${id}/actions/change_protection`).pipe(
        HttpClientRequest.schemaBodyJson(ChangeFloatingIpProtectionRequest)(body),
        Effect.flatMap(http.execute),
        Effect.flatMap(HttpClientResponse.schemaBodyJson(ChangeFloatingIpProtectionResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.floatingIps.changeProtection"),
      ),

    /** Create a Floating IP */
    create: (body: CreateFloatingIpRequest): Effect.Effect<CreateFloatingIpResponse, HetznerErrors> =>
      HttpClientRequest.post("/floating_ips").pipe(
        HttpClientRequest.schemaBodyJson(CreateFloatingIpRequest)(body),
        Effect.flatMap(http.execute),
        Effect.flatMap(HttpClientResponse.schemaBodyJson(CreateFloatingIpResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.floatingIps.create"),
      ),

    /** Delete a Floating IP */
    delete: (id: number): Effect.Effect<void, HetznerErrors> =>
      http.del(`/floating_ips/${id}`).pipe(
        Effect.asVoid,
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.floatingIps.delete"),
      ),

    /** Get a Floating IP */
    get: (id: number): Effect.Effect<GetFloatingIpResponse, HetznerErrors> =>
      HttpClientRequest.get(`/floating_ips/${id}`).pipe(
        http.execute,
        Effect.flatMap(HttpClientResponse.schemaBodyJson(GetFloatingIpResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.floatingIps.get"),
      ),

    /** Get an Action for a Floating IP */
    getAction: (id: number, actionId: number): Effect.Effect<GetFloatingIpActionResponse, HetznerErrors> =>
      HttpClientRequest.get(`/floating_ips/${id}/actions/${actionId}`).pipe(
        http.execute,
        Effect.flatMap(HttpClientResponse.schemaBodyJson(GetFloatingIpActionResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.floatingIps.getAction"),
      ),

    /** Get an Action */
    getFloatingIpsAction: (id: number): Effect.Effect<GetFloatingIpsActionResponse, HetznerErrors> =>
      HttpClientRequest.get(`/floating_ips/actions/${id}`).pipe(
        http.execute,
        Effect.flatMap(HttpClientResponse.schemaBodyJson(GetFloatingIpsActionResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.floatingIps.getFloatingIpsAction"),
      ),

    /** List Floating IPs */
    list: (query?: ListFloatingIpsQuery): Effect.Effect<ListFloatingIpsResponse, HetznerErrors> =>
      HttpClientRequest.get("/floating_ips").pipe(
        HttpClientRequest.setUrlParams(toUrlParams({ name: query?.name, label_selector: query?.labelSelector, sort: query?.sort, page: query?.page, per_page: query?.perPage })),
        http.execute,
        Effect.flatMap(HttpClientResponse.schemaBodyJson(ListFloatingIpsResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.floatingIps.list"),
      ),

    /** List Actions for a Floating IP */
    listActions: (id: number, query?: ListFloatingIpActionsQuery): Effect.Effect<ListFloatingIpActionsResponse, HetznerErrors> =>
      HttpClientRequest.get(`/floating_ips/${id}/actions`).pipe(
        HttpClientRequest.setUrlParams(toUrlParams({ sort: query?.sort, status: query?.status, page: query?.page, per_page: query?.perPage })),
        http.execute,
        Effect.flatMap(HttpClientResponse.schemaBodyJson(ListFloatingIpActionsResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.floatingIps.listActions"),
      ),

    /** List Actions */
    listFloatingIpsActions: (query?: ListFloatingIpsActionsQuery): Effect.Effect<ListFloatingIpsActionsResponse, HetznerErrors> =>
      HttpClientRequest.get("/floating_ips/actions").pipe(
        HttpClientRequest.setUrlParams(toUrlParams({ id: query?.id, sort: query?.sort, status: query?.status, page: query?.page, per_page: query?.perPage })),
        http.execute,
        Effect.flatMap(HttpClientResponse.schemaBodyJson(ListFloatingIpsActionsResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.floatingIps.listFloatingIpsActions"),
      ),

    /** Unassign a Floating IP */
    unassign: (id: number): Effect.Effect<UnassignFloatingIpResponse, HetznerErrors> =>
      HttpClientRequest.post(`/floating_ips/${id}/actions/unassign`).pipe(
        http.execute,
        Effect.flatMap(HttpClientResponse.schemaBodyJson(UnassignFloatingIpResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.floatingIps.unassign"),
      ),

    /** Update a Floating IP */
    update: (id: number, body: UpdateFloatingIpRequest): Effect.Effect<UpdateFloatingIpResponse, HetznerErrors> =>
      HttpClientRequest.put(`/floating_ips/${id}`).pipe(
        HttpClientRequest.schemaBodyJson(UpdateFloatingIpRequest)(body),
        Effect.flatMap(http.execute),
        Effect.flatMap(HttpClientResponse.schemaBodyJson(UpdateFloatingIpResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.floatingIps.update"),
      ),
});

export type FloatingIpsApi = ReturnType<typeof makeFloatingIps>;
