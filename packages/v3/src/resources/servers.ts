/**
 * Servers — generated from the Hetzner Cloud OpenAPI spec. Do not edit by hand.
 */
import { Effect, Schema } from "effect";
import { HttpClientRequest, HttpClientResponse } from "@effect/platform";
import type { HttpClient } from "@effect/platform";
import { handleHetznerError, type HetznerErrors } from "../errors.js";
import { toUrlParams } from "../internal/url-params.js";


export const AddServerToPlacementGroupRequest = Schema.Struct({
    placementGroup: Schema.propertySignature(Schema.Int).pipe(Schema.fromKey("placement_group")),
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
    aliasIps: Schema.optional(Schema.Array(Schema.String)).pipe(Schema.fromKey("alias_ips")),
    ipRange: Schema.optional(Schema.String).pipe(Schema.fromKey("ip_range")),
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
    aliasIps: Schema.propertySignature(Schema.Array(Schema.String)).pipe(Schema.fromKey("alias_ips")),
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
    dnsPtr: Schema.optional(Schema.NullOr(Schema.String)).pipe(Schema.fromKey("dns_ptr")),
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
    upgradeDisk: Schema.propertySignature(Schema.Boolean).pipe(Schema.fromKey("upgrade_disk")),
    serverType: Schema.propertySignature(Schema.String).pipe(Schema.fromKey("server_type")),
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
    serverType: Schema.propertySignature(Schema.String).pipe(Schema.fromKey("server_type")),
    startAfterCreate: Schema.optional(Schema.Boolean).pipe(Schema.fromKey("start_after_create")),
    image: Schema.String,
    placementGroup: Schema.optional(Schema.Int).pipe(Schema.fromKey("placement_group")),
    sshKeys: Schema.optional(Schema.Array(Schema.String)).pipe(Schema.fromKey("ssh_keys")),
    volumes: Schema.optional(Schema.Array(Schema.Int)),
    networks: Schema.optional(Schema.Array(Schema.Int)),
    firewalls: Schema.optional(Schema.Array(Schema.Struct({
      firewall: Schema.Int,
    }))),
    userData: Schema.optional(Schema.String).pipe(Schema.fromKey("user_data")),
    labels: Schema.optional(Schema.Record({ key: Schema.String, value: Schema.String })),
    automount: Schema.optional(Schema.Boolean),
    publicNet: Schema.optional(Schema.Struct({
      enableIpv4: Schema.optional(Schema.Boolean).pipe(Schema.fromKey("enable_ipv4")),
      enableIpv6: Schema.optional(Schema.Boolean).pipe(Schema.fromKey("enable_ipv6")),
      ipv4: Schema.optional(Schema.NullOr(Schema.Int)),
      ipv6: Schema.optional(Schema.NullOr(Schema.Int)),
    })).pipe(Schema.fromKey("public_net")),
  });
export type CreateServerRequest = typeof CreateServerRequest.Type;
export const CreateServerResponse = Schema.Struct({
    server: Schema.Struct({
      id: Schema.Int,
      name: Schema.String,
      status: Schema.Literal("running", "initializing", "starting", "stopping", "off", "deleting", "migrating", "rebuilding", "unknown"),
      created: Schema.String,
      publicNet: Schema.propertySignature(Schema.Struct({
        ipv4: Schema.NullOr(Schema.Struct({
          id: Schema.optional(Schema.Int),
          ip: Schema.String,
          blocked: Schema.Boolean,
          dnsPtr: Schema.propertySignature(Schema.String).pipe(Schema.fromKey("dns_ptr")),
        })),
        ipv6: Schema.NullOr(Schema.Struct({
          id: Schema.optional(Schema.Int),
          ip: Schema.String,
          blocked: Schema.Boolean,
          dnsPtr: Schema.propertySignature(Schema.NullOr(Schema.Array(Schema.Struct({
            ip: Schema.String,
            dnsPtr: Schema.propertySignature(Schema.String).pipe(Schema.fromKey("dns_ptr")),
          })))).pipe(Schema.fromKey("dns_ptr")),
        })),
        floatingIps: Schema.propertySignature(Schema.Array(Schema.Int)).pipe(Schema.fromKey("floating_ips")),
        firewalls: Schema.optional(Schema.Array(Schema.Struct({
          id: Schema.optional(Schema.Int),
          status: Schema.optional(Schema.Literal("applied", "pending")),
        }))),
      })).pipe(Schema.fromKey("public_net")),
      privateNet: Schema.propertySignature(Schema.Array(Schema.Struct({
        network: Schema.optional(Schema.Int),
        ip: Schema.optional(Schema.String),
        aliasIps: Schema.optional(Schema.Array(Schema.String)).pipe(Schema.fromKey("alias_ips")),
        macAddress: Schema.optional(Schema.String).pipe(Schema.fromKey("mac_address")),
      }))).pipe(Schema.fromKey("private_net")),
      serverType: Schema.propertySignature(Schema.Struct({
        id: Schema.Int,
        name: Schema.String,
        description: Schema.String,
        cores: Schema.Number,
        memory: Schema.Number,
        disk: Schema.Number,
        deprecated: Schema.Boolean,
        prices: Schema.Array(Schema.Struct({
          location: Schema.String,
          priceHourly: Schema.propertySignature(Schema.Struct({
            net: Schema.String,
            gross: Schema.String,
          })).pipe(Schema.fromKey("price_hourly")),
          priceMonthly: Schema.propertySignature(Schema.Struct({
            net: Schema.String,
            gross: Schema.String,
          })).pipe(Schema.fromKey("price_monthly")),
          includedTraffic: Schema.propertySignature(Schema.Int).pipe(Schema.fromKey("included_traffic")),
          pricePerTbTraffic: Schema.propertySignature(Schema.Struct({
            net: Schema.String,
            gross: Schema.String,
          })).pipe(Schema.fromKey("price_per_tb_traffic")),
        })),
        storageType: Schema.propertySignature(Schema.Literal("local", "network")).pipe(Schema.fromKey("storage_type")),
        cpuType: Schema.propertySignature(Schema.Literal("shared", "dedicated")).pipe(Schema.fromKey("cpu_type")),
        category: Schema.optional(Schema.String),
        architecture: Schema.Literal("x86", "arm"),
        deprecation: Schema.optional(Schema.NullOr(Schema.Struct({
          unavailableAfter: Schema.propertySignature(Schema.String).pipe(Schema.fromKey("unavailable_after")),
          announced: Schema.String,
        }))),
        locations: Schema.Array(Schema.Struct({
          id: Schema.Int,
          name: Schema.String,
          deprecation: Schema.NullOr(Schema.Struct({
            unavailableAfter: Schema.propertySignature(Schema.String).pipe(Schema.fromKey("unavailable_after")),
            announced: Schema.String,
          })),
          recommended: Schema.Boolean,
          available: Schema.Boolean,
        })),
      })).pipe(Schema.fromKey("server_type")),
      location: Schema.Struct({
        id: Schema.Int,
        name: Schema.String,
        description: Schema.String,
        country: Schema.String,
        city: Schema.String,
        latitude: Schema.Number,
        longitude: Schema.Number,
        networkZone: Schema.propertySignature(Schema.String).pipe(Schema.fromKey("network_zone")),
      }),
      image: Schema.NullOr(Schema.Struct({
        id: Schema.Int,
        type: Schema.Literal("system", "app", "snapshot", "backup"),
        status: Schema.Literal("available", "creating", "unavailable"),
        name: Schema.NullOr(Schema.String),
        description: Schema.String,
        imageSize: Schema.propertySignature(Schema.NullOr(Schema.Number)).pipe(Schema.fromKey("image_size")),
        diskSize: Schema.propertySignature(Schema.Number).pipe(Schema.fromKey("disk_size")),
        created: Schema.String,
        createdFrom: Schema.propertySignature(Schema.NullOr(Schema.Struct({
          id: Schema.Int,
          name: Schema.String,
        }))).pipe(Schema.fromKey("created_from")),
        boundTo: Schema.propertySignature(Schema.NullOr(Schema.Int)).pipe(Schema.fromKey("bound_to")),
        osFlavor: Schema.propertySignature(Schema.Literal("ubuntu", "centos", "debian", "fedora", "rocky", "alma", "opensuse", "unknown")).pipe(Schema.fromKey("os_flavor")),
        osVersion: Schema.propertySignature(Schema.NullOr(Schema.String)).pipe(Schema.fromKey("os_version")),
        rapidDeploy: Schema.optional(Schema.Boolean).pipe(Schema.fromKey("rapid_deploy")),
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
          unavailableAfter: Schema.propertySignature(Schema.String).pipe(Schema.fromKey("unavailable_after")),
          announced: Schema.String,
        })),
        architecture: Schema.NullOr(Schema.Literal("x86", "arm")),
      })),
      rescueEnabled: Schema.propertySignature(Schema.Boolean).pipe(Schema.fromKey("rescue_enabled")),
      locked: Schema.Boolean,
      backupWindow: Schema.propertySignature(Schema.NullOr(Schema.String)).pipe(Schema.fromKey("backup_window")),
      outgoingTraffic: Schema.propertySignature(Schema.NullOr(Schema.Int)).pipe(Schema.fromKey("outgoing_traffic")),
      ingoingTraffic: Schema.propertySignature(Schema.NullOr(Schema.Int)).pipe(Schema.fromKey("ingoing_traffic")),
      includedTraffic: Schema.propertySignature(Schema.NullOr(Schema.Int)).pipe(Schema.fromKey("included_traffic")),
      protection: Schema.Struct({
        delete: Schema.Boolean,
        rebuild: Schema.Boolean,
      }),
      labels: Schema.Record({ key: Schema.String, value: Schema.String }),
      volumes: Schema.optional(Schema.Array(Schema.Int)),
      loadBalancers: Schema.optional(Schema.Array(Schema.Int)).pipe(Schema.fromKey("load_balancers")),
      primaryDiskSize: Schema.propertySignature(Schema.Number).pipe(Schema.fromKey("primary_disk_size")),
      placementGroup: Schema.optional(Schema.NullOr(Schema.Struct({
        id: Schema.Int,
        name: Schema.String,
        labels: Schema.Record({ key: Schema.String, value: Schema.String }),
        type: Schema.Literal("spread"),
        created: Schema.String,
        servers: Schema.Array(Schema.Int),
      }))).pipe(Schema.fromKey("placement_group")),
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
    nextActions: Schema.propertySignature(Schema.Array(Schema.Struct({
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
    }))).pipe(Schema.fromKey("next_actions")),
    rootPassword: Schema.propertySignature(Schema.NullOr(Schema.String)).pipe(Schema.fromKey("root_password")),
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
      imageSize: Schema.propertySignature(Schema.NullOr(Schema.Number)).pipe(Schema.fromKey("image_size")),
      diskSize: Schema.propertySignature(Schema.Number).pipe(Schema.fromKey("disk_size")),
      created: Schema.String,
      createdFrom: Schema.propertySignature(Schema.NullOr(Schema.Struct({
        id: Schema.Int,
        name: Schema.String,
      }))).pipe(Schema.fromKey("created_from")),
      boundTo: Schema.propertySignature(Schema.NullOr(Schema.Int)).pipe(Schema.fromKey("bound_to")),
      osFlavor: Schema.propertySignature(Schema.Literal("ubuntu", "centos", "debian", "fedora", "rocky", "alma", "opensuse", "unknown")).pipe(Schema.fromKey("os_flavor")),
      osVersion: Schema.propertySignature(Schema.NullOr(Schema.String)).pipe(Schema.fromKey("os_version")),
      rapidDeploy: Schema.optional(Schema.Boolean).pipe(Schema.fromKey("rapid_deploy")),
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
    sshKeys: Schema.optional(Schema.Array(Schema.Int)).pipe(Schema.fromKey("ssh_keys")),
  });
export type EnableServerRescueRequest = typeof EnableServerRescueRequest.Type;
export const EnableServerRescueResponse = Schema.Struct({
    rootPassword: Schema.optional(Schema.String).pipe(Schema.fromKey("root_password")),
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
      publicNet: Schema.propertySignature(Schema.Struct({
        ipv4: Schema.NullOr(Schema.Struct({
          id: Schema.optional(Schema.Int),
          ip: Schema.String,
          blocked: Schema.Boolean,
          dnsPtr: Schema.propertySignature(Schema.String).pipe(Schema.fromKey("dns_ptr")),
        })),
        ipv6: Schema.NullOr(Schema.Struct({
          id: Schema.optional(Schema.Int),
          ip: Schema.String,
          blocked: Schema.Boolean,
          dnsPtr: Schema.propertySignature(Schema.NullOr(Schema.Array(Schema.Struct({
            ip: Schema.String,
            dnsPtr: Schema.propertySignature(Schema.String).pipe(Schema.fromKey("dns_ptr")),
          })))).pipe(Schema.fromKey("dns_ptr")),
        })),
        floatingIps: Schema.propertySignature(Schema.Array(Schema.Int)).pipe(Schema.fromKey("floating_ips")),
        firewalls: Schema.optional(Schema.Array(Schema.Struct({
          id: Schema.optional(Schema.Int),
          status: Schema.optional(Schema.Literal("applied", "pending")),
        }))),
      })).pipe(Schema.fromKey("public_net")),
      privateNet: Schema.propertySignature(Schema.Array(Schema.Struct({
        network: Schema.optional(Schema.Int),
        ip: Schema.optional(Schema.String),
        aliasIps: Schema.optional(Schema.Array(Schema.String)).pipe(Schema.fromKey("alias_ips")),
        macAddress: Schema.optional(Schema.String).pipe(Schema.fromKey("mac_address")),
      }))).pipe(Schema.fromKey("private_net")),
      serverType: Schema.propertySignature(Schema.Struct({
        id: Schema.Int,
        name: Schema.String,
        description: Schema.String,
        cores: Schema.Number,
        memory: Schema.Number,
        disk: Schema.Number,
        deprecated: Schema.Boolean,
        prices: Schema.Array(Schema.Struct({
          location: Schema.String,
          priceHourly: Schema.propertySignature(Schema.Struct({
            net: Schema.String,
            gross: Schema.String,
          })).pipe(Schema.fromKey("price_hourly")),
          priceMonthly: Schema.propertySignature(Schema.Struct({
            net: Schema.String,
            gross: Schema.String,
          })).pipe(Schema.fromKey("price_monthly")),
          includedTraffic: Schema.propertySignature(Schema.Int).pipe(Schema.fromKey("included_traffic")),
          pricePerTbTraffic: Schema.propertySignature(Schema.Struct({
            net: Schema.String,
            gross: Schema.String,
          })).pipe(Schema.fromKey("price_per_tb_traffic")),
        })),
        storageType: Schema.propertySignature(Schema.Literal("local", "network")).pipe(Schema.fromKey("storage_type")),
        cpuType: Schema.propertySignature(Schema.Literal("shared", "dedicated")).pipe(Schema.fromKey("cpu_type")),
        category: Schema.optional(Schema.String),
        architecture: Schema.Literal("x86", "arm"),
        deprecation: Schema.optional(Schema.NullOr(Schema.Struct({
          unavailableAfter: Schema.propertySignature(Schema.String).pipe(Schema.fromKey("unavailable_after")),
          announced: Schema.String,
        }))),
        locations: Schema.Array(Schema.Struct({
          id: Schema.Int,
          name: Schema.String,
          deprecation: Schema.NullOr(Schema.Struct({
            unavailableAfter: Schema.propertySignature(Schema.String).pipe(Schema.fromKey("unavailable_after")),
            announced: Schema.String,
          })),
          recommended: Schema.Boolean,
          available: Schema.Boolean,
        })),
      })).pipe(Schema.fromKey("server_type")),
      location: Schema.Struct({
        id: Schema.Int,
        name: Schema.String,
        description: Schema.String,
        country: Schema.String,
        city: Schema.String,
        latitude: Schema.Number,
        longitude: Schema.Number,
        networkZone: Schema.propertySignature(Schema.String).pipe(Schema.fromKey("network_zone")),
      }),
      image: Schema.NullOr(Schema.Struct({
        id: Schema.Int,
        type: Schema.Literal("system", "app", "snapshot", "backup"),
        status: Schema.Literal("available", "creating", "unavailable"),
        name: Schema.NullOr(Schema.String),
        description: Schema.String,
        imageSize: Schema.propertySignature(Schema.NullOr(Schema.Number)).pipe(Schema.fromKey("image_size")),
        diskSize: Schema.propertySignature(Schema.Number).pipe(Schema.fromKey("disk_size")),
        created: Schema.String,
        createdFrom: Schema.propertySignature(Schema.NullOr(Schema.Struct({
          id: Schema.Int,
          name: Schema.String,
        }))).pipe(Schema.fromKey("created_from")),
        boundTo: Schema.propertySignature(Schema.NullOr(Schema.Int)).pipe(Schema.fromKey("bound_to")),
        osFlavor: Schema.propertySignature(Schema.Literal("ubuntu", "centos", "debian", "fedora", "rocky", "alma", "opensuse", "unknown")).pipe(Schema.fromKey("os_flavor")),
        osVersion: Schema.propertySignature(Schema.NullOr(Schema.String)).pipe(Schema.fromKey("os_version")),
        rapidDeploy: Schema.optional(Schema.Boolean).pipe(Schema.fromKey("rapid_deploy")),
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
          unavailableAfter: Schema.propertySignature(Schema.String).pipe(Schema.fromKey("unavailable_after")),
          announced: Schema.String,
        })),
        architecture: Schema.NullOr(Schema.Literal("x86", "arm")),
      })),
      rescueEnabled: Schema.propertySignature(Schema.Boolean).pipe(Schema.fromKey("rescue_enabled")),
      locked: Schema.Boolean,
      backupWindow: Schema.propertySignature(Schema.NullOr(Schema.String)).pipe(Schema.fromKey("backup_window")),
      outgoingTraffic: Schema.propertySignature(Schema.NullOr(Schema.Int)).pipe(Schema.fromKey("outgoing_traffic")),
      ingoingTraffic: Schema.propertySignature(Schema.NullOr(Schema.Int)).pipe(Schema.fromKey("ingoing_traffic")),
      includedTraffic: Schema.propertySignature(Schema.NullOr(Schema.Int)).pipe(Schema.fromKey("included_traffic")),
      protection: Schema.Struct({
        delete: Schema.Boolean,
        rebuild: Schema.Boolean,
      }),
      labels: Schema.Record({ key: Schema.String, value: Schema.String }),
      volumes: Schema.optional(Schema.Array(Schema.Int)),
      loadBalancers: Schema.optional(Schema.Array(Schema.Int)).pipe(Schema.fromKey("load_balancers")),
      primaryDiskSize: Schema.propertySignature(Schema.Number).pipe(Schema.fromKey("primary_disk_size")),
      placementGroup: Schema.optional(Schema.NullOr(Schema.Struct({
        id: Schema.Int,
        name: Schema.String,
        labels: Schema.Record({ key: Schema.String, value: Schema.String }),
        type: Schema.Literal("spread"),
        created: Schema.String,
        servers: Schema.Array(Schema.Int),
      }))).pipe(Schema.fromKey("placement_group")),
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
      timeSeries: Schema.propertySignature(Schema.Record({ key: Schema.String, value: Schema.Struct({
        values: Schema.Array(Schema.Array(Schema.Unknown)),
      }) })).pipe(Schema.fromKey("time_series")),
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
      publicNet: Schema.propertySignature(Schema.Struct({
        ipv4: Schema.NullOr(Schema.Struct({
          id: Schema.optional(Schema.Int),
          ip: Schema.String,
          blocked: Schema.Boolean,
          dnsPtr: Schema.propertySignature(Schema.String).pipe(Schema.fromKey("dns_ptr")),
        })),
        ipv6: Schema.NullOr(Schema.Struct({
          id: Schema.optional(Schema.Int),
          ip: Schema.String,
          blocked: Schema.Boolean,
          dnsPtr: Schema.propertySignature(Schema.NullOr(Schema.Array(Schema.Struct({
            ip: Schema.String,
            dnsPtr: Schema.propertySignature(Schema.String).pipe(Schema.fromKey("dns_ptr")),
          })))).pipe(Schema.fromKey("dns_ptr")),
        })),
        floatingIps: Schema.propertySignature(Schema.Array(Schema.Int)).pipe(Schema.fromKey("floating_ips")),
        firewalls: Schema.optional(Schema.Array(Schema.Struct({
          id: Schema.optional(Schema.Int),
          status: Schema.optional(Schema.Literal("applied", "pending")),
        }))),
      })).pipe(Schema.fromKey("public_net")),
      privateNet: Schema.propertySignature(Schema.Array(Schema.Struct({
        network: Schema.optional(Schema.Int),
        ip: Schema.optional(Schema.String),
        aliasIps: Schema.optional(Schema.Array(Schema.String)).pipe(Schema.fromKey("alias_ips")),
        macAddress: Schema.optional(Schema.String).pipe(Schema.fromKey("mac_address")),
      }))).pipe(Schema.fromKey("private_net")),
      serverType: Schema.propertySignature(Schema.Struct({
        id: Schema.Int,
        name: Schema.String,
        description: Schema.String,
        cores: Schema.Number,
        memory: Schema.Number,
        disk: Schema.Number,
        deprecated: Schema.Boolean,
        prices: Schema.Array(Schema.Struct({
          location: Schema.String,
          priceHourly: Schema.propertySignature(Schema.Struct({
            net: Schema.String,
            gross: Schema.String,
          })).pipe(Schema.fromKey("price_hourly")),
          priceMonthly: Schema.propertySignature(Schema.Struct({
            net: Schema.String,
            gross: Schema.String,
          })).pipe(Schema.fromKey("price_monthly")),
          includedTraffic: Schema.propertySignature(Schema.Int).pipe(Schema.fromKey("included_traffic")),
          pricePerTbTraffic: Schema.propertySignature(Schema.Struct({
            net: Schema.String,
            gross: Schema.String,
          })).pipe(Schema.fromKey("price_per_tb_traffic")),
        })),
        storageType: Schema.propertySignature(Schema.Literal("local", "network")).pipe(Schema.fromKey("storage_type")),
        cpuType: Schema.propertySignature(Schema.Literal("shared", "dedicated")).pipe(Schema.fromKey("cpu_type")),
        category: Schema.optional(Schema.String),
        architecture: Schema.Literal("x86", "arm"),
        deprecation: Schema.optional(Schema.NullOr(Schema.Struct({
          unavailableAfter: Schema.propertySignature(Schema.String).pipe(Schema.fromKey("unavailable_after")),
          announced: Schema.String,
        }))),
        locations: Schema.Array(Schema.Struct({
          id: Schema.Int,
          name: Schema.String,
          deprecation: Schema.NullOr(Schema.Struct({
            unavailableAfter: Schema.propertySignature(Schema.String).pipe(Schema.fromKey("unavailable_after")),
            announced: Schema.String,
          })),
          recommended: Schema.Boolean,
          available: Schema.Boolean,
        })),
      })).pipe(Schema.fromKey("server_type")),
      location: Schema.Struct({
        id: Schema.Int,
        name: Schema.String,
        description: Schema.String,
        country: Schema.String,
        city: Schema.String,
        latitude: Schema.Number,
        longitude: Schema.Number,
        networkZone: Schema.propertySignature(Schema.String).pipe(Schema.fromKey("network_zone")),
      }),
      image: Schema.NullOr(Schema.Struct({
        id: Schema.Int,
        type: Schema.Literal("system", "app", "snapshot", "backup"),
        status: Schema.Literal("available", "creating", "unavailable"),
        name: Schema.NullOr(Schema.String),
        description: Schema.String,
        imageSize: Schema.propertySignature(Schema.NullOr(Schema.Number)).pipe(Schema.fromKey("image_size")),
        diskSize: Schema.propertySignature(Schema.Number).pipe(Schema.fromKey("disk_size")),
        created: Schema.String,
        createdFrom: Schema.propertySignature(Schema.NullOr(Schema.Struct({
          id: Schema.Int,
          name: Schema.String,
        }))).pipe(Schema.fromKey("created_from")),
        boundTo: Schema.propertySignature(Schema.NullOr(Schema.Int)).pipe(Schema.fromKey("bound_to")),
        osFlavor: Schema.propertySignature(Schema.Literal("ubuntu", "centos", "debian", "fedora", "rocky", "alma", "opensuse", "unknown")).pipe(Schema.fromKey("os_flavor")),
        osVersion: Schema.propertySignature(Schema.NullOr(Schema.String)).pipe(Schema.fromKey("os_version")),
        rapidDeploy: Schema.optional(Schema.Boolean).pipe(Schema.fromKey("rapid_deploy")),
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
          unavailableAfter: Schema.propertySignature(Schema.String).pipe(Schema.fromKey("unavailable_after")),
          announced: Schema.String,
        })),
        architecture: Schema.NullOr(Schema.Literal("x86", "arm")),
      })),
      rescueEnabled: Schema.propertySignature(Schema.Boolean).pipe(Schema.fromKey("rescue_enabled")),
      locked: Schema.Boolean,
      backupWindow: Schema.propertySignature(Schema.NullOr(Schema.String)).pipe(Schema.fromKey("backup_window")),
      outgoingTraffic: Schema.propertySignature(Schema.NullOr(Schema.Int)).pipe(Schema.fromKey("outgoing_traffic")),
      ingoingTraffic: Schema.propertySignature(Schema.NullOr(Schema.Int)).pipe(Schema.fromKey("ingoing_traffic")),
      includedTraffic: Schema.propertySignature(Schema.NullOr(Schema.Int)).pipe(Schema.fromKey("included_traffic")),
      protection: Schema.Struct({
        delete: Schema.Boolean,
        rebuild: Schema.Boolean,
      }),
      labels: Schema.Record({ key: Schema.String, value: Schema.String }),
      volumes: Schema.optional(Schema.Array(Schema.Int)),
      loadBalancers: Schema.optional(Schema.Array(Schema.Int)).pipe(Schema.fromKey("load_balancers")),
      primaryDiskSize: Schema.propertySignature(Schema.Number).pipe(Schema.fromKey("primary_disk_size")),
      placementGroup: Schema.optional(Schema.NullOr(Schema.Struct({
        id: Schema.Int,
        name: Schema.String,
        labels: Schema.Record({ key: Schema.String, value: Schema.String }),
        type: Schema.Literal("spread"),
        created: Schema.String,
        servers: Schema.Array(Schema.Int),
      }))).pipe(Schema.fromKey("placement_group")),
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
export type ListServersResponse = typeof ListServersResponse.Type;
export interface ListServersQuery {
  name?: string;
  labelSelector?: string;
  sort?: ReadonlyArray<"id" | "id:asc" | "id:desc" | "name" | "name:asc" | "name:desc" | "created" | "created:asc" | "created:desc">;
  status?: ReadonlyArray<"running" | "initializing" | "starting" | "stopping" | "off" | "deleting" | "migrating" | "rebuilding" | "unknown">;
  page?: number;
  perPage?: number;
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
        perPage: Schema.propertySignature(Schema.Int).pipe(Schema.fromKey("per_page")),
        previousPage: Schema.propertySignature(Schema.NullOr(Schema.Int)).pipe(Schema.fromKey("previous_page")),
        nextPage: Schema.propertySignature(Schema.NullOr(Schema.Int)).pipe(Schema.fromKey("next_page")),
        lastPage: Schema.propertySignature(Schema.NullOr(Schema.Int)).pipe(Schema.fromKey("last_page")),
        totalEntries: Schema.propertySignature(Schema.NullOr(Schema.Int)).pipe(Schema.fromKey("total_entries")),
      }),
    }),
  });
export type ListServerActionsResponse = typeof ListServerActionsResponse.Type;
export interface ListServerActionsQuery {
  sort?: ReadonlyArray<"id" | "id:asc" | "id:desc" | "command" | "command:asc" | "command:desc" | "status" | "status:asc" | "status:desc" | "started" | "started:asc" | "started:desc" | "finished" | "finished:asc" | "finished:desc">;
  status?: ReadonlyArray<"running" | "success" | "error">;
  page?: number;
  perPage?: number;
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
        perPage: Schema.propertySignature(Schema.Int).pipe(Schema.fromKey("per_page")),
        previousPage: Schema.propertySignature(Schema.NullOr(Schema.Int)).pipe(Schema.fromKey("previous_page")),
        nextPage: Schema.propertySignature(Schema.NullOr(Schema.Int)).pipe(Schema.fromKey("next_page")),
        lastPage: Schema.propertySignature(Schema.NullOr(Schema.Int)).pipe(Schema.fromKey("last_page")),
        totalEntries: Schema.propertySignature(Schema.NullOr(Schema.Int)).pipe(Schema.fromKey("total_entries")),
      }),
    }),
  });
export type ListServersActionsResponse = typeof ListServersActionsResponse.Type;
export interface ListServersActionsQuery {
  id?: ReadonlyArray<number>;
  sort?: ReadonlyArray<"id" | "id:asc" | "id:desc" | "command" | "command:asc" | "command:desc" | "status" | "status:asc" | "status:desc" | "started" | "started:asc" | "started:desc" | "finished" | "finished:asc" | "finished:desc">;
  status?: ReadonlyArray<"running" | "success" | "error">;
  page?: number;
  perPage?: number;
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
    userData: Schema.optional(Schema.String).pipe(Schema.fromKey("user_data")),
  });
export type RebuildServerRequest = typeof RebuildServerRequest.Type;
export const RebuildServerResponse = Schema.Struct({
    rootPassword: Schema.optional(Schema.NullOr(Schema.String)).pipe(Schema.fromKey("root_password")),
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
    wssUrl: Schema.propertySignature(Schema.String).pipe(Schema.fromKey("wss_url")),
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
    rootPassword: Schema.optional(Schema.String).pipe(Schema.fromKey("root_password")),
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
      publicNet: Schema.propertySignature(Schema.Struct({
        ipv4: Schema.NullOr(Schema.Struct({
          id: Schema.optional(Schema.Int),
          ip: Schema.String,
          blocked: Schema.Boolean,
          dnsPtr: Schema.propertySignature(Schema.String).pipe(Schema.fromKey("dns_ptr")),
        })),
        ipv6: Schema.NullOr(Schema.Struct({
          id: Schema.optional(Schema.Int),
          ip: Schema.String,
          blocked: Schema.Boolean,
          dnsPtr: Schema.propertySignature(Schema.NullOr(Schema.Array(Schema.Struct({
            ip: Schema.String,
            dnsPtr: Schema.propertySignature(Schema.String).pipe(Schema.fromKey("dns_ptr")),
          })))).pipe(Schema.fromKey("dns_ptr")),
        })),
        floatingIps: Schema.propertySignature(Schema.Array(Schema.Int)).pipe(Schema.fromKey("floating_ips")),
        firewalls: Schema.optional(Schema.Array(Schema.Struct({
          id: Schema.optional(Schema.Int),
          status: Schema.optional(Schema.Literal("applied", "pending")),
        }))),
      })).pipe(Schema.fromKey("public_net")),
      privateNet: Schema.propertySignature(Schema.Array(Schema.Struct({
        network: Schema.optional(Schema.Int),
        ip: Schema.optional(Schema.String),
        aliasIps: Schema.optional(Schema.Array(Schema.String)).pipe(Schema.fromKey("alias_ips")),
        macAddress: Schema.optional(Schema.String).pipe(Schema.fromKey("mac_address")),
      }))).pipe(Schema.fromKey("private_net")),
      serverType: Schema.propertySignature(Schema.Struct({
        id: Schema.Int,
        name: Schema.String,
        description: Schema.String,
        cores: Schema.Number,
        memory: Schema.Number,
        disk: Schema.Number,
        deprecated: Schema.Boolean,
        prices: Schema.Array(Schema.Struct({
          location: Schema.String,
          priceHourly: Schema.propertySignature(Schema.Struct({
            net: Schema.String,
            gross: Schema.String,
          })).pipe(Schema.fromKey("price_hourly")),
          priceMonthly: Schema.propertySignature(Schema.Struct({
            net: Schema.String,
            gross: Schema.String,
          })).pipe(Schema.fromKey("price_monthly")),
          includedTraffic: Schema.propertySignature(Schema.Int).pipe(Schema.fromKey("included_traffic")),
          pricePerTbTraffic: Schema.propertySignature(Schema.Struct({
            net: Schema.String,
            gross: Schema.String,
          })).pipe(Schema.fromKey("price_per_tb_traffic")),
        })),
        storageType: Schema.propertySignature(Schema.Literal("local", "network")).pipe(Schema.fromKey("storage_type")),
        cpuType: Schema.propertySignature(Schema.Literal("shared", "dedicated")).pipe(Schema.fromKey("cpu_type")),
        category: Schema.optional(Schema.String),
        architecture: Schema.Literal("x86", "arm"),
        deprecation: Schema.optional(Schema.NullOr(Schema.Struct({
          unavailableAfter: Schema.propertySignature(Schema.String).pipe(Schema.fromKey("unavailable_after")),
          announced: Schema.String,
        }))),
        locations: Schema.Array(Schema.Struct({
          id: Schema.Int,
          name: Schema.String,
          deprecation: Schema.NullOr(Schema.Struct({
            unavailableAfter: Schema.propertySignature(Schema.String).pipe(Schema.fromKey("unavailable_after")),
            announced: Schema.String,
          })),
          recommended: Schema.Boolean,
          available: Schema.Boolean,
        })),
      })).pipe(Schema.fromKey("server_type")),
      location: Schema.Struct({
        id: Schema.Int,
        name: Schema.String,
        description: Schema.String,
        country: Schema.String,
        city: Schema.String,
        latitude: Schema.Number,
        longitude: Schema.Number,
        networkZone: Schema.propertySignature(Schema.String).pipe(Schema.fromKey("network_zone")),
      }),
      image: Schema.NullOr(Schema.Struct({
        id: Schema.Int,
        type: Schema.Literal("system", "app", "snapshot", "backup"),
        status: Schema.Literal("available", "creating", "unavailable"),
        name: Schema.NullOr(Schema.String),
        description: Schema.String,
        imageSize: Schema.propertySignature(Schema.NullOr(Schema.Number)).pipe(Schema.fromKey("image_size")),
        diskSize: Schema.propertySignature(Schema.Number).pipe(Schema.fromKey("disk_size")),
        created: Schema.String,
        createdFrom: Schema.propertySignature(Schema.NullOr(Schema.Struct({
          id: Schema.Int,
          name: Schema.String,
        }))).pipe(Schema.fromKey("created_from")),
        boundTo: Schema.propertySignature(Schema.NullOr(Schema.Int)).pipe(Schema.fromKey("bound_to")),
        osFlavor: Schema.propertySignature(Schema.Literal("ubuntu", "centos", "debian", "fedora", "rocky", "alma", "opensuse", "unknown")).pipe(Schema.fromKey("os_flavor")),
        osVersion: Schema.propertySignature(Schema.NullOr(Schema.String)).pipe(Schema.fromKey("os_version")),
        rapidDeploy: Schema.optional(Schema.Boolean).pipe(Schema.fromKey("rapid_deploy")),
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
          unavailableAfter: Schema.propertySignature(Schema.String).pipe(Schema.fromKey("unavailable_after")),
          announced: Schema.String,
        })),
        architecture: Schema.NullOr(Schema.Literal("x86", "arm")),
      })),
      rescueEnabled: Schema.propertySignature(Schema.Boolean).pipe(Schema.fromKey("rescue_enabled")),
      locked: Schema.Boolean,
      backupWindow: Schema.propertySignature(Schema.NullOr(Schema.String)).pipe(Schema.fromKey("backup_window")),
      outgoingTraffic: Schema.propertySignature(Schema.NullOr(Schema.Int)).pipe(Schema.fromKey("outgoing_traffic")),
      ingoingTraffic: Schema.propertySignature(Schema.NullOr(Schema.Int)).pipe(Schema.fromKey("ingoing_traffic")),
      includedTraffic: Schema.propertySignature(Schema.NullOr(Schema.Int)).pipe(Schema.fromKey("included_traffic")),
      protection: Schema.Struct({
        delete: Schema.Boolean,
        rebuild: Schema.Boolean,
      }),
      labels: Schema.Record({ key: Schema.String, value: Schema.String }),
      volumes: Schema.optional(Schema.Array(Schema.Int)),
      loadBalancers: Schema.optional(Schema.Array(Schema.Int)).pipe(Schema.fromKey("load_balancers")),
      primaryDiskSize: Schema.propertySignature(Schema.Number).pipe(Schema.fromKey("primary_disk_size")),
      placementGroup: Schema.optional(Schema.NullOr(Schema.Struct({
        id: Schema.Int,
        name: Schema.String,
        labels: Schema.Record({ key: Schema.String, value: Schema.String }),
        type: Schema.Literal("spread"),
        created: Schema.String,
        servers: Schema.Array(Schema.Int),
      }))).pipe(Schema.fromKey("placement_group")),
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
    getAction: (id: number, actionId: number): Effect.Effect<GetServerActionResponse, HetznerErrors> =>
      HttpClientRequest.get(`/servers/${id}/actions/${actionId}`).pipe(
        http.execute,
        Effect.flatMap(HttpClientResponse.schemaBodyJson(GetServerActionResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.servers.getAction"),
      ),

    /** Get Metrics for a Server */
    getMetrics: (id: number, query?: GetServerMetricsQuery): Effect.Effect<GetServerMetricsResponse, HetznerErrors> =>
      HttpClientRequest.get(`/servers/${id}/metrics`).pipe(
        HttpClientRequest.setUrlParams(toUrlParams({ type: query?.type, start: query?.start, end: query?.end, step: query?.step })),
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
        HttpClientRequest.setUrlParams(toUrlParams({ name: query?.name, label_selector: query?.labelSelector, sort: query?.sort, status: query?.status, page: query?.page, per_page: query?.perPage })),
        http.execute,
        Effect.flatMap(HttpClientResponse.schemaBodyJson(ListServersResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.servers.list"),
      ),

    /** List Actions for a Server */
    listActions: (id: number, query?: ListServerActionsQuery): Effect.Effect<ListServerActionsResponse, HetznerErrors> =>
      HttpClientRequest.get(`/servers/${id}/actions`).pipe(
        HttpClientRequest.setUrlParams(toUrlParams({ sort: query?.sort, status: query?.status, page: query?.page, per_page: query?.perPage })),
        http.execute,
        Effect.flatMap(HttpClientResponse.schemaBodyJson(ListServerActionsResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.servers.listActions"),
      ),

    /** List Actions */
    listServersActions: (query?: ListServersActionsQuery): Effect.Effect<ListServersActionsResponse, HetznerErrors> =>
      HttpClientRequest.get("/servers/actions").pipe(
        HttpClientRequest.setUrlParams(toUrlParams({ id: query?.id, sort: query?.sort, status: query?.status, page: query?.page, per_page: query?.perPage })),
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
