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
    primary_nameservers: Schema.Array(Schema.Struct({
      address: Schema.String,
      port: Schema.optional(Schema.Int),
      tsig_key: Schema.optional(Schema.String),
      tsig_algorithm: Schema.optional(Schema.Literal("hmac-md5", "hmac-sha1", "hmac-sha256")),
    })),
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
    primary_nameservers: Schema.optional(Schema.Array(Schema.Struct({
      address: Schema.String,
      port: Schema.optional(Schema.Int),
      tsig_key: Schema.optional(Schema.String),
      tsig_algorithm: Schema.optional(Schema.Literal("hmac-md5", "hmac-sha1", "hmac-sha256")),
    }))),
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
      primary_nameservers: Schema.optional(Schema.Array(Schema.Struct({
        address: Schema.String,
        port: Schema.optional(Schema.Int),
        tsig_key: Schema.optional(Schema.String),
        tsig_algorithm: Schema.optional(Schema.Literal("hmac-md5", "hmac-sha1", "hmac-sha256")),
      }))),
      labels: Schema.Record({ key: Schema.String, value: Schema.String }),
      protection: Schema.Struct({
        delete: Schema.Boolean,
      }),
      ttl: Schema.Int,
      status: Schema.Literal("ok", "updating", "error"),
      record_count: Schema.Int,
      authoritative_nameservers: Schema.Struct({
        assigned: Schema.Array(Schema.String),
        delegated: Schema.Array(Schema.String),
        delegation_last_check: Schema.NullOr(Schema.String),
        delegation_status: Schema.optional(Schema.Literal("valid", "partially-valid", "invalid", "lame", "unregistered", "unknown")),
      }),
      registrar: Schema.Literal("hetzner", "other", "unknown"),
      mode: Schema.Literal("primary"),
    }), Schema.Struct({
      id: Schema.Int,
      name: Schema.String,
      created: Schema.String,
      primary_nameservers: Schema.optional(Schema.Array(Schema.Struct({
        address: Schema.String,
        port: Schema.optional(Schema.Int),
        tsig_key: Schema.optional(Schema.String),
        tsig_algorithm: Schema.optional(Schema.Literal("hmac-md5", "hmac-sha1", "hmac-sha256")),
      }))),
      labels: Schema.Record({ key: Schema.String, value: Schema.String }),
      protection: Schema.Struct({
        delete: Schema.Boolean,
      }),
      ttl: Schema.Int,
      status: Schema.Literal("ok", "updating", "error"),
      record_count: Schema.Int,
      authoritative_nameservers: Schema.Struct({
        assigned: Schema.Array(Schema.String),
        delegated: Schema.Array(Schema.String),
        delegation_last_check: Schema.NullOr(Schema.String),
        delegation_status: Schema.optional(Schema.Literal("valid", "partially-valid", "invalid", "lame", "unregistered", "unknown")),
      }),
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
      primary_nameservers: Schema.optional(Schema.Array(Schema.Struct({
        address: Schema.String,
        port: Schema.optional(Schema.Int),
        tsig_key: Schema.optional(Schema.String),
        tsig_algorithm: Schema.optional(Schema.Literal("hmac-md5", "hmac-sha1", "hmac-sha256")),
      }))),
      labels: Schema.Record({ key: Schema.String, value: Schema.String }),
      protection: Schema.Struct({
        delete: Schema.Boolean,
      }),
      ttl: Schema.Int,
      status: Schema.Literal("ok", "updating", "error"),
      record_count: Schema.Int,
      authoritative_nameservers: Schema.Struct({
        assigned: Schema.Array(Schema.String),
        delegated: Schema.Array(Schema.String),
        delegation_last_check: Schema.NullOr(Schema.String),
        delegation_status: Schema.optional(Schema.Literal("valid", "partially-valid", "invalid", "lame", "unregistered", "unknown")),
      }),
      registrar: Schema.Literal("hetzner", "other", "unknown"),
      mode: Schema.Literal("primary"),
    }), Schema.Struct({
      id: Schema.Int,
      name: Schema.String,
      created: Schema.String,
      primary_nameservers: Schema.optional(Schema.Array(Schema.Struct({
        address: Schema.String,
        port: Schema.optional(Schema.Int),
        tsig_key: Schema.optional(Schema.String),
        tsig_algorithm: Schema.optional(Schema.Literal("hmac-md5", "hmac-sha1", "hmac-sha256")),
      }))),
      labels: Schema.Record({ key: Schema.String, value: Schema.String }),
      protection: Schema.Struct({
        delete: Schema.Boolean,
      }),
      ttl: Schema.Int,
      status: Schema.Literal("ok", "updating", "error"),
      record_count: Schema.Int,
      authoritative_nameservers: Schema.Struct({
        assigned: Schema.Array(Schema.String),
        delegated: Schema.Array(Schema.String),
        delegation_last_check: Schema.NullOr(Schema.String),
        delegation_status: Schema.optional(Schema.Literal("valid", "partially-valid", "invalid", "lame", "unregistered", "unknown")),
      }),
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
      primary_nameservers: Schema.optional(Schema.Array(Schema.Struct({
        address: Schema.String,
        port: Schema.optional(Schema.Int),
        tsig_key: Schema.optional(Schema.String),
        tsig_algorithm: Schema.optional(Schema.Literal("hmac-md5", "hmac-sha1", "hmac-sha256")),
      }))),
      labels: Schema.Record({ key: Schema.String, value: Schema.String }),
      protection: Schema.Struct({
        delete: Schema.Boolean,
      }),
      ttl: Schema.Int,
      status: Schema.Literal("ok", "updating", "error"),
      record_count: Schema.Int,
      authoritative_nameservers: Schema.Struct({
        assigned: Schema.Array(Schema.String),
        delegated: Schema.Array(Schema.String),
        delegation_last_check: Schema.NullOr(Schema.String),
        delegation_status: Schema.optional(Schema.Literal("valid", "partially-valid", "invalid", "lame", "unregistered", "unknown")),
      }),
      registrar: Schema.Literal("hetzner", "other", "unknown"),
      mode: Schema.Literal("primary"),
    }), Schema.Struct({
      id: Schema.Int,
      name: Schema.String,
      created: Schema.String,
      primary_nameservers: Schema.optional(Schema.Array(Schema.Struct({
        address: Schema.String,
        port: Schema.optional(Schema.Int),
        tsig_key: Schema.optional(Schema.String),
        tsig_algorithm: Schema.optional(Schema.Literal("hmac-md5", "hmac-sha1", "hmac-sha256")),
      }))),
      labels: Schema.Record({ key: Schema.String, value: Schema.String }),
      protection: Schema.Struct({
        delete: Schema.Boolean,
      }),
      ttl: Schema.Int,
      status: Schema.Literal("ok", "updating", "error"),
      record_count: Schema.Int,
      authoritative_nameservers: Schema.Struct({
        assigned: Schema.Array(Schema.String),
        delegated: Schema.Array(Schema.String),
        delegation_last_check: Schema.NullOr(Schema.String),
        delegation_status: Schema.optional(Schema.Literal("valid", "partially-valid", "invalid", "lame", "unregistered", "unknown")),
      }),
      registrar: Schema.Literal("hetzner", "other", "unknown"),
      mode: Schema.Literal("secondary"),
    }))),
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
export type ListZonesResponse = typeof ListZonesResponse.Type;
export interface ListZonesQuery {
  name?: string;
  mode?: "primary" | "secondary";
  label_selector?: string;
  sort?: ReadonlyArray<"id" | "id:asc" | "id:desc" | "name" | "name:asc" | "name:desc" | "created" | "created:asc" | "created:desc">;
  page?: number;
  per_page?: number;
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
        per_page: Schema.Int,
        previous_page: Schema.NullOr(Schema.Int),
        next_page: Schema.NullOr(Schema.Int),
        last_page: Schema.NullOr(Schema.Int),
        total_entries: Schema.NullOr(Schema.Int),
      }),
    }),
  });
export type ListZoneActionsResponse = typeof ListZoneActionsResponse.Type;
export interface ListZoneActionsQuery {
  sort?: ReadonlyArray<"id" | "id:asc" | "id:desc" | "command" | "command:asc" | "command:desc" | "status" | "status:asc" | "status:desc" | "started" | "started:asc" | "started:desc" | "finished" | "finished:asc" | "finished:desc">;
  status?: ReadonlyArray<"running" | "success" | "error">;
  page?: number;
  per_page?: number;
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
        per_page: Schema.Int,
        previous_page: Schema.NullOr(Schema.Int),
        next_page: Schema.NullOr(Schema.Int),
        last_page: Schema.NullOr(Schema.Int),
        total_entries: Schema.NullOr(Schema.Int),
      }),
    }),
  });
export type ListZoneRrsetsResponse = typeof ListZoneRrsetsResponse.Type;
export interface ListZoneRrsetsQuery {
  name?: string;
  type?: ReadonlyArray<"A" | "AAAA" | "CAA" | "CNAME" | "DS" | "HINFO" | "HTTPS" | "MX" | "NS" | "PTR" | "RP" | "SOA" | "SRV" | "SVCB" | "TLSA" | "TXT">;
  label_selector?: string;
  sort?: ReadonlyArray<"id" | "id:asc" | "id:desc" | "name" | "name:asc" | "name:desc" | "created" | "created:asc" | "created:desc">;
  page?: number;
  per_page?: number;
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
        per_page: Schema.Int,
        previous_page: Schema.NullOr(Schema.Int),
        next_page: Schema.NullOr(Schema.Int),
        last_page: Schema.NullOr(Schema.Int),
        total_entries: Schema.NullOr(Schema.Int),
      }),
    }),
  });
export type ListZonesActionsResponse = typeof ListZonesActionsResponse.Type;
export interface ListZonesActionsQuery {
  id?: ReadonlyArray<number>;
  sort?: ReadonlyArray<"id" | "id:asc" | "id:desc" | "command" | "command:asc" | "command:desc" | "status" | "status:asc" | "status:desc" | "started" | "started:asc" | "started:desc" | "finished" | "finished:asc" | "finished:desc">;
  status?: ReadonlyArray<"running" | "success" | "error">;
  page?: number;
  per_page?: number;
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
      primary_nameservers: Schema.optional(Schema.Array(Schema.Struct({
        address: Schema.String,
        port: Schema.optional(Schema.Int),
        tsig_key: Schema.optional(Schema.String),
        tsig_algorithm: Schema.optional(Schema.Literal("hmac-md5", "hmac-sha1", "hmac-sha256")),
      }))),
      labels: Schema.Record({ key: Schema.String, value: Schema.String }),
      protection: Schema.Struct({
        delete: Schema.Boolean,
      }),
      ttl: Schema.Int,
      status: Schema.Literal("ok", "updating", "error"),
      record_count: Schema.Int,
      authoritative_nameservers: Schema.Struct({
        assigned: Schema.Array(Schema.String),
        delegated: Schema.Array(Schema.String),
        delegation_last_check: Schema.NullOr(Schema.String),
        delegation_status: Schema.optional(Schema.Literal("valid", "partially-valid", "invalid", "lame", "unregistered", "unknown")),
      }),
      registrar: Schema.Literal("hetzner", "other", "unknown"),
      mode: Schema.Literal("primary"),
    }), Schema.Struct({
      id: Schema.Int,
      name: Schema.String,
      created: Schema.String,
      primary_nameservers: Schema.optional(Schema.Array(Schema.Struct({
        address: Schema.String,
        port: Schema.optional(Schema.Int),
        tsig_key: Schema.optional(Schema.String),
        tsig_algorithm: Schema.optional(Schema.Literal("hmac-md5", "hmac-sha1", "hmac-sha256")),
      }))),
      labels: Schema.Record({ key: Schema.String, value: Schema.String }),
      protection: Schema.Struct({
        delete: Schema.Boolean,
      }),
      ttl: Schema.Int,
      status: Schema.Literal("ok", "updating", "error"),
      record_count: Schema.Int,
      authoritative_nameservers: Schema.Struct({
        assigned: Schema.Array(Schema.String),
        delegated: Schema.Array(Schema.String),
        delegation_last_check: Schema.NullOr(Schema.String),
        delegation_status: Schema.optional(Schema.Literal("valid", "partially-valid", "invalid", "lame", "unregistered", "unknown")),
      }),
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
    addRrsetRecords: (id_or_name: string, rr_name: string, rr_type: string, body: AddZoneRrsetRecordsRequest): Effect.Effect<AddZoneRrsetRecordsResponse, HetznerErrors> =>
      HttpClientRequest.post(`/zones/${id_or_name}/rrsets/${rr_name}/${rr_type}/actions/add_records`).pipe(
        HttpClientRequest.schemaBodyJson(AddZoneRrsetRecordsRequest)(body),
        Effect.flatMap(http.execute),
        Effect.flatMap(HttpClientResponse.schemaBodyJson(AddZoneRrsetRecordsResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.zones.addRrsetRecords"),
      ),

    /** Change a Zone's Primary Nameservers */
    changePrimaryNameservers: (id_or_name: string, body: ChangeZonePrimaryNameserversRequest): Effect.Effect<ChangeZonePrimaryNameserversResponse, HetznerErrors> =>
      HttpClientRequest.post(`/zones/${id_or_name}/actions/change_primary_nameservers`).pipe(
        HttpClientRequest.schemaBodyJson(ChangeZonePrimaryNameserversRequest)(body),
        Effect.flatMap(http.execute),
        Effect.flatMap(HttpClientResponse.schemaBodyJson(ChangeZonePrimaryNameserversResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.zones.changePrimaryNameservers"),
      ),

    /** Change a Zone's Protection */
    changeProtection: (id_or_name: string, body: ChangeZoneProtectionRequest): Effect.Effect<ChangeZoneProtectionResponse, HetznerErrors> =>
      HttpClientRequest.post(`/zones/${id_or_name}/actions/change_protection`).pipe(
        HttpClientRequest.schemaBodyJson(ChangeZoneProtectionRequest)(body),
        Effect.flatMap(http.execute),
        Effect.flatMap(HttpClientResponse.schemaBodyJson(ChangeZoneProtectionResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.zones.changeProtection"),
      ),

    /** Change an RRSet's Protection */
    changeRrsetProtection: (id_or_name: string, rr_name: string, rr_type: string, body: ChangeZoneRrsetProtectionRequest): Effect.Effect<ChangeZoneRrsetProtectionResponse, HetznerErrors> =>
      HttpClientRequest.post(`/zones/${id_or_name}/rrsets/${rr_name}/${rr_type}/actions/change_protection`).pipe(
        HttpClientRequest.schemaBodyJson(ChangeZoneRrsetProtectionRequest)(body),
        Effect.flatMap(http.execute),
        Effect.flatMap(HttpClientResponse.schemaBodyJson(ChangeZoneRrsetProtectionResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.zones.changeRrsetProtection"),
      ),

    /** Change an RRSet's TTL */
    changeRrsetTtl: (id_or_name: string, rr_name: string, rr_type: string, body: ChangeZoneRrsetTtlRequest): Effect.Effect<ChangeZoneRrsetTtlResponse, HetznerErrors> =>
      HttpClientRequest.post(`/zones/${id_or_name}/rrsets/${rr_name}/${rr_type}/actions/change_ttl`).pipe(
        HttpClientRequest.schemaBodyJson(ChangeZoneRrsetTtlRequest)(body),
        Effect.flatMap(http.execute),
        Effect.flatMap(HttpClientResponse.schemaBodyJson(ChangeZoneRrsetTtlResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.zones.changeRrsetTtl"),
      ),

    /** Change a Zone's Default TTL */
    changeTtl: (id_or_name: string, body: ChangeZoneTtlRequest): Effect.Effect<ChangeZoneTtlResponse, HetznerErrors> =>
      HttpClientRequest.post(`/zones/${id_or_name}/actions/change_ttl`).pipe(
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
    createRrset: (id_or_name: string, body: CreateZoneRrsetRequest): Effect.Effect<CreateZoneRrsetResponse, HetznerErrors> =>
      HttpClientRequest.post(`/zones/${id_or_name}/rrsets`).pipe(
        HttpClientRequest.schemaBodyJson(CreateZoneRrsetRequest)(body),
        Effect.flatMap(http.execute),
        Effect.flatMap(HttpClientResponse.schemaBodyJson(CreateZoneRrsetResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.zones.createRrset"),
      ),

    /** Delete a Zone */
    delete: (id_or_name: string): Effect.Effect<DeleteZoneResponse, HetznerErrors> =>
      http.del(`/zones/${id_or_name}`).pipe(
        Effect.flatMap(HttpClientResponse.schemaBodyJson(DeleteZoneResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.zones.delete"),
      ),

    /** Delete an RRSet */
    deleteRrset: (id_or_name: string, rr_name: string, rr_type: string): Effect.Effect<DeleteZoneRrsetResponse, HetznerErrors> =>
      http.del(`/zones/${id_or_name}/rrsets/${rr_name}/${rr_type}`).pipe(
        Effect.flatMap(HttpClientResponse.schemaBodyJson(DeleteZoneRrsetResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.zones.deleteRrset"),
      ),

    /** Get a Zone */
    get: (id_or_name: string): Effect.Effect<GetZoneResponse, HetznerErrors> =>
      HttpClientRequest.get(`/zones/${id_or_name}`).pipe(
        http.execute,
        Effect.flatMap(HttpClientResponse.schemaBodyJson(GetZoneResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.zones.get"),
      ),

    /** Get an Action for a Zone */
    getAction: (id_or_name: string, action_id: number): Effect.Effect<GetZoneActionResponse, HetznerErrors> =>
      HttpClientRequest.get(`/zones/${id_or_name}/actions/${action_id}`).pipe(
        http.execute,
        Effect.flatMap(HttpClientResponse.schemaBodyJson(GetZoneActionResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.zones.getAction"),
      ),

    /** Get an RRSet */
    getRrset: (id_or_name: string, rr_name: string, rr_type: string): Effect.Effect<GetZoneRrsetResponse, HetznerErrors> =>
      HttpClientRequest.get(`/zones/${id_or_name}/rrsets/${rr_name}/${rr_type}`).pipe(
        http.execute,
        Effect.flatMap(HttpClientResponse.schemaBodyJson(GetZoneRrsetResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.zones.getRrset"),
      ),

    /** Export a Zone file */
    getZonefile: (id_or_name: string): Effect.Effect<GetZoneZonefileResponse, HetznerErrors> =>
      HttpClientRequest.get(`/zones/${id_or_name}/zonefile`).pipe(
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
    importZonefile: (id_or_name: string, body: ImportZoneZonefileRequest): Effect.Effect<ImportZoneZonefileResponse, HetznerErrors> =>
      HttpClientRequest.post(`/zones/${id_or_name}/actions/import_zonefile`).pipe(
        HttpClientRequest.schemaBodyJson(ImportZoneZonefileRequest)(body),
        Effect.flatMap(http.execute),
        Effect.flatMap(HttpClientResponse.schemaBodyJson(ImportZoneZonefileResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.zones.importZonefile"),
      ),

    /** List Zones */
    list: (query?: ListZonesQuery): Effect.Effect<ListZonesResponse, HetznerErrors> =>
      HttpClientRequest.get("/zones").pipe(
        HttpClientRequest.setUrlParams(toUrlParams(query)),
        http.execute,
        Effect.flatMap(HttpClientResponse.schemaBodyJson(ListZonesResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.zones.list"),
      ),

    /** List Actions for a Zone */
    listActions: (id_or_name: string, query?: ListZoneActionsQuery): Effect.Effect<ListZoneActionsResponse, HetznerErrors> =>
      HttpClientRequest.get(`/zones/${id_or_name}/actions`).pipe(
        HttpClientRequest.setUrlParams(toUrlParams(query)),
        http.execute,
        Effect.flatMap(HttpClientResponse.schemaBodyJson(ListZoneActionsResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.zones.listActions"),
      ),

    /** List RRSets */
    listRrsets: (id_or_name: string, query?: ListZoneRrsetsQuery): Effect.Effect<ListZoneRrsetsResponse, HetznerErrors> =>
      HttpClientRequest.get(`/zones/${id_or_name}/rrsets`).pipe(
        HttpClientRequest.setUrlParams(toUrlParams(query)),
        http.execute,
        Effect.flatMap(HttpClientResponse.schemaBodyJson(ListZoneRrsetsResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.zones.listRrsets"),
      ),

    /** List Actions */
    listZonesActions: (query?: ListZonesActionsQuery): Effect.Effect<ListZonesActionsResponse, HetznerErrors> =>
      HttpClientRequest.get("/zones/actions").pipe(
        HttpClientRequest.setUrlParams(toUrlParams(query)),
        http.execute,
        Effect.flatMap(HttpClientResponse.schemaBodyJson(ListZonesActionsResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.zones.listZonesActions"),
      ),

    /** Remove Records from an RRSet */
    removeRrsetRecords: (id_or_name: string, rr_name: string, rr_type: string, body: RemoveZoneRrsetRecordsRequest): Effect.Effect<RemoveZoneRrsetRecordsResponse, HetznerErrors> =>
      HttpClientRequest.post(`/zones/${id_or_name}/rrsets/${rr_name}/${rr_type}/actions/remove_records`).pipe(
        HttpClientRequest.schemaBodyJson(RemoveZoneRrsetRecordsRequest)(body),
        Effect.flatMap(http.execute),
        Effect.flatMap(HttpClientResponse.schemaBodyJson(RemoveZoneRrsetRecordsResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.zones.removeRrsetRecords"),
      ),

    /** Set Records of an RRSet */
    setRrsetRecords: (id_or_name: string, rr_name: string, rr_type: string, body: SetZoneRrsetRecordsRequest): Effect.Effect<SetZoneRrsetRecordsResponse, HetznerErrors> =>
      HttpClientRequest.post(`/zones/${id_or_name}/rrsets/${rr_name}/${rr_type}/actions/set_records`).pipe(
        HttpClientRequest.schemaBodyJson(SetZoneRrsetRecordsRequest)(body),
        Effect.flatMap(http.execute),
        Effect.flatMap(HttpClientResponse.schemaBodyJson(SetZoneRrsetRecordsResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.zones.setRrsetRecords"),
      ),

    /** Update a Zone */
    update: (id_or_name: string, body: UpdateZoneRequest): Effect.Effect<UpdateZoneResponse, HetznerErrors> =>
      HttpClientRequest.put(`/zones/${id_or_name}`).pipe(
        HttpClientRequest.schemaBodyJson(UpdateZoneRequest)(body),
        Effect.flatMap(http.execute),
        Effect.flatMap(HttpClientResponse.schemaBodyJson(UpdateZoneResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.zones.update"),
      ),

    /** Update an RRSet */
    updateRrset: (id_or_name: string, rr_name: string, rr_type: string, body: UpdateZoneRrsetRequest): Effect.Effect<UpdateZoneRrsetResponse, HetznerErrors> =>
      HttpClientRequest.put(`/zones/${id_or_name}/rrsets/${rr_name}/${rr_type}`).pipe(
        HttpClientRequest.schemaBodyJson(UpdateZoneRrsetRequest)(body),
        Effect.flatMap(http.execute),
        Effect.flatMap(HttpClientResponse.schemaBodyJson(UpdateZoneRrsetResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.zones.updateRrset"),
      ),

    /** Update Records of an RRSet */
    updateRrsetRecords: (id_or_name: string, rr_name: string, rr_type: string, body: UpdateZoneRrsetRecordsRequest): Effect.Effect<UpdateZoneRrsetRecordsResponse, HetznerErrors> =>
      HttpClientRequest.post(`/zones/${id_or_name}/rrsets/${rr_name}/${rr_type}/actions/update_records`).pipe(
        HttpClientRequest.schemaBodyJson(UpdateZoneRrsetRecordsRequest)(body),
        Effect.flatMap(http.execute),
        Effect.flatMap(HttpClientResponse.schemaBodyJson(UpdateZoneRrsetRecordsResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.zones.updateRrsetRecords"),
      ),
});

export type ZonesApi = ReturnType<typeof makeZones>;
