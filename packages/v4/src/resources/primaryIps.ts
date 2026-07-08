/**
 * PrimaryIps — generated from the Hetzner Cloud OpenAPI spec. Do not edit by hand.
 */
import { Effect, Schema } from "effect";
import { HttpClient, HttpClientRequest } from "effect/unstable/http";
import { handleHetznerError, type HetznerError } from "../errors.js";
import { decodeJson } from "../internal/http.js";
import { toUrlParams } from "../internal/url-params.js";


export const AssignPrimaryIpRequest = Schema.Struct({
    assignee_type: Schema.Literal("server"),
    assignee_id: Schema.Int,
  });
export type AssignPrimaryIpRequest = typeof AssignPrimaryIpRequest.Type;
export const AssignPrimaryIpResponse = Schema.Struct({
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
export type AssignPrimaryIpResponse = typeof AssignPrimaryIpResponse.Type;

export const ChangePrimaryIpDnsPtrRequest = Schema.Struct({
    ip: Schema.String,
    dns_ptr: Schema.optional(Schema.NullOr(Schema.String)),
  });
export type ChangePrimaryIpDnsPtrRequest = typeof ChangePrimaryIpDnsPtrRequest.Type;
export const ChangePrimaryIpDnsPtrResponse = Schema.Struct({
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
export type ChangePrimaryIpDnsPtrResponse = typeof ChangePrimaryIpDnsPtrResponse.Type;

export const ChangePrimaryIpProtectionRequest = Schema.Struct({
    delete: Schema.Boolean,
  });
export type ChangePrimaryIpProtectionRequest = typeof ChangePrimaryIpProtectionRequest.Type;
export const ChangePrimaryIpProtectionResponse = Schema.Struct({
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
export type ChangePrimaryIpProtectionResponse = typeof ChangePrimaryIpProtectionResponse.Type;

export const CreatePrimaryIpRequest = Schema.Struct({
    name: Schema.String,
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    type: Schema.Literals(["ipv4", "ipv6"]),
    location: Schema.optional(Schema.Union([Schema.String, Schema.Int])),
    assignee_type: Schema.optional(Schema.Literal("server")),
    assignee_id: Schema.optional(Schema.NullOr(Schema.Int)),
    auto_delete: Schema.optional(Schema.Boolean),
  });
export type CreatePrimaryIpRequest = typeof CreatePrimaryIpRequest.Type;
export const CreatePrimaryIpResponse = Schema.Struct({
    primary_ip: Schema.Struct({
      id: Schema.Int,
      name: Schema.String,
      labels: Schema.Record(Schema.String, Schema.String),
      created: Schema.String,
      blocked: Schema.Boolean,
      location: Schema.Struct({
        id: Schema.Int,
        name: Schema.String,
        description: Schema.String,
        country: Schema.String,
        city: Schema.String,
        latitude: Schema.Number,
        longitude: Schema.Number,
        network_zone: Schema.String,
      }),
      ip: Schema.String,
      dns_ptr: Schema.Array(Schema.Struct({
        ip: Schema.String,
        dns_ptr: Schema.String,
      })),
      protection: Schema.Struct({
        delete: Schema.Boolean,
      }),
      type: Schema.Literals(["ipv4", "ipv6"]),
      auto_delete: Schema.Boolean,
      assignee_type: Schema.Literal("server"),
      assignee_id: Schema.NullOr(Schema.Int),
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
export type CreatePrimaryIpResponse = typeof CreatePrimaryIpResponse.Type;

export const GetPrimaryIpResponse = Schema.Struct({
    primary_ip: Schema.Struct({
      id: Schema.Int,
      name: Schema.String,
      labels: Schema.Record(Schema.String, Schema.String),
      created: Schema.String,
      blocked: Schema.Boolean,
      location: Schema.Struct({
        id: Schema.Int,
        name: Schema.String,
        description: Schema.String,
        country: Schema.String,
        city: Schema.String,
        latitude: Schema.Number,
        longitude: Schema.Number,
        network_zone: Schema.String,
      }),
      ip: Schema.String,
      dns_ptr: Schema.Array(Schema.Struct({
        ip: Schema.String,
        dns_ptr: Schema.String,
      })),
      protection: Schema.Struct({
        delete: Schema.Boolean,
      }),
      type: Schema.Literals(["ipv4", "ipv6"]),
      auto_delete: Schema.Boolean,
      assignee_type: Schema.Literal("server"),
      assignee_id: Schema.NullOr(Schema.Int),
    }),
  });
export type GetPrimaryIpResponse = typeof GetPrimaryIpResponse.Type;

export const GetPrimaryIpActionResponse = Schema.Struct({
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
export type GetPrimaryIpActionResponse = typeof GetPrimaryIpActionResponse.Type;

export const GetPrimaryIpsActionResponse = Schema.Struct({
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
export type GetPrimaryIpsActionResponse = typeof GetPrimaryIpsActionResponse.Type;

export const ListPrimaryIpsResponse = Schema.Struct({
    primary_ips: Schema.Array(Schema.Struct({
      id: Schema.Int,
      name: Schema.String,
      labels: Schema.Record(Schema.String, Schema.String),
      created: Schema.String,
      blocked: Schema.Boolean,
      location: Schema.Struct({
        id: Schema.Int,
        name: Schema.String,
        description: Schema.String,
        country: Schema.String,
        city: Schema.String,
        latitude: Schema.Number,
        longitude: Schema.Number,
        network_zone: Schema.String,
      }),
      ip: Schema.String,
      dns_ptr: Schema.Array(Schema.Struct({
        ip: Schema.String,
        dns_ptr: Schema.String,
      })),
      protection: Schema.Struct({
        delete: Schema.Boolean,
      }),
      type: Schema.Literals(["ipv4", "ipv6"]),
      auto_delete: Schema.Boolean,
      assignee_type: Schema.Literal("server"),
      assignee_id: Schema.NullOr(Schema.Int),
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
export type ListPrimaryIpsResponse = typeof ListPrimaryIpsResponse.Type;
export interface ListPrimaryIpsQuery {
  name?: string;
  label_selector?: string;
  ip?: string;
  page?: number;
  per_page?: number;
  sort?: ReadonlyArray<"id" | "id:asc" | "id:desc" | "created" | "created:asc" | "created:desc">;
}

export const ListPrimaryIpActionsResponse = Schema.Struct({
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
export type ListPrimaryIpActionsResponse = typeof ListPrimaryIpActionsResponse.Type;
export interface ListPrimaryIpActionsQuery {
  sort?: ReadonlyArray<"id" | "id:asc" | "id:desc" | "command" | "command:asc" | "command:desc" | "status" | "status:asc" | "status:desc" | "started" | "started:asc" | "started:desc" | "finished" | "finished:asc" | "finished:desc">;
  status?: ReadonlyArray<"running" | "success" | "error">;
  page?: number;
  per_page?: number;
}

export const ListPrimaryIpsActionsResponse = Schema.Struct({
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
export type ListPrimaryIpsActionsResponse = typeof ListPrimaryIpsActionsResponse.Type;
export interface ListPrimaryIpsActionsQuery {
  id?: ReadonlyArray<number>;
  sort?: ReadonlyArray<"id" | "id:asc" | "id:desc" | "command" | "command:asc" | "command:desc" | "status" | "status:asc" | "status:desc" | "started" | "started:asc" | "started:desc" | "finished" | "finished:asc" | "finished:desc">;
  status?: ReadonlyArray<"running" | "success" | "error">;
  page?: number;
  per_page?: number;
}

export const UnassignPrimaryIpResponse = Schema.Struct({
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
export type UnassignPrimaryIpResponse = typeof UnassignPrimaryIpResponse.Type;

export const UpdatePrimaryIpRequest = Schema.Struct({
    name: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    auto_delete: Schema.optional(Schema.Boolean),
  });
export type UpdatePrimaryIpRequest = typeof UpdatePrimaryIpRequest.Type;
export const UpdatePrimaryIpResponse = Schema.Struct({
    primary_ip: Schema.Struct({
      id: Schema.Int,
      name: Schema.String,
      labels: Schema.Record(Schema.String, Schema.String),
      created: Schema.String,
      blocked: Schema.Boolean,
      location: Schema.Struct({
        id: Schema.Int,
        name: Schema.String,
        description: Schema.String,
        country: Schema.String,
        city: Schema.String,
        latitude: Schema.Number,
        longitude: Schema.Number,
        network_zone: Schema.String,
      }),
      ip: Schema.String,
      dns_ptr: Schema.Array(Schema.Struct({
        ip: Schema.String,
        dns_ptr: Schema.String,
      })),
      protection: Schema.Struct({
        delete: Schema.Boolean,
      }),
      type: Schema.Literals(["ipv4", "ipv6"]),
      auto_delete: Schema.Boolean,
      assignee_type: Schema.Literal("server"),
      assignee_id: Schema.NullOr(Schema.Int),
    }),
  });
export type UpdatePrimaryIpResponse = typeof UpdatePrimaryIpResponse.Type;


export const makePrimaryIps = (http: HttpClient.HttpClient) => ({
    /** Assign a Primary IP to a resource */
    assign: (id: number, body: AssignPrimaryIpRequest): Effect.Effect<AssignPrimaryIpResponse, HetznerError> =>
      HttpClientRequest.post(`/primary_ips/${id}/actions/assign`).pipe(
        HttpClientRequest.schemaBodyJson(AssignPrimaryIpRequest)(body),
        Effect.flatMap(http.execute),
        Effect.flatMap(decodeJson(AssignPrimaryIpResponse)),
        Effect.catch(handleHetznerError),
        Effect.withSpan("HetznerClient.primaryIps.assign"),
      ),

    /** Change reverse DNS records for a Primary IP */
    changeDnsPtr: (id: number, body: ChangePrimaryIpDnsPtrRequest): Effect.Effect<ChangePrimaryIpDnsPtrResponse, HetznerError> =>
      HttpClientRequest.post(`/primary_ips/${id}/actions/change_dns_ptr`).pipe(
        HttpClientRequest.schemaBodyJson(ChangePrimaryIpDnsPtrRequest)(body),
        Effect.flatMap(http.execute),
        Effect.flatMap(decodeJson(ChangePrimaryIpDnsPtrResponse)),
        Effect.catch(handleHetznerError),
        Effect.withSpan("HetznerClient.primaryIps.changeDnsPtr"),
      ),

    /** Change Primary IP Protection */
    changeProtection: (id: number, body: ChangePrimaryIpProtectionRequest): Effect.Effect<ChangePrimaryIpProtectionResponse, HetznerError> =>
      HttpClientRequest.post(`/primary_ips/${id}/actions/change_protection`).pipe(
        HttpClientRequest.schemaBodyJson(ChangePrimaryIpProtectionRequest)(body),
        Effect.flatMap(http.execute),
        Effect.flatMap(decodeJson(ChangePrimaryIpProtectionResponse)),
        Effect.catch(handleHetznerError),
        Effect.withSpan("HetznerClient.primaryIps.changeProtection"),
      ),

    /** Create a Primary IP */
    create: (body: CreatePrimaryIpRequest): Effect.Effect<CreatePrimaryIpResponse, HetznerError> =>
      HttpClientRequest.post("/primary_ips").pipe(
        HttpClientRequest.schemaBodyJson(CreatePrimaryIpRequest)(body),
        Effect.flatMap(http.execute),
        Effect.flatMap(decodeJson(CreatePrimaryIpResponse)),
        Effect.catch(handleHetznerError),
        Effect.withSpan("HetznerClient.primaryIps.create"),
      ),

    /** Delete a Primary IP */
    delete: (id: number): Effect.Effect<void, HetznerError> =>
      http.del(`/primary_ips/${id}`).pipe(
        Effect.asVoid,
        Effect.catch(handleHetznerError),
        Effect.withSpan("HetznerClient.primaryIps.delete"),
      ),

    /** Get a Primary IP */
    get: (id: number): Effect.Effect<GetPrimaryIpResponse, HetznerError> =>
      HttpClientRequest.get(`/primary_ips/${id}`).pipe(
        http.execute,
        Effect.flatMap(decodeJson(GetPrimaryIpResponse)),
        Effect.catch(handleHetznerError),
        Effect.withSpan("HetznerClient.primaryIps.get"),
      ),

    /** Get an Action for a Primary IP */
    getAction: (id: number, action_id: number): Effect.Effect<GetPrimaryIpActionResponse, HetznerError> =>
      HttpClientRequest.get(`/primary_ips/${id}/actions/${action_id}`).pipe(
        http.execute,
        Effect.flatMap(decodeJson(GetPrimaryIpActionResponse)),
        Effect.catch(handleHetznerError),
        Effect.withSpan("HetznerClient.primaryIps.getAction"),
      ),

    /** Get an Action */
    getPrimaryIpsAction: (id: number): Effect.Effect<GetPrimaryIpsActionResponse, HetznerError> =>
      HttpClientRequest.get(`/primary_ips/actions/${id}`).pipe(
        http.execute,
        Effect.flatMap(decodeJson(GetPrimaryIpsActionResponse)),
        Effect.catch(handleHetznerError),
        Effect.withSpan("HetznerClient.primaryIps.getPrimaryIpsAction"),
      ),

    /** List Primary IPs */
    list: (query?: ListPrimaryIpsQuery): Effect.Effect<ListPrimaryIpsResponse, HetznerError> =>
      HttpClientRequest.get("/primary_ips").pipe(
        HttpClientRequest.setUrlParams(toUrlParams(query)),
        http.execute,
        Effect.flatMap(decodeJson(ListPrimaryIpsResponse)),
        Effect.catch(handleHetznerError),
        Effect.withSpan("HetznerClient.primaryIps.list"),
      ),

    /** List Actions for a Primary IP */
    listActions: (id: number, query?: ListPrimaryIpActionsQuery): Effect.Effect<ListPrimaryIpActionsResponse, HetznerError> =>
      HttpClientRequest.get(`/primary_ips/${id}/actions`).pipe(
        HttpClientRequest.setUrlParams(toUrlParams(query)),
        http.execute,
        Effect.flatMap(decodeJson(ListPrimaryIpActionsResponse)),
        Effect.catch(handleHetznerError),
        Effect.withSpan("HetznerClient.primaryIps.listActions"),
      ),

    /** List Actions */
    listPrimaryIpsActions: (query?: ListPrimaryIpsActionsQuery): Effect.Effect<ListPrimaryIpsActionsResponse, HetznerError> =>
      HttpClientRequest.get("/primary_ips/actions").pipe(
        HttpClientRequest.setUrlParams(toUrlParams(query)),
        http.execute,
        Effect.flatMap(decodeJson(ListPrimaryIpsActionsResponse)),
        Effect.catch(handleHetznerError),
        Effect.withSpan("HetznerClient.primaryIps.listPrimaryIpsActions"),
      ),

    /** Unassign a Primary IP from a resource */
    unassign: (id: number): Effect.Effect<UnassignPrimaryIpResponse, HetznerError> =>
      HttpClientRequest.post(`/primary_ips/${id}/actions/unassign`).pipe(
        http.execute,
        Effect.flatMap(decodeJson(UnassignPrimaryIpResponse)),
        Effect.catch(handleHetznerError),
        Effect.withSpan("HetznerClient.primaryIps.unassign"),
      ),

    /** Update a Primary IP */
    update: (id: number, body: UpdatePrimaryIpRequest): Effect.Effect<UpdatePrimaryIpResponse, HetznerError> =>
      HttpClientRequest.put(`/primary_ips/${id}`).pipe(
        HttpClientRequest.schemaBodyJson(UpdatePrimaryIpRequest)(body),
        Effect.flatMap(http.execute),
        Effect.flatMap(decodeJson(UpdatePrimaryIpResponse)),
        Effect.catch(handleHetznerError),
        Effect.withSpan("HetznerClient.primaryIps.update"),
      ),
});

export type PrimaryIpsApi = ReturnType<typeof makePrimaryIps>;
