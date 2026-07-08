/**
 * PlacementGroups — generated from the Hetzner Cloud OpenAPI spec. Do not edit by hand.
 */
import { Effect, Schema } from "effect";
import { HttpClient, HttpClientRequest } from "effect/unstable/http";
import { handleHetznerError, type HetznerErrors } from "../errors.js";
import { decodeJson } from "../internal/http.js";
import { toUrlParams } from "../internal/url-params.js";


export const CreatePlacementGroupRequest = Schema.Struct({
    name: Schema.String,
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    type: Schema.Literal("spread"),
  });
export type CreatePlacementGroupRequest = typeof CreatePlacementGroupRequest.Type;
export const CreatePlacementGroupResponse = Schema.Struct({
    placementGroup: Schema.Struct({
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
  }).pipe(Schema.encodeKeys({ placementGroup: "placement_group" }));
export type CreatePlacementGroupResponse = typeof CreatePlacementGroupResponse.Type;

export const GetPlacementGroupResponse = Schema.Struct({
    placementGroup: Schema.Struct({
      id: Schema.Int,
      name: Schema.String,
      labels: Schema.Record(Schema.String, Schema.String),
      type: Schema.Literal("spread"),
      created: Schema.String,
      servers: Schema.Array(Schema.Int),
    }),
  }).pipe(Schema.encodeKeys({ placementGroup: "placement_group" }));
export type GetPlacementGroupResponse = typeof GetPlacementGroupResponse.Type;

export const ListPlacementGroupsResponse = Schema.Struct({
    placementGroups: Schema.Array(Schema.Struct({
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
        perPage: Schema.Int,
        previousPage: Schema.NullOr(Schema.Int),
        nextPage: Schema.NullOr(Schema.Int),
        lastPage: Schema.NullOr(Schema.Int),
        totalEntries: Schema.NullOr(Schema.Int),
      }).pipe(Schema.encodeKeys({ perPage: "per_page", previousPage: "previous_page", nextPage: "next_page", lastPage: "last_page", totalEntries: "total_entries" })),
    }),
  }).pipe(Schema.encodeKeys({ placementGroups: "placement_groups" }));
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
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  });
export type UpdatePlacementGroupRequest = typeof UpdatePlacementGroupRequest.Type;
export const UpdatePlacementGroupResponse = Schema.Struct({
    placementGroup: Schema.Struct({
      id: Schema.Int,
      name: Schema.String,
      labels: Schema.Record(Schema.String, Schema.String),
      type: Schema.Literal("spread"),
      created: Schema.String,
      servers: Schema.Array(Schema.Int),
    }),
  }).pipe(Schema.encodeKeys({ placementGroup: "placement_group" }));
export type UpdatePlacementGroupResponse = typeof UpdatePlacementGroupResponse.Type;


export const makePlacementGroups = (http: HttpClient.HttpClient) => ({
    /** Create a PlacementGroup */
    create: (body: CreatePlacementGroupRequest): Effect.Effect<CreatePlacementGroupResponse, HetznerErrors> =>
      HttpClientRequest.post("/placement_groups").pipe(
        HttpClientRequest.schemaBodyJson(CreatePlacementGroupRequest)(body),
        Effect.flatMap(http.execute),
        Effect.flatMap(decodeJson(CreatePlacementGroupResponse)),
        Effect.catch(handleHetznerError),
        Effect.withSpan("HetznerClient.placementGroups.create"),
      ),

    /** Delete a PlacementGroup */
    delete: (id: number): Effect.Effect<void, HetznerErrors> =>
      http.del(`/placement_groups/${id}`).pipe(
        Effect.asVoid,
        Effect.catch(handleHetznerError),
        Effect.withSpan("HetznerClient.placementGroups.delete"),
      ),

    /** Get a PlacementGroup */
    get: (id: number): Effect.Effect<GetPlacementGroupResponse, HetznerErrors> =>
      HttpClientRequest.get(`/placement_groups/${id}`).pipe(
        http.execute,
        Effect.flatMap(decodeJson(GetPlacementGroupResponse)),
        Effect.catch(handleHetznerError),
        Effect.withSpan("HetznerClient.placementGroups.get"),
      ),

    /** List Placement Groups */
    list: (query?: ListPlacementGroupsQuery): Effect.Effect<ListPlacementGroupsResponse, HetznerErrors> =>
      HttpClientRequest.get("/placement_groups").pipe(
        HttpClientRequest.setUrlParams(toUrlParams({ sort: query?.sort, name: query?.name, label_selector: query?.labelSelector, type: query?.type, page: query?.page, per_page: query?.perPage })),
        http.execute,
        Effect.flatMap(decodeJson(ListPlacementGroupsResponse)),
        Effect.catch(handleHetznerError),
        Effect.withSpan("HetznerClient.placementGroups.list"),
      ),

    /** Update a PlacementGroup */
    update: (id: number, body: UpdatePlacementGroupRequest): Effect.Effect<UpdatePlacementGroupResponse, HetznerErrors> =>
      HttpClientRequest.put(`/placement_groups/${id}`).pipe(
        HttpClientRequest.schemaBodyJson(UpdatePlacementGroupRequest)(body),
        Effect.flatMap(http.execute),
        Effect.flatMap(decodeJson(UpdatePlacementGroupResponse)),
        Effect.catch(handleHetznerError),
        Effect.withSpan("HetznerClient.placementGroups.update"),
      ),
});

export type PlacementGroupsApi = ReturnType<typeof makePlacementGroups>;
