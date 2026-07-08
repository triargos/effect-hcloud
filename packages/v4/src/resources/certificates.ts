/**
 * Certificates — generated from the Hetzner Cloud OpenAPI spec. Do not edit by hand.
 */
import { Effect, Schema } from "effect";
import { HttpClient, HttpClientRequest } from "effect/unstable/http";
import { handleHetznerError, type HetznerError } from "../errors.js";
import { decodeJson } from "../internal/http.js";
import { toUrlParams } from "../internal/url-params.js";


export const CreateCertificateRequest = Schema.Struct({
    name: Schema.String,
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    type: Schema.optional(Schema.Literals(["uploaded", "managed"])),
    certificate: Schema.optional(Schema.String),
    private_key: Schema.optional(Schema.String),
    domain_names: Schema.optional(Schema.Array(Schema.String)),
  });
export type CreateCertificateRequest = typeof CreateCertificateRequest.Type;
export const CreateCertificateResponse = Schema.Struct({
    certificate: Schema.Struct({
      id: Schema.Int,
      name: Schema.String,
      labels: Schema.Record(Schema.String, Schema.String),
      type: Schema.optional(Schema.Literals(["uploaded", "managed"])),
      certificate: Schema.NullOr(Schema.String),
      created: Schema.String,
      not_valid_before: Schema.NullOr(Schema.String),
      not_valid_after: Schema.NullOr(Schema.String),
      domain_names: Schema.Array(Schema.String),
      fingerprint: Schema.NullOr(Schema.String),
      status: Schema.optional(Schema.NullOr(Schema.Struct({
        issuance: Schema.optional(Schema.Literals(["pending", "completed", "failed"])),
        renewal: Schema.optional(Schema.Literals(["scheduled", "pending", "failed", "unavailable"])),
        error: Schema.optional(Schema.NullOr(Schema.Struct({
          code: Schema.optional(Schema.String),
          message: Schema.optional(Schema.String),
        }))),
      }))),
      used_by: Schema.Array(Schema.Struct({
        id: Schema.Int,
        type: Schema.String,
      })),
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
export type CreateCertificateResponse = typeof CreateCertificateResponse.Type;

export const GetCertificateResponse = Schema.Struct({
    certificate: Schema.Struct({
      id: Schema.Int,
      name: Schema.String,
      labels: Schema.Record(Schema.String, Schema.String),
      type: Schema.optional(Schema.Literals(["uploaded", "managed"])),
      certificate: Schema.NullOr(Schema.String),
      created: Schema.String,
      not_valid_before: Schema.NullOr(Schema.String),
      not_valid_after: Schema.NullOr(Schema.String),
      domain_names: Schema.Array(Schema.String),
      fingerprint: Schema.NullOr(Schema.String),
      status: Schema.optional(Schema.NullOr(Schema.Struct({
        issuance: Schema.optional(Schema.Literals(["pending", "completed", "failed"])),
        renewal: Schema.optional(Schema.Literals(["scheduled", "pending", "failed", "unavailable"])),
        error: Schema.optional(Schema.NullOr(Schema.Struct({
          code: Schema.optional(Schema.String),
          message: Schema.optional(Schema.String),
        }))),
      }))),
      used_by: Schema.Array(Schema.Struct({
        id: Schema.Int,
        type: Schema.String,
      })),
    }),
  });
export type GetCertificateResponse = typeof GetCertificateResponse.Type;

export const GetCertificateActionResponse = Schema.Struct({
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
export type GetCertificateActionResponse = typeof GetCertificateActionResponse.Type;

export const GetCertificatesActionResponse = Schema.Struct({
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
export type GetCertificatesActionResponse = typeof GetCertificatesActionResponse.Type;

export const ListCertificatesResponse = Schema.Struct({
    certificates: Schema.Array(Schema.Struct({
      id: Schema.Int,
      name: Schema.String,
      labels: Schema.Record(Schema.String, Schema.String),
      type: Schema.optional(Schema.Literals(["uploaded", "managed"])),
      certificate: Schema.NullOr(Schema.String),
      created: Schema.String,
      not_valid_before: Schema.NullOr(Schema.String),
      not_valid_after: Schema.NullOr(Schema.String),
      domain_names: Schema.Array(Schema.String),
      fingerprint: Schema.NullOr(Schema.String),
      status: Schema.optional(Schema.NullOr(Schema.Struct({
        issuance: Schema.optional(Schema.Literals(["pending", "completed", "failed"])),
        renewal: Schema.optional(Schema.Literals(["scheduled", "pending", "failed", "unavailable"])),
        error: Schema.optional(Schema.NullOr(Schema.Struct({
          code: Schema.optional(Schema.String),
          message: Schema.optional(Schema.String),
        }))),
      }))),
      used_by: Schema.Array(Schema.Struct({
        id: Schema.Int,
        type: Schema.String,
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
export type ListCertificatesResponse = typeof ListCertificatesResponse.Type;
export interface ListCertificatesQuery {
  sort?: ReadonlyArray<"id" | "id:asc" | "id:desc" | "name" | "name:asc" | "name:desc" | "created" | "created:asc" | "created:desc">;
  name?: string;
  label_selector?: string;
  type?: ReadonlyArray<"uploaded" | "managed">;
  page?: number;
  per_page?: number;
}

export const ListCertificateActionsResponse = Schema.Struct({
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
export type ListCertificateActionsResponse = typeof ListCertificateActionsResponse.Type;
export interface ListCertificateActionsQuery {
  sort?: ReadonlyArray<"id" | "id:asc" | "id:desc" | "command" | "command:asc" | "command:desc" | "status" | "status:asc" | "status:desc" | "started" | "started:asc" | "started:desc" | "finished" | "finished:asc" | "finished:desc">;
  status?: ReadonlyArray<"running" | "success" | "error">;
  page?: number;
  per_page?: number;
}

export const ListCertificatesActionsResponse = Schema.Struct({
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
export type ListCertificatesActionsResponse = typeof ListCertificatesActionsResponse.Type;
export interface ListCertificatesActionsQuery {
  id?: ReadonlyArray<number>;
  sort?: ReadonlyArray<"id" | "id:asc" | "id:desc" | "command" | "command:asc" | "command:desc" | "status" | "status:asc" | "status:desc" | "started" | "started:asc" | "started:desc" | "finished" | "finished:asc" | "finished:desc">;
  status?: ReadonlyArray<"running" | "success" | "error">;
  page?: number;
  per_page?: number;
}

export const RetryCertificateResponse = Schema.Struct({
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
export type RetryCertificateResponse = typeof RetryCertificateResponse.Type;

export const UpdateCertificateRequest = Schema.Struct({
    name: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  });
export type UpdateCertificateRequest = typeof UpdateCertificateRequest.Type;
export const UpdateCertificateResponse = Schema.Struct({
    certificate: Schema.Struct({
      id: Schema.Int,
      name: Schema.String,
      labels: Schema.Record(Schema.String, Schema.String),
      type: Schema.optional(Schema.Literals(["uploaded", "managed"])),
      certificate: Schema.NullOr(Schema.String),
      created: Schema.String,
      not_valid_before: Schema.NullOr(Schema.String),
      not_valid_after: Schema.NullOr(Schema.String),
      domain_names: Schema.Array(Schema.String),
      fingerprint: Schema.NullOr(Schema.String),
      status: Schema.optional(Schema.NullOr(Schema.Struct({
        issuance: Schema.optional(Schema.Literals(["pending", "completed", "failed"])),
        renewal: Schema.optional(Schema.Literals(["scheduled", "pending", "failed", "unavailable"])),
        error: Schema.optional(Schema.NullOr(Schema.Struct({
          code: Schema.optional(Schema.String),
          message: Schema.optional(Schema.String),
        }))),
      }))),
      used_by: Schema.Array(Schema.Struct({
        id: Schema.Int,
        type: Schema.String,
      })),
    }),
  });
export type UpdateCertificateResponse = typeof UpdateCertificateResponse.Type;


export const makeCertificates = (http: HttpClient.HttpClient) => ({
    /** Create a Certificate */
    create: (body: CreateCertificateRequest): Effect.Effect<CreateCertificateResponse, HetznerError> =>
      HttpClientRequest.post("/certificates").pipe(
        HttpClientRequest.schemaBodyJson(CreateCertificateRequest)(body),
        Effect.flatMap(http.execute),
        Effect.flatMap(decodeJson(CreateCertificateResponse)),
        Effect.catch(handleHetznerError),
        Effect.withSpan("HetznerClient.certificates.create"),
      ),

    /** Delete a Certificate */
    delete: (id: number): Effect.Effect<void, HetznerError> =>
      http.del(`/certificates/${id}`).pipe(
        Effect.asVoid,
        Effect.catch(handleHetznerError),
        Effect.withSpan("HetznerClient.certificates.delete"),
      ),

    /** Get a Certificate */
    get: (id: number): Effect.Effect<GetCertificateResponse, HetznerError> =>
      HttpClientRequest.get(`/certificates/${id}`).pipe(
        http.execute,
        Effect.flatMap(decodeJson(GetCertificateResponse)),
        Effect.catch(handleHetznerError),
        Effect.withSpan("HetznerClient.certificates.get"),
      ),

    /** Get an Action for a Certificate */
    getAction: (id: number, action_id: number): Effect.Effect<GetCertificateActionResponse, HetznerError> =>
      HttpClientRequest.get(`/certificates/${id}/actions/${action_id}`).pipe(
        http.execute,
        Effect.flatMap(decodeJson(GetCertificateActionResponse)),
        Effect.catch(handleHetznerError),
        Effect.withSpan("HetznerClient.certificates.getAction"),
      ),

    /** Get an Action */
    getCertificatesAction: (id: number): Effect.Effect<GetCertificatesActionResponse, HetznerError> =>
      HttpClientRequest.get(`/certificates/actions/${id}`).pipe(
        http.execute,
        Effect.flatMap(decodeJson(GetCertificatesActionResponse)),
        Effect.catch(handleHetznerError),
        Effect.withSpan("HetznerClient.certificates.getCertificatesAction"),
      ),

    /** List Certificates */
    list: (query?: ListCertificatesQuery): Effect.Effect<ListCertificatesResponse, HetznerError> =>
      HttpClientRequest.get("/certificates").pipe(
        HttpClientRequest.setUrlParams(toUrlParams(query)),
        http.execute,
        Effect.flatMap(decodeJson(ListCertificatesResponse)),
        Effect.catch(handleHetznerError),
        Effect.withSpan("HetznerClient.certificates.list"),
      ),

    /** List Actions for a Certificate */
    listActions: (id: number, query?: ListCertificateActionsQuery): Effect.Effect<ListCertificateActionsResponse, HetznerError> =>
      HttpClientRequest.get(`/certificates/${id}/actions`).pipe(
        HttpClientRequest.setUrlParams(toUrlParams(query)),
        http.execute,
        Effect.flatMap(decodeJson(ListCertificateActionsResponse)),
        Effect.catch(handleHetznerError),
        Effect.withSpan("HetznerClient.certificates.listActions"),
      ),

    /** List Actions */
    listCertificatesActions: (query?: ListCertificatesActionsQuery): Effect.Effect<ListCertificatesActionsResponse, HetznerError> =>
      HttpClientRequest.get("/certificates/actions").pipe(
        HttpClientRequest.setUrlParams(toUrlParams(query)),
        http.execute,
        Effect.flatMap(decodeJson(ListCertificatesActionsResponse)),
        Effect.catch(handleHetznerError),
        Effect.withSpan("HetznerClient.certificates.listCertificatesActions"),
      ),

    /** Retry Issuance or Renewal */
    retry: (id: number): Effect.Effect<RetryCertificateResponse, HetznerError> =>
      HttpClientRequest.post(`/certificates/${id}/actions/retry`).pipe(
        http.execute,
        Effect.flatMap(decodeJson(RetryCertificateResponse)),
        Effect.catch(handleHetznerError),
        Effect.withSpan("HetznerClient.certificates.retry"),
      ),

    /** Update a Certificate */
    update: (id: number, body: UpdateCertificateRequest): Effect.Effect<UpdateCertificateResponse, HetznerError> =>
      HttpClientRequest.put(`/certificates/${id}`).pipe(
        HttpClientRequest.schemaBodyJson(UpdateCertificateRequest)(body),
        Effect.flatMap(http.execute),
        Effect.flatMap(decodeJson(UpdateCertificateResponse)),
        Effect.catch(handleHetznerError),
        Effect.withSpan("HetznerClient.certificates.update"),
      ),
});

export type CertificatesApi = ReturnType<typeof makeCertificates>;
