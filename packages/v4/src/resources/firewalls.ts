/**
 * Firewalls — generated from the Hetzner Cloud OpenAPI spec. Do not edit by hand.
 */
import { Effect, Schema } from "effect";
import { HttpClient, HttpClientRequest } from "effect/unstable/http";
import { handleHetznerError, type HetznerError } from "../errors.js";
import { decodeJson } from "../internal/http.js";
import { toUrlParams } from "../internal/url-params.js";


export const ApplyFirewallToResourcesRequest = Schema.Struct({
    apply_to: Schema.Array(Schema.Struct({
      type: Schema.Literals(["server", "label_selector"]),
      server: Schema.optional(Schema.Struct({
        id: Schema.Int,
      })),
      label_selector: Schema.optional(Schema.Struct({
        selector: Schema.String,
      })),
    })),
  });
export type ApplyFirewallToResourcesRequest = typeof ApplyFirewallToResourcesRequest.Type;
export const ApplyFirewallToResourcesResponse = Schema.Struct({
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
  });
export type ApplyFirewallToResourcesResponse = typeof ApplyFirewallToResourcesResponse.Type;

export const CreateFirewallRequest = Schema.Struct({
    name: Schema.String,
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    rules: Schema.optional(Schema.Array(Schema.Struct({
      description: Schema.optional(Schema.NullOr(Schema.String)),
      direction: Schema.Literals(["in", "out"]),
      source_ips: Schema.optional(Schema.Array(Schema.String)),
      destination_ips: Schema.optional(Schema.Array(Schema.String)),
      protocol: Schema.Literals(["tcp", "udp", "icmp", "esp", "gre"]),
      port: Schema.optional(Schema.String),
    }))),
    apply_to: Schema.optional(Schema.Array(Schema.Struct({
      type: Schema.Literals(["server", "label_selector"]),
      server: Schema.optional(Schema.Struct({
        id: Schema.Int,
      })),
      label_selector: Schema.optional(Schema.Struct({
        selector: Schema.String,
      })),
    }))),
  });
export type CreateFirewallRequest = typeof CreateFirewallRequest.Type;
export const CreateFirewallResponse = Schema.Struct({
    firewall: Schema.optional(Schema.Struct({
      id: Schema.Int,
      name: Schema.String,
      labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
      created: Schema.String,
      rules: Schema.Array(Schema.Struct({
        description: Schema.optional(Schema.NullOr(Schema.String)),
        direction: Schema.Literals(["in", "out"]),
        source_ips: Schema.Array(Schema.String),
        destination_ips: Schema.Array(Schema.String),
        protocol: Schema.Literals(["tcp", "udp", "icmp", "esp", "gre"]),
        port: Schema.NullOr(Schema.String),
      })),
      applied_to: Schema.Array(Schema.Struct({
        type: Schema.Literals(["server", "label_selector"]),
        server: Schema.optional(Schema.Struct({
          id: Schema.Int,
        })),
        label_selector: Schema.optional(Schema.Struct({
          selector: Schema.String,
        })),
        applied_to_resources: Schema.optional(Schema.Array(Schema.Struct({
          type: Schema.optional(Schema.Literal("server")),
          server: Schema.optional(Schema.Struct({
            id: Schema.Int,
          })),
        }))),
      })),
    })),
    actions: Schema.optional(Schema.Array(Schema.Struct({
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
export type CreateFirewallResponse = typeof CreateFirewallResponse.Type;

export const GetFirewallResponse = Schema.Struct({
    firewall: Schema.Struct({
      id: Schema.Int,
      name: Schema.String,
      labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
      created: Schema.String,
      rules: Schema.Array(Schema.Struct({
        description: Schema.optional(Schema.NullOr(Schema.String)),
        direction: Schema.Literals(["in", "out"]),
        source_ips: Schema.Array(Schema.String),
        destination_ips: Schema.Array(Schema.String),
        protocol: Schema.Literals(["tcp", "udp", "icmp", "esp", "gre"]),
        port: Schema.NullOr(Schema.String),
      })),
      applied_to: Schema.Array(Schema.Struct({
        type: Schema.Literals(["server", "label_selector"]),
        server: Schema.optional(Schema.Struct({
          id: Schema.Int,
        })),
        label_selector: Schema.optional(Schema.Struct({
          selector: Schema.String,
        })),
        applied_to_resources: Schema.optional(Schema.Array(Schema.Struct({
          type: Schema.optional(Schema.Literal("server")),
          server: Schema.optional(Schema.Struct({
            id: Schema.Int,
          })),
        }))),
      })),
    }),
  });
export type GetFirewallResponse = typeof GetFirewallResponse.Type;

export const GetFirewallActionResponse = Schema.Struct({
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
export type GetFirewallActionResponse = typeof GetFirewallActionResponse.Type;

export const GetFirewallsActionResponse = Schema.Struct({
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
export type GetFirewallsActionResponse = typeof GetFirewallsActionResponse.Type;

export const ListFirewallsResponse = Schema.Struct({
    firewalls: Schema.Array(Schema.Struct({
      id: Schema.Int,
      name: Schema.String,
      labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
      created: Schema.String,
      rules: Schema.Array(Schema.Struct({
        description: Schema.optional(Schema.NullOr(Schema.String)),
        direction: Schema.Literals(["in", "out"]),
        source_ips: Schema.Array(Schema.String),
        destination_ips: Schema.Array(Schema.String),
        protocol: Schema.Literals(["tcp", "udp", "icmp", "esp", "gre"]),
        port: Schema.NullOr(Schema.String),
      })),
      applied_to: Schema.Array(Schema.Struct({
        type: Schema.Literals(["server", "label_selector"]),
        server: Schema.optional(Schema.Struct({
          id: Schema.Int,
        })),
        label_selector: Schema.optional(Schema.Struct({
          selector: Schema.String,
        })),
        applied_to_resources: Schema.optional(Schema.Array(Schema.Struct({
          type: Schema.optional(Schema.Literal("server")),
          server: Schema.optional(Schema.Struct({
            id: Schema.Int,
          })),
        }))),
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
export type ListFirewallsResponse = typeof ListFirewallsResponse.Type;
export interface ListFirewallsQuery {
  sort?: ReadonlyArray<"id" | "id:asc" | "id:desc" | "name" | "name:asc" | "name:desc" | "created" | "created:asc" | "created:desc">;
  name?: string;
  label_selector?: string;
  page?: number;
  per_page?: number;
}

export const ListFirewallActionsResponse = Schema.Struct({
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
export type ListFirewallActionsResponse = typeof ListFirewallActionsResponse.Type;
export interface ListFirewallActionsQuery {
  sort?: ReadonlyArray<"id" | "id:asc" | "id:desc" | "command" | "command:asc" | "command:desc" | "status" | "status:asc" | "status:desc" | "started" | "started:asc" | "started:desc" | "finished" | "finished:asc" | "finished:desc">;
  status?: ReadonlyArray<"running" | "success" | "error">;
  page?: number;
  per_page?: number;
}

export const ListFirewallsActionsResponse = Schema.Struct({
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
export type ListFirewallsActionsResponse = typeof ListFirewallsActionsResponse.Type;
export interface ListFirewallsActionsQuery {
  id?: ReadonlyArray<number>;
  sort?: ReadonlyArray<"id" | "id:asc" | "id:desc" | "command" | "command:asc" | "command:desc" | "status" | "status:asc" | "status:desc" | "started" | "started:asc" | "started:desc" | "finished" | "finished:asc" | "finished:desc">;
  status?: ReadonlyArray<"running" | "success" | "error">;
  page?: number;
  per_page?: number;
}

export const RemoveFirewallFromResourcesRequest = Schema.Struct({
    remove_from: Schema.Array(Schema.Struct({
      type: Schema.Literals(["server", "label_selector"]),
      server: Schema.optional(Schema.Struct({
        id: Schema.Int,
      })),
      label_selector: Schema.optional(Schema.Struct({
        selector: Schema.String,
      })),
    })),
  });
export type RemoveFirewallFromResourcesRequest = typeof RemoveFirewallFromResourcesRequest.Type;
export const RemoveFirewallFromResourcesResponse = Schema.Struct({
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
  });
export type RemoveFirewallFromResourcesResponse = typeof RemoveFirewallFromResourcesResponse.Type;

export const SetFirewallRulesRequest = Schema.Struct({
    rules: Schema.Array(Schema.Struct({
      description: Schema.optional(Schema.NullOr(Schema.String)),
      direction: Schema.Literals(["in", "out"]),
      source_ips: Schema.optional(Schema.Array(Schema.String)),
      destination_ips: Schema.optional(Schema.Array(Schema.String)),
      protocol: Schema.Literals(["tcp", "udp", "icmp", "esp", "gre"]),
      port: Schema.optional(Schema.String),
    })),
  });
export type SetFirewallRulesRequest = typeof SetFirewallRulesRequest.Type;
export const SetFirewallRulesResponse = Schema.Struct({
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
  });
export type SetFirewallRulesResponse = typeof SetFirewallRulesResponse.Type;

export const UpdateFirewallRequest = Schema.Struct({
    name: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  });
export type UpdateFirewallRequest = typeof UpdateFirewallRequest.Type;
export const UpdateFirewallResponse = Schema.Struct({
    firewall: Schema.Struct({
      id: Schema.Int,
      name: Schema.String,
      labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
      created: Schema.String,
      rules: Schema.Array(Schema.Struct({
        description: Schema.optional(Schema.NullOr(Schema.String)),
        direction: Schema.Literals(["in", "out"]),
        source_ips: Schema.Array(Schema.String),
        destination_ips: Schema.Array(Schema.String),
        protocol: Schema.Literals(["tcp", "udp", "icmp", "esp", "gre"]),
        port: Schema.NullOr(Schema.String),
      })),
      applied_to: Schema.Array(Schema.Struct({
        type: Schema.Literals(["server", "label_selector"]),
        server: Schema.optional(Schema.Struct({
          id: Schema.Int,
        })),
        label_selector: Schema.optional(Schema.Struct({
          selector: Schema.String,
        })),
        applied_to_resources: Schema.optional(Schema.Array(Schema.Struct({
          type: Schema.optional(Schema.Literal("server")),
          server: Schema.optional(Schema.Struct({
            id: Schema.Int,
          })),
        }))),
      })),
    }),
  });
export type UpdateFirewallResponse = typeof UpdateFirewallResponse.Type;


export const makeFirewalls = (http: HttpClient.HttpClient) => ({
    /** Apply to Resources */
    applyToResources: (id: number, body: ApplyFirewallToResourcesRequest): Effect.Effect<ApplyFirewallToResourcesResponse, HetznerError> =>
      HttpClientRequest.post(`/firewalls/${id}/actions/apply_to_resources`).pipe(
        HttpClientRequest.schemaBodyJson(ApplyFirewallToResourcesRequest)(body),
        Effect.flatMap(http.execute),
        Effect.flatMap(decodeJson(ApplyFirewallToResourcesResponse)),
        Effect.catch(handleHetznerError),
        Effect.withSpan("HetznerClient.firewalls.applyToResources"),
      ),

    /** Create a Firewall */
    create: (body: CreateFirewallRequest): Effect.Effect<CreateFirewallResponse, HetznerError> =>
      HttpClientRequest.post("/firewalls").pipe(
        HttpClientRequest.schemaBodyJson(CreateFirewallRequest)(body),
        Effect.flatMap(http.execute),
        Effect.flatMap(decodeJson(CreateFirewallResponse)),
        Effect.catch(handleHetznerError),
        Effect.withSpan("HetznerClient.firewalls.create"),
      ),

    /** Delete a Firewall */
    delete: (id: number): Effect.Effect<void, HetznerError> =>
      http.del(`/firewalls/${id}`).pipe(
        Effect.asVoid,
        Effect.catch(handleHetznerError),
        Effect.withSpan("HetznerClient.firewalls.delete"),
      ),

    /** Get a Firewall */
    get: (id: number): Effect.Effect<GetFirewallResponse, HetznerError> =>
      HttpClientRequest.get(`/firewalls/${id}`).pipe(
        http.execute,
        Effect.flatMap(decodeJson(GetFirewallResponse)),
        Effect.catch(handleHetznerError),
        Effect.withSpan("HetznerClient.firewalls.get"),
      ),

    /** Get an Action for a Firewall */
    getAction: (id: number, action_id: number): Effect.Effect<GetFirewallActionResponse, HetznerError> =>
      HttpClientRequest.get(`/firewalls/${id}/actions/${action_id}`).pipe(
        http.execute,
        Effect.flatMap(decodeJson(GetFirewallActionResponse)),
        Effect.catch(handleHetznerError),
        Effect.withSpan("HetznerClient.firewalls.getAction"),
      ),

    /** Get an Action */
    getFirewallsAction: (id: number): Effect.Effect<GetFirewallsActionResponse, HetznerError> =>
      HttpClientRequest.get(`/firewalls/actions/${id}`).pipe(
        http.execute,
        Effect.flatMap(decodeJson(GetFirewallsActionResponse)),
        Effect.catch(handleHetznerError),
        Effect.withSpan("HetznerClient.firewalls.getFirewallsAction"),
      ),

    /** List Firewalls */
    list: (query?: ListFirewallsQuery): Effect.Effect<ListFirewallsResponse, HetznerError> =>
      HttpClientRequest.get("/firewalls").pipe(
        HttpClientRequest.setUrlParams(toUrlParams(query)),
        http.execute,
        Effect.flatMap(decodeJson(ListFirewallsResponse)),
        Effect.catch(handleHetznerError),
        Effect.withSpan("HetznerClient.firewalls.list"),
      ),

    /** List Actions for a Firewall */
    listActions: (id: number, query?: ListFirewallActionsQuery): Effect.Effect<ListFirewallActionsResponse, HetznerError> =>
      HttpClientRequest.get(`/firewalls/${id}/actions`).pipe(
        HttpClientRequest.setUrlParams(toUrlParams(query)),
        http.execute,
        Effect.flatMap(decodeJson(ListFirewallActionsResponse)),
        Effect.catch(handleHetznerError),
        Effect.withSpan("HetznerClient.firewalls.listActions"),
      ),

    /** List Actions */
    listFirewallsActions: (query?: ListFirewallsActionsQuery): Effect.Effect<ListFirewallsActionsResponse, HetznerError> =>
      HttpClientRequest.get("/firewalls/actions").pipe(
        HttpClientRequest.setUrlParams(toUrlParams(query)),
        http.execute,
        Effect.flatMap(decodeJson(ListFirewallsActionsResponse)),
        Effect.catch(handleHetznerError),
        Effect.withSpan("HetznerClient.firewalls.listFirewallsActions"),
      ),

    /** Remove from Resources */
    removeFromResources: (id: number, body: RemoveFirewallFromResourcesRequest): Effect.Effect<RemoveFirewallFromResourcesResponse, HetznerError> =>
      HttpClientRequest.post(`/firewalls/${id}/actions/remove_from_resources`).pipe(
        HttpClientRequest.schemaBodyJson(RemoveFirewallFromResourcesRequest)(body),
        Effect.flatMap(http.execute),
        Effect.flatMap(decodeJson(RemoveFirewallFromResourcesResponse)),
        Effect.catch(handleHetznerError),
        Effect.withSpan("HetznerClient.firewalls.removeFromResources"),
      ),

    /** Set Rules */
    setRules: (id: number, body: SetFirewallRulesRequest): Effect.Effect<SetFirewallRulesResponse, HetznerError> =>
      HttpClientRequest.post(`/firewalls/${id}/actions/set_rules`).pipe(
        HttpClientRequest.schemaBodyJson(SetFirewallRulesRequest)(body),
        Effect.flatMap(http.execute),
        Effect.flatMap(decodeJson(SetFirewallRulesResponse)),
        Effect.catch(handleHetznerError),
        Effect.withSpan("HetznerClient.firewalls.setRules"),
      ),

    /** Update a Firewall */
    update: (id: number, body: UpdateFirewallRequest): Effect.Effect<UpdateFirewallResponse, HetznerError> =>
      HttpClientRequest.put(`/firewalls/${id}`).pipe(
        HttpClientRequest.schemaBodyJson(UpdateFirewallRequest)(body),
        Effect.flatMap(http.execute),
        Effect.flatMap(decodeJson(UpdateFirewallResponse)),
        Effect.catch(handleHetznerError),
        Effect.withSpan("HetznerClient.firewalls.update"),
      ),
});

export type FirewallsApi = ReturnType<typeof makeFirewalls>;
