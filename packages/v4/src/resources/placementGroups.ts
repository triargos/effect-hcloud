/**
 * PlacementGroups — generated from the Hetzner Cloud OpenAPI spec. Do not edit by hand.
 */
import { Effect, Schema } from "effect";
import { HttpClient, HttpClientRequest } from "effect/unstable/http";
import { handleHetznerError, type HetznerError } from "../errors.js";
import { decodeJson } from "../internal/http.js";
import { toUrlParams } from "../internal/url-params.js";


export const CreatePlacementGroupRequest = Schema.Struct({
    name: Schema.String,
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    type: Schema.Literal("spread"),
  });
export type CreatePlacementGroupRequest = typeof CreatePlacementGroupRequest.Type;
export const CreatePlacementGroupResponse = Schema.Struct({
    placement_group: Schema.Struct({
      id: Schema.Int,
      name: Schema.String,
      labels: Schema.Record(Schema.String, Schema.String),
      type: Schema.Literal("spread"),
      created: Schema.String,
      servers: Schema.Array(Schema.Int),
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
export type CreatePlacementGroupResponse = typeof CreatePlacementGroupResponse.Type;

export const GetPlacementGroupResponse = Schema.Struct({
    placement_group: Schema.Struct({
      id: Schema.Int,
      name: Schema.String,
      labels: Schema.Record(Schema.String, Schema.String),
      type: Schema.Literal("spread"),
      created: Schema.String,
      servers: Schema.Array(Schema.Int),
    }),
  });
export type GetPlacementGroupResponse = typeof GetPlacementGroupResponse.Type;

export const ListPlacementGroupsResponse = Schema.Struct({
    placement_groups: Schema.Array(Schema.Struct({
      id: Schema.Int,
      name: Schema.String,
      labels: Schema.Record(Schema.String, Schema.String),
      type: Schema.Literal("spread"),
      created: Schema.String,
      servers: Schema.Array(Schema.Int),
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
export type ListPlacementGroupsResponse = typeof ListPlacementGroupsResponse.Type;
export interface ListPlacementGroupsQuery {
  sort?: ReadonlyArray<"id" | "id:asc" | "id:desc" | "name" | "name:asc" | "name:desc" | "created" | "created:asc" | "created:desc">;
  name?: string;
  label_selector?: string;
  type?: ReadonlyArray<"spread">;
  page?: number;
  per_page?: number;
}

export const UpdatePlacementGroupRequest = Schema.Struct({
    name: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  });
export type UpdatePlacementGroupRequest = typeof UpdatePlacementGroupRequest.Type;
export const UpdatePlacementGroupResponse = Schema.Struct({
    placement_group: Schema.Struct({
      id: Schema.Int,
      name: Schema.String,
      labels: Schema.Record(Schema.String, Schema.String),
      type: Schema.Literal("spread"),
      created: Schema.String,
      servers: Schema.Array(Schema.Int),
    }),
  });
export type UpdatePlacementGroupResponse = typeof UpdatePlacementGroupResponse.Type;


export const makePlacementGroups = (http: HttpClient.HttpClient) => ({
    /** Create a PlacementGroup */
    create: (body: CreatePlacementGroupRequest): Effect.Effect<CreatePlacementGroupResponse, HetznerError> =>
      HttpClientRequest.post("/placement_groups").pipe(
        HttpClientRequest.schemaBodyJson(CreatePlacementGroupRequest)(body),
        Effect.flatMap(http.execute),
        Effect.flatMap(decodeJson(CreatePlacementGroupResponse)),
        Effect.catch(handleHetznerError),
        Effect.withSpan("HetznerClient.placementGroups.create"),
      ),

    /** Delete a PlacementGroup */
    delete: (id: number): Effect.Effect<void, HetznerError> =>
      http.del(`/placement_groups/${id}`).pipe(
        Effect.asVoid,
        Effect.catch(handleHetznerError),
        Effect.withSpan("HetznerClient.placementGroups.delete"),
      ),

    /** Get a PlacementGroup */
    get: (id: number): Effect.Effect<GetPlacementGroupResponse, HetznerError> =>
      HttpClientRequest.get(`/placement_groups/${id}`).pipe(
        http.execute,
        Effect.flatMap(decodeJson(GetPlacementGroupResponse)),
        Effect.catch(handleHetznerError),
        Effect.withSpan("HetznerClient.placementGroups.get"),
      ),

    /** List Placement Groups */
    list: (query?: ListPlacementGroupsQuery): Effect.Effect<ListPlacementGroupsResponse, HetznerError> =>
      HttpClientRequest.get("/placement_groups").pipe(
        HttpClientRequest.setUrlParams(toUrlParams(query)),
        http.execute,
        Effect.flatMap(decodeJson(ListPlacementGroupsResponse)),
        Effect.catch(handleHetznerError),
        Effect.withSpan("HetznerClient.placementGroups.list"),
      ),

    /** Update a PlacementGroup */
    update: (id: number, body: UpdatePlacementGroupRequest): Effect.Effect<UpdatePlacementGroupResponse, HetznerError> =>
      HttpClientRequest.put(`/placement_groups/${id}`).pipe(
        HttpClientRequest.schemaBodyJson(UpdatePlacementGroupRequest)(body),
        Effect.flatMap(http.execute),
        Effect.flatMap(decodeJson(UpdatePlacementGroupResponse)),
        Effect.catch(handleHetznerError),
        Effect.withSpan("HetznerClient.placementGroups.update"),
      ),
});

export type PlacementGroupsApi = ReturnType<typeof makePlacementGroups>;
