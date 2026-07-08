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
    publicKey: Schema.propertySignature(Schema.String).pipe(Schema.fromKey("public_key")),
    labels: Schema.optional(Schema.Record({ key: Schema.String, value: Schema.String })),
  });
export type CreateSshKeyRequest = typeof CreateSshKeyRequest.Type;
export const CreateSshKeyResponse = Schema.Struct({
    sshKey: Schema.propertySignature(Schema.Struct({
      id: Schema.Int,
      name: Schema.String,
      fingerprint: Schema.String,
      publicKey: Schema.propertySignature(Schema.String).pipe(Schema.fromKey("public_key")),
      labels: Schema.Record({ key: Schema.String, value: Schema.String }),
      created: Schema.String,
    })).pipe(Schema.fromKey("ssh_key")),
  });
export type CreateSshKeyResponse = typeof CreateSshKeyResponse.Type;

export const GetSshKeyResponse = Schema.Struct({
    sshKey: Schema.propertySignature(Schema.Struct({
      id: Schema.Int,
      name: Schema.String,
      fingerprint: Schema.String,
      publicKey: Schema.propertySignature(Schema.String).pipe(Schema.fromKey("public_key")),
      labels: Schema.Record({ key: Schema.String, value: Schema.String }),
      created: Schema.String,
    })).pipe(Schema.fromKey("ssh_key")),
  });
export type GetSshKeyResponse = typeof GetSshKeyResponse.Type;

export const ListSshKeysResponse = Schema.Struct({
    sshKeys: Schema.propertySignature(Schema.Array(Schema.Struct({
      id: Schema.Int,
      name: Schema.String,
      fingerprint: Schema.String,
      publicKey: Schema.propertySignature(Schema.String).pipe(Schema.fromKey("public_key")),
      labels: Schema.Record({ key: Schema.String, value: Schema.String }),
      created: Schema.String,
    }))).pipe(Schema.fromKey("ssh_keys")),
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
export type ListSshKeysResponse = typeof ListSshKeysResponse.Type;
export interface ListSshKeysQuery {
  sort?: ReadonlyArray<"id" | "id:asc" | "id:desc" | "name" | "name:asc" | "name:desc">;
  name?: string;
  fingerprint?: string;
  labelSelector?: string;
  page?: number;
  perPage?: number;
}

export const UpdateSshKeyRequest = Schema.Struct({
    name: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record({ key: Schema.String, value: Schema.String })),
  });
export type UpdateSshKeyRequest = typeof UpdateSshKeyRequest.Type;
export const UpdateSshKeyResponse = Schema.Struct({
    sshKey: Schema.propertySignature(Schema.Struct({
      id: Schema.Int,
      name: Schema.String,
      fingerprint: Schema.String,
      publicKey: Schema.propertySignature(Schema.String).pipe(Schema.fromKey("public_key")),
      labels: Schema.Record({ key: Schema.String, value: Schema.String }),
      created: Schema.String,
    })).pipe(Schema.fromKey("ssh_key")),
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
        HttpClientRequest.setUrlParams(toUrlParams({ sort: query?.sort, name: query?.name, fingerprint: query?.fingerprint, label_selector: query?.labelSelector, page: query?.page, per_page: query?.perPage })),
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
