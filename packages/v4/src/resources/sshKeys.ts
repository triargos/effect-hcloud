/**
 * SshKeys — generated from the Hetzner Cloud OpenAPI spec. Do not edit by hand.
 */
import { Effect, Schema } from "effect";
import { HttpClient, HttpClientRequest } from "effect/unstable/http";
import { handleHetznerError, type HetznerErrors } from "../errors.js";
import { decodeJson } from "../internal/http.js";
import { toUrlParams } from "../internal/url-params.js";


export const CreateSshKeyRequest = Schema.Struct({
    name: Schema.String,
    publicKey: Schema.String,
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).pipe(Schema.encodeKeys({ publicKey: "public_key" }));
export type CreateSshKeyRequest = typeof CreateSshKeyRequest.Type;
export const CreateSshKeyResponse = Schema.Struct({
    sshKey: Schema.Struct({
      id: Schema.Int,
      name: Schema.String,
      fingerprint: Schema.String,
      publicKey: Schema.String,
      labels: Schema.Record(Schema.String, Schema.String),
      created: Schema.String,
    }).pipe(Schema.encodeKeys({ publicKey: "public_key" })),
  }).pipe(Schema.encodeKeys({ sshKey: "ssh_key" }));
export type CreateSshKeyResponse = typeof CreateSshKeyResponse.Type;

export const GetSshKeyResponse = Schema.Struct({
    sshKey: Schema.Struct({
      id: Schema.Int,
      name: Schema.String,
      fingerprint: Schema.String,
      publicKey: Schema.String,
      labels: Schema.Record(Schema.String, Schema.String),
      created: Schema.String,
    }).pipe(Schema.encodeKeys({ publicKey: "public_key" })),
  }).pipe(Schema.encodeKeys({ sshKey: "ssh_key" }));
export type GetSshKeyResponse = typeof GetSshKeyResponse.Type;

export const ListSshKeysResponse = Schema.Struct({
    sshKeys: Schema.Array(Schema.Struct({
      id: Schema.Int,
      name: Schema.String,
      fingerprint: Schema.String,
      publicKey: Schema.String,
      labels: Schema.Record(Schema.String, Schema.String),
      created: Schema.String,
    }).pipe(Schema.encodeKeys({ publicKey: "public_key" }))),
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
  }).pipe(Schema.encodeKeys({ sshKeys: "ssh_keys" }));
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
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  });
export type UpdateSshKeyRequest = typeof UpdateSshKeyRequest.Type;
export const UpdateSshKeyResponse = Schema.Struct({
    sshKey: Schema.Struct({
      id: Schema.Int,
      name: Schema.String,
      fingerprint: Schema.String,
      publicKey: Schema.String,
      labels: Schema.Record(Schema.String, Schema.String),
      created: Schema.String,
    }).pipe(Schema.encodeKeys({ publicKey: "public_key" })),
  }).pipe(Schema.encodeKeys({ sshKey: "ssh_key" }));
export type UpdateSshKeyResponse = typeof UpdateSshKeyResponse.Type;


export const makeSshKeys = (http: HttpClient.HttpClient) => ({
    /** Create an SSH key */
    create: (body: CreateSshKeyRequest): Effect.Effect<CreateSshKeyResponse, HetznerErrors> =>
      HttpClientRequest.post("/ssh_keys").pipe(
        HttpClientRequest.schemaBodyJson(CreateSshKeyRequest)(body),
        Effect.flatMap(http.execute),
        Effect.flatMap(decodeJson(CreateSshKeyResponse)),
        Effect.catch(handleHetznerError),
        Effect.withSpan("HetznerClient.sshKeys.create"),
      ),

    /** Delete an SSH key */
    delete: (id: number): Effect.Effect<void, HetznerErrors> =>
      http.del(`/ssh_keys/${id}`).pipe(
        Effect.asVoid,
        Effect.catch(handleHetznerError),
        Effect.withSpan("HetznerClient.sshKeys.delete"),
      ),

    /** Get a SSH key */
    get: (id: number): Effect.Effect<GetSshKeyResponse, HetznerErrors> =>
      HttpClientRequest.get(`/ssh_keys/${id}`).pipe(
        http.execute,
        Effect.flatMap(decodeJson(GetSshKeyResponse)),
        Effect.catch(handleHetznerError),
        Effect.withSpan("HetznerClient.sshKeys.get"),
      ),

    /** List SSH keys */
    list: (query?: ListSshKeysQuery): Effect.Effect<ListSshKeysResponse, HetznerErrors> =>
      HttpClientRequest.get("/ssh_keys").pipe(
        HttpClientRequest.setUrlParams(toUrlParams({ sort: query?.sort, name: query?.name, fingerprint: query?.fingerprint, label_selector: query?.labelSelector, page: query?.page, per_page: query?.perPage })),
        http.execute,
        Effect.flatMap(decodeJson(ListSshKeysResponse)),
        Effect.catch(handleHetznerError),
        Effect.withSpan("HetznerClient.sshKeys.list"),
      ),

    /** Update an SSH key */
    update: (id: number, body: UpdateSshKeyRequest): Effect.Effect<UpdateSshKeyResponse, HetznerErrors> =>
      HttpClientRequest.put(`/ssh_keys/${id}`).pipe(
        HttpClientRequest.schemaBodyJson(UpdateSshKeyRequest)(body),
        Effect.flatMap(http.execute),
        Effect.flatMap(decodeJson(UpdateSshKeyResponse)),
        Effect.catch(handleHetznerError),
        Effect.withSpan("HetznerClient.sshKeys.update"),
      ),
});

export type SshKeysApi = ReturnType<typeof makeSshKeys>;
