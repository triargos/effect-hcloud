/**
 * PrimaryIps — generated from the Hetzner Cloud OpenAPI spec. Do not edit by hand.
 */
import { Effect, Schema } from "effect";
import { HttpClient, HttpClientRequest } from "effect/unstable/http";
import { handleHetznerError, type HetznerErrors } from "../errors.js";
import { decodeJson } from "../internal/http.js";
import { toUrlParams } from "../internal/url-params.js";


export const AssignPrimaryIpRequest = Schema.Struct({
    assigneeType: Schema.Literal("server"),
    assigneeId: Schema.Int,
  }).pipe(Schema.encodeKeys({ assigneeType: "assignee_type", assigneeId: "assignee_id" }));
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
    dnsPtr: Schema.optional(Schema.NullOr(Schema.String)),
  }).pipe(Schema.encodeKeys({ dnsPtr: "dns_ptr" }));
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
    assigneeType: Schema.optional(Schema.Literal("server")),
    assigneeId: Schema.optional(Schema.NullOr(Schema.Int)),
    autoDelete: Schema.optional(Schema.Boolean),
  }).pipe(Schema.encodeKeys({ assigneeType: "assignee_type", assigneeId: "assignee_id", autoDelete: "auto_delete" }));
export type CreatePrimaryIpRequest = typeof CreatePrimaryIpRequest.Type;
export const CreatePrimaryIpResponse = Schema.Struct({
    primaryIp: Schema.Struct({
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
        networkZone: Schema.String,
      }).pipe(Schema.encodeKeys({ networkZone: "network_zone" })),
      ip: Schema.String,
      dnsPtr: Schema.Array(Schema.Struct({
        ip: Schema.String,
        dnsPtr: Schema.String,
      }).pipe(Schema.encodeKeys({ dnsPtr: "dns_ptr" }))),
      protection: Schema.Struct({
        delete: Schema.Boolean,
      }),
      type: Schema.Literals(["ipv4", "ipv6"]),
      autoDelete: Schema.Boolean,
      assigneeType: Schema.Literal("server"),
      assigneeId: Schema.NullOr(Schema.Int),
    }).pipe(Schema.encodeKeys({ dnsPtr: "dns_ptr", autoDelete: "auto_delete", assigneeType: "assignee_type", assigneeId: "assignee_id" })),
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
  }).pipe(Schema.encodeKeys({ primaryIp: "primary_ip" }));
export type CreatePrimaryIpResponse = typeof CreatePrimaryIpResponse.Type;

export const GetPrimaryIpResponse = Schema.Struct({
    primaryIp: Schema.Struct({
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
        networkZone: Schema.String,
      }).pipe(Schema.encodeKeys({ networkZone: "network_zone" })),
      ip: Schema.String,
      dnsPtr: Schema.Array(Schema.Struct({
        ip: Schema.String,
        dnsPtr: Schema.String,
      }).pipe(Schema.encodeKeys({ dnsPtr: "dns_ptr" }))),
      protection: Schema.Struct({
        delete: Schema.Boolean,
      }),
      type: Schema.Literals(["ipv4", "ipv6"]),
      autoDelete: Schema.Boolean,
      assigneeType: Schema.Literal("server"),
      assigneeId: Schema.NullOr(Schema.Int),
    }).pipe(Schema.encodeKeys({ dnsPtr: "dns_ptr", autoDelete: "auto_delete", assigneeType: "assignee_type", assigneeId: "assignee_id" })),
  }).pipe(Schema.encodeKeys({ primaryIp: "primary_ip" }));
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
    primaryIps: Schema.Array(Schema.Struct({
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
        networkZone: Schema.String,
      }).pipe(Schema.encodeKeys({ networkZone: "network_zone" })),
      ip: Schema.String,
      dnsPtr: Schema.Array(Schema.Struct({
        ip: Schema.String,
        dnsPtr: Schema.String,
      }).pipe(Schema.encodeKeys({ dnsPtr: "dns_ptr" }))),
      protection: Schema.Struct({
        delete: Schema.Boolean,
      }),
      type: Schema.Literals(["ipv4", "ipv6"]),
      autoDelete: Schema.Boolean,
      assigneeType: Schema.Literal("server"),
      assigneeId: Schema.NullOr(Schema.Int),
    }).pipe(Schema.encodeKeys({ dnsPtr: "dns_ptr", autoDelete: "auto_delete", assigneeType: "assignee_type", assigneeId: "assignee_id" }))),
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
  }).pipe(Schema.encodeKeys({ primaryIps: "primary_ips" }));
export type ListPrimaryIpsResponse = typeof ListPrimaryIpsResponse.Type;
export interface ListPrimaryIpsQuery {
  name?: string;
  labelSelector?: string;
  ip?: string;
  page?: number;
  perPage?: number;
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
        perPage: Schema.Int,
        previousPage: Schema.NullOr(Schema.Int),
        nextPage: Schema.NullOr(Schema.Int),
        lastPage: Schema.NullOr(Schema.Int),
        totalEntries: Schema.NullOr(Schema.Int),
      }).pipe(Schema.encodeKeys({ perPage: "per_page", previousPage: "previous_page", nextPage: "next_page", lastPage: "last_page", totalEntries: "total_entries" })),
    }),
  });
export type ListPrimaryIpActionsResponse = typeof ListPrimaryIpActionsResponse.Type;
export interface ListPrimaryIpActionsQuery {
  sort?: ReadonlyArray<"id" | "id:asc" | "id:desc" | "command" | "command:asc" | "command:desc" | "status" | "status:asc" | "status:desc" | "started" | "started:asc" | "started:desc" | "finished" | "finished:asc" | "finished:desc">;
  status?: ReadonlyArray<"running" | "success" | "error">;
  page?: number;
  perPage?: number;
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
        perPage: Schema.Int,
        previousPage: Schema.NullOr(Schema.Int),
        nextPage: Schema.NullOr(Schema.Int),
        lastPage: Schema.NullOr(Schema.Int),
        totalEntries: Schema.NullOr(Schema.Int),
      }).pipe(Schema.encodeKeys({ perPage: "per_page", previousPage: "previous_page", nextPage: "next_page", lastPage: "last_page", totalEntries: "total_entries" })),
    }),
  });
export type ListPrimaryIpsActionsResponse = typeof ListPrimaryIpsActionsResponse.Type;
export interface ListPrimaryIpsActionsQuery {
  id?: ReadonlyArray<number>;
  sort?: ReadonlyArray<"id" | "id:asc" | "id:desc" | "command" | "command:asc" | "command:desc" | "status" | "status:asc" | "status:desc" | "started" | "started:asc" | "started:desc" | "finished" | "finished:asc" | "finished:desc">;
  status?: ReadonlyArray<"running" | "success" | "error">;
  page?: number;
  perPage?: number;
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
    autoDelete: Schema.optional(Schema.Boolean),
  }).pipe(Schema.encodeKeys({ autoDelete: "auto_delete" }));
export type UpdatePrimaryIpRequest = typeof UpdatePrimaryIpRequest.Type;
export const UpdatePrimaryIpResponse = Schema.Struct({
    primaryIp: Schema.Struct({
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
        networkZone: Schema.String,
      }).pipe(Schema.encodeKeys({ networkZone: "network_zone" })),
      ip: Schema.String,
      dnsPtr: Schema.Array(Schema.Struct({
        ip: Schema.String,
        dnsPtr: Schema.String,
      }).pipe(Schema.encodeKeys({ dnsPtr: "dns_ptr" }))),
      protection: Schema.Struct({
        delete: Schema.Boolean,
      }),
      type: Schema.Literals(["ipv4", "ipv6"]),
      autoDelete: Schema.Boolean,
      assigneeType: Schema.Literal("server"),
      assigneeId: Schema.NullOr(Schema.Int),
    }).pipe(Schema.encodeKeys({ dnsPtr: "dns_ptr", autoDelete: "auto_delete", assigneeType: "assignee_type", assigneeId: "assignee_id" })),
  }).pipe(Schema.encodeKeys({ primaryIp: "primary_ip" }));
export type UpdatePrimaryIpResponse = typeof UpdatePrimaryIpResponse.Type;


export const makePrimaryIps = (http: HttpClient.HttpClient) => ({
    /** Assign a Primary IP to a resource */
    assign: (id: number, body: AssignPrimaryIpRequest): Effect.Effect<AssignPrimaryIpResponse, HetznerErrors> =>
      HttpClientRequest.post(`/primary_ips/${id}/actions/assign`).pipe(
        HttpClientRequest.schemaBodyJson(AssignPrimaryIpRequest)(body),
        Effect.flatMap(http.execute),
        Effect.flatMap(decodeJson(AssignPrimaryIpResponse)),
        Effect.catch(handleHetznerError),
        Effect.withSpan("HetznerClient.primaryIps.assign"),
      ),

    /** Change reverse DNS records for a Primary IP */
    changeDnsPtr: (id: number, body: ChangePrimaryIpDnsPtrRequest): Effect.Effect<ChangePrimaryIpDnsPtrResponse, HetznerErrors> =>
      HttpClientRequest.post(`/primary_ips/${id}/actions/change_dns_ptr`).pipe(
        HttpClientRequest.schemaBodyJson(ChangePrimaryIpDnsPtrRequest)(body),
        Effect.flatMap(http.execute),
        Effect.flatMap(decodeJson(ChangePrimaryIpDnsPtrResponse)),
        Effect.catch(handleHetznerError),
        Effect.withSpan("HetznerClient.primaryIps.changeDnsPtr"),
      ),

    /** Change Primary IP Protection */
    changeProtection: (id: number, body: ChangePrimaryIpProtectionRequest): Effect.Effect<ChangePrimaryIpProtectionResponse, HetznerErrors> =>
      HttpClientRequest.post(`/primary_ips/${id}/actions/change_protection`).pipe(
        HttpClientRequest.schemaBodyJson(ChangePrimaryIpProtectionRequest)(body),
        Effect.flatMap(http.execute),
        Effect.flatMap(decodeJson(ChangePrimaryIpProtectionResponse)),
        Effect.catch(handleHetznerError),
        Effect.withSpan("HetznerClient.primaryIps.changeProtection"),
      ),

    /** Create a Primary IP */
    create: (body: CreatePrimaryIpRequest): Effect.Effect<CreatePrimaryIpResponse, HetznerErrors> =>
      HttpClientRequest.post("/primary_ips").pipe(
        HttpClientRequest.schemaBodyJson(CreatePrimaryIpRequest)(body),
        Effect.flatMap(http.execute),
        Effect.flatMap(decodeJson(CreatePrimaryIpResponse)),
        Effect.catch(handleHetznerError),
        Effect.withSpan("HetznerClient.primaryIps.create"),
      ),

    /** Delete a Primary IP */
    delete: (id: number): Effect.Effect<void, HetznerErrors> =>
      http.del(`/primary_ips/${id}`).pipe(
        Effect.asVoid,
        Effect.catch(handleHetznerError),
        Effect.withSpan("HetznerClient.primaryIps.delete"),
      ),

    /** Get a Primary IP */
    get: (id: number): Effect.Effect<GetPrimaryIpResponse, HetznerErrors> =>
      HttpClientRequest.get(`/primary_ips/${id}`).pipe(
        http.execute,
        Effect.flatMap(decodeJson(GetPrimaryIpResponse)),
        Effect.catch(handleHetznerError),
        Effect.withSpan("HetznerClient.primaryIps.get"),
      ),

    /** Get an Action for a Primary IP */
    getAction: (id: number, actionId: number): Effect.Effect<GetPrimaryIpActionResponse, HetznerErrors> =>
      HttpClientRequest.get(`/primary_ips/${id}/actions/${actionId}`).pipe(
        http.execute,
        Effect.flatMap(decodeJson(GetPrimaryIpActionResponse)),
        Effect.catch(handleHetznerError),
        Effect.withSpan("HetznerClient.primaryIps.getAction"),
      ),

    /** Get an Action */
    getPrimaryIpsAction: (id: number): Effect.Effect<GetPrimaryIpsActionResponse, HetznerErrors> =>
      HttpClientRequest.get(`/primary_ips/actions/${id}`).pipe(
        http.execute,
        Effect.flatMap(decodeJson(GetPrimaryIpsActionResponse)),
        Effect.catch(handleHetznerError),
        Effect.withSpan("HetznerClient.primaryIps.getPrimaryIpsAction"),
      ),

    /** List Primary IPs */
    list: (query?: ListPrimaryIpsQuery): Effect.Effect<ListPrimaryIpsResponse, HetznerErrors> =>
      HttpClientRequest.get("/primary_ips").pipe(
        HttpClientRequest.setUrlParams(toUrlParams({ name: query?.name, label_selector: query?.labelSelector, ip: query?.ip, page: query?.page, per_page: query?.perPage, sort: query?.sort })),
        http.execute,
        Effect.flatMap(decodeJson(ListPrimaryIpsResponse)),
        Effect.catch(handleHetznerError),
        Effect.withSpan("HetznerClient.primaryIps.list"),
      ),

    /** List Actions for a Primary IP */
    listActions: (id: number, query?: ListPrimaryIpActionsQuery): Effect.Effect<ListPrimaryIpActionsResponse, HetznerErrors> =>
      HttpClientRequest.get(`/primary_ips/${id}/actions`).pipe(
        HttpClientRequest.setUrlParams(toUrlParams({ sort: query?.sort, status: query?.status, page: query?.page, per_page: query?.perPage })),
        http.execute,
        Effect.flatMap(decodeJson(ListPrimaryIpActionsResponse)),
        Effect.catch(handleHetznerError),
        Effect.withSpan("HetznerClient.primaryIps.listActions"),
      ),

    /** List Actions */
    listPrimaryIpsActions: (query?: ListPrimaryIpsActionsQuery): Effect.Effect<ListPrimaryIpsActionsResponse, HetznerErrors> =>
      HttpClientRequest.get("/primary_ips/actions").pipe(
        HttpClientRequest.setUrlParams(toUrlParams({ id: query?.id, sort: query?.sort, status: query?.status, page: query?.page, per_page: query?.perPage })),
        http.execute,
        Effect.flatMap(decodeJson(ListPrimaryIpsActionsResponse)),
        Effect.catch(handleHetznerError),
        Effect.withSpan("HetznerClient.primaryIps.listPrimaryIpsActions"),
      ),

    /** Unassign a Primary IP from a resource */
    unassign: (id: number): Effect.Effect<UnassignPrimaryIpResponse, HetznerErrors> =>
      HttpClientRequest.post(`/primary_ips/${id}/actions/unassign`).pipe(
        http.execute,
        Effect.flatMap(decodeJson(UnassignPrimaryIpResponse)),
        Effect.catch(handleHetznerError),
        Effect.withSpan("HetznerClient.primaryIps.unassign"),
      ),

    /** Update a Primary IP */
    update: (id: number, body: UpdatePrimaryIpRequest): Effect.Effect<UpdatePrimaryIpResponse, HetznerErrors> =>
      HttpClientRequest.put(`/primary_ips/${id}`).pipe(
        HttpClientRequest.schemaBodyJson(UpdatePrimaryIpRequest)(body),
        Effect.flatMap(http.execute),
        Effect.flatMap(decodeJson(UpdatePrimaryIpResponse)),
        Effect.catch(handleHetznerError),
        Effect.withSpan("HetznerClient.primaryIps.update"),
      ),
});

export type PrimaryIpsApi = ReturnType<typeof makePrimaryIps>;
