/**
 * Servers — generated from the Hetzner Cloud OpenAPI spec. Do not edit by hand.
 */
import { Effect, Schema } from "effect";
import { HttpClientRequest, HttpClientResponse } from "@effect/platform";
import type { HttpClient } from "@effect/platform";
import { handleHetznerError, type HetznerErrors } from "../errors.js";
import { toUrlParams } from "../internal/url-params.js";


export const AddServerToPlacementGroupRequest = Schema.Struct({
    placement_group: Schema.Int,
  });
export type AddServerToPlacementGroupRequest = typeof AddServerToPlacementGroupRequest.Type;
export const AddServerToPlacementGroupResponse = Schema.Struct({
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
export type AddServerToPlacementGroupResponse = typeof AddServerToPlacementGroupResponse.Type;

export const AttachServerIsoRequest = Schema.Struct({
    iso: Schema.String,
  });
export type AttachServerIsoRequest = typeof AttachServerIsoRequest.Type;
export const AttachServerIsoResponse = Schema.Struct({
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
export type AttachServerIsoResponse = typeof AttachServerIsoResponse.Type;

export const AttachServerToNetworkRequest = Schema.Struct({
    network: Schema.Int,
    ip: Schema.optional(Schema.String),
    alias_ips: Schema.optional(Schema.Array(Schema.String)),
    ip_range: Schema.optional(Schema.String),
  });
export type AttachServerToNetworkRequest = typeof AttachServerToNetworkRequest.Type;
export const AttachServerToNetworkResponse = Schema.Struct({
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
export type AttachServerToNetworkResponse = typeof AttachServerToNetworkResponse.Type;

export const ChangeServerAliasIpsRequest = Schema.Struct({
    network: Schema.Int,
    alias_ips: Schema.Array(Schema.String),
  });
export type ChangeServerAliasIpsRequest = typeof ChangeServerAliasIpsRequest.Type;
export const ChangeServerAliasIpsResponse = Schema.Struct({
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
export type ChangeServerAliasIpsResponse = typeof ChangeServerAliasIpsResponse.Type;

export const ChangeServerDnsPtrRequest = Schema.Struct({
    ip: Schema.String,
    dns_ptr: Schema.optional(Schema.NullOr(Schema.String)),
  });
export type ChangeServerDnsPtrRequest = typeof ChangeServerDnsPtrRequest.Type;
export const ChangeServerDnsPtrResponse = Schema.Struct({
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
export type ChangeServerDnsPtrResponse = typeof ChangeServerDnsPtrResponse.Type;

export const ChangeServerProtectionRequest = Schema.Struct({
    delete: Schema.optional(Schema.Boolean),
    rebuild: Schema.optional(Schema.Boolean),
  });
export type ChangeServerProtectionRequest = typeof ChangeServerProtectionRequest.Type;
export const ChangeServerProtectionResponse = Schema.Struct({
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
export type ChangeServerProtectionResponse = typeof ChangeServerProtectionResponse.Type;

export const ChangeServerTypeRequest = Schema.Struct({
    upgrade_disk: Schema.Boolean,
    server_type: Schema.String,
  });
export type ChangeServerTypeRequest = typeof ChangeServerTypeRequest.Type;
export const ChangeServerTypeResponse = Schema.Struct({
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
export type ChangeServerTypeResponse = typeof ChangeServerTypeResponse.Type;

export const CreateServerRequest = Schema.Struct({
    name: Schema.String,
    location: Schema.optional(Schema.String),
    server_type: Schema.String,
    start_after_create: Schema.optional(Schema.Boolean),
    image: Schema.String,
    placement_group: Schema.optional(Schema.Int),
    ssh_keys: Schema.optional(Schema.Array(Schema.String)),
    volumes: Schema.optional(Schema.Array(Schema.Int)),
    networks: Schema.optional(Schema.Array(Schema.Int)),
    firewalls: Schema.optional(Schema.Array(Schema.Struct({
      firewall: Schema.Int,
    }))),
    user_data: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record({ key: Schema.String, value: Schema.String })),
    automount: Schema.optional(Schema.Boolean),
    public_net: Schema.optional(Schema.Struct({
      enable_ipv4: Schema.optional(Schema.Boolean),
      enable_ipv6: Schema.optional(Schema.Boolean),
      ipv4: Schema.optional(Schema.NullOr(Schema.Int)),
      ipv6: Schema.optional(Schema.NullOr(Schema.Int)),
    })),
  });
export type CreateServerRequest = typeof CreateServerRequest.Type;
export const CreateServerResponse = Schema.Struct({
    server: Schema.Struct({
      id: Schema.Int,
      name: Schema.String,
      status: Schema.Literal("running", "initializing", "starting", "stopping", "off", "deleting", "migrating", "rebuilding", "unknown"),
      created: Schema.String,
      public_net: Schema.Struct({
        ipv4: Schema.NullOr(Schema.Struct({
          id: Schema.optional(Schema.Int),
          ip: Schema.String,
          blocked: Schema.Boolean,
          dns_ptr: Schema.String,
        })),
        ipv6: Schema.NullOr(Schema.Struct({
          id: Schema.optional(Schema.Int),
          ip: Schema.String,
          blocked: Schema.Boolean,
          dns_ptr: Schema.NullOr(Schema.Array(Schema.Struct({
            ip: Schema.String,
            dns_ptr: Schema.String,
          }))),
        })),
        floating_ips: Schema.Array(Schema.Int),
        firewalls: Schema.optional(Schema.Array(Schema.Struct({
          id: Schema.optional(Schema.Int),
          status: Schema.optional(Schema.Literal("applied", "pending")),
        }))),
      }),
      private_net: Schema.Array(Schema.Struct({
        network: Schema.optional(Schema.Int),
        ip: Schema.optional(Schema.String),
        alias_ips: Schema.optional(Schema.Array(Schema.String)),
        mac_address: Schema.optional(Schema.String),
      })),
      server_type: Schema.Struct({
        id: Schema.Int,
        name: Schema.String,
        description: Schema.String,
        cores: Schema.Number,
        memory: Schema.Number,
        disk: Schema.Number,
        deprecated: Schema.Boolean,
        prices: Schema.Array(Schema.Struct({
          location: Schema.String,
          price_hourly: Schema.Struct({
            net: Schema.String,
            gross: Schema.String,
          }),
          price_monthly: Schema.Struct({
            net: Schema.String,
            gross: Schema.String,
          }),
          included_traffic: Schema.Int,
          price_per_tb_traffic: Schema.Struct({
            net: Schema.String,
            gross: Schema.String,
          }),
        })),
        storage_type: Schema.Literal("local", "network"),
        cpu_type: Schema.Literal("shared", "dedicated"),
        category: Schema.optional(Schema.String),
        architecture: Schema.Literal("x86", "arm"),
        deprecation: Schema.optional(Schema.NullOr(Schema.Struct({
          unavailable_after: Schema.String,
          announced: Schema.String,
        }))),
        locations: Schema.Array(Schema.Struct({
          id: Schema.Int,
          name: Schema.String,
          deprecation: Schema.NullOr(Schema.Struct({
            unavailable_after: Schema.String,
            announced: Schema.String,
          })),
          recommended: Schema.Boolean,
          available: Schema.Boolean,
        })),
      }),
      location: Schema.Struct({
        id: Schema.Int,
        name: Schema.String,
        description: Schema.String,
        country: Schema.String,
        city: Schema.String,
        latitude: Schema.Number,
        longitude: Schema.Number,
        network_zone: Schema.String,
      }),
      image: Schema.NullOr(Schema.Struct({
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
      iso: Schema.NullOr(Schema.Struct({
        id: Schema.Int,
        name: Schema.NullOr(Schema.String),
        description: Schema.String,
        type: Schema.NullOr(Schema.Literal("public", "private")),
        deprecation: Schema.NullOr(Schema.Struct({
          unavailable_after: Schema.String,
          announced: Schema.String,
        })),
        architecture: Schema.NullOr(Schema.Literal("x86", "arm")),
      })),
      rescue_enabled: Schema.Boolean,
      locked: Schema.Boolean,
      backup_window: Schema.NullOr(Schema.String),
      outgoing_traffic: Schema.NullOr(Schema.Int),
      ingoing_traffic: Schema.NullOr(Schema.Int),
      included_traffic: Schema.NullOr(Schema.Int),
      protection: Schema.Struct({
        delete: Schema.Boolean,
        rebuild: Schema.Boolean,
      }),
      labels: Schema.Record({ key: Schema.String, value: Schema.String }),
      volumes: Schema.optional(Schema.Array(Schema.Int)),
      load_balancers: Schema.optional(Schema.Array(Schema.Int)),
      primary_disk_size: Schema.Number,
      placement_group: Schema.optional(Schema.NullOr(Schema.Struct({
        id: Schema.Int,
        name: Schema.String,
        labels: Schema.Record({ key: Schema.String, value: Schema.String }),
        type: Schema.Literal("spread"),
        created: Schema.String,
        servers: Schema.Array(Schema.Int),
      }))),
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
    next_actions: Schema.Array(Schema.Struct({
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
    root_password: Schema.NullOr(Schema.String),
  });
export type CreateServerResponse = typeof CreateServerResponse.Type;

export const CreateServerImageRequest = Schema.Struct({
    description: Schema.optional(Schema.String),
    type: Schema.optional(Schema.Literal("snapshot", "backup")),
    labels: Schema.optional(Schema.Record({ key: Schema.String, value: Schema.String })),
  });
export type CreateServerImageRequest = typeof CreateServerImageRequest.Type;
export const CreateServerImageResponse = Schema.Struct({
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
    action: Schema.optional(Schema.Struct({
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
  });
export type CreateServerImageResponse = typeof CreateServerImageResponse.Type;

export const DeleteServerResponse = Schema.Struct({
    action: Schema.optional(Schema.Struct({
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
  });
export type DeleteServerResponse = typeof DeleteServerResponse.Type;

export const DetachServerFromNetworkRequest = Schema.Struct({
    network: Schema.Int,
  });
export type DetachServerFromNetworkRequest = typeof DetachServerFromNetworkRequest.Type;
export const DetachServerFromNetworkResponse = Schema.Struct({
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
export type DetachServerFromNetworkResponse = typeof DetachServerFromNetworkResponse.Type;

export const DetachServerIsoResponse = Schema.Struct({
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
export type DetachServerIsoResponse = typeof DetachServerIsoResponse.Type;

export const DisableServerBackupResponse = Schema.Struct({
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
export type DisableServerBackupResponse = typeof DisableServerBackupResponse.Type;

export const DisableServerRescueResponse = Schema.Struct({
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
export type DisableServerRescueResponse = typeof DisableServerRescueResponse.Type;

export const EnableServerBackupResponse = Schema.Struct({
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
export type EnableServerBackupResponse = typeof EnableServerBackupResponse.Type;

export const EnableServerRescueRequest = Schema.Struct({
    type: Schema.optional(Schema.Literal("linux64")),
    ssh_keys: Schema.optional(Schema.Array(Schema.Int)),
  });
export type EnableServerRescueRequest = typeof EnableServerRescueRequest.Type;
export const EnableServerRescueResponse = Schema.Struct({
    root_password: Schema.optional(Schema.String),
    action: Schema.optional(Schema.Struct({
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
  });
export type EnableServerRescueResponse = typeof EnableServerRescueResponse.Type;

export const GetServerResponse = Schema.Struct({
    server: Schema.optional(Schema.Struct({
      id: Schema.Int,
      name: Schema.String,
      status: Schema.Literal("running", "initializing", "starting", "stopping", "off", "deleting", "migrating", "rebuilding", "unknown"),
      created: Schema.String,
      public_net: Schema.Struct({
        ipv4: Schema.NullOr(Schema.Struct({
          id: Schema.optional(Schema.Int),
          ip: Schema.String,
          blocked: Schema.Boolean,
          dns_ptr: Schema.String,
        })),
        ipv6: Schema.NullOr(Schema.Struct({
          id: Schema.optional(Schema.Int),
          ip: Schema.String,
          blocked: Schema.Boolean,
          dns_ptr: Schema.NullOr(Schema.Array(Schema.Struct({
            ip: Schema.String,
            dns_ptr: Schema.String,
          }))),
        })),
        floating_ips: Schema.Array(Schema.Int),
        firewalls: Schema.optional(Schema.Array(Schema.Struct({
          id: Schema.optional(Schema.Int),
          status: Schema.optional(Schema.Literal("applied", "pending")),
        }))),
      }),
      private_net: Schema.Array(Schema.Struct({
        network: Schema.optional(Schema.Int),
        ip: Schema.optional(Schema.String),
        alias_ips: Schema.optional(Schema.Array(Schema.String)),
        mac_address: Schema.optional(Schema.String),
      })),
      server_type: Schema.Struct({
        id: Schema.Int,
        name: Schema.String,
        description: Schema.String,
        cores: Schema.Number,
        memory: Schema.Number,
        disk: Schema.Number,
        deprecated: Schema.Boolean,
        prices: Schema.Array(Schema.Struct({
          location: Schema.String,
          price_hourly: Schema.Struct({
            net: Schema.String,
            gross: Schema.String,
          }),
          price_monthly: Schema.Struct({
            net: Schema.String,
            gross: Schema.String,
          }),
          included_traffic: Schema.Int,
          price_per_tb_traffic: Schema.Struct({
            net: Schema.String,
            gross: Schema.String,
          }),
        })),
        storage_type: Schema.Literal("local", "network"),
        cpu_type: Schema.Literal("shared", "dedicated"),
        category: Schema.optional(Schema.String),
        architecture: Schema.Literal("x86", "arm"),
        deprecation: Schema.optional(Schema.NullOr(Schema.Struct({
          unavailable_after: Schema.String,
          announced: Schema.String,
        }))),
        locations: Schema.Array(Schema.Struct({
          id: Schema.Int,
          name: Schema.String,
          deprecation: Schema.NullOr(Schema.Struct({
            unavailable_after: Schema.String,
            announced: Schema.String,
          })),
          recommended: Schema.Boolean,
          available: Schema.Boolean,
        })),
      }),
      location: Schema.Struct({
        id: Schema.Int,
        name: Schema.String,
        description: Schema.String,
        country: Schema.String,
        city: Schema.String,
        latitude: Schema.Number,
        longitude: Schema.Number,
        network_zone: Schema.String,
      }),
      image: Schema.NullOr(Schema.Struct({
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
      iso: Schema.NullOr(Schema.Struct({
        id: Schema.Int,
        name: Schema.NullOr(Schema.String),
        description: Schema.String,
        type: Schema.NullOr(Schema.Literal("public", "private")),
        deprecation: Schema.NullOr(Schema.Struct({
          unavailable_after: Schema.String,
          announced: Schema.String,
        })),
        architecture: Schema.NullOr(Schema.Literal("x86", "arm")),
      })),
      rescue_enabled: Schema.Boolean,
      locked: Schema.Boolean,
      backup_window: Schema.NullOr(Schema.String),
      outgoing_traffic: Schema.NullOr(Schema.Int),
      ingoing_traffic: Schema.NullOr(Schema.Int),
      included_traffic: Schema.NullOr(Schema.Int),
      protection: Schema.Struct({
        delete: Schema.Boolean,
        rebuild: Schema.Boolean,
      }),
      labels: Schema.Record({ key: Schema.String, value: Schema.String }),
      volumes: Schema.optional(Schema.Array(Schema.Int)),
      load_balancers: Schema.optional(Schema.Array(Schema.Int)),
      primary_disk_size: Schema.Number,
      placement_group: Schema.optional(Schema.NullOr(Schema.Struct({
        id: Schema.Int,
        name: Schema.String,
        labels: Schema.Record({ key: Schema.String, value: Schema.String }),
        type: Schema.Literal("spread"),
        created: Schema.String,
        servers: Schema.Array(Schema.Int),
      }))),
    })),
  });
export type GetServerResponse = typeof GetServerResponse.Type;

export const GetServerActionResponse = Schema.Struct({
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
export type GetServerActionResponse = typeof GetServerActionResponse.Type;

export const GetServerMetricsResponse = Schema.Struct({
    metrics: Schema.Struct({
      start: Schema.String,
      end: Schema.String,
      step: Schema.Number,
      time_series: Schema.Record({ key: Schema.String, value: Schema.Struct({
        values: Schema.Array(Schema.Array(Schema.Unknown)),
      }) }),
    }),
  });
export type GetServerMetricsResponse = typeof GetServerMetricsResponse.Type;
export interface GetServerMetricsQuery {
  type: ReadonlyArray<"cpu" | "disk" | "network">;
  start: string;
  end: string;
  step?: string;
}

export const GetServersActionResponse = Schema.Struct({
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
export type GetServersActionResponse = typeof GetServersActionResponse.Type;

export const ListServersResponse = Schema.Struct({
    servers: Schema.Array(Schema.Struct({
      id: Schema.Int,
      name: Schema.String,
      status: Schema.Literal("running", "initializing", "starting", "stopping", "off", "deleting", "migrating", "rebuilding", "unknown"),
      created: Schema.String,
      public_net: Schema.Struct({
        ipv4: Schema.NullOr(Schema.Struct({
          id: Schema.optional(Schema.Int),
          ip: Schema.String,
          blocked: Schema.Boolean,
          dns_ptr: Schema.String,
        })),
        ipv6: Schema.NullOr(Schema.Struct({
          id: Schema.optional(Schema.Int),
          ip: Schema.String,
          blocked: Schema.Boolean,
          dns_ptr: Schema.NullOr(Schema.Array(Schema.Struct({
            ip: Schema.String,
            dns_ptr: Schema.String,
          }))),
        })),
        floating_ips: Schema.Array(Schema.Int),
        firewalls: Schema.optional(Schema.Array(Schema.Struct({
          id: Schema.optional(Schema.Int),
          status: Schema.optional(Schema.Literal("applied", "pending")),
        }))),
      }),
      private_net: Schema.Array(Schema.Struct({
        network: Schema.optional(Schema.Int),
        ip: Schema.optional(Schema.String),
        alias_ips: Schema.optional(Schema.Array(Schema.String)),
        mac_address: Schema.optional(Schema.String),
      })),
      server_type: Schema.Struct({
        id: Schema.Int,
        name: Schema.String,
        description: Schema.String,
        cores: Schema.Number,
        memory: Schema.Number,
        disk: Schema.Number,
        deprecated: Schema.Boolean,
        prices: Schema.Array(Schema.Struct({
          location: Schema.String,
          price_hourly: Schema.Struct({
            net: Schema.String,
            gross: Schema.String,
          }),
          price_monthly: Schema.Struct({
            net: Schema.String,
            gross: Schema.String,
          }),
          included_traffic: Schema.Int,
          price_per_tb_traffic: Schema.Struct({
            net: Schema.String,
            gross: Schema.String,
          }),
        })),
        storage_type: Schema.Literal("local", "network"),
        cpu_type: Schema.Literal("shared", "dedicated"),
        category: Schema.optional(Schema.String),
        architecture: Schema.Literal("x86", "arm"),
        deprecation: Schema.optional(Schema.NullOr(Schema.Struct({
          unavailable_after: Schema.String,
          announced: Schema.String,
        }))),
        locations: Schema.Array(Schema.Struct({
          id: Schema.Int,
          name: Schema.String,
          deprecation: Schema.NullOr(Schema.Struct({
            unavailable_after: Schema.String,
            announced: Schema.String,
          })),
          recommended: Schema.Boolean,
          available: Schema.Boolean,
        })),
      }),
      location: Schema.Struct({
        id: Schema.Int,
        name: Schema.String,
        description: Schema.String,
        country: Schema.String,
        city: Schema.String,
        latitude: Schema.Number,
        longitude: Schema.Number,
        network_zone: Schema.String,
      }),
      image: Schema.NullOr(Schema.Struct({
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
      iso: Schema.NullOr(Schema.Struct({
        id: Schema.Int,
        name: Schema.NullOr(Schema.String),
        description: Schema.String,
        type: Schema.NullOr(Schema.Literal("public", "private")),
        deprecation: Schema.NullOr(Schema.Struct({
          unavailable_after: Schema.String,
          announced: Schema.String,
        })),
        architecture: Schema.NullOr(Schema.Literal("x86", "arm")),
      })),
      rescue_enabled: Schema.Boolean,
      locked: Schema.Boolean,
      backup_window: Schema.NullOr(Schema.String),
      outgoing_traffic: Schema.NullOr(Schema.Int),
      ingoing_traffic: Schema.NullOr(Schema.Int),
      included_traffic: Schema.NullOr(Schema.Int),
      protection: Schema.Struct({
        delete: Schema.Boolean,
        rebuild: Schema.Boolean,
      }),
      labels: Schema.Record({ key: Schema.String, value: Schema.String }),
      volumes: Schema.optional(Schema.Array(Schema.Int)),
      load_balancers: Schema.optional(Schema.Array(Schema.Int)),
      primary_disk_size: Schema.Number,
      placement_group: Schema.optional(Schema.NullOr(Schema.Struct({
        id: Schema.Int,
        name: Schema.String,
        labels: Schema.Record({ key: Schema.String, value: Schema.String }),
        type: Schema.Literal("spread"),
        created: Schema.String,
        servers: Schema.Array(Schema.Int),
      }))),
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
export type ListServersResponse = typeof ListServersResponse.Type;
export interface ListServersQuery {
  name?: string;
  label_selector?: string;
  sort?: ReadonlyArray<"id" | "id:asc" | "id:desc" | "name" | "name:asc" | "name:desc" | "created" | "created:asc" | "created:desc">;
  status?: ReadonlyArray<"running" | "initializing" | "starting" | "stopping" | "off" | "deleting" | "migrating" | "rebuilding" | "unknown">;
  page?: number;
  per_page?: number;
}

export const ListServerActionsResponse = Schema.Struct({
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
export type ListServerActionsResponse = typeof ListServerActionsResponse.Type;
export interface ListServerActionsQuery {
  sort?: ReadonlyArray<"id" | "id:asc" | "id:desc" | "command" | "command:asc" | "command:desc" | "status" | "status:asc" | "status:desc" | "started" | "started:asc" | "started:desc" | "finished" | "finished:asc" | "finished:desc">;
  status?: ReadonlyArray<"running" | "success" | "error">;
  page?: number;
  per_page?: number;
}

export const ListServersActionsResponse = Schema.Struct({
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
export type ListServersActionsResponse = typeof ListServersActionsResponse.Type;
export interface ListServersActionsQuery {
  id?: ReadonlyArray<number>;
  sort?: ReadonlyArray<"id" | "id:asc" | "id:desc" | "command" | "command:asc" | "command:desc" | "status" | "status:asc" | "status:desc" | "started" | "started:asc" | "started:desc" | "finished" | "finished:asc" | "finished:desc">;
  status?: ReadonlyArray<"running" | "success" | "error">;
  page?: number;
  per_page?: number;
}

export const PowerOffServerResponse = Schema.Struct({
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
export type PowerOffServerResponse = typeof PowerOffServerResponse.Type;

export const PowerOnServerResponse = Schema.Struct({
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
export type PowerOnServerResponse = typeof PowerOnServerResponse.Type;

export const RebootServerResponse = Schema.Struct({
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
export type RebootServerResponse = typeof RebootServerResponse.Type;

export const RebuildServerRequest = Schema.Struct({
    image: Schema.String,
    user_data: Schema.optional(Schema.String),
  });
export type RebuildServerRequest = typeof RebuildServerRequest.Type;
export const RebuildServerResponse = Schema.Struct({
    root_password: Schema.optional(Schema.NullOr(Schema.String)),
    action: Schema.optional(Schema.Struct({
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
  });
export type RebuildServerResponse = typeof RebuildServerResponse.Type;

export const RemoveServerFromPlacementGroupResponse = Schema.Struct({
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
export type RemoveServerFromPlacementGroupResponse = typeof RemoveServerFromPlacementGroupResponse.Type;

export const RequestServerConsoleResponse = Schema.Struct({
    wss_url: Schema.String,
    password: Schema.String,
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
export type RequestServerConsoleResponse = typeof RequestServerConsoleResponse.Type;

export const ResetServerResponse = Schema.Struct({
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
export type ResetServerResponse = typeof ResetServerResponse.Type;

export const ResetServerPasswordResponse = Schema.Struct({
    root_password: Schema.optional(Schema.String),
    action: Schema.optional(Schema.Struct({
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
  });
export type ResetServerPasswordResponse = typeof ResetServerPasswordResponse.Type;

export const ShutdownServerResponse = Schema.Struct({
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
export type ShutdownServerResponse = typeof ShutdownServerResponse.Type;

export const UpdateServerRequest = Schema.Struct({
    name: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record({ key: Schema.String, value: Schema.String })),
  });
export type UpdateServerRequest = typeof UpdateServerRequest.Type;
export const UpdateServerResponse = Schema.Struct({
    server: Schema.optional(Schema.Struct({
      id: Schema.Int,
      name: Schema.String,
      status: Schema.Literal("running", "initializing", "starting", "stopping", "off", "deleting", "migrating", "rebuilding", "unknown"),
      created: Schema.String,
      public_net: Schema.Struct({
        ipv4: Schema.NullOr(Schema.Struct({
          id: Schema.optional(Schema.Int),
          ip: Schema.String,
          blocked: Schema.Boolean,
          dns_ptr: Schema.String,
        })),
        ipv6: Schema.NullOr(Schema.Struct({
          id: Schema.optional(Schema.Int),
          ip: Schema.String,
          blocked: Schema.Boolean,
          dns_ptr: Schema.NullOr(Schema.Array(Schema.Struct({
            ip: Schema.String,
            dns_ptr: Schema.String,
          }))),
        })),
        floating_ips: Schema.Array(Schema.Int),
        firewalls: Schema.optional(Schema.Array(Schema.Struct({
          id: Schema.optional(Schema.Int),
          status: Schema.optional(Schema.Literal("applied", "pending")),
        }))),
      }),
      private_net: Schema.Array(Schema.Struct({
        network: Schema.optional(Schema.Int),
        ip: Schema.optional(Schema.String),
        alias_ips: Schema.optional(Schema.Array(Schema.String)),
        mac_address: Schema.optional(Schema.String),
      })),
      server_type: Schema.Struct({
        id: Schema.Int,
        name: Schema.String,
        description: Schema.String,
        cores: Schema.Number,
        memory: Schema.Number,
        disk: Schema.Number,
        deprecated: Schema.Boolean,
        prices: Schema.Array(Schema.Struct({
          location: Schema.String,
          price_hourly: Schema.Struct({
            net: Schema.String,
            gross: Schema.String,
          }),
          price_monthly: Schema.Struct({
            net: Schema.String,
            gross: Schema.String,
          }),
          included_traffic: Schema.Int,
          price_per_tb_traffic: Schema.Struct({
            net: Schema.String,
            gross: Schema.String,
          }),
        })),
        storage_type: Schema.Literal("local", "network"),
        cpu_type: Schema.Literal("shared", "dedicated"),
        category: Schema.optional(Schema.String),
        architecture: Schema.Literal("x86", "arm"),
        deprecation: Schema.optional(Schema.NullOr(Schema.Struct({
          unavailable_after: Schema.String,
          announced: Schema.String,
        }))),
        locations: Schema.Array(Schema.Struct({
          id: Schema.Int,
          name: Schema.String,
          deprecation: Schema.NullOr(Schema.Struct({
            unavailable_after: Schema.String,
            announced: Schema.String,
          })),
          recommended: Schema.Boolean,
          available: Schema.Boolean,
        })),
      }),
      location: Schema.Struct({
        id: Schema.Int,
        name: Schema.String,
        description: Schema.String,
        country: Schema.String,
        city: Schema.String,
        latitude: Schema.Number,
        longitude: Schema.Number,
        network_zone: Schema.String,
      }),
      image: Schema.NullOr(Schema.Struct({
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
      iso: Schema.NullOr(Schema.Struct({
        id: Schema.Int,
        name: Schema.NullOr(Schema.String),
        description: Schema.String,
        type: Schema.NullOr(Schema.Literal("public", "private")),
        deprecation: Schema.NullOr(Schema.Struct({
          unavailable_after: Schema.String,
          announced: Schema.String,
        })),
        architecture: Schema.NullOr(Schema.Literal("x86", "arm")),
      })),
      rescue_enabled: Schema.Boolean,
      locked: Schema.Boolean,
      backup_window: Schema.NullOr(Schema.String),
      outgoing_traffic: Schema.NullOr(Schema.Int),
      ingoing_traffic: Schema.NullOr(Schema.Int),
      included_traffic: Schema.NullOr(Schema.Int),
      protection: Schema.Struct({
        delete: Schema.Boolean,
        rebuild: Schema.Boolean,
      }),
      labels: Schema.Record({ key: Schema.String, value: Schema.String }),
      volumes: Schema.optional(Schema.Array(Schema.Int)),
      load_balancers: Schema.optional(Schema.Array(Schema.Int)),
      primary_disk_size: Schema.Number,
      placement_group: Schema.optional(Schema.NullOr(Schema.Struct({
        id: Schema.Int,
        name: Schema.String,
        labels: Schema.Record({ key: Schema.String, value: Schema.String }),
        type: Schema.Literal("spread"),
        created: Schema.String,
        servers: Schema.Array(Schema.Int),
      }))),
    })),
  });
export type UpdateServerResponse = typeof UpdateServerResponse.Type;


export const makeServers = (http: HttpClient.HttpClient) => ({
    /** Add a Server to a Placement Group */
    addToPlacementGroup: (id: number, body: AddServerToPlacementGroupRequest): Effect.Effect<AddServerToPlacementGroupResponse, HetznerErrors> =>
      HttpClientRequest.post(`/servers/${id}/actions/add_to_placement_group`).pipe(
        HttpClientRequest.schemaBodyJson(AddServerToPlacementGroupRequest)(body),
        Effect.flatMap(http.execute),
        Effect.flatMap(HttpClientResponse.schemaBodyJson(AddServerToPlacementGroupResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.servers.addToPlacementGroup"),
      ),

    /** Attach an ISO to a Server */
    attachIso: (id: number, body: AttachServerIsoRequest): Effect.Effect<AttachServerIsoResponse, HetznerErrors> =>
      HttpClientRequest.post(`/servers/${id}/actions/attach_iso`).pipe(
        HttpClientRequest.schemaBodyJson(AttachServerIsoRequest)(body),
        Effect.flatMap(http.execute),
        Effect.flatMap(HttpClientResponse.schemaBodyJson(AttachServerIsoResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.servers.attachIso"),
      ),

    /** Attach a Server to a Network */
    attachToNetwork: (id: number, body: AttachServerToNetworkRequest): Effect.Effect<AttachServerToNetworkResponse, HetznerErrors> =>
      HttpClientRequest.post(`/servers/${id}/actions/attach_to_network`).pipe(
        HttpClientRequest.schemaBodyJson(AttachServerToNetworkRequest)(body),
        Effect.flatMap(http.execute),
        Effect.flatMap(HttpClientResponse.schemaBodyJson(AttachServerToNetworkResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.servers.attachToNetwork"),
      ),

    /** Change alias IPs of a Network */
    changeAliasIps: (id: number, body: ChangeServerAliasIpsRequest): Effect.Effect<ChangeServerAliasIpsResponse, HetznerErrors> =>
      HttpClientRequest.post(`/servers/${id}/actions/change_alias_ips`).pipe(
        HttpClientRequest.schemaBodyJson(ChangeServerAliasIpsRequest)(body),
        Effect.flatMap(http.execute),
        Effect.flatMap(HttpClientResponse.schemaBodyJson(ChangeServerAliasIpsResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.servers.changeAliasIps"),
      ),

    /** Change reverse DNS entry for this Server */
    changeDnsPtr: (id: number, body: ChangeServerDnsPtrRequest): Effect.Effect<ChangeServerDnsPtrResponse, HetznerErrors> =>
      HttpClientRequest.post(`/servers/${id}/actions/change_dns_ptr`).pipe(
        HttpClientRequest.schemaBodyJson(ChangeServerDnsPtrRequest)(body),
        Effect.flatMap(http.execute),
        Effect.flatMap(HttpClientResponse.schemaBodyJson(ChangeServerDnsPtrResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.servers.changeDnsPtr"),
      ),

    /** Change Server Protection */
    changeProtection: (id: number, body: ChangeServerProtectionRequest): Effect.Effect<ChangeServerProtectionResponse, HetznerErrors> =>
      HttpClientRequest.post(`/servers/${id}/actions/change_protection`).pipe(
        HttpClientRequest.schemaBodyJson(ChangeServerProtectionRequest)(body),
        Effect.flatMap(http.execute),
        Effect.flatMap(HttpClientResponse.schemaBodyJson(ChangeServerProtectionResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.servers.changeProtection"),
      ),

    /** Change the Type of a Server */
    changeType: (id: number, body: ChangeServerTypeRequest): Effect.Effect<ChangeServerTypeResponse, HetznerErrors> =>
      HttpClientRequest.post(`/servers/${id}/actions/change_type`).pipe(
        HttpClientRequest.schemaBodyJson(ChangeServerTypeRequest)(body),
        Effect.flatMap(http.execute),
        Effect.flatMap(HttpClientResponse.schemaBodyJson(ChangeServerTypeResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.servers.changeType"),
      ),

    /** Create a Server */
    create: (body: CreateServerRequest): Effect.Effect<CreateServerResponse, HetznerErrors> =>
      HttpClientRequest.post("/servers").pipe(
        HttpClientRequest.schemaBodyJson(CreateServerRequest)(body),
        Effect.flatMap(http.execute),
        Effect.flatMap(HttpClientResponse.schemaBodyJson(CreateServerResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.servers.create"),
      ),

    /** Create Image from a Server */
    createImage: (id: number, body: CreateServerImageRequest): Effect.Effect<CreateServerImageResponse, HetznerErrors> =>
      HttpClientRequest.post(`/servers/${id}/actions/create_image`).pipe(
        HttpClientRequest.schemaBodyJson(CreateServerImageRequest)(body),
        Effect.flatMap(http.execute),
        Effect.flatMap(HttpClientResponse.schemaBodyJson(CreateServerImageResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.servers.createImage"),
      ),

    /** Delete a Server */
    delete: (id: number): Effect.Effect<DeleteServerResponse, HetznerErrors> =>
      http.del(`/servers/${id}`).pipe(
        Effect.flatMap(HttpClientResponse.schemaBodyJson(DeleteServerResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.servers.delete"),
      ),

    /** Detach a Server from a Network */
    detachFromNetwork: (id: number, body: DetachServerFromNetworkRequest): Effect.Effect<DetachServerFromNetworkResponse, HetznerErrors> =>
      HttpClientRequest.post(`/servers/${id}/actions/detach_from_network`).pipe(
        HttpClientRequest.schemaBodyJson(DetachServerFromNetworkRequest)(body),
        Effect.flatMap(http.execute),
        Effect.flatMap(HttpClientResponse.schemaBodyJson(DetachServerFromNetworkResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.servers.detachFromNetwork"),
      ),

    /** Detach an ISO from a Server */
    detachIso: (id: number): Effect.Effect<DetachServerIsoResponse, HetznerErrors> =>
      HttpClientRequest.post(`/servers/${id}/actions/detach_iso`).pipe(
        http.execute,
        Effect.flatMap(HttpClientResponse.schemaBodyJson(DetachServerIsoResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.servers.detachIso"),
      ),

    /** Disable Backups for a Server */
    disableBackup: (id: number): Effect.Effect<DisableServerBackupResponse, HetznerErrors> =>
      HttpClientRequest.post(`/servers/${id}/actions/disable_backup`).pipe(
        http.execute,
        Effect.flatMap(HttpClientResponse.schemaBodyJson(DisableServerBackupResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.servers.disableBackup"),
      ),

    /** Disable Rescue Mode for a Server */
    disableRescue: (id: number): Effect.Effect<DisableServerRescueResponse, HetznerErrors> =>
      HttpClientRequest.post(`/servers/${id}/actions/disable_rescue`).pipe(
        http.execute,
        Effect.flatMap(HttpClientResponse.schemaBodyJson(DisableServerRescueResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.servers.disableRescue"),
      ),

    /** Enable and Configure Backups for a Server */
    enableBackup: (id: number): Effect.Effect<EnableServerBackupResponse, HetznerErrors> =>
      HttpClientRequest.post(`/servers/${id}/actions/enable_backup`).pipe(
        http.execute,
        Effect.flatMap(HttpClientResponse.schemaBodyJson(EnableServerBackupResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.servers.enableBackup"),
      ),

    /** Enable Rescue Mode for a Server */
    enableRescue: (id: number, body: EnableServerRescueRequest): Effect.Effect<EnableServerRescueResponse, HetznerErrors> =>
      HttpClientRequest.post(`/servers/${id}/actions/enable_rescue`).pipe(
        HttpClientRequest.schemaBodyJson(EnableServerRescueRequest)(body),
        Effect.flatMap(http.execute),
        Effect.flatMap(HttpClientResponse.schemaBodyJson(EnableServerRescueResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.servers.enableRescue"),
      ),

    /** Get a Server */
    get: (id: number): Effect.Effect<GetServerResponse, HetznerErrors> =>
      HttpClientRequest.get(`/servers/${id}`).pipe(
        http.execute,
        Effect.flatMap(HttpClientResponse.schemaBodyJson(GetServerResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.servers.get"),
      ),

    /** Get an Action for a Server */
    getAction: (id: number, action_id: number): Effect.Effect<GetServerActionResponse, HetznerErrors> =>
      HttpClientRequest.get(`/servers/${id}/actions/${action_id}`).pipe(
        http.execute,
        Effect.flatMap(HttpClientResponse.schemaBodyJson(GetServerActionResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.servers.getAction"),
      ),

    /** Get Metrics for a Server */
    getMetrics: (id: number, query?: GetServerMetricsQuery): Effect.Effect<GetServerMetricsResponse, HetznerErrors> =>
      HttpClientRequest.get(`/servers/${id}/metrics`).pipe(
        HttpClientRequest.setUrlParams(toUrlParams(query)),
        http.execute,
        Effect.flatMap(HttpClientResponse.schemaBodyJson(GetServerMetricsResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.servers.getMetrics"),
      ),

    /** Get an Action */
    getServersAction: (id: number): Effect.Effect<GetServersActionResponse, HetznerErrors> =>
      HttpClientRequest.get(`/servers/actions/${id}`).pipe(
        http.execute,
        Effect.flatMap(HttpClientResponse.schemaBodyJson(GetServersActionResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.servers.getServersAction"),
      ),

    /** List Servers */
    list: (query?: ListServersQuery): Effect.Effect<ListServersResponse, HetznerErrors> =>
      HttpClientRequest.get("/servers").pipe(
        HttpClientRequest.setUrlParams(toUrlParams(query)),
        http.execute,
        Effect.flatMap(HttpClientResponse.schemaBodyJson(ListServersResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.servers.list"),
      ),

    /** List Actions for a Server */
    listActions: (id: number, query?: ListServerActionsQuery): Effect.Effect<ListServerActionsResponse, HetznerErrors> =>
      HttpClientRequest.get(`/servers/${id}/actions`).pipe(
        HttpClientRequest.setUrlParams(toUrlParams(query)),
        http.execute,
        Effect.flatMap(HttpClientResponse.schemaBodyJson(ListServerActionsResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.servers.listActions"),
      ),

    /** List Actions */
    listServersActions: (query?: ListServersActionsQuery): Effect.Effect<ListServersActionsResponse, HetznerErrors> =>
      HttpClientRequest.get("/servers/actions").pipe(
        HttpClientRequest.setUrlParams(toUrlParams(query)),
        http.execute,
        Effect.flatMap(HttpClientResponse.schemaBodyJson(ListServersActionsResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.servers.listServersActions"),
      ),

    /** Power off a Server */
    powerOff: (id: number): Effect.Effect<PowerOffServerResponse, HetznerErrors> =>
      HttpClientRequest.post(`/servers/${id}/actions/poweroff`).pipe(
        http.execute,
        Effect.flatMap(HttpClientResponse.schemaBodyJson(PowerOffServerResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.servers.powerOff"),
      ),

    /** Power on a Server */
    powerOn: (id: number): Effect.Effect<PowerOnServerResponse, HetznerErrors> =>
      HttpClientRequest.post(`/servers/${id}/actions/poweron`).pipe(
        http.execute,
        Effect.flatMap(HttpClientResponse.schemaBodyJson(PowerOnServerResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.servers.powerOn"),
      ),

    /** Soft-reboot a Server */
    reboot: (id: number): Effect.Effect<RebootServerResponse, HetznerErrors> =>
      HttpClientRequest.post(`/servers/${id}/actions/reboot`).pipe(
        http.execute,
        Effect.flatMap(HttpClientResponse.schemaBodyJson(RebootServerResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.servers.reboot"),
      ),

    /** Rebuild a Server from an Image */
    rebuild: (id: number, body: RebuildServerRequest): Effect.Effect<RebuildServerResponse, HetznerErrors> =>
      HttpClientRequest.post(`/servers/${id}/actions/rebuild`).pipe(
        HttpClientRequest.schemaBodyJson(RebuildServerRequest)(body),
        Effect.flatMap(http.execute),
        Effect.flatMap(HttpClientResponse.schemaBodyJson(RebuildServerResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.servers.rebuild"),
      ),

    /** Remove from Placement Group */
    removeFromPlacementGroup: (id: number): Effect.Effect<RemoveServerFromPlacementGroupResponse, HetznerErrors> =>
      HttpClientRequest.post(`/servers/${id}/actions/remove_from_placement_group`).pipe(
        http.execute,
        Effect.flatMap(HttpClientResponse.schemaBodyJson(RemoveServerFromPlacementGroupResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.servers.removeFromPlacementGroup"),
      ),

    /** Request Console for a Server */
    requestConsole: (id: number): Effect.Effect<RequestServerConsoleResponse, HetznerErrors> =>
      HttpClientRequest.post(`/servers/${id}/actions/request_console`).pipe(
        http.execute,
        Effect.flatMap(HttpClientResponse.schemaBodyJson(RequestServerConsoleResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.servers.requestConsole"),
      ),

    /** Reset a Server */
    reset: (id: number): Effect.Effect<ResetServerResponse, HetznerErrors> =>
      HttpClientRequest.post(`/servers/${id}/actions/reset`).pipe(
        http.execute,
        Effect.flatMap(HttpClientResponse.schemaBodyJson(ResetServerResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.servers.reset"),
      ),

    /** Reset root Password of a Server */
    resetPassword: (id: number): Effect.Effect<ResetServerPasswordResponse, HetznerErrors> =>
      HttpClientRequest.post(`/servers/${id}/actions/reset_password`).pipe(
        http.execute,
        Effect.flatMap(HttpClientResponse.schemaBodyJson(ResetServerPasswordResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.servers.resetPassword"),
      ),

    /** Shutdown a Server */
    shutdown: (id: number): Effect.Effect<ShutdownServerResponse, HetznerErrors> =>
      HttpClientRequest.post(`/servers/${id}/actions/shutdown`).pipe(
        http.execute,
        Effect.flatMap(HttpClientResponse.schemaBodyJson(ShutdownServerResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.servers.shutdown"),
      ),

    /** Update a Server */
    update: (id: number, body: UpdateServerRequest): Effect.Effect<UpdateServerResponse, HetznerErrors> =>
      HttpClientRequest.put(`/servers/${id}`).pipe(
        HttpClientRequest.schemaBodyJson(UpdateServerRequest)(body),
        Effect.flatMap(http.execute),
        Effect.flatMap(HttpClientResponse.schemaBodyJson(UpdateServerResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.servers.update"),
      ),
});

export type ServersApi = ReturnType<typeof makeServers>;
