/**
 * SshKeys — generated from the Hetzner Cloud OpenAPI spec. Do not edit by hand.
 */
import { Effect, Schema } from "effect";
import { HttpClientRequest, HttpClientResponse } from "@effect/platform";
import type { HttpClient } from "@effect/platform";
import { handleHetznerError, type HetznerErrors } from "../errors.js";
import { toUrlParams } from "../internal/url-params.js";


export const CreateSshKeyRequest = Schema.Struct({
    name: Schema.String,
    public_key: Schema.String,
    labels: Schema.optional(Schema.Record({ key: Schema.String, value: Schema.String })),
  });
export type CreateSshKeyRequest = typeof CreateSshKeyRequest.Type;
export const CreateSshKeyResponse = Schema.Struct({
    ssh_key: Schema.Struct({
      id: Schema.Int,
      name: Schema.String,
      fingerprint: Schema.String,
      public_key: Schema.String,
      labels: Schema.Record({ key: Schema.String, value: Schema.String }),
      created: Schema.String,
    }),
  });
export type CreateSshKeyResponse = typeof CreateSshKeyResponse.Type;

export const GetSshKeyResponse = Schema.Struct({
    ssh_key: Schema.Struct({
      id: Schema.Int,
      name: Schema.String,
      fingerprint: Schema.String,
      public_key: Schema.String,
      labels: Schema.Record({ key: Schema.String, value: Schema.String }),
      created: Schema.String,
    }),
  });
export type GetSshKeyResponse = typeof GetSshKeyResponse.Type;

export const ListSshKeysResponse = Schema.Struct({
    ssh_keys: Schema.Array(Schema.Struct({
      id: Schema.Int,
      name: Schema.String,
      fingerprint: Schema.String,
      public_key: Schema.String,
      labels: Schema.Record({ key: Schema.String, value: Schema.String }),
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
export type ListSshKeysResponse = typeof ListSshKeysResponse.Type;
export interface ListSshKeysQuery {
  sort?: ReadonlyArray<"id" | "id:asc" | "id:desc" | "name" | "name:asc" | "name:desc">;
  name?: string;
  fingerprint?: string;
  label_selector?: string;
  page?: number;
  per_page?: number;
}

export const UpdateSshKeyRequest = Schema.Struct({
    name: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record({ key: Schema.String, value: Schema.String })),
  });
export type UpdateSshKeyRequest = typeof UpdateSshKeyRequest.Type;
export const UpdateSshKeyResponse = Schema.Struct({
    ssh_key: Schema.Struct({
      id: Schema.Int,
      name: Schema.String,
      fingerprint: Schema.String,
      public_key: Schema.String,
      labels: Schema.Record({ key: Schema.String, value: Schema.String }),
      created: Schema.String,
    }),
  });
export type UpdateSshKeyResponse = typeof UpdateSshKeyResponse.Type;


export const makeSshKeys = (http: HttpClient.HttpClient) => ({
    /** Create an SSH key */
    create: (body: CreateSshKeyRequest): Effect.Effect<CreateSshKeyResponse, HetznerErrors> =>
      HttpClientRequest.post("/ssh_keys").pipe(
        HttpClientRequest.schemaBodyJson(CreateSshKeyRequest)(body),
        Effect.flatMap(http.execute),
        Effect.flatMap(HttpClientResponse.schemaBodyJson(CreateSshKeyResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.sshKeys.create"),
      ),

    /** Delete an SSH key */
    delete: (id: number): Effect.Effect<void, HetznerErrors> =>
      http.del(`/ssh_keys/${id}`).pipe(
        Effect.asVoid,
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.sshKeys.delete"),
      ),

    /** Get a SSH key */
    get: (id: number): Effect.Effect<GetSshKeyResponse, HetznerErrors> =>
      HttpClientRequest.get(`/ssh_keys/${id}`).pipe(
        http.execute,
        Effect.flatMap(HttpClientResponse.schemaBodyJson(GetSshKeyResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.sshKeys.get"),
      ),

    /** List SSH keys */
    list: (query?: ListSshKeysQuery): Effect.Effect<ListSshKeysResponse, HetznerErrors> =>
      HttpClientRequest.get("/ssh_keys").pipe(
        HttpClientRequest.setUrlParams(toUrlParams(query)),
        http.execute,
        Effect.flatMap(HttpClientResponse.schemaBodyJson(ListSshKeysResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.sshKeys.list"),
      ),

    /** Update an SSH key */
    update: (id: number, body: UpdateSshKeyRequest): Effect.Effect<UpdateSshKeyResponse, HetznerErrors> =>
      HttpClientRequest.put(`/ssh_keys/${id}`).pipe(
        HttpClientRequest.schemaBodyJson(UpdateSshKeyRequest)(body),
        Effect.flatMap(http.execute),
        Effect.flatMap(HttpClientResponse.schemaBodyJson(UpdateSshKeyResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.sshKeys.update"),
      ),
});

export type SshKeysApi = ReturnType<typeof makeSshKeys>;
