/**
 * Images — generated from the Hetzner Cloud OpenAPI spec. Do not edit by hand.
 */
import { Effect, Schema } from "effect";
import { HttpClientRequest, HttpClientResponse } from "@effect/platform";
import type { HttpClient } from "@effect/platform";
import { handleHetznerError, type HetznerErrors } from "../errors.js";
import { toUrlParams } from "../internal/url-params.js";


export const ChangeImageProtectionRequest = Schema.Struct({
    delete: Schema.optional(Schema.Boolean),
  });
export type ChangeImageProtectionRequest = typeof ChangeImageProtectionRequest.Type;
export const ChangeImageProtectionResponse = Schema.Struct({
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
export type ChangeImageProtectionResponse = typeof ChangeImageProtectionResponse.Type;

export const GetImageResponse = Schema.Struct({
    image: Schema.optional(Schema.Struct({
      id: Schema.Int,
      type: Schema.Literal("system", "app", "snapshot", "backup"),
      status: Schema.Literal("available", "creating", "unavailable"),
      name: Schema.NullOr(Schema.String),
      description: Schema.String,
      image_size: Schema.NullOr(Schema.Number),
      disk_size: Schema.Number,
      created: Schema.String,
      created_from: Schema.NullOr(Schema.Struct({
        id: Schema.Int,
        name: Schema.String,
      })),
      bound_to: Schema.NullOr(Schema.Int),
      os_flavor: Schema.Literal("ubuntu", "centos", "debian", "fedora", "rocky", "alma", "opensuse", "unknown"),
      os_version: Schema.NullOr(Schema.String),
      rapid_deploy: Schema.optional(Schema.Boolean),
      protection: Schema.Struct({
        delete: Schema.Boolean,
      }),
      deprecated: Schema.NullOr(Schema.String),
      deleted: Schema.NullOr(Schema.String),
      labels: Schema.Record({ key: Schema.String, value: Schema.String }),
      architecture: Schema.Literal("x86", "arm"),
    })),
  });
export type GetImageResponse = typeof GetImageResponse.Type;

export const GetImageActionResponse = Schema.Struct({
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
export type GetImageActionResponse = typeof GetImageActionResponse.Type;

export const GetImagesActionResponse = Schema.Struct({
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
export type GetImagesActionResponse = typeof GetImagesActionResponse.Type;

export const ListImagesResponse = Schema.Struct({
    images: Schema.Array(Schema.Struct({
      id: Schema.Int,
      type: Schema.Literal("system", "app", "snapshot", "backup"),
      status: Schema.Literal("available", "creating", "unavailable"),
      name: Schema.NullOr(Schema.String),
      description: Schema.String,
      image_size: Schema.NullOr(Schema.Number),
      disk_size: Schema.Number,
      created: Schema.String,
      created_from: Schema.NullOr(Schema.Struct({
        id: Schema.Int,
        name: Schema.String,
      })),
      bound_to: Schema.NullOr(Schema.Int),
      os_flavor: Schema.Literal("ubuntu", "centos", "debian", "fedora", "rocky", "alma", "opensuse", "unknown"),
      os_version: Schema.NullOr(Schema.String),
      rapid_deploy: Schema.optional(Schema.Boolean),
      protection: Schema.Struct({
        delete: Schema.Boolean,
      }),
      deprecated: Schema.NullOr(Schema.String),
      deleted: Schema.NullOr(Schema.String),
      labels: Schema.Record({ key: Schema.String, value: Schema.String }),
      architecture: Schema.Literal("x86", "arm"),
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
export type ListImagesResponse = typeof ListImagesResponse.Type;
export interface ListImagesQuery {
  sort?: ReadonlyArray<"id" | "id:asc" | "id:desc" | "name" | "name:asc" | "name:desc" | "created" | "created:asc" | "created:desc">;
  type?: ReadonlyArray<"system" | "app" | "snapshot" | "backup">;
  status?: ReadonlyArray<"available" | "creating" | "unavailable">;
  bound_to?: ReadonlyArray<string>;
  include_deprecated?: boolean;
  name?: string;
  label_selector?: string;
  architecture?: "x86" | "arm";
  page?: number;
  per_page?: number;
}

export const ListImageActionsResponse = Schema.Struct({
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
export type ListImageActionsResponse = typeof ListImageActionsResponse.Type;
export interface ListImageActionsQuery {
  sort?: ReadonlyArray<"id" | "id:asc" | "id:desc" | "command" | "command:asc" | "command:desc" | "status" | "status:asc" | "status:desc" | "started" | "started:asc" | "started:desc" | "finished" | "finished:asc" | "finished:desc">;
  status?: ReadonlyArray<"running" | "success" | "error">;
  page?: number;
  per_page?: number;
}

export const ListImagesActionsResponse = Schema.Struct({
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
export type ListImagesActionsResponse = typeof ListImagesActionsResponse.Type;
export interface ListImagesActionsQuery {
  id?: ReadonlyArray<number>;
  sort?: ReadonlyArray<"id" | "id:asc" | "id:desc" | "command" | "command:asc" | "command:desc" | "status" | "status:asc" | "status:desc" | "started" | "started:asc" | "started:desc" | "finished" | "finished:asc" | "finished:desc">;
  status?: ReadonlyArray<"running" | "success" | "error">;
  page?: number;
  per_page?: number;
}

export const UpdateImageRequest = Schema.Struct({
    description: Schema.optional(Schema.String),
    type: Schema.optional(Schema.Literal("snapshot")),
    labels: Schema.optional(Schema.Record({ key: Schema.String, value: Schema.String })),
  });
export type UpdateImageRequest = typeof UpdateImageRequest.Type;
export const UpdateImageResponse = Schema.Struct({
    image: Schema.optional(Schema.Struct({
      id: Schema.Int,
      type: Schema.Literal("system", "app", "snapshot", "backup"),
      status: Schema.Literal("available", "creating", "unavailable"),
      name: Schema.NullOr(Schema.String),
      description: Schema.String,
      image_size: Schema.NullOr(Schema.Number),
      disk_size: Schema.Number,
      created: Schema.String,
      created_from: Schema.NullOr(Schema.Struct({
        id: Schema.Int,
        name: Schema.String,
      })),
      bound_to: Schema.NullOr(Schema.Int),
      os_flavor: Schema.Literal("ubuntu", "centos", "debian", "fedora", "rocky", "alma", "opensuse", "unknown"),
      os_version: Schema.NullOr(Schema.String),
      rapid_deploy: Schema.optional(Schema.Boolean),
      protection: Schema.Struct({
        delete: Schema.Boolean,
      }),
      deprecated: Schema.NullOr(Schema.String),
      deleted: Schema.NullOr(Schema.String),
      labels: Schema.Record({ key: Schema.String, value: Schema.String }),
      architecture: Schema.Literal("x86", "arm"),
    })),
  });
export type UpdateImageResponse = typeof UpdateImageResponse.Type;


export const makeImages = (http: HttpClient.HttpClient) => ({
    /** Change Image Protection */
    changeProtection: (id: number, body: ChangeImageProtectionRequest): Effect.Effect<ChangeImageProtectionResponse, HetznerErrors> =>
      HttpClientRequest.post(`/images/${id}/actions/change_protection`).pipe(
        HttpClientRequest.schemaBodyJson(ChangeImageProtectionRequest)(body),
        Effect.flatMap(http.execute),
        Effect.flatMap(HttpClientResponse.schemaBodyJson(ChangeImageProtectionResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.images.changeProtection"),
      ),

    /** Delete an Image */
    delete: (id: number): Effect.Effect<void, HetznerErrors> =>
      http.del(`/images/${id}`).pipe(
        Effect.asVoid,
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.images.delete"),
      ),

    /** Get an Image */
    get: (id: number): Effect.Effect<GetImageResponse, HetznerErrors> =>
      HttpClientRequest.get(`/images/${id}`).pipe(
        http.execute,
        Effect.flatMap(HttpClientResponse.schemaBodyJson(GetImageResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.images.get"),
      ),

    /** Get an Action for an Image */
    getAction: (id: number, action_id: number): Effect.Effect<GetImageActionResponse, HetznerErrors> =>
      HttpClientRequest.get(`/images/${id}/actions/${action_id}`).pipe(
        http.execute,
        Effect.flatMap(HttpClientResponse.schemaBodyJson(GetImageActionResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.images.getAction"),
      ),

    /** Get an Action */
    getImagesAction: (id: number): Effect.Effect<GetImagesActionResponse, HetznerErrors> =>
      HttpClientRequest.get(`/images/actions/${id}`).pipe(
        http.execute,
        Effect.flatMap(HttpClientResponse.schemaBodyJson(GetImagesActionResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.images.getImagesAction"),
      ),

    /** List Images */
    list: (query?: ListImagesQuery): Effect.Effect<ListImagesResponse, HetznerErrors> =>
      HttpClientRequest.get("/images").pipe(
        HttpClientRequest.setUrlParams(toUrlParams(query)),
        http.execute,
        Effect.flatMap(HttpClientResponse.schemaBodyJson(ListImagesResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.images.list"),
      ),

    /** List Actions for an Image */
    listActions: (id: number, query?: ListImageActionsQuery): Effect.Effect<ListImageActionsResponse, HetznerErrors> =>
      HttpClientRequest.get(`/images/${id}/actions`).pipe(
        HttpClientRequest.setUrlParams(toUrlParams(query)),
        http.execute,
        Effect.flatMap(HttpClientResponse.schemaBodyJson(ListImageActionsResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.images.listActions"),
      ),

    /** List Actions */
    listImagesActions: (query?: ListImagesActionsQuery): Effect.Effect<ListImagesActionsResponse, HetznerErrors> =>
      HttpClientRequest.get("/images/actions").pipe(
        HttpClientRequest.setUrlParams(toUrlParams(query)),
        http.execute,
        Effect.flatMap(HttpClientResponse.schemaBodyJson(ListImagesActionsResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.images.listImagesActions"),
      ),

    /** Update an Image */
    update: (id: number, body: UpdateImageRequest): Effect.Effect<UpdateImageResponse, HetznerErrors> =>
      HttpClientRequest.put(`/images/${id}`).pipe(
        HttpClientRequest.schemaBodyJson(UpdateImageRequest)(body),
        Effect.flatMap(http.execute),
        Effect.flatMap(HttpClientResponse.schemaBodyJson(UpdateImageResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.images.update"),
      ),
});

export type ImagesApi = ReturnType<typeof makeImages>;
