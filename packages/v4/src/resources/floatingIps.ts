/**
 * FloatingIps — generated from the Hetzner Cloud OpenAPI spec. Do not edit by hand.
 */
import { Effect, Schema } from "effect";
import { HttpClient, HttpClientRequest } from "effect/unstable/http";
import { handleHetznerError, type HetznerError } from "../errors.js";
import { decodeJson } from "../internal/http.js";
import { toUrlParams } from "../internal/url-params.js";


export const AssignFloatingIpRequest = Schema.Struct({
    server: Schema.NullOr(Schema.Int),
  });
export type AssignFloatingIpRequest = typeof AssignFloatingIpRequest.Type;
export const AssignFloatingIpResponse = Schema.Struct({
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
export type AssignFloatingIpResponse = typeof AssignFloatingIpResponse.Type;

export const ChangeFloatingIpDnsPtrRequest = Schema.Struct({
    ip: Schema.String,
    dns_ptr: Schema.optional(Schema.NullOr(Schema.String)),
  });
export type ChangeFloatingIpDnsPtrRequest = typeof ChangeFloatingIpDnsPtrRequest.Type;
export const ChangeFloatingIpDnsPtrResponse = Schema.Struct({
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
export type ChangeFloatingIpDnsPtrResponse = typeof ChangeFloatingIpDnsPtrResponse.Type;

export const ChangeFloatingIpProtectionRequest = Schema.Struct({
    delete: Schema.Boolean,
  });
export type ChangeFloatingIpProtectionRequest = typeof ChangeFloatingIpProtectionRequest.Type;
export const ChangeFloatingIpProtectionResponse = Schema.Struct({
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
export type ChangeFloatingIpProtectionResponse = typeof ChangeFloatingIpProtectionResponse.Type;

export const CreateFloatingIpRequest = Schema.Struct({
    type: Schema.Literals(["ipv4", "ipv6"]),
    server: Schema.optional(Schema.NullOr(Schema.Int)),
    home_location: Schema.optional(Schema.Union([Schema.String, Schema.Int])),
    description: Schema.optional(Schema.NullOr(Schema.String)),
    name: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  });
export type CreateFloatingIpRequest = typeof CreateFloatingIpRequest.Type;
export const CreateFloatingIpResponse = Schema.Struct({
    floating_ip: Schema.Struct({
      id: Schema.Int,
      name: Schema.String,
      description: Schema.NullOr(Schema.String),
      ip: Schema.String,
      type: Schema.Literals(["ipv4", "ipv6"]),
      server: Schema.NullOr(Schema.Int),
      dns_ptr: Schema.Array(Schema.Struct({
        ip: Schema.String,
        dns_ptr: Schema.String,
      })),
      home_location: Schema.Struct({
        id: Schema.Int,
        name: Schema.String,
        description: Schema.String,
        country: Schema.String,
        city: Schema.String,
        latitude: Schema.Number,
        longitude: Schema.Number,
        network_zone: Schema.String,
      }),
      blocked: Schema.Boolean,
      protection: Schema.Struct({
        delete: Schema.Boolean,
      }),
      labels: Schema.Record(Schema.String, Schema.String),
      created: Schema.String,
    }),
    action: Schema.optional(Schema.NullOr(Schema.Struct({
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
    }))),
  });
export type CreateFloatingIpResponse = typeof CreateFloatingIpResponse.Type;

export const GetFloatingIpResponse = Schema.Struct({
    floating_ip: Schema.Struct({
      id: Schema.Int,
      name: Schema.String,
      description: Schema.NullOr(Schema.String),
      ip: Schema.String,
      type: Schema.Literals(["ipv4", "ipv6"]),
      server: Schema.NullOr(Schema.Int),
      dns_ptr: Schema.Array(Schema.Struct({
        ip: Schema.String,
        dns_ptr: Schema.String,
      })),
      home_location: Schema.Struct({
        id: Schema.Int,
        name: Schema.String,
        description: Schema.String,
        country: Schema.String,
        city: Schema.String,
        latitude: Schema.Number,
        longitude: Schema.Number,
        network_zone: Schema.String,
      }),
      blocked: Schema.Boolean,
      protection: Schema.Struct({
        delete: Schema.Boolean,
      }),
      labels: Schema.Record(Schema.String, Schema.String),
      created: Schema.String,
    }),
  });
export type GetFloatingIpResponse = typeof GetFloatingIpResponse.Type;

export const GetFloatingIpActionResponse = Schema.Struct({
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
export type GetFloatingIpActionResponse = typeof GetFloatingIpActionResponse.Type;

export const GetFloatingIpsActionResponse = Schema.Struct({
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
export type GetFloatingIpsActionResponse = typeof GetFloatingIpsActionResponse.Type;

export const ListFloatingIpsResponse = Schema.Struct({
    floating_ips: Schema.Array(Schema.Struct({
      id: Schema.Int,
      name: Schema.String,
      description: Schema.NullOr(Schema.String),
      ip: Schema.String,
      type: Schema.Literals(["ipv4", "ipv6"]),
      server: Schema.NullOr(Schema.Int),
      dns_ptr: Schema.Array(Schema.Struct({
        ip: Schema.String,
        dns_ptr: Schema.String,
      })),
      home_location: Schema.Struct({
        id: Schema.Int,
        name: Schema.String,
        description: Schema.String,
        country: Schema.String,
        city: Schema.String,
        latitude: Schema.Number,
        longitude: Schema.Number,
        network_zone: Schema.String,
      }),
      blocked: Schema.Boolean,
      protection: Schema.Struct({
        delete: Schema.Boolean,
      }),
      labels: Schema.Record(Schema.String, Schema.String),
      created: Schema.String,
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
export type ListFloatingIpsResponse = typeof ListFloatingIpsResponse.Type;
export interface ListFloatingIpsQuery {
  name?: string;
  label_selector?: string;
  sort?: ReadonlyArray<"id" | "id:asc" | "id:desc" | "created" | "created:asc" | "created:desc">;
  page?: number;
  per_page?: number;
}

export const ListFloatingIpActionsResponse = Schema.Struct({
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
export type ListFloatingIpActionsResponse = typeof ListFloatingIpActionsResponse.Type;
export interface ListFloatingIpActionsQuery {
  sort?: ReadonlyArray<"id" | "id:asc" | "id:desc" | "command" | "command:asc" | "command:desc" | "status" | "status:asc" | "status:desc" | "started" | "started:asc" | "started:desc" | "finished" | "finished:asc" | "finished:desc">;
  status?: ReadonlyArray<"running" | "success" | "error">;
  page?: number;
  per_page?: number;
}

export const ListFloatingIpsActionsResponse = Schema.Struct({
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
export type ListFloatingIpsActionsResponse = typeof ListFloatingIpsActionsResponse.Type;
export interface ListFloatingIpsActionsQuery {
  id?: ReadonlyArray<number>;
  sort?: ReadonlyArray<"id" | "id:asc" | "id:desc" | "command" | "command:asc" | "command:desc" | "status" | "status:asc" | "status:desc" | "started" | "started:asc" | "started:desc" | "finished" | "finished:asc" | "finished:desc">;
  status?: ReadonlyArray<"running" | "success" | "error">;
  page?: number;
  per_page?: number;
}

export const UnassignFloatingIpResponse = Schema.Struct({
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
export type UnassignFloatingIpResponse = typeof UnassignFloatingIpResponse.Type;

export const UpdateFloatingIpRequest = Schema.Struct({
    description: Schema.optional(Schema.NullOr(Schema.String)),
    name: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  });
export type UpdateFloatingIpRequest = typeof UpdateFloatingIpRequest.Type;
export const UpdateFloatingIpResponse = Schema.Struct({
    floating_ip: Schema.Struct({
      id: Schema.Int,
      name: Schema.String,
      description: Schema.NullOr(Schema.String),
      ip: Schema.String,
      type: Schema.Literals(["ipv4", "ipv6"]),
      server: Schema.NullOr(Schema.Int),
      dns_ptr: Schema.Array(Schema.Struct({
        ip: Schema.String,
        dns_ptr: Schema.String,
      })),
      home_location: Schema.Struct({
        id: Schema.Int,
        name: Schema.String,
        description: Schema.String,
        country: Schema.String,
        city: Schema.String,
        latitude: Schema.Number,
        longitude: Schema.Number,
        network_zone: Schema.String,
      }),
      blocked: Schema.Boolean,
      protection: Schema.Struct({
        delete: Schema.Boolean,
      }),
      labels: Schema.Record(Schema.String, Schema.String),
      created: Schema.String,
    }),
  });
export type UpdateFloatingIpResponse = typeof UpdateFloatingIpResponse.Type;


export const makeFloatingIps = (http: HttpClient.HttpClient) => ({
    /** Assign a Floating IP to a Server */
    assign: (id: number, body: AssignFloatingIpRequest): Effect.Effect<AssignFloatingIpResponse, HetznerError> =>
      HttpClientRequest.post(`/floating_ips/${id}/actions/assign`).pipe(
        HttpClientRequest.schemaBodyJson(AssignFloatingIpRequest)(body),
        Effect.flatMap(http.execute),
        Effect.flatMap(decodeJson(AssignFloatingIpResponse)),
        Effect.catch(handleHetznerError),
        Effect.withSpan("HetznerClient.floatingIps.assign"),
      ),

    /** Change reverse DNS records for a Floating IP */
    changeDnsPtr: (id: number, body: ChangeFloatingIpDnsPtrRequest): Effect.Effect<ChangeFloatingIpDnsPtrResponse, HetznerError> =>
      HttpClientRequest.post(`/floating_ips/${id}/actions/change_dns_ptr`).pipe(
        HttpClientRequest.schemaBodyJson(ChangeFloatingIpDnsPtrRequest)(body),
        Effect.flatMap(http.execute),
        Effect.flatMap(decodeJson(ChangeFloatingIpDnsPtrResponse)),
        Effect.catch(handleHetznerError),
        Effect.withSpan("HetznerClient.floatingIps.changeDnsPtr"),
      ),

    /** Change Floating IP Protection */
    changeProtection: (id: number, body: ChangeFloatingIpProtectionRequest): Effect.Effect<ChangeFloatingIpProtectionResponse, HetznerError> =>
      HttpClientRequest.post(`/floating_ips/${id}/actions/change_protection`).pipe(
        HttpClientRequest.schemaBodyJson(ChangeFloatingIpProtectionRequest)(body),
        Effect.flatMap(http.execute),
        Effect.flatMap(decodeJson(ChangeFloatingIpProtectionResponse)),
        Effect.catch(handleHetznerError),
        Effect.withSpan("HetznerClient.floatingIps.changeProtection"),
      ),

    /** Create a Floating IP */
    create: (body: CreateFloatingIpRequest): Effect.Effect<CreateFloatingIpResponse, HetznerError> =>
      HttpClientRequest.post("/floating_ips").pipe(
        HttpClientRequest.schemaBodyJson(CreateFloatingIpRequest)(body),
        Effect.flatMap(http.execute),
        Effect.flatMap(decodeJson(CreateFloatingIpResponse)),
        Effect.catch(handleHetznerError),
        Effect.withSpan("HetznerClient.floatingIps.create"),
      ),

    /** Delete a Floating IP */
    delete: (id: number): Effect.Effect<void, HetznerError> =>
      http.del(`/floating_ips/${id}`).pipe(
        Effect.asVoid,
        Effect.catch(handleHetznerError),
        Effect.withSpan("HetznerClient.floatingIps.delete"),
      ),

    /** Get a Floating IP */
    get: (id: number): Effect.Effect<GetFloatingIpResponse, HetznerError> =>
      HttpClientRequest.get(`/floating_ips/${id}`).pipe(
        http.execute,
        Effect.flatMap(decodeJson(GetFloatingIpResponse)),
        Effect.catch(handleHetznerError),
        Effect.withSpan("HetznerClient.floatingIps.get"),
      ),

    /** Get an Action for a Floating IP */
    getAction: (id: number, action_id: number): Effect.Effect<GetFloatingIpActionResponse, HetznerError> =>
      HttpClientRequest.get(`/floating_ips/${id}/actions/${action_id}`).pipe(
        http.execute,
        Effect.flatMap(decodeJson(GetFloatingIpActionResponse)),
        Effect.catch(handleHetznerError),
        Effect.withSpan("HetznerClient.floatingIps.getAction"),
      ),

    /** Get an Action */
    getFloatingIpsAction: (id: number): Effect.Effect<GetFloatingIpsActionResponse, HetznerError> =>
      HttpClientRequest.get(`/floating_ips/actions/${id}`).pipe(
        http.execute,
        Effect.flatMap(decodeJson(GetFloatingIpsActionResponse)),
        Effect.catch(handleHetznerError),
        Effect.withSpan("HetznerClient.floatingIps.getFloatingIpsAction"),
      ),

    /** List Floating IPs */
    list: (query?: ListFloatingIpsQuery): Effect.Effect<ListFloatingIpsResponse, HetznerError> =>
      HttpClientRequest.get("/floating_ips").pipe(
        HttpClientRequest.setUrlParams(toUrlParams(query)),
        http.execute,
        Effect.flatMap(decodeJson(ListFloatingIpsResponse)),
        Effect.catch(handleHetznerError),
        Effect.withSpan("HetznerClient.floatingIps.list"),
      ),

    /** List Actions for a Floating IP */
    listActions: (id: number, query?: ListFloatingIpActionsQuery): Effect.Effect<ListFloatingIpActionsResponse, HetznerError> =>
      HttpClientRequest.get(`/floating_ips/${id}/actions`).pipe(
        HttpClientRequest.setUrlParams(toUrlParams(query)),
        http.execute,
        Effect.flatMap(decodeJson(ListFloatingIpActionsResponse)),
        Effect.catch(handleHetznerError),
        Effect.withSpan("HetznerClient.floatingIps.listActions"),
      ),

    /** List Actions */
    listFloatingIpsActions: (query?: ListFloatingIpsActionsQuery): Effect.Effect<ListFloatingIpsActionsResponse, HetznerError> =>
      HttpClientRequest.get("/floating_ips/actions").pipe(
        HttpClientRequest.setUrlParams(toUrlParams(query)),
        http.execute,
        Effect.flatMap(decodeJson(ListFloatingIpsActionsResponse)),
        Effect.catch(handleHetznerError),
        Effect.withSpan("HetznerClient.floatingIps.listFloatingIpsActions"),
      ),

    /** Unassign a Floating IP */
    unassign: (id: number): Effect.Effect<UnassignFloatingIpResponse, HetznerError> =>
      HttpClientRequest.post(`/floating_ips/${id}/actions/unassign`).pipe(
        http.execute,
        Effect.flatMap(decodeJson(UnassignFloatingIpResponse)),
        Effect.catch(handleHetznerError),
        Effect.withSpan("HetznerClient.floatingIps.unassign"),
      ),

    /** Update a Floating IP */
    update: (id: number, body: UpdateFloatingIpRequest): Effect.Effect<UpdateFloatingIpResponse, HetznerError> =>
      HttpClientRequest.put(`/floating_ips/${id}`).pipe(
        HttpClientRequest.schemaBodyJson(UpdateFloatingIpRequest)(body),
        Effect.flatMap(http.execute),
        Effect.flatMap(decodeJson(UpdateFloatingIpResponse)),
        Effect.catch(handleHetznerError),
        Effect.withSpan("HetznerClient.floatingIps.update"),
      ),
});

export type FloatingIpsApi = ReturnType<typeof makeFloatingIps>;
