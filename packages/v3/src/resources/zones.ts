/**
 * Zones — generated from the Hetzner Cloud OpenAPI spec. Do not edit by hand.
 */
import { Effect, Schema } from "effect";
import { HttpClientRequest, HttpClientResponse } from "@effect/platform";
import type { HttpClient } from "@effect/platform";
import { handleHetznerError, type HetznerErrors } from "../errors.js";
import { toUrlParams } from "../internal/url-params.js";


export const AddZoneRrsetRecordsRequest = Schema.Struct({
    ttl: Schema.optional(Schema.NullOr(Schema.Int)),
    records: Schema.Array(Schema.Struct({
      value: Schema.String,
      comment: Schema.optional(Schema.String),
    })),
  });
export type AddZoneRrsetRecordsRequest = typeof AddZoneRrsetRecordsRequest.Type;
export const AddZoneRrsetRecordsResponse = Schema.Struct({
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
export type AddZoneRrsetRecordsResponse = typeof AddZoneRrsetRecordsResponse.Type;

export const ChangeZonePrimaryNameserversRequest = Schema.Struct({
    primaryNameservers: Schema.propertySignature(Schema.Array(Schema.Struct({
      address: Schema.String,
      port: Schema.optional(Schema.Int),
      tsigKey: Schema.optional(Schema.String).pipe(Schema.fromKey("tsig_key")),
      tsigAlgorithm: Schema.optional(Schema.Literal("hmac-md5", "hmac-sha1", "hmac-sha256")).pipe(Schema.fromKey("tsig_algorithm")),
    }))).pipe(Schema.fromKey("primary_nameservers")),
  });
export type ChangeZonePrimaryNameserversRequest = typeof ChangeZonePrimaryNameserversRequest.Type;
export const ChangeZonePrimaryNameserversResponse = Schema.Struct({
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
export type ChangeZonePrimaryNameserversResponse = typeof ChangeZonePrimaryNameserversResponse.Type;

export const ChangeZoneProtectionRequest = Schema.Struct({
    delete: Schema.optional(Schema.Boolean),
  });
export type ChangeZoneProtectionRequest = typeof ChangeZoneProtectionRequest.Type;
export const ChangeZoneProtectionResponse = Schema.Struct({
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
export type ChangeZoneProtectionResponse = typeof ChangeZoneProtectionResponse.Type;

export const ChangeZoneRrsetProtectionRequest = Schema.Struct({
    change: Schema.Boolean,
  });
export type ChangeZoneRrsetProtectionRequest = typeof ChangeZoneRrsetProtectionRequest.Type;
export const ChangeZoneRrsetProtectionResponse = Schema.Struct({
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
export type ChangeZoneRrsetProtectionResponse = typeof ChangeZoneRrsetProtectionResponse.Type;

export const ChangeZoneRrsetTtlRequest = Schema.Struct({
    ttl: Schema.NullOr(Schema.Int),
  });
export type ChangeZoneRrsetTtlRequest = typeof ChangeZoneRrsetTtlRequest.Type;
export const ChangeZoneRrsetTtlResponse = Schema.Struct({
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
export type ChangeZoneRrsetTtlResponse = typeof ChangeZoneRrsetTtlResponse.Type;

export const ChangeZoneTtlRequest = Schema.Struct({
    ttl: Schema.Int,
  });
export type ChangeZoneTtlRequest = typeof ChangeZoneTtlRequest.Type;
export const ChangeZoneTtlResponse = Schema.Struct({
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
export type ChangeZoneTtlResponse = typeof ChangeZoneTtlResponse.Type;

export const CreateZoneRequest = Schema.Struct({
    name: Schema.String,
    mode: Schema.Literal("primary", "secondary"),
    ttl: Schema.optional(Schema.Int),
    labels: Schema.optional(Schema.Record({ key: Schema.String, value: Schema.String })),
    primaryNameservers: Schema.optional(Schema.Array(Schema.Struct({
      address: Schema.String,
      port: Schema.optional(Schema.Int),
      tsigKey: Schema.optional(Schema.String).pipe(Schema.fromKey("tsig_key")),
      tsigAlgorithm: Schema.optional(Schema.Literal("hmac-md5", "hmac-sha1", "hmac-sha256")).pipe(Schema.fromKey("tsig_algorithm")),
    }))).pipe(Schema.fromKey("primary_nameservers")),
    rrsets: Schema.optional(Schema.Array(Schema.Struct({
      name: Schema.String,
      type: Schema.Literal("A", "AAAA", "CAA", "CNAME", "DS", "HINFO", "HTTPS", "MX", "NS", "PTR", "RP", "SOA", "SRV", "SVCB", "TLSA", "TXT"),
      ttl: Schema.optional(Schema.NullOr(Schema.Int)),
      records: Schema.Array(Schema.Struct({
        value: Schema.String,
        comment: Schema.optional(Schema.String),
      })),
      labels: Schema.optional(Schema.Record({ key: Schema.String, value: Schema.String })),
    }))),
    zonefile: Schema.optional(Schema.String),
  });
export type CreateZoneRequest = typeof CreateZoneRequest.Type;
export const CreateZoneResponse = Schema.Struct({
    zone: Schema.Union(Schema.Struct({
      id: Schema.Int,
      name: Schema.String,
      created: Schema.String,
      primaryNameservers: Schema.optional(Schema.Array(Schema.Struct({
        address: Schema.String,
        port: Schema.optional(Schema.Int),
        tsigKey: Schema.optional(Schema.String).pipe(Schema.fromKey("tsig_key")),
        tsigAlgorithm: Schema.optional(Schema.Literal("hmac-md5", "hmac-sha1", "hmac-sha256")).pipe(Schema.fromKey("tsig_algorithm")),
      }))).pipe(Schema.fromKey("primary_nameservers")),
      labels: Schema.Record({ key: Schema.String, value: Schema.String }),
      protection: Schema.Struct({
        delete: Schema.Boolean,
      }),
      ttl: Schema.Int,
      status: Schema.Literal("ok", "updating", "error"),
      recordCount: Schema.propertySignature(Schema.Int).pipe(Schema.fromKey("record_count")),
      authoritativeNameservers: Schema.propertySignature(Schema.Struct({
        assigned: Schema.Array(Schema.String),
        delegated: Schema.Array(Schema.String),
        delegationLastCheck: Schema.propertySignature(Schema.NullOr(Schema.String)).pipe(Schema.fromKey("delegation_last_check")),
        delegationStatus: Schema.optional(Schema.Literal("valid", "partially-valid", "invalid", "lame", "unregistered", "unknown")).pipe(Schema.fromKey("delegation_status")),
      })).pipe(Schema.fromKey("authoritative_nameservers")),
      registrar: Schema.Literal("hetzner", "other", "unknown"),
      mode: Schema.Literal("primary"),
    }), Schema.Struct({
      id: Schema.Int,
      name: Schema.String,
      created: Schema.String,
      primaryNameservers: Schema.optional(Schema.Array(Schema.Struct({
        address: Schema.String,
        port: Schema.optional(Schema.Int),
        tsigKey: Schema.optional(Schema.String).pipe(Schema.fromKey("tsig_key")),
        tsigAlgorithm: Schema.optional(Schema.Literal("hmac-md5", "hmac-sha1", "hmac-sha256")).pipe(Schema.fromKey("tsig_algorithm")),
      }))).pipe(Schema.fromKey("primary_nameservers")),
      labels: Schema.Record({ key: Schema.String, value: Schema.String }),
      protection: Schema.Struct({
        delete: Schema.Boolean,
      }),
      ttl: Schema.Int,
      status: Schema.Literal("ok", "updating", "error"),
      recordCount: Schema.propertySignature(Schema.Int).pipe(Schema.fromKey("record_count")),
      authoritativeNameservers: Schema.propertySignature(Schema.Struct({
        assigned: Schema.Array(Schema.String),
        delegated: Schema.Array(Schema.String),
        delegationLastCheck: Schema.propertySignature(Schema.NullOr(Schema.String)).pipe(Schema.fromKey("delegation_last_check")),
        delegationStatus: Schema.optional(Schema.Literal("valid", "partially-valid", "invalid", "lame", "unregistered", "unknown")).pipe(Schema.fromKey("delegation_status")),
      })).pipe(Schema.fromKey("authoritative_nameservers")),
      registrar: Schema.Literal("hetzner", "other", "unknown"),
      mode: Schema.Literal("secondary"),
    })),
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
export type CreateZoneResponse = typeof CreateZoneResponse.Type;

export const CreateZoneRrsetRequest = Schema.Struct({
    name: Schema.String,
    type: Schema.Literal("A", "AAAA", "CAA", "CNAME", "DS", "HINFO", "HTTPS", "MX", "NS", "PTR", "RP", "SOA", "SRV", "SVCB", "TLSA", "TXT"),
    ttl: Schema.optional(Schema.NullOr(Schema.Int)),
    records: Schema.Array(Schema.Struct({
      value: Schema.String,
      comment: Schema.optional(Schema.String),
    })),
    labels: Schema.optional(Schema.Record({ key: Schema.String, value: Schema.String })),
  });
export type CreateZoneRrsetRequest = typeof CreateZoneRrsetRequest.Type;
export const CreateZoneRrsetResponse = Schema.Struct({
    rrset: Schema.Struct({
      id: Schema.String,
      name: Schema.String,
      type: Schema.Literal("A", "AAAA", "CAA", "CNAME", "DS", "HINFO", "HTTPS", "MX", "NS", "PTR", "RP", "SOA", "SRV", "SVCB", "TLSA", "TXT"),
      ttl: Schema.NullOr(Schema.Int),
      labels: Schema.Record({ key: Schema.String, value: Schema.String }),
      protection: Schema.Struct({
        change: Schema.Boolean,
      }),
      records: Schema.Array(Schema.Struct({
        value: Schema.String,
        comment: Schema.optional(Schema.String),
      })),
      zone: Schema.Int,
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
  });
export type CreateZoneRrsetResponse = typeof CreateZoneRrsetResponse.Type;

export const DeleteZoneResponse = Schema.Struct({
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
export type DeleteZoneResponse = typeof DeleteZoneResponse.Type;

export const DeleteZoneRrsetResponse = Schema.Struct({
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
export type DeleteZoneRrsetResponse = typeof DeleteZoneRrsetResponse.Type;

export const GetZoneResponse = Schema.Struct({
    zone: Schema.Union(Schema.Struct({
      id: Schema.Int,
      name: Schema.String,
      created: Schema.String,
      primaryNameservers: Schema.optional(Schema.Array(Schema.Struct({
        address: Schema.String,
        port: Schema.optional(Schema.Int),
        tsigKey: Schema.optional(Schema.String).pipe(Schema.fromKey("tsig_key")),
        tsigAlgorithm: Schema.optional(Schema.Literal("hmac-md5", "hmac-sha1", "hmac-sha256")).pipe(Schema.fromKey("tsig_algorithm")),
      }))).pipe(Schema.fromKey("primary_nameservers")),
      labels: Schema.Record({ key: Schema.String, value: Schema.String }),
      protection: Schema.Struct({
        delete: Schema.Boolean,
      }),
      ttl: Schema.Int,
      status: Schema.Literal("ok", "updating", "error"),
      recordCount: Schema.propertySignature(Schema.Int).pipe(Schema.fromKey("record_count")),
      authoritativeNameservers: Schema.propertySignature(Schema.Struct({
        assigned: Schema.Array(Schema.String),
        delegated: Schema.Array(Schema.String),
        delegationLastCheck: Schema.propertySignature(Schema.NullOr(Schema.String)).pipe(Schema.fromKey("delegation_last_check")),
        delegationStatus: Schema.optional(Schema.Literal("valid", "partially-valid", "invalid", "lame", "unregistered", "unknown")).pipe(Schema.fromKey("delegation_status")),
      })).pipe(Schema.fromKey("authoritative_nameservers")),
      registrar: Schema.Literal("hetzner", "other", "unknown"),
      mode: Schema.Literal("primary"),
    }), Schema.Struct({
      id: Schema.Int,
      name: Schema.String,
      created: Schema.String,
      primaryNameservers: Schema.optional(Schema.Array(Schema.Struct({
        address: Schema.String,
        port: Schema.optional(Schema.Int),
        tsigKey: Schema.optional(Schema.String).pipe(Schema.fromKey("tsig_key")),
        tsigAlgorithm: Schema.optional(Schema.Literal("hmac-md5", "hmac-sha1", "hmac-sha256")).pipe(Schema.fromKey("tsig_algorithm")),
      }))).pipe(Schema.fromKey("primary_nameservers")),
      labels: Schema.Record({ key: Schema.String, value: Schema.String }),
      protection: Schema.Struct({
        delete: Schema.Boolean,
      }),
      ttl: Schema.Int,
      status: Schema.Literal("ok", "updating", "error"),
      recordCount: Schema.propertySignature(Schema.Int).pipe(Schema.fromKey("record_count")),
      authoritativeNameservers: Schema.propertySignature(Schema.Struct({
        assigned: Schema.Array(Schema.String),
        delegated: Schema.Array(Schema.String),
        delegationLastCheck: Schema.propertySignature(Schema.NullOr(Schema.String)).pipe(Schema.fromKey("delegation_last_check")),
        delegationStatus: Schema.optional(Schema.Literal("valid", "partially-valid", "invalid", "lame", "unregistered", "unknown")).pipe(Schema.fromKey("delegation_status")),
      })).pipe(Schema.fromKey("authoritative_nameservers")),
      registrar: Schema.Literal("hetzner", "other", "unknown"),
      mode: Schema.Literal("secondary"),
    })),
  });
export type GetZoneResponse = typeof GetZoneResponse.Type;

export const GetZoneActionResponse = Schema.Struct({
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
export type GetZoneActionResponse = typeof GetZoneActionResponse.Type;

export const GetZoneRrsetResponse = Schema.Struct({
    rrset: Schema.Struct({
      id: Schema.String,
      name: Schema.String,
      type: Schema.Literal("A", "AAAA", "CAA", "CNAME", "DS", "HINFO", "HTTPS", "MX", "NS", "PTR", "RP", "SOA", "SRV", "SVCB", "TLSA", "TXT"),
      ttl: Schema.NullOr(Schema.Int),
      labels: Schema.Record({ key: Schema.String, value: Schema.String }),
      protection: Schema.Struct({
        change: Schema.Boolean,
      }),
      records: Schema.Array(Schema.Struct({
        value: Schema.String,
        comment: Schema.optional(Schema.String),
      })),
      zone: Schema.Int,
    }),
  });
export type GetZoneRrsetResponse = typeof GetZoneRrsetResponse.Type;

export const GetZoneZonefileResponse = Schema.Struct({
    zonefile: Schema.String,
  });
export type GetZoneZonefileResponse = typeof GetZoneZonefileResponse.Type;

export const GetZonesActionResponse = Schema.Struct({
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
export type GetZonesActionResponse = typeof GetZonesActionResponse.Type;

export const ImportZoneZonefileRequest = Schema.Struct({
    zonefile: Schema.String,
  });
export type ImportZoneZonefileRequest = typeof ImportZoneZonefileRequest.Type;
export const ImportZoneZonefileResponse = Schema.Struct({
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
export type ImportZoneZonefileResponse = typeof ImportZoneZonefileResponse.Type;

export const ListZonesResponse = Schema.Struct({
    zones: Schema.Array(Schema.Union(Schema.Struct({
      id: Schema.Int,
      name: Schema.String,
      created: Schema.String,
      primaryNameservers: Schema.optional(Schema.Array(Schema.Struct({
        address: Schema.String,
        port: Schema.optional(Schema.Int),
        tsigKey: Schema.optional(Schema.String).pipe(Schema.fromKey("tsig_key")),
        tsigAlgorithm: Schema.optional(Schema.Literal("hmac-md5", "hmac-sha1", "hmac-sha256")).pipe(Schema.fromKey("tsig_algorithm")),
      }))).pipe(Schema.fromKey("primary_nameservers")),
      labels: Schema.Record({ key: Schema.String, value: Schema.String }),
      protection: Schema.Struct({
        delete: Schema.Boolean,
      }),
      ttl: Schema.Int,
      status: Schema.Literal("ok", "updating", "error"),
      recordCount: Schema.propertySignature(Schema.Int).pipe(Schema.fromKey("record_count")),
      authoritativeNameservers: Schema.propertySignature(Schema.Struct({
        assigned: Schema.Array(Schema.String),
        delegated: Schema.Array(Schema.String),
        delegationLastCheck: Schema.propertySignature(Schema.NullOr(Schema.String)).pipe(Schema.fromKey("delegation_last_check")),
        delegationStatus: Schema.optional(Schema.Literal("valid", "partially-valid", "invalid", "lame", "unregistered", "unknown")).pipe(Schema.fromKey("delegation_status")),
      })).pipe(Schema.fromKey("authoritative_nameservers")),
      registrar: Schema.Literal("hetzner", "other", "unknown"),
      mode: Schema.Literal("primary"),
    }), Schema.Struct({
      id: Schema.Int,
      name: Schema.String,
      created: Schema.String,
      primaryNameservers: Schema.optional(Schema.Array(Schema.Struct({
        address: Schema.String,
        port: Schema.optional(Schema.Int),
        tsigKey: Schema.optional(Schema.String).pipe(Schema.fromKey("tsig_key")),
        tsigAlgorithm: Schema.optional(Schema.Literal("hmac-md5", "hmac-sha1", "hmac-sha256")).pipe(Schema.fromKey("tsig_algorithm")),
      }))).pipe(Schema.fromKey("primary_nameservers")),
      labels: Schema.Record({ key: Schema.String, value: Schema.String }),
      protection: Schema.Struct({
        delete: Schema.Boolean,
      }),
      ttl: Schema.Int,
      status: Schema.Literal("ok", "updating", "error"),
      recordCount: Schema.propertySignature(Schema.Int).pipe(Schema.fromKey("record_count")),
      authoritativeNameservers: Schema.propertySignature(Schema.Struct({
        assigned: Schema.Array(Schema.String),
        delegated: Schema.Array(Schema.String),
        delegationLastCheck: Schema.propertySignature(Schema.NullOr(Schema.String)).pipe(Schema.fromKey("delegation_last_check")),
        delegationStatus: Schema.optional(Schema.Literal("valid", "partially-valid", "invalid", "lame", "unregistered", "unknown")).pipe(Schema.fromKey("delegation_status")),
      })).pipe(Schema.fromKey("authoritative_nameservers")),
      registrar: Schema.Literal("hetzner", "other", "unknown"),
      mode: Schema.Literal("secondary"),
    }))),
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
export type ListZonesResponse = typeof ListZonesResponse.Type;
export interface ListZonesQuery {
  name?: string;
  mode?: "primary" | "secondary";
  labelSelector?: string;
  sort?: ReadonlyArray<"id" | "id:asc" | "id:desc" | "name" | "name:asc" | "name:desc" | "created" | "created:asc" | "created:desc">;
  page?: number;
  perPage?: number;
}

export const ListZoneActionsResponse = Schema.Struct({
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
        perPage: Schema.propertySignature(Schema.Int).pipe(Schema.fromKey("per_page")),
        previousPage: Schema.propertySignature(Schema.NullOr(Schema.Int)).pipe(Schema.fromKey("previous_page")),
        nextPage: Schema.propertySignature(Schema.NullOr(Schema.Int)).pipe(Schema.fromKey("next_page")),
        lastPage: Schema.propertySignature(Schema.NullOr(Schema.Int)).pipe(Schema.fromKey("last_page")),
        totalEntries: Schema.propertySignature(Schema.NullOr(Schema.Int)).pipe(Schema.fromKey("total_entries")),
      }),
    }),
  });
export type ListZoneActionsResponse = typeof ListZoneActionsResponse.Type;
export interface ListZoneActionsQuery {
  sort?: ReadonlyArray<"id" | "id:asc" | "id:desc" | "command" | "command:asc" | "command:desc" | "status" | "status:asc" | "status:desc" | "started" | "started:asc" | "started:desc" | "finished" | "finished:asc" | "finished:desc">;
  status?: ReadonlyArray<"running" | "success" | "error">;
  page?: number;
  perPage?: number;
}

export const ListZoneRrsetsResponse = Schema.Struct({
    rrsets: Schema.Array(Schema.Struct({
      id: Schema.String,
      name: Schema.String,
      type: Schema.Literal("A", "AAAA", "CAA", "CNAME", "DS", "HINFO", "HTTPS", "MX", "NS", "PTR", "RP", "SOA", "SRV", "SVCB", "TLSA", "TXT"),
      ttl: Schema.NullOr(Schema.Int),
      labels: Schema.Record({ key: Schema.String, value: Schema.String }),
      protection: Schema.Struct({
        change: Schema.Boolean,
      }),
      records: Schema.Array(Schema.Struct({
        value: Schema.String,
        comment: Schema.optional(Schema.String),
      })),
      zone: Schema.Int,
    })),
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
export type ListZoneRrsetsResponse = typeof ListZoneRrsetsResponse.Type;
export interface ListZoneRrsetsQuery {
  name?: string;
  type?: ReadonlyArray<"A" | "AAAA" | "CAA" | "CNAME" | "DS" | "HINFO" | "HTTPS" | "MX" | "NS" | "PTR" | "RP" | "SOA" | "SRV" | "SVCB" | "TLSA" | "TXT">;
  labelSelector?: string;
  sort?: ReadonlyArray<"id" | "id:asc" | "id:desc" | "name" | "name:asc" | "name:desc" | "created" | "created:asc" | "created:desc">;
  page?: number;
  perPage?: number;
}

export const ListZonesActionsResponse = Schema.Struct({
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
        perPage: Schema.propertySignature(Schema.Int).pipe(Schema.fromKey("per_page")),
        previousPage: Schema.propertySignature(Schema.NullOr(Schema.Int)).pipe(Schema.fromKey("previous_page")),
        nextPage: Schema.propertySignature(Schema.NullOr(Schema.Int)).pipe(Schema.fromKey("next_page")),
        lastPage: Schema.propertySignature(Schema.NullOr(Schema.Int)).pipe(Schema.fromKey("last_page")),
        totalEntries: Schema.propertySignature(Schema.NullOr(Schema.Int)).pipe(Schema.fromKey("total_entries")),
      }),
    }),
  });
export type ListZonesActionsResponse = typeof ListZonesActionsResponse.Type;
export interface ListZonesActionsQuery {
  id?: ReadonlyArray<number>;
  sort?: ReadonlyArray<"id" | "id:asc" | "id:desc" | "command" | "command:asc" | "command:desc" | "status" | "status:asc" | "status:desc" | "started" | "started:asc" | "started:desc" | "finished" | "finished:asc" | "finished:desc">;
  status?: ReadonlyArray<"running" | "success" | "error">;
  page?: number;
  perPage?: number;
}

export const RemoveZoneRrsetRecordsRequest = Schema.Struct({
    records: Schema.Array(Schema.Struct({
      value: Schema.String,
      comment: Schema.optional(Schema.String),
    })),
  });
export type RemoveZoneRrsetRecordsRequest = typeof RemoveZoneRrsetRecordsRequest.Type;
export const RemoveZoneRrsetRecordsResponse = Schema.Struct({
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
export type RemoveZoneRrsetRecordsResponse = typeof RemoveZoneRrsetRecordsResponse.Type;

export const SetZoneRrsetRecordsRequest = Schema.Struct({
    records: Schema.Array(Schema.Struct({
      value: Schema.String,
      comment: Schema.optional(Schema.String),
    })),
  });
export type SetZoneRrsetRecordsRequest = typeof SetZoneRrsetRecordsRequest.Type;
export const SetZoneRrsetRecordsResponse = Schema.Struct({
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
export type SetZoneRrsetRecordsResponse = typeof SetZoneRrsetRecordsResponse.Type;

export const UpdateZoneRequest = Schema.Struct({
    labels: Schema.optional(Schema.Record({ key: Schema.String, value: Schema.String })),
  });
export type UpdateZoneRequest = typeof UpdateZoneRequest.Type;
export const UpdateZoneResponse = Schema.Struct({
    zone: Schema.Union(Schema.Struct({
      id: Schema.Int,
      name: Schema.String,
      created: Schema.String,
      primaryNameservers: Schema.optional(Schema.Array(Schema.Struct({
        address: Schema.String,
        port: Schema.optional(Schema.Int),
        tsigKey: Schema.optional(Schema.String).pipe(Schema.fromKey("tsig_key")),
        tsigAlgorithm: Schema.optional(Schema.Literal("hmac-md5", "hmac-sha1", "hmac-sha256")).pipe(Schema.fromKey("tsig_algorithm")),
      }))).pipe(Schema.fromKey("primary_nameservers")),
      labels: Schema.Record({ key: Schema.String, value: Schema.String }),
      protection: Schema.Struct({
        delete: Schema.Boolean,
      }),
      ttl: Schema.Int,
      status: Schema.Literal("ok", "updating", "error"),
      recordCount: Schema.propertySignature(Schema.Int).pipe(Schema.fromKey("record_count")),
      authoritativeNameservers: Schema.propertySignature(Schema.Struct({
        assigned: Schema.Array(Schema.String),
        delegated: Schema.Array(Schema.String),
        delegationLastCheck: Schema.propertySignature(Schema.NullOr(Schema.String)).pipe(Schema.fromKey("delegation_last_check")),
        delegationStatus: Schema.optional(Schema.Literal("valid", "partially-valid", "invalid", "lame", "unregistered", "unknown")).pipe(Schema.fromKey("delegation_status")),
      })).pipe(Schema.fromKey("authoritative_nameservers")),
      registrar: Schema.Literal("hetzner", "other", "unknown"),
      mode: Schema.Literal("primary"),
    }), Schema.Struct({
      id: Schema.Int,
      name: Schema.String,
      created: Schema.String,
      primaryNameservers: Schema.optional(Schema.Array(Schema.Struct({
        address: Schema.String,
        port: Schema.optional(Schema.Int),
        tsigKey: Schema.optional(Schema.String).pipe(Schema.fromKey("tsig_key")),
        tsigAlgorithm: Schema.optional(Schema.Literal("hmac-md5", "hmac-sha1", "hmac-sha256")).pipe(Schema.fromKey("tsig_algorithm")),
      }))).pipe(Schema.fromKey("primary_nameservers")),
      labels: Schema.Record({ key: Schema.String, value: Schema.String }),
      protection: Schema.Struct({
        delete: Schema.Boolean,
      }),
      ttl: Schema.Int,
      status: Schema.Literal("ok", "updating", "error"),
      recordCount: Schema.propertySignature(Schema.Int).pipe(Schema.fromKey("record_count")),
      authoritativeNameservers: Schema.propertySignature(Schema.Struct({
        assigned: Schema.Array(Schema.String),
        delegated: Schema.Array(Schema.String),
        delegationLastCheck: Schema.propertySignature(Schema.NullOr(Schema.String)).pipe(Schema.fromKey("delegation_last_check")),
        delegationStatus: Schema.optional(Schema.Literal("valid", "partially-valid", "invalid", "lame", "unregistered", "unknown")).pipe(Schema.fromKey("delegation_status")),
      })).pipe(Schema.fromKey("authoritative_nameservers")),
      registrar: Schema.Literal("hetzner", "other", "unknown"),
      mode: Schema.Literal("secondary"),
    })),
  });
export type UpdateZoneResponse = typeof UpdateZoneResponse.Type;

export const UpdateZoneRrsetRequest = Schema.Struct({
    labels: Schema.optional(Schema.Record({ key: Schema.String, value: Schema.String })),
  });
export type UpdateZoneRrsetRequest = typeof UpdateZoneRrsetRequest.Type;
export const UpdateZoneRrsetResponse = Schema.Struct({
    rrset: Schema.Struct({
      id: Schema.String,
      name: Schema.String,
      type: Schema.Literal("A", "AAAA", "CAA", "CNAME", "DS", "HINFO", "HTTPS", "MX", "NS", "PTR", "RP", "SOA", "SRV", "SVCB", "TLSA", "TXT"),
      ttl: Schema.NullOr(Schema.Int),
      labels: Schema.Record({ key: Schema.String, value: Schema.String }),
      protection: Schema.Struct({
        change: Schema.Boolean,
      }),
      records: Schema.Array(Schema.Struct({
        value: Schema.String,
        comment: Schema.optional(Schema.String),
      })),
      zone: Schema.Int,
    }),
  });
export type UpdateZoneRrsetResponse = typeof UpdateZoneRrsetResponse.Type;

export const UpdateZoneRrsetRecordsRequest = Schema.Struct({
    records: Schema.Array(Schema.Struct({
      value: Schema.String,
      comment: Schema.String,
    })),
  });
export type UpdateZoneRrsetRecordsRequest = typeof UpdateZoneRrsetRecordsRequest.Type;
export const UpdateZoneRrsetRecordsResponse = Schema.Struct({
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
export type UpdateZoneRrsetRecordsResponse = typeof UpdateZoneRrsetRecordsResponse.Type;


export const makeZones = (http: HttpClient.HttpClient) => ({
    /** Add Records to an RRSet */
    addRrsetRecords: (idOrName: string, rrName: string, rrType: string, body: AddZoneRrsetRecordsRequest): Effect.Effect<AddZoneRrsetRecordsResponse, HetznerErrors> =>
      HttpClientRequest.post(`/zones/${idOrName}/rrsets/${rrName}/${rrType}/actions/add_records`).pipe(
        HttpClientRequest.schemaBodyJson(AddZoneRrsetRecordsRequest)(body),
        Effect.flatMap(http.execute),
        Effect.flatMap(HttpClientResponse.schemaBodyJson(AddZoneRrsetRecordsResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.zones.addRrsetRecords"),
      ),

    /** Change a Zone's Primary Nameservers */
    changePrimaryNameservers: (idOrName: string, body: ChangeZonePrimaryNameserversRequest): Effect.Effect<ChangeZonePrimaryNameserversResponse, HetznerErrors> =>
      HttpClientRequest.post(`/zones/${idOrName}/actions/change_primary_nameservers`).pipe(
        HttpClientRequest.schemaBodyJson(ChangeZonePrimaryNameserversRequest)(body),
        Effect.flatMap(http.execute),
        Effect.flatMap(HttpClientResponse.schemaBodyJson(ChangeZonePrimaryNameserversResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.zones.changePrimaryNameservers"),
      ),

    /** Change a Zone's Protection */
    changeProtection: (idOrName: string, body: ChangeZoneProtectionRequest): Effect.Effect<ChangeZoneProtectionResponse, HetznerErrors> =>
      HttpClientRequest.post(`/zones/${idOrName}/actions/change_protection`).pipe(
        HttpClientRequest.schemaBodyJson(ChangeZoneProtectionRequest)(body),
        Effect.flatMap(http.execute),
        Effect.flatMap(HttpClientResponse.schemaBodyJson(ChangeZoneProtectionResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.zones.changeProtection"),
      ),

    /** Change an RRSet's Protection */
    changeRrsetProtection: (idOrName: string, rrName: string, rrType: string, body: ChangeZoneRrsetProtectionRequest): Effect.Effect<ChangeZoneRrsetProtectionResponse, HetznerErrors> =>
      HttpClientRequest.post(`/zones/${idOrName}/rrsets/${rrName}/${rrType}/actions/change_protection`).pipe(
        HttpClientRequest.schemaBodyJson(ChangeZoneRrsetProtectionRequest)(body),
        Effect.flatMap(http.execute),
        Effect.flatMap(HttpClientResponse.schemaBodyJson(ChangeZoneRrsetProtectionResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.zones.changeRrsetProtection"),
      ),

    /** Change an RRSet's TTL */
    changeRrsetTtl: (idOrName: string, rrName: string, rrType: string, body: ChangeZoneRrsetTtlRequest): Effect.Effect<ChangeZoneRrsetTtlResponse, HetznerErrors> =>
      HttpClientRequest.post(`/zones/${idOrName}/rrsets/${rrName}/${rrType}/actions/change_ttl`).pipe(
        HttpClientRequest.schemaBodyJson(ChangeZoneRrsetTtlRequest)(body),
        Effect.flatMap(http.execute),
        Effect.flatMap(HttpClientResponse.schemaBodyJson(ChangeZoneRrsetTtlResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.zones.changeRrsetTtl"),
      ),

    /** Change a Zone's Default TTL */
    changeTtl: (idOrName: string, body: ChangeZoneTtlRequest): Effect.Effect<ChangeZoneTtlResponse, HetznerErrors> =>
      HttpClientRequest.post(`/zones/${idOrName}/actions/change_ttl`).pipe(
        HttpClientRequest.schemaBodyJson(ChangeZoneTtlRequest)(body),
        Effect.flatMap(http.execute),
        Effect.flatMap(HttpClientResponse.schemaBodyJson(ChangeZoneTtlResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.zones.changeTtl"),
      ),

    /** Create a Zone */
    create: (body: CreateZoneRequest): Effect.Effect<CreateZoneResponse, HetznerErrors> =>
      HttpClientRequest.post("/zones").pipe(
        HttpClientRequest.schemaBodyJson(CreateZoneRequest)(body),
        Effect.flatMap(http.execute),
        Effect.flatMap(HttpClientResponse.schemaBodyJson(CreateZoneResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.zones.create"),
      ),

    /** Create an RRSet */
    createRrset: (idOrName: string, body: CreateZoneRrsetRequest): Effect.Effect<CreateZoneRrsetResponse, HetznerErrors> =>
      HttpClientRequest.post(`/zones/${idOrName}/rrsets`).pipe(
        HttpClientRequest.schemaBodyJson(CreateZoneRrsetRequest)(body),
        Effect.flatMap(http.execute),
        Effect.flatMap(HttpClientResponse.schemaBodyJson(CreateZoneRrsetResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.zones.createRrset"),
      ),

    /** Delete a Zone */
    delete: (idOrName: string): Effect.Effect<DeleteZoneResponse, HetznerErrors> =>
      http.del(`/zones/${idOrName}`).pipe(
        Effect.flatMap(HttpClientResponse.schemaBodyJson(DeleteZoneResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.zones.delete"),
      ),

    /** Delete an RRSet */
    deleteRrset: (idOrName: string, rrName: string, rrType: string): Effect.Effect<DeleteZoneRrsetResponse, HetznerErrors> =>
      http.del(`/zones/${idOrName}/rrsets/${rrName}/${rrType}`).pipe(
        Effect.flatMap(HttpClientResponse.schemaBodyJson(DeleteZoneRrsetResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.zones.deleteRrset"),
      ),

    /** Get a Zone */
    get: (idOrName: string): Effect.Effect<GetZoneResponse, HetznerErrors> =>
      HttpClientRequest.get(`/zones/${idOrName}`).pipe(
        http.execute,
        Effect.flatMap(HttpClientResponse.schemaBodyJson(GetZoneResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.zones.get"),
      ),

    /** Get an Action for a Zone */
    getAction: (idOrName: string, actionId: number): Effect.Effect<GetZoneActionResponse, HetznerErrors> =>
      HttpClientRequest.get(`/zones/${idOrName}/actions/${actionId}`).pipe(
        http.execute,
        Effect.flatMap(HttpClientResponse.schemaBodyJson(GetZoneActionResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.zones.getAction"),
      ),

    /** Get an RRSet */
    getRrset: (idOrName: string, rrName: string, rrType: string): Effect.Effect<GetZoneRrsetResponse, HetznerErrors> =>
      HttpClientRequest.get(`/zones/${idOrName}/rrsets/${rrName}/${rrType}`).pipe(
        http.execute,
        Effect.flatMap(HttpClientResponse.schemaBodyJson(GetZoneRrsetResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.zones.getRrset"),
      ),

    /** Export a Zone file */
    getZonefile: (idOrName: string): Effect.Effect<GetZoneZonefileResponse, HetznerErrors> =>
      HttpClientRequest.get(`/zones/${idOrName}/zonefile`).pipe(
        http.execute,
        Effect.flatMap(HttpClientResponse.schemaBodyJson(GetZoneZonefileResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.zones.getZonefile"),
      ),

    /** Get an Action */
    getZonesAction: (id: number): Effect.Effect<GetZonesActionResponse, HetznerErrors> =>
      HttpClientRequest.get(`/zones/actions/${id}`).pipe(
        http.execute,
        Effect.flatMap(HttpClientResponse.schemaBodyJson(GetZonesActionResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.zones.getZonesAction"),
      ),

    /** Import a Zone file */
    importZonefile: (idOrName: string, body: ImportZoneZonefileRequest): Effect.Effect<ImportZoneZonefileResponse, HetznerErrors> =>
      HttpClientRequest.post(`/zones/${idOrName}/actions/import_zonefile`).pipe(
        HttpClientRequest.schemaBodyJson(ImportZoneZonefileRequest)(body),
        Effect.flatMap(http.execute),
        Effect.flatMap(HttpClientResponse.schemaBodyJson(ImportZoneZonefileResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.zones.importZonefile"),
      ),

    /** List Zones */
    list: (query?: ListZonesQuery): Effect.Effect<ListZonesResponse, HetznerErrors> =>
      HttpClientRequest.get("/zones").pipe(
        HttpClientRequest.setUrlParams(toUrlParams({ name: query?.name, mode: query?.mode, label_selector: query?.labelSelector, sort: query?.sort, page: query?.page, per_page: query?.perPage })),
        http.execute,
        Effect.flatMap(HttpClientResponse.schemaBodyJson(ListZonesResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.zones.list"),
      ),

    /** List Actions for a Zone */
    listActions: (idOrName: string, query?: ListZoneActionsQuery): Effect.Effect<ListZoneActionsResponse, HetznerErrors> =>
      HttpClientRequest.get(`/zones/${idOrName}/actions`).pipe(
        HttpClientRequest.setUrlParams(toUrlParams({ sort: query?.sort, status: query?.status, page: query?.page, per_page: query?.perPage })),
        http.execute,
        Effect.flatMap(HttpClientResponse.schemaBodyJson(ListZoneActionsResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.zones.listActions"),
      ),

    /** List RRSets */
    listRrsets: (idOrName: string, query?: ListZoneRrsetsQuery): Effect.Effect<ListZoneRrsetsResponse, HetznerErrors> =>
      HttpClientRequest.get(`/zones/${idOrName}/rrsets`).pipe(
        HttpClientRequest.setUrlParams(toUrlParams({ name: query?.name, type: query?.type, label_selector: query?.labelSelector, sort: query?.sort, page: query?.page, per_page: query?.perPage })),
        http.execute,
        Effect.flatMap(HttpClientResponse.schemaBodyJson(ListZoneRrsetsResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.zones.listRrsets"),
      ),

    /** List Actions */
    listZonesActions: (query?: ListZonesActionsQuery): Effect.Effect<ListZonesActionsResponse, HetznerErrors> =>
      HttpClientRequest.get("/zones/actions").pipe(
        HttpClientRequest.setUrlParams(toUrlParams({ id: query?.id, sort: query?.sort, status: query?.status, page: query?.page, per_page: query?.perPage })),
        http.execute,
        Effect.flatMap(HttpClientResponse.schemaBodyJson(ListZonesActionsResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.zones.listZonesActions"),
      ),

    /** Remove Records from an RRSet */
    removeRrsetRecords: (idOrName: string, rrName: string, rrType: string, body: RemoveZoneRrsetRecordsRequest): Effect.Effect<RemoveZoneRrsetRecordsResponse, HetznerErrors> =>
      HttpClientRequest.post(`/zones/${idOrName}/rrsets/${rrName}/${rrType}/actions/remove_records`).pipe(
        HttpClientRequest.schemaBodyJson(RemoveZoneRrsetRecordsRequest)(body),
        Effect.flatMap(http.execute),
        Effect.flatMap(HttpClientResponse.schemaBodyJson(RemoveZoneRrsetRecordsResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.zones.removeRrsetRecords"),
      ),

    /** Set Records of an RRSet */
    setRrsetRecords: (idOrName: string, rrName: string, rrType: string, body: SetZoneRrsetRecordsRequest): Effect.Effect<SetZoneRrsetRecordsResponse, HetznerErrors> =>
      HttpClientRequest.post(`/zones/${idOrName}/rrsets/${rrName}/${rrType}/actions/set_records`).pipe(
        HttpClientRequest.schemaBodyJson(SetZoneRrsetRecordsRequest)(body),
        Effect.flatMap(http.execute),
        Effect.flatMap(HttpClientResponse.schemaBodyJson(SetZoneRrsetRecordsResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.zones.setRrsetRecords"),
      ),

    /** Update a Zone */
    update: (idOrName: string, body: UpdateZoneRequest): Effect.Effect<UpdateZoneResponse, HetznerErrors> =>
      HttpClientRequest.put(`/zones/${idOrName}`).pipe(
        HttpClientRequest.schemaBodyJson(UpdateZoneRequest)(body),
        Effect.flatMap(http.execute),
        Effect.flatMap(HttpClientResponse.schemaBodyJson(UpdateZoneResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.zones.update"),
      ),

    /** Update an RRSet */
    updateRrset: (idOrName: string, rrName: string, rrType: string, body: UpdateZoneRrsetRequest): Effect.Effect<UpdateZoneRrsetResponse, HetznerErrors> =>
      HttpClientRequest.put(`/zones/${idOrName}/rrsets/${rrName}/${rrType}`).pipe(
        HttpClientRequest.schemaBodyJson(UpdateZoneRrsetRequest)(body),
        Effect.flatMap(http.execute),
        Effect.flatMap(HttpClientResponse.schemaBodyJson(UpdateZoneRrsetResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.zones.updateRrset"),
      ),

    /** Update Records of an RRSet */
    updateRrsetRecords: (idOrName: string, rrName: string, rrType: string, body: UpdateZoneRrsetRecordsRequest): Effect.Effect<UpdateZoneRrsetRecordsResponse, HetznerErrors> =>
      HttpClientRequest.post(`/zones/${idOrName}/rrsets/${rrName}/${rrType}/actions/update_records`).pipe(
        HttpClientRequest.schemaBodyJson(UpdateZoneRrsetRecordsRequest)(body),
        Effect.flatMap(http.execute),
        Effect.flatMap(HttpClientResponse.schemaBodyJson(UpdateZoneRrsetRecordsResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.zones.updateRrsetRecords"),
      ),
});

export type ZonesApi = ReturnType<typeof makeZones>;
