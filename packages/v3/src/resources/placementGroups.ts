/**
 * PlacementGroups — generated from the Hetzner Cloud OpenAPI spec. Do not edit by hand.
 */
import { Effect, Schema } from "effect";
import { HttpClientRequest, HttpClientResponse } from "@effect/platform";
import type { HttpClient } from "@effect/platform";
import { handleHetznerError, type HetznerErrors } from "../errors.js";
import { toUrlParams } from "../internal/url-params.js";


export const CreatePlacementGroupRequest = Schema.Struct({
    name: Schema.String,
    labels: Schema.optional(Schema.Record({ key: Schema.String, value: Schema.String })),
    type: Schema.Literal("spread"),
  });
export type CreatePlacementGroupRequest = typeof CreatePlacementGroupRequest.Type;
export const CreatePlacementGroupResponse = Schema.Struct({
    placementGroup: Schema.propertySignature(Schema.Struct({
      id: Schema.Int,
      name: Schema.String,
      labels: Schema.Record({ key: Schema.String, value: Schema.String }),
      type: Schema.Literal("spread"),
      created: Schema.String,
      servers: Schema.Array(Schema.Int),
    })).pipe(Schema.fromKey("placement_group")),
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
export type CreatePlacementGroupResponse = typeof CreatePlacementGroupResponse.Type;

export const GetPlacementGroupResponse = Schema.Struct({
    placementGroup: Schema.propertySignature(Schema.Struct({
      id: Schema.Int,
      name: Schema.String,
      labels: Schema.Record({ key: Schema.String, value: Schema.String }),
      type: Schema.Literal("spread"),
      created: Schema.String,
      servers: Schema.Array(Schema.Int),
    })).pipe(Schema.fromKey("placement_group")),
  });
export type GetPlacementGroupResponse = typeof GetPlacementGroupResponse.Type;

export const ListPlacementGroupsResponse = Schema.Struct({
    placementGroups: Schema.propertySignature(Schema.Array(Schema.Struct({
      id: Schema.Int,
      name: Schema.String,
      labels: Schema.Record({ key: Schema.String, value: Schema.String }),
      type: Schema.Literal("spread"),
      created: Schema.String,
      servers: Schema.Array(Schema.Int),
    }))).pipe(Schema.fromKey("placement_groups")),
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
export type ListPlacementGroupsResponse = typeof ListPlacementGroupsResponse.Type;
export interface ListPlacementGroupsQuery {
  sort?: ReadonlyArray<"id" | "id:asc" | "id:desc" | "name" | "name:asc" | "name:desc" | "created" | "created:asc" | "created:desc">;
  name?: string;
  labelSelector?: string;
  type?: ReadonlyArray<"spread">;
  page?: number;
  perPage?: number;
}

export const UpdatePlacementGroupRequest = Schema.Struct({
    name: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record({ key: Schema.String, value: Schema.String })),
  });
export type UpdatePlacementGroupRequest = typeof UpdatePlacementGroupRequest.Type;
export const UpdatePlacementGroupResponse = Schema.Struct({
    placementGroup: Schema.propertySignature(Schema.Struct({
      id: Schema.Int,
      name: Schema.String,
      labels: Schema.Record({ key: Schema.String, value: Schema.String }),
      type: Schema.Literal("spread"),
      created: Schema.String,
      servers: Schema.Array(Schema.Int),
    })).pipe(Schema.fromKey("placement_group")),
  });
export type UpdatePlacementGroupResponse = typeof UpdatePlacementGroupResponse.Type;


export const makePlacementGroups = (http: HttpClient.HttpClient) => ({
    /** Create a PlacementGroup */
    create: (body: CreatePlacementGroupRequest): Effect.Effect<CreatePlacementGroupResponse, HetznerErrors> =>
      HttpClientRequest.post("/placement_groups").pipe(
        HttpClientRequest.schemaBodyJson(CreatePlacementGroupRequest)(body),
        Effect.flatMap(http.execute),
        Effect.flatMap(HttpClientResponse.schemaBodyJson(CreatePlacementGroupResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.placementGroups.create"),
      ),

    /** Delete a PlacementGroup */
    delete: (id: number): Effect.Effect<void, HetznerErrors> =>
      http.del(`/placement_groups/${id}`).pipe(
        Effect.asVoid,
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.placementGroups.delete"),
      ),

    /** Get a PlacementGroup */
    get: (id: number): Effect.Effect<GetPlacementGroupResponse, HetznerErrors> =>
      HttpClientRequest.get(`/placement_groups/${id}`).pipe(
        http.execute,
        Effect.flatMap(HttpClientResponse.schemaBodyJson(GetPlacementGroupResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.placementGroups.get"),
      ),

    /** List Placement Groups */
    list: (query?: ListPlacementGroupsQuery): Effect.Effect<ListPlacementGroupsResponse, HetznerErrors> =>
      HttpClientRequest.get("/placement_groups").pipe(
        HttpClientRequest.setUrlParams(toUrlParams({ sort: query?.sort, name: query?.name, label_selector: query?.labelSelector, type: query?.type, page: query?.page, per_page: query?.perPage })),
        http.execute,
        Effect.flatMap(HttpClientResponse.schemaBodyJson(ListPlacementGroupsResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.placementGroups.list"),
      ),

    /** Update a PlacementGroup */
    update: (id: number, body: UpdatePlacementGroupRequest): Effect.Effect<UpdatePlacementGroupResponse, HetznerErrors> =>
      HttpClientRequest.put(`/placement_groups/${id}`).pipe(
        HttpClientRequest.schemaBodyJson(UpdatePlacementGroupRequest)(body),
        Effect.flatMap(http.execute),
        Effect.flatMap(HttpClientResponse.schemaBodyJson(UpdatePlacementGroupResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.placementGroups.update"),
      ),
});

export type PlacementGroupsApi = ReturnType<typeof makePlacementGroups>;
