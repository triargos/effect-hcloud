/**
 * Volumes — generated from the Hetzner Cloud OpenAPI spec. Do not edit by hand.
 */
import { Effect, Schema } from "effect";
import { HttpClientRequest, HttpClientResponse } from "@effect/platform";
import type { HttpClient } from "@effect/platform";
import { handleHetznerError, type HetznerErrors } from "../errors.js";
import { toUrlParams } from "../internal/url-params.js";


export const AttachVolumeRequest = Schema.Struct({
    server: Schema.Int,
    automount: Schema.optional(Schema.Boolean),
  });
export type AttachVolumeRequest = typeof AttachVolumeRequest.Type;
export const AttachVolumeResponse = Schema.Struct({
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
export type AttachVolumeResponse = typeof AttachVolumeResponse.Type;

export const ChangeVolumeProtectionRequest = Schema.Struct({
    delete: Schema.optional(Schema.Boolean),
  });
export type ChangeVolumeProtectionRequest = typeof ChangeVolumeProtectionRequest.Type;
export const ChangeVolumeProtectionResponse = Schema.Struct({
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
export type ChangeVolumeProtectionResponse = typeof ChangeVolumeProtectionResponse.Type;

export const CreateVolumeRequest = Schema.Struct({
    size: Schema.Int,
    name: Schema.String,
    labels: Schema.optional(Schema.Record({ key: Schema.String, value: Schema.String })),
    automount: Schema.optional(Schema.Boolean),
    format: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
    server: Schema.optional(Schema.Int),
  });
export type CreateVolumeRequest = typeof CreateVolumeRequest.Type;
export const CreateVolumeResponse = Schema.Struct({
    volume: Schema.Struct({
      id: Schema.Int,
      created: Schema.String,
      name: Schema.String,
      server: Schema.NullOr(Schema.Int),
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
      size: Schema.Number,
      linux_device: Schema.String,
      protection: Schema.Struct({
        delete: Schema.Boolean,
      }),
      labels: Schema.Record({ key: Schema.String, value: Schema.String }),
      status: Schema.Literal("available", "creating"),
      format: Schema.NullOr(Schema.String),
    }),
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
    next_actions: Schema.Array(Schema.Struct({
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
  });
export type CreateVolumeResponse = typeof CreateVolumeResponse.Type;

export const DetachVolumeResponse = Schema.Struct({
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
export type DetachVolumeResponse = typeof DetachVolumeResponse.Type;

export const GetVolumeResponse = Schema.Struct({
    volume: Schema.Struct({
      id: Schema.Int,
      created: Schema.String,
      name: Schema.String,
      server: Schema.NullOr(Schema.Int),
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
      size: Schema.Number,
      linux_device: Schema.String,
      protection: Schema.Struct({
        delete: Schema.Boolean,
      }),
      labels: Schema.Record({ key: Schema.String, value: Schema.String }),
      status: Schema.Literal("available", "creating"),
      format: Schema.NullOr(Schema.String),
    }),
  });
export type GetVolumeResponse = typeof GetVolumeResponse.Type;

export const GetVolumeActionResponse = Schema.Struct({
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
export type GetVolumeActionResponse = typeof GetVolumeActionResponse.Type;

export const GetVolumesActionResponse = Schema.Struct({
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
export type GetVolumesActionResponse = typeof GetVolumesActionResponse.Type;

export const ListVolumesResponse = Schema.Struct({
    volumes: Schema.Array(Schema.Struct({
      id: Schema.Int,
      created: Schema.String,
      name: Schema.String,
      server: Schema.NullOr(Schema.Int),
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
      size: Schema.Number,
      linux_device: Schema.String,
      protection: Schema.Struct({
        delete: Schema.Boolean,
      }),
      labels: Schema.Record({ key: Schema.String, value: Schema.String }),
      status: Schema.Literal("available", "creating"),
      format: Schema.NullOr(Schema.String),
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
export type ListVolumesResponse = typeof ListVolumesResponse.Type;
export interface ListVolumesQuery {
  status?: ReadonlyArray<"available" | "creating">;
  sort?: ReadonlyArray<"id" | "id:asc" | "id:desc" | "name" | "name:asc" | "name:desc" | "created" | "created:asc" | "created:desc">;
  name?: string;
  label_selector?: string;
  page?: number;
  per_page?: number;
}

export const ListVolumeActionsResponse = Schema.Struct({
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
        per_page: Schema.Int,
        previous_page: Schema.NullOr(Schema.Int),
        next_page: Schema.NullOr(Schema.Int),
        last_page: Schema.NullOr(Schema.Int),
        total_entries: Schema.NullOr(Schema.Int),
      }),
    }),
  });
export type ListVolumeActionsResponse = typeof ListVolumeActionsResponse.Type;
export interface ListVolumeActionsQuery {
  sort?: ReadonlyArray<"id" | "id:asc" | "id:desc" | "command" | "command:asc" | "command:desc" | "status" | "status:asc" | "status:desc" | "started" | "started:asc" | "started:desc" | "finished" | "finished:asc" | "finished:desc">;
  status?: ReadonlyArray<"running" | "success" | "error">;
  page?: number;
  per_page?: number;
}

export const ListVolumesActionsResponse = Schema.Struct({
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
        per_page: Schema.Int,
        previous_page: Schema.NullOr(Schema.Int),
        next_page: Schema.NullOr(Schema.Int),
        last_page: Schema.NullOr(Schema.Int),
        total_entries: Schema.NullOr(Schema.Int),
      }),
    }),
  });
export type ListVolumesActionsResponse = typeof ListVolumesActionsResponse.Type;
export interface ListVolumesActionsQuery {
  id?: ReadonlyArray<number>;
  sort?: ReadonlyArray<"id" | "id:asc" | "id:desc" | "command" | "command:asc" | "command:desc" | "status" | "status:asc" | "status:desc" | "started" | "started:asc" | "started:desc" | "finished" | "finished:asc" | "finished:desc">;
  status?: ReadonlyArray<"running" | "success" | "error">;
  page?: number;
  per_page?: number;
}

export const ResizeVolumeRequest = Schema.Struct({
    size: Schema.Number,
  });
export type ResizeVolumeRequest = typeof ResizeVolumeRequest.Type;
export const ResizeVolumeResponse = Schema.Struct({
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
export type ResizeVolumeResponse = typeof ResizeVolumeResponse.Type;

export const UpdateVolumeRequest = Schema.Struct({
    name: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record({ key: Schema.String, value: Schema.String })),
  });
export type UpdateVolumeRequest = typeof UpdateVolumeRequest.Type;
export const UpdateVolumeResponse = Schema.Struct({
    volume: Schema.Struct({
      id: Schema.Int,
      created: Schema.String,
      name: Schema.String,
      server: Schema.NullOr(Schema.Int),
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
      size: Schema.Number,
      linux_device: Schema.String,
      protection: Schema.Struct({
        delete: Schema.Boolean,
      }),
      labels: Schema.Record({ key: Schema.String, value: Schema.String }),
      status: Schema.Literal("available", "creating"),
      format: Schema.NullOr(Schema.String),
    }),
  });
export type UpdateVolumeResponse = typeof UpdateVolumeResponse.Type;


export const makeVolumes = (http: HttpClient.HttpClient) => ({
    /** Attach Volume to a Server */
    attach: (id: number, body: AttachVolumeRequest): Effect.Effect<AttachVolumeResponse, HetznerErrors> =>
      HttpClientRequest.post(`/volumes/${id}/actions/attach`).pipe(
        HttpClientRequest.schemaBodyJson(AttachVolumeRequest)(body),
        Effect.flatMap(http.execute),
        Effect.flatMap(HttpClientResponse.schemaBodyJson(AttachVolumeResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.volumes.attach"),
      ),

    /** Change Volume Protection */
    changeProtection: (id: number, body: ChangeVolumeProtectionRequest): Effect.Effect<ChangeVolumeProtectionResponse, HetznerErrors> =>
      HttpClientRequest.post(`/volumes/${id}/actions/change_protection`).pipe(
        HttpClientRequest.schemaBodyJson(ChangeVolumeProtectionRequest)(body),
        Effect.flatMap(http.execute),
        Effect.flatMap(HttpClientResponse.schemaBodyJson(ChangeVolumeProtectionResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.volumes.changeProtection"),
      ),

    /** Create a Volume */
    create: (body: CreateVolumeRequest): Effect.Effect<CreateVolumeResponse, HetznerErrors> =>
      HttpClientRequest.post("/volumes").pipe(
        HttpClientRequest.schemaBodyJson(CreateVolumeRequest)(body),
        Effect.flatMap(http.execute),
        Effect.flatMap(HttpClientResponse.schemaBodyJson(CreateVolumeResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.volumes.create"),
      ),

    /** Delete a Volume */
    delete: (id: number): Effect.Effect<void, HetznerErrors> =>
      http.del(`/volumes/${id}`).pipe(
        Effect.asVoid,
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.volumes.delete"),
      ),

    /** Detach Volume */
    detach: (id: number): Effect.Effect<DetachVolumeResponse, HetznerErrors> =>
      HttpClientRequest.post(`/volumes/${id}/actions/detach`).pipe(
        http.execute,
        Effect.flatMap(HttpClientResponse.schemaBodyJson(DetachVolumeResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.volumes.detach"),
      ),

    /** Get a Volume */
    get: (id: number): Effect.Effect<GetVolumeResponse, HetznerErrors> =>
      HttpClientRequest.get(`/volumes/${id}`).pipe(
        http.execute,
        Effect.flatMap(HttpClientResponse.schemaBodyJson(GetVolumeResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.volumes.get"),
      ),

    /** Get an Action for a Volume */
    getAction: (id: number, action_id: number): Effect.Effect<GetVolumeActionResponse, HetznerErrors> =>
      HttpClientRequest.get(`/volumes/${id}/actions/${action_id}`).pipe(
        http.execute,
        Effect.flatMap(HttpClientResponse.schemaBodyJson(GetVolumeActionResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.volumes.getAction"),
      ),

    /** Get an Action */
    getVolumesAction: (id: number): Effect.Effect<GetVolumesActionResponse, HetznerErrors> =>
      HttpClientRequest.get(`/volumes/actions/${id}`).pipe(
        http.execute,
        Effect.flatMap(HttpClientResponse.schemaBodyJson(GetVolumesActionResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.volumes.getVolumesAction"),
      ),

    /** List Volumes */
    list: (query?: ListVolumesQuery): Effect.Effect<ListVolumesResponse, HetznerErrors> =>
      HttpClientRequest.get("/volumes").pipe(
        HttpClientRequest.setUrlParams(toUrlParams(query)),
        http.execute,
        Effect.flatMap(HttpClientResponse.schemaBodyJson(ListVolumesResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.volumes.list"),
      ),

    /** List Actions for a Volume */
    listActions: (id: number, query?: ListVolumeActionsQuery): Effect.Effect<ListVolumeActionsResponse, HetznerErrors> =>
      HttpClientRequest.get(`/volumes/${id}/actions`).pipe(
        HttpClientRequest.setUrlParams(toUrlParams(query)),
        http.execute,
        Effect.flatMap(HttpClientResponse.schemaBodyJson(ListVolumeActionsResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.volumes.listActions"),
      ),

    /** List Actions */
    listVolumesActions: (query?: ListVolumesActionsQuery): Effect.Effect<ListVolumesActionsResponse, HetznerErrors> =>
      HttpClientRequest.get("/volumes/actions").pipe(
        HttpClientRequest.setUrlParams(toUrlParams(query)),
        http.execute,
        Effect.flatMap(HttpClientResponse.schemaBodyJson(ListVolumesActionsResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.volumes.listVolumesActions"),
      ),

    /** Resize Volume */
    resize: (id: number, body: ResizeVolumeRequest): Effect.Effect<ResizeVolumeResponse, HetznerErrors> =>
      HttpClientRequest.post(`/volumes/${id}/actions/resize`).pipe(
        HttpClientRequest.schemaBodyJson(ResizeVolumeRequest)(body),
        Effect.flatMap(http.execute),
        Effect.flatMap(HttpClientResponse.schemaBodyJson(ResizeVolumeResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.volumes.resize"),
      ),

    /** Update a Volume */
    update: (id: number, body: UpdateVolumeRequest): Effect.Effect<UpdateVolumeResponse, HetznerErrors> =>
      HttpClientRequest.put(`/volumes/${id}`).pipe(
        HttpClientRequest.schemaBodyJson(UpdateVolumeRequest)(body),
        Effect.flatMap(http.execute),
        Effect.flatMap(HttpClientResponse.schemaBodyJson(UpdateVolumeResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.volumes.update"),
      ),
});

export type VolumesApi = ReturnType<typeof makeVolumes>;
