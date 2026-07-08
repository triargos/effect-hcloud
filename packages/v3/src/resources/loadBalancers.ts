/**
 * LoadBalancers — generated from the Hetzner Cloud OpenAPI spec. Do not edit by hand.
 */
import { Effect, Schema } from "effect";
import { HttpClientRequest, HttpClientResponse } from "@effect/platform";
import type { HttpClient } from "@effect/platform";
import { handleHetznerError, type HetznerErrors } from "../errors.js";
import { toUrlParams } from "../internal/url-params.js";


export const AddLoadBalancerServiceRequest = Schema.Struct({
    protocol: Schema.Literal("tcp", "http", "https"),
    listenPort: Schema.propertySignature(Schema.Int).pipe(Schema.fromKey("listen_port")),
    destinationPort: Schema.propertySignature(Schema.Int).pipe(Schema.fromKey("destination_port")),
    proxyprotocol: Schema.Boolean,
    healthCheck: Schema.propertySignature(Schema.Struct({
      protocol: Schema.Literal("tcp", "http"),
      port: Schema.Int,
      interval: Schema.Int,
      timeout: Schema.Int,
      retries: Schema.Int,
      http: Schema.optional(Schema.Struct({
        domain: Schema.optional(Schema.NullOr(Schema.String)),
        path: Schema.optional(Schema.String),
        response: Schema.optional(Schema.String),
        statusCodes: Schema.optional(Schema.Array(Schema.String)).pipe(Schema.fromKey("status_codes")),
        tls: Schema.optional(Schema.Boolean),
      })),
    })).pipe(Schema.fromKey("health_check")),
    http: Schema.optional(Schema.Struct({
      cookieName: Schema.optional(Schema.String).pipe(Schema.fromKey("cookie_name")),
      cookieLifetime: Schema.optional(Schema.Int).pipe(Schema.fromKey("cookie_lifetime")),
      timeoutIdle: Schema.optional(Schema.Int).pipe(Schema.fromKey("timeout_idle")),
      certificates: Schema.optional(Schema.Array(Schema.Int)),
      redirectHttp: Schema.optional(Schema.Boolean).pipe(Schema.fromKey("redirect_http")),
      stickySessions: Schema.optional(Schema.Boolean).pipe(Schema.fromKey("sticky_sessions")),
    })),
  });
export type AddLoadBalancerServiceRequest = typeof AddLoadBalancerServiceRequest.Type;
export const AddLoadBalancerServiceResponse = Schema.Struct({
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
export type AddLoadBalancerServiceResponse = typeof AddLoadBalancerServiceResponse.Type;

export const AddLoadBalancerTargetRequest = Schema.Struct({
    type: Schema.Literal("server", "label_selector", "ip"),
    server: Schema.optional(Schema.Struct({
      id: Schema.Int,
      ip: Schema.optional(Schema.String),
    })),
    labelSelector: Schema.optional(Schema.Struct({
      selector: Schema.String,
    })).pipe(Schema.fromKey("label_selector")),
    ip: Schema.optional(Schema.Struct({
      ip: Schema.String,
    })),
    usePrivateIp: Schema.optional(Schema.Boolean).pipe(Schema.fromKey("use_private_ip")),
  });
export type AddLoadBalancerTargetRequest = typeof AddLoadBalancerTargetRequest.Type;
export const AddLoadBalancerTargetResponse = Schema.Struct({
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
export type AddLoadBalancerTargetResponse = typeof AddLoadBalancerTargetResponse.Type;

export const AttachLoadBalancerToNetworkRequest = Schema.Struct({
    network: Schema.Int,
    ip: Schema.optional(Schema.String),
    ipRange: Schema.optional(Schema.String).pipe(Schema.fromKey("ip_range")),
  });
export type AttachLoadBalancerToNetworkRequest = typeof AttachLoadBalancerToNetworkRequest.Type;
export const AttachLoadBalancerToNetworkResponse = Schema.Struct({
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
export type AttachLoadBalancerToNetworkResponse = typeof AttachLoadBalancerToNetworkResponse.Type;

export const ChangeLoadBalancerAlgorithmRequest = Schema.Struct({
    type: Schema.Literal("round_robin", "least_connections"),
  });
export type ChangeLoadBalancerAlgorithmRequest = typeof ChangeLoadBalancerAlgorithmRequest.Type;
export const ChangeLoadBalancerAlgorithmResponse = Schema.Struct({
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
export type ChangeLoadBalancerAlgorithmResponse = typeof ChangeLoadBalancerAlgorithmResponse.Type;

export const ChangeLoadBalancerDnsPtrRequest = Schema.Struct({
    ip: Schema.String,
    dnsPtr: Schema.optional(Schema.NullOr(Schema.String)).pipe(Schema.fromKey("dns_ptr")),
  });
export type ChangeLoadBalancerDnsPtrRequest = typeof ChangeLoadBalancerDnsPtrRequest.Type;
export const ChangeLoadBalancerDnsPtrResponse = Schema.Struct({
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
export type ChangeLoadBalancerDnsPtrResponse = typeof ChangeLoadBalancerDnsPtrResponse.Type;

export const ChangeLoadBalancerProtectionRequest = Schema.Struct({
    delete: Schema.optional(Schema.Boolean),
  });
export type ChangeLoadBalancerProtectionRequest = typeof ChangeLoadBalancerProtectionRequest.Type;
export const ChangeLoadBalancerProtectionResponse = Schema.Struct({
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
export type ChangeLoadBalancerProtectionResponse = typeof ChangeLoadBalancerProtectionResponse.Type;

export const ChangeLoadBalancerTypeRequest = Schema.Struct({
    loadBalancerType: Schema.propertySignature(Schema.String).pipe(Schema.fromKey("load_balancer_type")),
  });
export type ChangeLoadBalancerTypeRequest = typeof ChangeLoadBalancerTypeRequest.Type;
export const ChangeLoadBalancerTypeResponse = Schema.Struct({
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
export type ChangeLoadBalancerTypeResponse = typeof ChangeLoadBalancerTypeResponse.Type;

export const CreateLoadBalancerRequest = Schema.Struct({
    name: Schema.String,
    loadBalancerType: Schema.propertySignature(Schema.String).pipe(Schema.fromKey("load_balancer_type")),
    algorithm: Schema.optional(Schema.Struct({
      type: Schema.Literal("round_robin", "least_connections"),
    })),
    services: Schema.optional(Schema.Array(Schema.Union(Schema.Struct({
      protocol: Schema.Literal("tcp"),
      listenPort: Schema.propertySignature(Schema.Int).pipe(Schema.fromKey("listen_port")),
      destinationPort: Schema.propertySignature(Schema.Int).pipe(Schema.fromKey("destination_port")),
      proxyprotocol: Schema.Boolean,
      healthCheck: Schema.propertySignature(Schema.Struct({
        protocol: Schema.Literal("tcp", "http"),
        port: Schema.Int,
        interval: Schema.Int,
        timeout: Schema.Int,
        retries: Schema.Int,
        http: Schema.optional(Schema.Struct({
          domain: Schema.NullOr(Schema.String),
          path: Schema.String,
          response: Schema.optional(Schema.String),
          statusCodes: Schema.optional(Schema.Array(Schema.String)).pipe(Schema.fromKey("status_codes")),
          tls: Schema.optional(Schema.Boolean),
        })),
      })).pipe(Schema.fromKey("health_check")),
    }), Schema.Struct({
      protocol: Schema.Literal("http"),
      listenPort: Schema.propertySignature(Schema.Int).pipe(Schema.fromKey("listen_port")),
      destinationPort: Schema.propertySignature(Schema.Int).pipe(Schema.fromKey("destination_port")),
      proxyprotocol: Schema.Boolean,
      healthCheck: Schema.propertySignature(Schema.Struct({
        protocol: Schema.Literal("tcp", "http"),
        port: Schema.Int,
        interval: Schema.Int,
        timeout: Schema.Int,
        retries: Schema.Int,
        http: Schema.optional(Schema.Struct({
          domain: Schema.NullOr(Schema.String),
          path: Schema.String,
          response: Schema.optional(Schema.String),
          statusCodes: Schema.optional(Schema.Array(Schema.String)).pipe(Schema.fromKey("status_codes")),
          tls: Schema.optional(Schema.Boolean),
        })),
      })).pipe(Schema.fromKey("health_check")),
      http: Schema.Struct({
        cookieName: Schema.propertySignature(Schema.String).pipe(Schema.fromKey("cookie_name")),
        cookieLifetime: Schema.propertySignature(Schema.Int).pipe(Schema.fromKey("cookie_lifetime")),
        timeoutIdle: Schema.propertySignature(Schema.Int).pipe(Schema.fromKey("timeout_idle")),
        stickySessions: Schema.propertySignature(Schema.Boolean).pipe(Schema.fromKey("sticky_sessions")),
      }),
    }), Schema.Struct({
      protocol: Schema.Literal("https"),
      listenPort: Schema.propertySignature(Schema.Int).pipe(Schema.fromKey("listen_port")),
      destinationPort: Schema.propertySignature(Schema.Int).pipe(Schema.fromKey("destination_port")),
      proxyprotocol: Schema.Boolean,
      healthCheck: Schema.propertySignature(Schema.Struct({
        protocol: Schema.Literal("tcp", "http"),
        port: Schema.Int,
        interval: Schema.Int,
        timeout: Schema.Int,
        retries: Schema.Int,
        http: Schema.optional(Schema.Struct({
          domain: Schema.NullOr(Schema.String),
          path: Schema.String,
          response: Schema.optional(Schema.String),
          statusCodes: Schema.optional(Schema.Array(Schema.String)).pipe(Schema.fromKey("status_codes")),
          tls: Schema.optional(Schema.Boolean),
        })),
      })).pipe(Schema.fromKey("health_check")),
      http: Schema.Struct({
        cookieName: Schema.propertySignature(Schema.String).pipe(Schema.fromKey("cookie_name")),
        cookieLifetime: Schema.propertySignature(Schema.Int).pipe(Schema.fromKey("cookie_lifetime")),
        timeoutIdle: Schema.propertySignature(Schema.Int).pipe(Schema.fromKey("timeout_idle")),
        certificates: Schema.Array(Schema.Int),
        redirectHttp: Schema.propertySignature(Schema.Boolean).pipe(Schema.fromKey("redirect_http")),
        stickySessions: Schema.propertySignature(Schema.Boolean).pipe(Schema.fromKey("sticky_sessions")),
      }),
    })))),
    targets: Schema.optional(Schema.Array(Schema.Struct({
      type: Schema.Literal("server", "label_selector", "ip"),
      server: Schema.optional(Schema.Struct({
        id: Schema.Int,
        ip: Schema.optional(Schema.String),
      })),
      labelSelector: Schema.optional(Schema.Struct({
        selector: Schema.String,
      })).pipe(Schema.fromKey("label_selector")),
      ip: Schema.optional(Schema.Struct({
        ip: Schema.String,
      })),
      usePrivateIp: Schema.optional(Schema.Boolean).pipe(Schema.fromKey("use_private_ip")),
    }))),
    labels: Schema.optional(Schema.Record({ key: Schema.String, value: Schema.String })),
    publicInterface: Schema.optional(Schema.Boolean).pipe(Schema.fromKey("public_interface")),
    network: Schema.optional(Schema.Int),
    networkZone: Schema.optional(Schema.String).pipe(Schema.fromKey("network_zone")),
    location: Schema.optional(Schema.String),
  });
export type CreateLoadBalancerRequest = typeof CreateLoadBalancerRequest.Type;
export const CreateLoadBalancerResponse = Schema.Struct({
    loadBalancer: Schema.propertySignature(Schema.Struct({
      id: Schema.Int,
      name: Schema.String,
      publicNet: Schema.propertySignature(Schema.Struct({
        enabled: Schema.Boolean,
        ipv4: Schema.Struct({
          ip: Schema.NullOr(Schema.String),
          dnsPtr: Schema.propertySignature(Schema.NullOr(Schema.String)).pipe(Schema.fromKey("dns_ptr")),
        }),
        ipv6: Schema.Struct({
          ip: Schema.NullOr(Schema.String),
          dnsPtr: Schema.propertySignature(Schema.NullOr(Schema.String)).pipe(Schema.fromKey("dns_ptr")),
        }),
      })).pipe(Schema.fromKey("public_net")),
      privateNet: Schema.propertySignature(Schema.Array(Schema.Struct({
        network: Schema.Int,
        ip: Schema.String,
      }))).pipe(Schema.fromKey("private_net")),
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
      loadBalancerType: Schema.propertySignature(Schema.Struct({
        id: Schema.Int,
        name: Schema.String,
        description: Schema.String,
        maxConnections: Schema.propertySignature(Schema.Int).pipe(Schema.fromKey("max_connections")),
        maxServices: Schema.propertySignature(Schema.Int).pipe(Schema.fromKey("max_services")),
        maxTargets: Schema.propertySignature(Schema.Int).pipe(Schema.fromKey("max_targets")),
        maxAssignedCertificates: Schema.propertySignature(Schema.Int).pipe(Schema.fromKey("max_assigned_certificates")),
        deprecated: Schema.NullOr(Schema.String),
        deprecation: Schema.NullOr(Schema.Struct({
          unavailableAfter: Schema.propertySignature(Schema.String).pipe(Schema.fromKey("unavailable_after")),
          announced: Schema.String,
        })),
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
      })).pipe(Schema.fromKey("load_balancer_type")),
      protection: Schema.Struct({
        delete: Schema.Boolean,
      }),
      labels: Schema.Record({ key: Schema.String, value: Schema.String }),
      created: Schema.String,
      services: Schema.Array(Schema.Union(Schema.Struct({
        protocol: Schema.Literal("tcp"),
        listenPort: Schema.propertySignature(Schema.Int).pipe(Schema.fromKey("listen_port")),
        destinationPort: Schema.propertySignature(Schema.Int).pipe(Schema.fromKey("destination_port")),
        proxyprotocol: Schema.Boolean,
        healthCheck: Schema.propertySignature(Schema.Struct({
          protocol: Schema.Literal("tcp", "http"),
          port: Schema.Int,
          interval: Schema.Int,
          timeout: Schema.Int,
          retries: Schema.Int,
          http: Schema.optional(Schema.Struct({
            domain: Schema.NullOr(Schema.String),
            path: Schema.String,
            response: Schema.optional(Schema.String),
            statusCodes: Schema.optional(Schema.Array(Schema.String)).pipe(Schema.fromKey("status_codes")),
            tls: Schema.optional(Schema.Boolean),
          })),
        })).pipe(Schema.fromKey("health_check")),
      }), Schema.Struct({
        protocol: Schema.Literal("http"),
        listenPort: Schema.propertySignature(Schema.Int).pipe(Schema.fromKey("listen_port")),
        destinationPort: Schema.propertySignature(Schema.Int).pipe(Schema.fromKey("destination_port")),
        proxyprotocol: Schema.Boolean,
        healthCheck: Schema.propertySignature(Schema.Struct({
          protocol: Schema.Literal("tcp", "http"),
          port: Schema.Int,
          interval: Schema.Int,
          timeout: Schema.Int,
          retries: Schema.Int,
          http: Schema.optional(Schema.Struct({
            domain: Schema.NullOr(Schema.String),
            path: Schema.String,
            response: Schema.optional(Schema.String),
            statusCodes: Schema.optional(Schema.Array(Schema.String)).pipe(Schema.fromKey("status_codes")),
            tls: Schema.optional(Schema.Boolean),
          })),
        })).pipe(Schema.fromKey("health_check")),
        http: Schema.Struct({
          cookieName: Schema.propertySignature(Schema.String).pipe(Schema.fromKey("cookie_name")),
          cookieLifetime: Schema.propertySignature(Schema.Int).pipe(Schema.fromKey("cookie_lifetime")),
          timeoutIdle: Schema.propertySignature(Schema.Int).pipe(Schema.fromKey("timeout_idle")),
          stickySessions: Schema.propertySignature(Schema.Boolean).pipe(Schema.fromKey("sticky_sessions")),
        }),
      }), Schema.Struct({
        protocol: Schema.Literal("https"),
        listenPort: Schema.propertySignature(Schema.Int).pipe(Schema.fromKey("listen_port")),
        destinationPort: Schema.propertySignature(Schema.Int).pipe(Schema.fromKey("destination_port")),
        proxyprotocol: Schema.Boolean,
        healthCheck: Schema.propertySignature(Schema.Struct({
          protocol: Schema.Literal("tcp", "http"),
          port: Schema.Int,
          interval: Schema.Int,
          timeout: Schema.Int,
          retries: Schema.Int,
          http: Schema.optional(Schema.Struct({
            domain: Schema.NullOr(Schema.String),
            path: Schema.String,
            response: Schema.optional(Schema.String),
            statusCodes: Schema.optional(Schema.Array(Schema.String)).pipe(Schema.fromKey("status_codes")),
            tls: Schema.optional(Schema.Boolean),
          })),
        })).pipe(Schema.fromKey("health_check")),
        http: Schema.Struct({
          cookieName: Schema.propertySignature(Schema.String).pipe(Schema.fromKey("cookie_name")),
          cookieLifetime: Schema.propertySignature(Schema.Int).pipe(Schema.fromKey("cookie_lifetime")),
          timeoutIdle: Schema.propertySignature(Schema.Int).pipe(Schema.fromKey("timeout_idle")),
          certificates: Schema.Array(Schema.Int),
          redirectHttp: Schema.propertySignature(Schema.Boolean).pipe(Schema.fromKey("redirect_http")),
          stickySessions: Schema.propertySignature(Schema.Boolean).pipe(Schema.fromKey("sticky_sessions")),
        }),
      }))),
      targets: Schema.Array(Schema.Union(Schema.Struct({
        type: Schema.Literal("server"),
        server: Schema.Struct({
          id: Schema.Int,
          ip: Schema.String,
        }),
        healthStatus: Schema.propertySignature(Schema.Array(Schema.Struct({
          listenPort: Schema.propertySignature(Schema.Int).pipe(Schema.fromKey("listen_port")),
          status: Schema.Literal("healthy", "unhealthy", "unknown"),
        }))).pipe(Schema.fromKey("health_status")),
        usePrivateIp: Schema.propertySignature(Schema.Boolean).pipe(Schema.fromKey("use_private_ip")),
      }), Schema.Struct({
        type: Schema.Literal("label_selector"),
        labelSelector: Schema.propertySignature(Schema.Struct({
          selector: Schema.String,
        })).pipe(Schema.fromKey("label_selector")),
        targets: Schema.Array(Schema.Struct({
          type: Schema.String,
          server: Schema.Struct({
            id: Schema.Int,
            ip: Schema.String,
          }),
          healthStatus: Schema.propertySignature(Schema.Array(Schema.Struct({
            listenPort: Schema.propertySignature(Schema.Int).pipe(Schema.fromKey("listen_port")),
            status: Schema.Literal("healthy", "unhealthy", "unknown"),
          }))).pipe(Schema.fromKey("health_status")),
          usePrivateIp: Schema.propertySignature(Schema.Boolean).pipe(Schema.fromKey("use_private_ip")),
        })),
        usePrivateIp: Schema.propertySignature(Schema.Boolean).pipe(Schema.fromKey("use_private_ip")),
      }), Schema.Struct({
        type: Schema.Literal("ip"),
        ip: Schema.Struct({
          ip: Schema.String,
        }),
        healthStatus: Schema.propertySignature(Schema.Array(Schema.Struct({
          listenPort: Schema.propertySignature(Schema.Int).pipe(Schema.fromKey("listen_port")),
          status: Schema.Literal("healthy", "unhealthy", "unknown"),
        }))).pipe(Schema.fromKey("health_status")),
      }))),
      algorithm: Schema.Struct({
        type: Schema.Literal("round_robin", "least_connections"),
      }),
      outgoingTraffic: Schema.propertySignature(Schema.NullOr(Schema.Int)).pipe(Schema.fromKey("outgoing_traffic")),
      ingoingTraffic: Schema.propertySignature(Schema.NullOr(Schema.Int)).pipe(Schema.fromKey("ingoing_traffic")),
      includedTraffic: Schema.propertySignature(Schema.Int).pipe(Schema.fromKey("included_traffic")),
    })).pipe(Schema.fromKey("load_balancer")),
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
export type CreateLoadBalancerResponse = typeof CreateLoadBalancerResponse.Type;

export const DeleteLoadBalancerServiceRequest = Schema.Struct({
    listenPort: Schema.propertySignature(Schema.Int).pipe(Schema.fromKey("listen_port")),
  });
export type DeleteLoadBalancerServiceRequest = typeof DeleteLoadBalancerServiceRequest.Type;
export const DeleteLoadBalancerServiceResponse = Schema.Struct({
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
export type DeleteLoadBalancerServiceResponse = typeof DeleteLoadBalancerServiceResponse.Type;

export const DetachLoadBalancerFromNetworkRequest = Schema.Struct({
    network: Schema.Int,
  });
export type DetachLoadBalancerFromNetworkRequest = typeof DetachLoadBalancerFromNetworkRequest.Type;
export const DetachLoadBalancerFromNetworkResponse = Schema.Struct({
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
export type DetachLoadBalancerFromNetworkResponse = typeof DetachLoadBalancerFromNetworkResponse.Type;

export const DisableLoadBalancerPublicInterfaceResponse = Schema.Struct({
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
export type DisableLoadBalancerPublicInterfaceResponse = typeof DisableLoadBalancerPublicInterfaceResponse.Type;

export const EnableLoadBalancerPublicInterfaceResponse = Schema.Struct({
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
export type EnableLoadBalancerPublicInterfaceResponse = typeof EnableLoadBalancerPublicInterfaceResponse.Type;

export const GetLoadBalancerResponse = Schema.Struct({
    loadBalancer: Schema.propertySignature(Schema.Struct({
      id: Schema.Int,
      name: Schema.String,
      publicNet: Schema.propertySignature(Schema.Struct({
        enabled: Schema.Boolean,
        ipv4: Schema.Struct({
          ip: Schema.NullOr(Schema.String),
          dnsPtr: Schema.propertySignature(Schema.NullOr(Schema.String)).pipe(Schema.fromKey("dns_ptr")),
        }),
        ipv6: Schema.Struct({
          ip: Schema.NullOr(Schema.String),
          dnsPtr: Schema.propertySignature(Schema.NullOr(Schema.String)).pipe(Schema.fromKey("dns_ptr")),
        }),
      })).pipe(Schema.fromKey("public_net")),
      privateNet: Schema.propertySignature(Schema.Array(Schema.Struct({
        network: Schema.Int,
        ip: Schema.String,
      }))).pipe(Schema.fromKey("private_net")),
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
      loadBalancerType: Schema.propertySignature(Schema.Struct({
        id: Schema.Int,
        name: Schema.String,
        description: Schema.String,
        maxConnections: Schema.propertySignature(Schema.Int).pipe(Schema.fromKey("max_connections")),
        maxServices: Schema.propertySignature(Schema.Int).pipe(Schema.fromKey("max_services")),
        maxTargets: Schema.propertySignature(Schema.Int).pipe(Schema.fromKey("max_targets")),
        maxAssignedCertificates: Schema.propertySignature(Schema.Int).pipe(Schema.fromKey("max_assigned_certificates")),
        deprecated: Schema.NullOr(Schema.String),
        deprecation: Schema.NullOr(Schema.Struct({
          unavailableAfter: Schema.propertySignature(Schema.String).pipe(Schema.fromKey("unavailable_after")),
          announced: Schema.String,
        })),
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
      })).pipe(Schema.fromKey("load_balancer_type")),
      protection: Schema.Struct({
        delete: Schema.Boolean,
      }),
      labels: Schema.Record({ key: Schema.String, value: Schema.String }),
      created: Schema.String,
      services: Schema.Array(Schema.Union(Schema.Struct({
        protocol: Schema.Literal("tcp"),
        listenPort: Schema.propertySignature(Schema.Int).pipe(Schema.fromKey("listen_port")),
        destinationPort: Schema.propertySignature(Schema.Int).pipe(Schema.fromKey("destination_port")),
        proxyprotocol: Schema.Boolean,
        healthCheck: Schema.propertySignature(Schema.Struct({
          protocol: Schema.Literal("tcp", "http"),
          port: Schema.Int,
          interval: Schema.Int,
          timeout: Schema.Int,
          retries: Schema.Int,
          http: Schema.optional(Schema.Struct({
            domain: Schema.NullOr(Schema.String),
            path: Schema.String,
            response: Schema.optional(Schema.String),
            statusCodes: Schema.optional(Schema.Array(Schema.String)).pipe(Schema.fromKey("status_codes")),
            tls: Schema.optional(Schema.Boolean),
          })),
        })).pipe(Schema.fromKey("health_check")),
      }), Schema.Struct({
        protocol: Schema.Literal("http"),
        listenPort: Schema.propertySignature(Schema.Int).pipe(Schema.fromKey("listen_port")),
        destinationPort: Schema.propertySignature(Schema.Int).pipe(Schema.fromKey("destination_port")),
        proxyprotocol: Schema.Boolean,
        healthCheck: Schema.propertySignature(Schema.Struct({
          protocol: Schema.Literal("tcp", "http"),
          port: Schema.Int,
          interval: Schema.Int,
          timeout: Schema.Int,
          retries: Schema.Int,
          http: Schema.optional(Schema.Struct({
            domain: Schema.NullOr(Schema.String),
            path: Schema.String,
            response: Schema.optional(Schema.String),
            statusCodes: Schema.optional(Schema.Array(Schema.String)).pipe(Schema.fromKey("status_codes")),
            tls: Schema.optional(Schema.Boolean),
          })),
        })).pipe(Schema.fromKey("health_check")),
        http: Schema.Struct({
          cookieName: Schema.propertySignature(Schema.String).pipe(Schema.fromKey("cookie_name")),
          cookieLifetime: Schema.propertySignature(Schema.Int).pipe(Schema.fromKey("cookie_lifetime")),
          timeoutIdle: Schema.propertySignature(Schema.Int).pipe(Schema.fromKey("timeout_idle")),
          stickySessions: Schema.propertySignature(Schema.Boolean).pipe(Schema.fromKey("sticky_sessions")),
        }),
      }), Schema.Struct({
        protocol: Schema.Literal("https"),
        listenPort: Schema.propertySignature(Schema.Int).pipe(Schema.fromKey("listen_port")),
        destinationPort: Schema.propertySignature(Schema.Int).pipe(Schema.fromKey("destination_port")),
        proxyprotocol: Schema.Boolean,
        healthCheck: Schema.propertySignature(Schema.Struct({
          protocol: Schema.Literal("tcp", "http"),
          port: Schema.Int,
          interval: Schema.Int,
          timeout: Schema.Int,
          retries: Schema.Int,
          http: Schema.optional(Schema.Struct({
            domain: Schema.NullOr(Schema.String),
            path: Schema.String,
            response: Schema.optional(Schema.String),
            statusCodes: Schema.optional(Schema.Array(Schema.String)).pipe(Schema.fromKey("status_codes")),
            tls: Schema.optional(Schema.Boolean),
          })),
        })).pipe(Schema.fromKey("health_check")),
        http: Schema.Struct({
          cookieName: Schema.propertySignature(Schema.String).pipe(Schema.fromKey("cookie_name")),
          cookieLifetime: Schema.propertySignature(Schema.Int).pipe(Schema.fromKey("cookie_lifetime")),
          timeoutIdle: Schema.propertySignature(Schema.Int).pipe(Schema.fromKey("timeout_idle")),
          certificates: Schema.Array(Schema.Int),
          redirectHttp: Schema.propertySignature(Schema.Boolean).pipe(Schema.fromKey("redirect_http")),
          stickySessions: Schema.propertySignature(Schema.Boolean).pipe(Schema.fromKey("sticky_sessions")),
        }),
      }))),
      targets: Schema.Array(Schema.Union(Schema.Struct({
        type: Schema.Literal("server"),
        server: Schema.Struct({
          id: Schema.Int,
          ip: Schema.String,
        }),
        healthStatus: Schema.propertySignature(Schema.Array(Schema.Struct({
          listenPort: Schema.propertySignature(Schema.Int).pipe(Schema.fromKey("listen_port")),
          status: Schema.Literal("healthy", "unhealthy", "unknown"),
        }))).pipe(Schema.fromKey("health_status")),
        usePrivateIp: Schema.propertySignature(Schema.Boolean).pipe(Schema.fromKey("use_private_ip")),
      }), Schema.Struct({
        type: Schema.Literal("label_selector"),
        labelSelector: Schema.propertySignature(Schema.Struct({
          selector: Schema.String,
        })).pipe(Schema.fromKey("label_selector")),
        targets: Schema.Array(Schema.Struct({
          type: Schema.String,
          server: Schema.Struct({
            id: Schema.Int,
            ip: Schema.String,
          }),
          healthStatus: Schema.propertySignature(Schema.Array(Schema.Struct({
            listenPort: Schema.propertySignature(Schema.Int).pipe(Schema.fromKey("listen_port")),
            status: Schema.Literal("healthy", "unhealthy", "unknown"),
          }))).pipe(Schema.fromKey("health_status")),
          usePrivateIp: Schema.propertySignature(Schema.Boolean).pipe(Schema.fromKey("use_private_ip")),
        })),
        usePrivateIp: Schema.propertySignature(Schema.Boolean).pipe(Schema.fromKey("use_private_ip")),
      }), Schema.Struct({
        type: Schema.Literal("ip"),
        ip: Schema.Struct({
          ip: Schema.String,
        }),
        healthStatus: Schema.propertySignature(Schema.Array(Schema.Struct({
          listenPort: Schema.propertySignature(Schema.Int).pipe(Schema.fromKey("listen_port")),
          status: Schema.Literal("healthy", "unhealthy", "unknown"),
        }))).pipe(Schema.fromKey("health_status")),
      }))),
      algorithm: Schema.Struct({
        type: Schema.Literal("round_robin", "least_connections"),
      }),
      outgoingTraffic: Schema.propertySignature(Schema.NullOr(Schema.Int)).pipe(Schema.fromKey("outgoing_traffic")),
      ingoingTraffic: Schema.propertySignature(Schema.NullOr(Schema.Int)).pipe(Schema.fromKey("ingoing_traffic")),
      includedTraffic: Schema.propertySignature(Schema.Int).pipe(Schema.fromKey("included_traffic")),
    })).pipe(Schema.fromKey("load_balancer")),
  });
export type GetLoadBalancerResponse = typeof GetLoadBalancerResponse.Type;

export const GetLoadBalancerActionResponse = Schema.Struct({
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
export type GetLoadBalancerActionResponse = typeof GetLoadBalancerActionResponse.Type;

export const GetLoadBalancersActionResponse = Schema.Struct({
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
export type GetLoadBalancersActionResponse = typeof GetLoadBalancersActionResponse.Type;

export const GetLoadBalancerMetricsResponse = Schema.Struct({
    metrics: Schema.Struct({
      start: Schema.String,
      end: Schema.String,
      step: Schema.Number,
      timeSeries: Schema.propertySignature(Schema.Record({ key: Schema.String, value: Schema.Struct({
        values: Schema.Array(Schema.Array(Schema.Unknown)),
      }) })).pipe(Schema.fromKey("time_series")),
    }),
  });
export type GetLoadBalancerMetricsResponse = typeof GetLoadBalancerMetricsResponse.Type;
export interface GetLoadBalancerMetricsQuery {
  type: ReadonlyArray<"open_connections" | "connections_per_second" | "requests_per_second" | "bandwidth">;
  start: string;
  end: string;
  step?: string;
}

export const ListLoadBalancersResponse = Schema.Struct({
    loadBalancers: Schema.propertySignature(Schema.Array(Schema.Struct({
      id: Schema.Int,
      name: Schema.String,
      publicNet: Schema.propertySignature(Schema.Struct({
        enabled: Schema.Boolean,
        ipv4: Schema.Struct({
          ip: Schema.NullOr(Schema.String),
          dnsPtr: Schema.propertySignature(Schema.NullOr(Schema.String)).pipe(Schema.fromKey("dns_ptr")),
        }),
        ipv6: Schema.Struct({
          ip: Schema.NullOr(Schema.String),
          dnsPtr: Schema.propertySignature(Schema.NullOr(Schema.String)).pipe(Schema.fromKey("dns_ptr")),
        }),
      })).pipe(Schema.fromKey("public_net")),
      privateNet: Schema.propertySignature(Schema.Array(Schema.Struct({
        network: Schema.Int,
        ip: Schema.String,
      }))).pipe(Schema.fromKey("private_net")),
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
      loadBalancerType: Schema.propertySignature(Schema.Struct({
        id: Schema.Int,
        name: Schema.String,
        description: Schema.String,
        maxConnections: Schema.propertySignature(Schema.Int).pipe(Schema.fromKey("max_connections")),
        maxServices: Schema.propertySignature(Schema.Int).pipe(Schema.fromKey("max_services")),
        maxTargets: Schema.propertySignature(Schema.Int).pipe(Schema.fromKey("max_targets")),
        maxAssignedCertificates: Schema.propertySignature(Schema.Int).pipe(Schema.fromKey("max_assigned_certificates")),
        deprecated: Schema.NullOr(Schema.String),
        deprecation: Schema.NullOr(Schema.Struct({
          unavailableAfter: Schema.propertySignature(Schema.String).pipe(Schema.fromKey("unavailable_after")),
          announced: Schema.String,
        })),
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
      })).pipe(Schema.fromKey("load_balancer_type")),
      protection: Schema.Struct({
        delete: Schema.Boolean,
      }),
      labels: Schema.Record({ key: Schema.String, value: Schema.String }),
      created: Schema.String,
      services: Schema.Array(Schema.Union(Schema.Struct({
        protocol: Schema.Literal("tcp"),
        listenPort: Schema.propertySignature(Schema.Int).pipe(Schema.fromKey("listen_port")),
        destinationPort: Schema.propertySignature(Schema.Int).pipe(Schema.fromKey("destination_port")),
        proxyprotocol: Schema.Boolean,
        healthCheck: Schema.propertySignature(Schema.Struct({
          protocol: Schema.Literal("tcp", "http"),
          port: Schema.Int,
          interval: Schema.Int,
          timeout: Schema.Int,
          retries: Schema.Int,
          http: Schema.optional(Schema.Struct({
            domain: Schema.NullOr(Schema.String),
            path: Schema.String,
            response: Schema.optional(Schema.String),
            statusCodes: Schema.optional(Schema.Array(Schema.String)).pipe(Schema.fromKey("status_codes")),
            tls: Schema.optional(Schema.Boolean),
          })),
        })).pipe(Schema.fromKey("health_check")),
      }), Schema.Struct({
        protocol: Schema.Literal("http"),
        listenPort: Schema.propertySignature(Schema.Int).pipe(Schema.fromKey("listen_port")),
        destinationPort: Schema.propertySignature(Schema.Int).pipe(Schema.fromKey("destination_port")),
        proxyprotocol: Schema.Boolean,
        healthCheck: Schema.propertySignature(Schema.Struct({
          protocol: Schema.Literal("tcp", "http"),
          port: Schema.Int,
          interval: Schema.Int,
          timeout: Schema.Int,
          retries: Schema.Int,
          http: Schema.optional(Schema.Struct({
            domain: Schema.NullOr(Schema.String),
            path: Schema.String,
            response: Schema.optional(Schema.String),
            statusCodes: Schema.optional(Schema.Array(Schema.String)).pipe(Schema.fromKey("status_codes")),
            tls: Schema.optional(Schema.Boolean),
          })),
        })).pipe(Schema.fromKey("health_check")),
        http: Schema.Struct({
          cookieName: Schema.propertySignature(Schema.String).pipe(Schema.fromKey("cookie_name")),
          cookieLifetime: Schema.propertySignature(Schema.Int).pipe(Schema.fromKey("cookie_lifetime")),
          timeoutIdle: Schema.propertySignature(Schema.Int).pipe(Schema.fromKey("timeout_idle")),
          stickySessions: Schema.propertySignature(Schema.Boolean).pipe(Schema.fromKey("sticky_sessions")),
        }),
      }), Schema.Struct({
        protocol: Schema.Literal("https"),
        listenPort: Schema.propertySignature(Schema.Int).pipe(Schema.fromKey("listen_port")),
        destinationPort: Schema.propertySignature(Schema.Int).pipe(Schema.fromKey("destination_port")),
        proxyprotocol: Schema.Boolean,
        healthCheck: Schema.propertySignature(Schema.Struct({
          protocol: Schema.Literal("tcp", "http"),
          port: Schema.Int,
          interval: Schema.Int,
          timeout: Schema.Int,
          retries: Schema.Int,
          http: Schema.optional(Schema.Struct({
            domain: Schema.NullOr(Schema.String),
            path: Schema.String,
            response: Schema.optional(Schema.String),
            statusCodes: Schema.optional(Schema.Array(Schema.String)).pipe(Schema.fromKey("status_codes")),
            tls: Schema.optional(Schema.Boolean),
          })),
        })).pipe(Schema.fromKey("health_check")),
        http: Schema.Struct({
          cookieName: Schema.propertySignature(Schema.String).pipe(Schema.fromKey("cookie_name")),
          cookieLifetime: Schema.propertySignature(Schema.Int).pipe(Schema.fromKey("cookie_lifetime")),
          timeoutIdle: Schema.propertySignature(Schema.Int).pipe(Schema.fromKey("timeout_idle")),
          certificates: Schema.Array(Schema.Int),
          redirectHttp: Schema.propertySignature(Schema.Boolean).pipe(Schema.fromKey("redirect_http")),
          stickySessions: Schema.propertySignature(Schema.Boolean).pipe(Schema.fromKey("sticky_sessions")),
        }),
      }))),
      targets: Schema.Array(Schema.Union(Schema.Struct({
        type: Schema.Literal("server"),
        server: Schema.Struct({
          id: Schema.Int,
          ip: Schema.String,
        }),
        healthStatus: Schema.propertySignature(Schema.Array(Schema.Struct({
          listenPort: Schema.propertySignature(Schema.Int).pipe(Schema.fromKey("listen_port")),
          status: Schema.Literal("healthy", "unhealthy", "unknown"),
        }))).pipe(Schema.fromKey("health_status")),
        usePrivateIp: Schema.propertySignature(Schema.Boolean).pipe(Schema.fromKey("use_private_ip")),
      }), Schema.Struct({
        type: Schema.Literal("label_selector"),
        labelSelector: Schema.propertySignature(Schema.Struct({
          selector: Schema.String,
        })).pipe(Schema.fromKey("label_selector")),
        targets: Schema.Array(Schema.Struct({
          type: Schema.String,
          server: Schema.Struct({
            id: Schema.Int,
            ip: Schema.String,
          }),
          healthStatus: Schema.propertySignature(Schema.Array(Schema.Struct({
            listenPort: Schema.propertySignature(Schema.Int).pipe(Schema.fromKey("listen_port")),
            status: Schema.Literal("healthy", "unhealthy", "unknown"),
          }))).pipe(Schema.fromKey("health_status")),
          usePrivateIp: Schema.propertySignature(Schema.Boolean).pipe(Schema.fromKey("use_private_ip")),
        })),
        usePrivateIp: Schema.propertySignature(Schema.Boolean).pipe(Schema.fromKey("use_private_ip")),
      }), Schema.Struct({
        type: Schema.Literal("ip"),
        ip: Schema.Struct({
          ip: Schema.String,
        }),
        healthStatus: Schema.propertySignature(Schema.Array(Schema.Struct({
          listenPort: Schema.propertySignature(Schema.Int).pipe(Schema.fromKey("listen_port")),
          status: Schema.Literal("healthy", "unhealthy", "unknown"),
        }))).pipe(Schema.fromKey("health_status")),
      }))),
      algorithm: Schema.Struct({
        type: Schema.Literal("round_robin", "least_connections"),
      }),
      outgoingTraffic: Schema.propertySignature(Schema.NullOr(Schema.Int)).pipe(Schema.fromKey("outgoing_traffic")),
      ingoingTraffic: Schema.propertySignature(Schema.NullOr(Schema.Int)).pipe(Schema.fromKey("ingoing_traffic")),
      includedTraffic: Schema.propertySignature(Schema.Int).pipe(Schema.fromKey("included_traffic")),
    }))).pipe(Schema.fromKey("load_balancers")),
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
export type ListLoadBalancersResponse = typeof ListLoadBalancersResponse.Type;
export interface ListLoadBalancersQuery {
  sort?: ReadonlyArray<"id" | "id:asc" | "id:desc" | "name" | "name:asc" | "name:desc" | "created" | "created:asc" | "created:desc">;
  name?: string;
  labelSelector?: string;
  page?: number;
  perPage?: number;
}

export const ListLoadBalancerActionsResponse = Schema.Struct({
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
export type ListLoadBalancerActionsResponse = typeof ListLoadBalancerActionsResponse.Type;
export interface ListLoadBalancerActionsQuery {
  sort?: ReadonlyArray<"id" | "id:asc" | "id:desc" | "command" | "command:asc" | "command:desc" | "status" | "status:asc" | "status:desc" | "started" | "started:asc" | "started:desc" | "finished" | "finished:asc" | "finished:desc">;
  status?: ReadonlyArray<"running" | "success" | "error">;
  page?: number;
  perPage?: number;
}

export const ListLoadBalancersActionsResponse = Schema.Struct({
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
export type ListLoadBalancersActionsResponse = typeof ListLoadBalancersActionsResponse.Type;
export interface ListLoadBalancersActionsQuery {
  id?: ReadonlyArray<number>;
  sort?: ReadonlyArray<"id" | "id:asc" | "id:desc" | "command" | "command:asc" | "command:desc" | "status" | "status:asc" | "status:desc" | "started" | "started:asc" | "started:desc" | "finished" | "finished:asc" | "finished:desc">;
  status?: ReadonlyArray<"running" | "success" | "error">;
  page?: number;
  perPage?: number;
}

export const RemoveLoadBalancerTargetRequest = Schema.Struct({
    type: Schema.Literal("server", "label_selector", "ip"),
    server: Schema.optional(Schema.Struct({
      id: Schema.Int,
      ip: Schema.optional(Schema.String),
    })),
    labelSelector: Schema.optional(Schema.Struct({
      selector: Schema.String,
    })).pipe(Schema.fromKey("label_selector")),
    ip: Schema.optional(Schema.Struct({
      ip: Schema.String,
    })),
  });
export type RemoveLoadBalancerTargetRequest = typeof RemoveLoadBalancerTargetRequest.Type;
export const RemoveLoadBalancerTargetResponse = Schema.Struct({
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
export type RemoveLoadBalancerTargetResponse = typeof RemoveLoadBalancerTargetResponse.Type;

export const UpdateLoadBalancerRequest = Schema.Struct({
    name: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record({ key: Schema.String, value: Schema.String })),
  });
export type UpdateLoadBalancerRequest = typeof UpdateLoadBalancerRequest.Type;
export const UpdateLoadBalancerResponse = Schema.Struct({
    loadBalancer: Schema.propertySignature(Schema.Struct({
      id: Schema.Int,
      name: Schema.String,
      publicNet: Schema.propertySignature(Schema.Struct({
        enabled: Schema.Boolean,
        ipv4: Schema.Struct({
          ip: Schema.NullOr(Schema.String),
          dnsPtr: Schema.propertySignature(Schema.NullOr(Schema.String)).pipe(Schema.fromKey("dns_ptr")),
        }),
        ipv6: Schema.Struct({
          ip: Schema.NullOr(Schema.String),
          dnsPtr: Schema.propertySignature(Schema.NullOr(Schema.String)).pipe(Schema.fromKey("dns_ptr")),
        }),
      })).pipe(Schema.fromKey("public_net")),
      privateNet: Schema.propertySignature(Schema.Array(Schema.Struct({
        network: Schema.Int,
        ip: Schema.String,
      }))).pipe(Schema.fromKey("private_net")),
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
      loadBalancerType: Schema.propertySignature(Schema.Struct({
        id: Schema.Int,
        name: Schema.String,
        description: Schema.String,
        maxConnections: Schema.propertySignature(Schema.Int).pipe(Schema.fromKey("max_connections")),
        maxServices: Schema.propertySignature(Schema.Int).pipe(Schema.fromKey("max_services")),
        maxTargets: Schema.propertySignature(Schema.Int).pipe(Schema.fromKey("max_targets")),
        maxAssignedCertificates: Schema.propertySignature(Schema.Int).pipe(Schema.fromKey("max_assigned_certificates")),
        deprecated: Schema.NullOr(Schema.String),
        deprecation: Schema.NullOr(Schema.Struct({
          unavailableAfter: Schema.propertySignature(Schema.String).pipe(Schema.fromKey("unavailable_after")),
          announced: Schema.String,
        })),
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
      })).pipe(Schema.fromKey("load_balancer_type")),
      protection: Schema.Struct({
        delete: Schema.Boolean,
      }),
      labels: Schema.Record({ key: Schema.String, value: Schema.String }),
      created: Schema.String,
      services: Schema.Array(Schema.Union(Schema.Struct({
        protocol: Schema.Literal("tcp"),
        listenPort: Schema.propertySignature(Schema.Int).pipe(Schema.fromKey("listen_port")),
        destinationPort: Schema.propertySignature(Schema.Int).pipe(Schema.fromKey("destination_port")),
        proxyprotocol: Schema.Boolean,
        healthCheck: Schema.propertySignature(Schema.Struct({
          protocol: Schema.Literal("tcp", "http"),
          port: Schema.Int,
          interval: Schema.Int,
          timeout: Schema.Int,
          retries: Schema.Int,
          http: Schema.optional(Schema.Struct({
            domain: Schema.NullOr(Schema.String),
            path: Schema.String,
            response: Schema.optional(Schema.String),
            statusCodes: Schema.optional(Schema.Array(Schema.String)).pipe(Schema.fromKey("status_codes")),
            tls: Schema.optional(Schema.Boolean),
          })),
        })).pipe(Schema.fromKey("health_check")),
      }), Schema.Struct({
        protocol: Schema.Literal("http"),
        listenPort: Schema.propertySignature(Schema.Int).pipe(Schema.fromKey("listen_port")),
        destinationPort: Schema.propertySignature(Schema.Int).pipe(Schema.fromKey("destination_port")),
        proxyprotocol: Schema.Boolean,
        healthCheck: Schema.propertySignature(Schema.Struct({
          protocol: Schema.Literal("tcp", "http"),
          port: Schema.Int,
          interval: Schema.Int,
          timeout: Schema.Int,
          retries: Schema.Int,
          http: Schema.optional(Schema.Struct({
            domain: Schema.NullOr(Schema.String),
            path: Schema.String,
            response: Schema.optional(Schema.String),
            statusCodes: Schema.optional(Schema.Array(Schema.String)).pipe(Schema.fromKey("status_codes")),
            tls: Schema.optional(Schema.Boolean),
          })),
        })).pipe(Schema.fromKey("health_check")),
        http: Schema.Struct({
          cookieName: Schema.propertySignature(Schema.String).pipe(Schema.fromKey("cookie_name")),
          cookieLifetime: Schema.propertySignature(Schema.Int).pipe(Schema.fromKey("cookie_lifetime")),
          timeoutIdle: Schema.propertySignature(Schema.Int).pipe(Schema.fromKey("timeout_idle")),
          stickySessions: Schema.propertySignature(Schema.Boolean).pipe(Schema.fromKey("sticky_sessions")),
        }),
      }), Schema.Struct({
        protocol: Schema.Literal("https"),
        listenPort: Schema.propertySignature(Schema.Int).pipe(Schema.fromKey("listen_port")),
        destinationPort: Schema.propertySignature(Schema.Int).pipe(Schema.fromKey("destination_port")),
        proxyprotocol: Schema.Boolean,
        healthCheck: Schema.propertySignature(Schema.Struct({
          protocol: Schema.Literal("tcp", "http"),
          port: Schema.Int,
          interval: Schema.Int,
          timeout: Schema.Int,
          retries: Schema.Int,
          http: Schema.optional(Schema.Struct({
            domain: Schema.NullOr(Schema.String),
            path: Schema.String,
            response: Schema.optional(Schema.String),
            statusCodes: Schema.optional(Schema.Array(Schema.String)).pipe(Schema.fromKey("status_codes")),
            tls: Schema.optional(Schema.Boolean),
          })),
        })).pipe(Schema.fromKey("health_check")),
        http: Schema.Struct({
          cookieName: Schema.propertySignature(Schema.String).pipe(Schema.fromKey("cookie_name")),
          cookieLifetime: Schema.propertySignature(Schema.Int).pipe(Schema.fromKey("cookie_lifetime")),
          timeoutIdle: Schema.propertySignature(Schema.Int).pipe(Schema.fromKey("timeout_idle")),
          certificates: Schema.Array(Schema.Int),
          redirectHttp: Schema.propertySignature(Schema.Boolean).pipe(Schema.fromKey("redirect_http")),
          stickySessions: Schema.propertySignature(Schema.Boolean).pipe(Schema.fromKey("sticky_sessions")),
        }),
      }))),
      targets: Schema.Array(Schema.Union(Schema.Struct({
        type: Schema.Literal("server"),
        server: Schema.Struct({
          id: Schema.Int,
          ip: Schema.String,
        }),
        healthStatus: Schema.propertySignature(Schema.Array(Schema.Struct({
          listenPort: Schema.propertySignature(Schema.Int).pipe(Schema.fromKey("listen_port")),
          status: Schema.Literal("healthy", "unhealthy", "unknown"),
        }))).pipe(Schema.fromKey("health_status")),
        usePrivateIp: Schema.propertySignature(Schema.Boolean).pipe(Schema.fromKey("use_private_ip")),
      }), Schema.Struct({
        type: Schema.Literal("label_selector"),
        labelSelector: Schema.propertySignature(Schema.Struct({
          selector: Schema.String,
        })).pipe(Schema.fromKey("label_selector")),
        targets: Schema.Array(Schema.Struct({
          type: Schema.String,
          server: Schema.Struct({
            id: Schema.Int,
            ip: Schema.String,
          }),
          healthStatus: Schema.propertySignature(Schema.Array(Schema.Struct({
            listenPort: Schema.propertySignature(Schema.Int).pipe(Schema.fromKey("listen_port")),
            status: Schema.Literal("healthy", "unhealthy", "unknown"),
          }))).pipe(Schema.fromKey("health_status")),
          usePrivateIp: Schema.propertySignature(Schema.Boolean).pipe(Schema.fromKey("use_private_ip")),
        })),
        usePrivateIp: Schema.propertySignature(Schema.Boolean).pipe(Schema.fromKey("use_private_ip")),
      }), Schema.Struct({
        type: Schema.Literal("ip"),
        ip: Schema.Struct({
          ip: Schema.String,
        }),
        healthStatus: Schema.propertySignature(Schema.Array(Schema.Struct({
          listenPort: Schema.propertySignature(Schema.Int).pipe(Schema.fromKey("listen_port")),
          status: Schema.Literal("healthy", "unhealthy", "unknown"),
        }))).pipe(Schema.fromKey("health_status")),
      }))),
      algorithm: Schema.Struct({
        type: Schema.Literal("round_robin", "least_connections"),
      }),
      outgoingTraffic: Schema.propertySignature(Schema.NullOr(Schema.Int)).pipe(Schema.fromKey("outgoing_traffic")),
      ingoingTraffic: Schema.propertySignature(Schema.NullOr(Schema.Int)).pipe(Schema.fromKey("ingoing_traffic")),
      includedTraffic: Schema.propertySignature(Schema.Int).pipe(Schema.fromKey("included_traffic")),
    })).pipe(Schema.fromKey("load_balancer")),
  });
export type UpdateLoadBalancerResponse = typeof UpdateLoadBalancerResponse.Type;

export const UpdateLoadBalancerServiceRequest = Schema.Struct({
    protocol: Schema.optional(Schema.Literal("tcp", "http", "https")),
    listenPort: Schema.propertySignature(Schema.Int).pipe(Schema.fromKey("listen_port")),
    destinationPort: Schema.optional(Schema.Int).pipe(Schema.fromKey("destination_port")),
    proxyprotocol: Schema.optional(Schema.Boolean),
    healthCheck: Schema.optional(Schema.Struct({
      protocol: Schema.optional(Schema.Literal("tcp", "http")),
      port: Schema.optional(Schema.Int),
      interval: Schema.optional(Schema.Int),
      timeout: Schema.optional(Schema.Int),
      retries: Schema.optional(Schema.Int),
      http: Schema.optional(Schema.Struct({
        domain: Schema.optional(Schema.NullOr(Schema.String)),
        path: Schema.optional(Schema.String),
        response: Schema.optional(Schema.String),
        statusCodes: Schema.optional(Schema.Array(Schema.String)).pipe(Schema.fromKey("status_codes")),
        tls: Schema.optional(Schema.Boolean),
      })),
    })).pipe(Schema.fromKey("health_check")),
    http: Schema.optional(Schema.Struct({
      cookieName: Schema.optional(Schema.String).pipe(Schema.fromKey("cookie_name")),
      cookieLifetime: Schema.optional(Schema.Int).pipe(Schema.fromKey("cookie_lifetime")),
      timeoutIdle: Schema.optional(Schema.Int).pipe(Schema.fromKey("timeout_idle")),
      certificates: Schema.optional(Schema.Array(Schema.Int)),
      redirectHttp: Schema.optional(Schema.Boolean).pipe(Schema.fromKey("redirect_http")),
      stickySessions: Schema.optional(Schema.Boolean).pipe(Schema.fromKey("sticky_sessions")),
    })),
  });
export type UpdateLoadBalancerServiceRequest = typeof UpdateLoadBalancerServiceRequest.Type;
export const UpdateLoadBalancerServiceResponse = Schema.Struct({
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
export type UpdateLoadBalancerServiceResponse = typeof UpdateLoadBalancerServiceResponse.Type;


export const makeLoadBalancers = (http: HttpClient.HttpClient) => ({
    /** Add Service */
    addService: (id: number, body: AddLoadBalancerServiceRequest): Effect.Effect<AddLoadBalancerServiceResponse, HetznerErrors> =>
      HttpClientRequest.post(`/load_balancers/${id}/actions/add_service`).pipe(
        HttpClientRequest.schemaBodyJson(AddLoadBalancerServiceRequest)(body),
        Effect.flatMap(http.execute),
        Effect.flatMap(HttpClientResponse.schemaBodyJson(AddLoadBalancerServiceResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.loadBalancers.addService"),
      ),

    /** Add Target */
    addTarget: (id: number, body: AddLoadBalancerTargetRequest): Effect.Effect<AddLoadBalancerTargetResponse, HetznerErrors> =>
      HttpClientRequest.post(`/load_balancers/${id}/actions/add_target`).pipe(
        HttpClientRequest.schemaBodyJson(AddLoadBalancerTargetRequest)(body),
        Effect.flatMap(http.execute),
        Effect.flatMap(HttpClientResponse.schemaBodyJson(AddLoadBalancerTargetResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.loadBalancers.addTarget"),
      ),

    /** Attach a Load Balancer to a Network */
    attachToNetwork: (id: number, body: AttachLoadBalancerToNetworkRequest): Effect.Effect<AttachLoadBalancerToNetworkResponse, HetznerErrors> =>
      HttpClientRequest.post(`/load_balancers/${id}/actions/attach_to_network`).pipe(
        HttpClientRequest.schemaBodyJson(AttachLoadBalancerToNetworkRequest)(body),
        Effect.flatMap(http.execute),
        Effect.flatMap(HttpClientResponse.schemaBodyJson(AttachLoadBalancerToNetworkResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.loadBalancers.attachToNetwork"),
      ),

    /** Change Algorithm */
    changeAlgorithm: (id: number, body: ChangeLoadBalancerAlgorithmRequest): Effect.Effect<ChangeLoadBalancerAlgorithmResponse, HetznerErrors> =>
      HttpClientRequest.post(`/load_balancers/${id}/actions/change_algorithm`).pipe(
        HttpClientRequest.schemaBodyJson(ChangeLoadBalancerAlgorithmRequest)(body),
        Effect.flatMap(http.execute),
        Effect.flatMap(HttpClientResponse.schemaBodyJson(ChangeLoadBalancerAlgorithmResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.loadBalancers.changeAlgorithm"),
      ),

    /** Change reverse DNS entry for this Load Balancer */
    changeDnsPtr: (id: number, body: ChangeLoadBalancerDnsPtrRequest): Effect.Effect<ChangeLoadBalancerDnsPtrResponse, HetznerErrors> =>
      HttpClientRequest.post(`/load_balancers/${id}/actions/change_dns_ptr`).pipe(
        HttpClientRequest.schemaBodyJson(ChangeLoadBalancerDnsPtrRequest)(body),
        Effect.flatMap(http.execute),
        Effect.flatMap(HttpClientResponse.schemaBodyJson(ChangeLoadBalancerDnsPtrResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.loadBalancers.changeDnsPtr"),
      ),

    /** Change Load Balancer Protection */
    changeProtection: (id: number, body: ChangeLoadBalancerProtectionRequest): Effect.Effect<ChangeLoadBalancerProtectionResponse, HetznerErrors> =>
      HttpClientRequest.post(`/load_balancers/${id}/actions/change_protection`).pipe(
        HttpClientRequest.schemaBodyJson(ChangeLoadBalancerProtectionRequest)(body),
        Effect.flatMap(http.execute),
        Effect.flatMap(HttpClientResponse.schemaBodyJson(ChangeLoadBalancerProtectionResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.loadBalancers.changeProtection"),
      ),

    /** Change the Type of a Load Balancer */
    changeType: (id: number, body: ChangeLoadBalancerTypeRequest): Effect.Effect<ChangeLoadBalancerTypeResponse, HetznerErrors> =>
      HttpClientRequest.post(`/load_balancers/${id}/actions/change_type`).pipe(
        HttpClientRequest.schemaBodyJson(ChangeLoadBalancerTypeRequest)(body),
        Effect.flatMap(http.execute),
        Effect.flatMap(HttpClientResponse.schemaBodyJson(ChangeLoadBalancerTypeResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.loadBalancers.changeType"),
      ),

    /** Create a Load Balancer */
    create: (body: CreateLoadBalancerRequest): Effect.Effect<CreateLoadBalancerResponse, HetznerErrors> =>
      HttpClientRequest.post("/load_balancers").pipe(
        HttpClientRequest.schemaBodyJson(CreateLoadBalancerRequest)(body),
        Effect.flatMap(http.execute),
        Effect.flatMap(HttpClientResponse.schemaBodyJson(CreateLoadBalancerResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.loadBalancers.create"),
      ),

    /** Delete a Load Balancer */
    delete: (id: number): Effect.Effect<void, HetznerErrors> =>
      http.del(`/load_balancers/${id}`).pipe(
        Effect.asVoid,
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.loadBalancers.delete"),
      ),

    /** Delete Service */
    deleteService: (id: number, body: DeleteLoadBalancerServiceRequest): Effect.Effect<DeleteLoadBalancerServiceResponse, HetznerErrors> =>
      HttpClientRequest.post(`/load_balancers/${id}/actions/delete_service`).pipe(
        HttpClientRequest.schemaBodyJson(DeleteLoadBalancerServiceRequest)(body),
        Effect.flatMap(http.execute),
        Effect.flatMap(HttpClientResponse.schemaBodyJson(DeleteLoadBalancerServiceResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.loadBalancers.deleteService"),
      ),

    /** Detach a Load Balancer from a Network */
    detachFromNetwork: (id: number, body: DetachLoadBalancerFromNetworkRequest): Effect.Effect<DetachLoadBalancerFromNetworkResponse, HetznerErrors> =>
      HttpClientRequest.post(`/load_balancers/${id}/actions/detach_from_network`).pipe(
        HttpClientRequest.schemaBodyJson(DetachLoadBalancerFromNetworkRequest)(body),
        Effect.flatMap(http.execute),
        Effect.flatMap(HttpClientResponse.schemaBodyJson(DetachLoadBalancerFromNetworkResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.loadBalancers.detachFromNetwork"),
      ),

    /** Disable the public interface of a Load Balancer */
    disablePublicInterface: (id: number): Effect.Effect<DisableLoadBalancerPublicInterfaceResponse, HetznerErrors> =>
      HttpClientRequest.post(`/load_balancers/${id}/actions/disable_public_interface`).pipe(
        http.execute,
        Effect.flatMap(HttpClientResponse.schemaBodyJson(DisableLoadBalancerPublicInterfaceResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.loadBalancers.disablePublicInterface"),
      ),

    /** Enable the public interface of a Load Balancer */
    enablePublicInterface: (id: number): Effect.Effect<EnableLoadBalancerPublicInterfaceResponse, HetznerErrors> =>
      HttpClientRequest.post(`/load_balancers/${id}/actions/enable_public_interface`).pipe(
        http.execute,
        Effect.flatMap(HttpClientResponse.schemaBodyJson(EnableLoadBalancerPublicInterfaceResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.loadBalancers.enablePublicInterface"),
      ),

    /** Get a Load Balancer */
    get: (id: number): Effect.Effect<GetLoadBalancerResponse, HetznerErrors> =>
      HttpClientRequest.get(`/load_balancers/${id}`).pipe(
        http.execute,
        Effect.flatMap(HttpClientResponse.schemaBodyJson(GetLoadBalancerResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.loadBalancers.get"),
      ),

    /** Get an Action for a Load Balancer */
    getAction: (id: number, actionId: number): Effect.Effect<GetLoadBalancerActionResponse, HetznerErrors> =>
      HttpClientRequest.get(`/load_balancers/${id}/actions/${actionId}`).pipe(
        http.execute,
        Effect.flatMap(HttpClientResponse.schemaBodyJson(GetLoadBalancerActionResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.loadBalancers.getAction"),
      ),

    /** Get an Action */
    getLoadBalancersAction: (id: number): Effect.Effect<GetLoadBalancersActionResponse, HetznerErrors> =>
      HttpClientRequest.get(`/load_balancers/actions/${id}`).pipe(
        http.execute,
        Effect.flatMap(HttpClientResponse.schemaBodyJson(GetLoadBalancersActionResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.loadBalancers.getLoadBalancersAction"),
      ),

    /** Get Metrics for a LoadBalancer */
    getMetrics: (id: number, query?: GetLoadBalancerMetricsQuery): Effect.Effect<GetLoadBalancerMetricsResponse, HetznerErrors> =>
      HttpClientRequest.get(`/load_balancers/${id}/metrics`).pipe(
        HttpClientRequest.setUrlParams(toUrlParams({ type: query?.type, start: query?.start, end: query?.end, step: query?.step })),
        http.execute,
        Effect.flatMap(HttpClientResponse.schemaBodyJson(GetLoadBalancerMetricsResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.loadBalancers.getMetrics"),
      ),

    /** List Load Balancers */
    list: (query?: ListLoadBalancersQuery): Effect.Effect<ListLoadBalancersResponse, HetznerErrors> =>
      HttpClientRequest.get("/load_balancers").pipe(
        HttpClientRequest.setUrlParams(toUrlParams({ sort: query?.sort, name: query?.name, label_selector: query?.labelSelector, page: query?.page, per_page: query?.perPage })),
        http.execute,
        Effect.flatMap(HttpClientResponse.schemaBodyJson(ListLoadBalancersResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.loadBalancers.list"),
      ),

    /** List Actions for a Load Balancer */
    listActions: (id: number, query?: ListLoadBalancerActionsQuery): Effect.Effect<ListLoadBalancerActionsResponse, HetznerErrors> =>
      HttpClientRequest.get(`/load_balancers/${id}/actions`).pipe(
        HttpClientRequest.setUrlParams(toUrlParams({ sort: query?.sort, status: query?.status, page: query?.page, per_page: query?.perPage })),
        http.execute,
        Effect.flatMap(HttpClientResponse.schemaBodyJson(ListLoadBalancerActionsResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.loadBalancers.listActions"),
      ),

    /** List Actions */
    listLoadBalancersActions: (query?: ListLoadBalancersActionsQuery): Effect.Effect<ListLoadBalancersActionsResponse, HetznerErrors> =>
      HttpClientRequest.get("/load_balancers/actions").pipe(
        HttpClientRequest.setUrlParams(toUrlParams({ id: query?.id, sort: query?.sort, status: query?.status, page: query?.page, per_page: query?.perPage })),
        http.execute,
        Effect.flatMap(HttpClientResponse.schemaBodyJson(ListLoadBalancersActionsResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.loadBalancers.listLoadBalancersActions"),
      ),

    /** Remove Target */
    removeTarget: (id: number, body: RemoveLoadBalancerTargetRequest): Effect.Effect<RemoveLoadBalancerTargetResponse, HetznerErrors> =>
      HttpClientRequest.post(`/load_balancers/${id}/actions/remove_target`).pipe(
        HttpClientRequest.schemaBodyJson(RemoveLoadBalancerTargetRequest)(body),
        Effect.flatMap(http.execute),
        Effect.flatMap(HttpClientResponse.schemaBodyJson(RemoveLoadBalancerTargetResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.loadBalancers.removeTarget"),
      ),

    /** Update a Load Balancer */
    update: (id: number, body: UpdateLoadBalancerRequest): Effect.Effect<UpdateLoadBalancerResponse, HetznerErrors> =>
      HttpClientRequest.put(`/load_balancers/${id}`).pipe(
        HttpClientRequest.schemaBodyJson(UpdateLoadBalancerRequest)(body),
        Effect.flatMap(http.execute),
        Effect.flatMap(HttpClientResponse.schemaBodyJson(UpdateLoadBalancerResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.loadBalancers.update"),
      ),

    /** Update Service */
    updateService: (id: number, body: UpdateLoadBalancerServiceRequest): Effect.Effect<UpdateLoadBalancerServiceResponse, HetznerErrors> =>
      HttpClientRequest.post(`/load_balancers/${id}/actions/update_service`).pipe(
        HttpClientRequest.schemaBodyJson(UpdateLoadBalancerServiceRequest)(body),
        Effect.flatMap(http.execute),
        Effect.flatMap(HttpClientResponse.schemaBodyJson(UpdateLoadBalancerServiceResponse)),
        Effect.catchAll(handleHetznerError),
        Effect.withSpan("HetznerClient.loadBalancers.updateService"),
      ),
});

export type LoadBalancersApi = ReturnType<typeof makeLoadBalancers>;
