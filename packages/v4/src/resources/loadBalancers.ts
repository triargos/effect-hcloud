/**
 * LoadBalancers — generated from the Hetzner Cloud OpenAPI spec. Do not edit by hand.
 */
import { Effect, Schema } from "effect";
import { HttpClient, HttpClientRequest } from "effect/unstable/http";
import { handleHetznerError, type HetznerErrors } from "../errors.js";
import { decodeJson } from "../internal/http.js";
import { toUrlParams } from "../internal/url-params.js";


export const AddLoadBalancerServiceRequest = Schema.Struct({
    protocol: Schema.Literals(["tcp", "http", "https"]),
    listenPort: Schema.Int,
    destinationPort: Schema.Int,
    proxyprotocol: Schema.Boolean,
    healthCheck: Schema.Struct({
      protocol: Schema.Literals(["tcp", "http"]),
      port: Schema.Int,
      interval: Schema.Int,
      timeout: Schema.Int,
      retries: Schema.Int,
      http: Schema.optional(Schema.Struct({
        domain: Schema.optional(Schema.NullOr(Schema.String)),
        path: Schema.optional(Schema.String),
        response: Schema.optional(Schema.String),
        statusCodes: Schema.optional(Schema.Array(Schema.String)),
        tls: Schema.optional(Schema.Boolean),
      }).pipe(Schema.encodeKeys({ statusCodes: "status_codes" }))),
    }),
    http: Schema.optional(Schema.Struct({
      cookieName: Schema.optional(Schema.String),
      cookieLifetime: Schema.optional(Schema.Int),
      timeoutIdle: Schema.optional(Schema.Int),
      certificates: Schema.optional(Schema.Array(Schema.Int)),
      redirectHttp: Schema.optional(Schema.Boolean),
      stickySessions: Schema.optional(Schema.Boolean),
    }).pipe(Schema.encodeKeys({ cookieName: "cookie_name", cookieLifetime: "cookie_lifetime", timeoutIdle: "timeout_idle", redirectHttp: "redirect_http", stickySessions: "sticky_sessions" }))),
  }).pipe(Schema.encodeKeys({ listenPort: "listen_port", destinationPort: "destination_port", healthCheck: "health_check" }));
export type AddLoadBalancerServiceRequest = typeof AddLoadBalancerServiceRequest.Type;
export const AddLoadBalancerServiceResponse = Schema.Struct({
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
export type AddLoadBalancerServiceResponse = typeof AddLoadBalancerServiceResponse.Type;

export const AddLoadBalancerTargetRequest = Schema.Struct({
    type: Schema.Literals(["server", "label_selector", "ip"]),
    server: Schema.optional(Schema.Struct({
      id: Schema.Int,
      ip: Schema.optional(Schema.String),
    })),
    labelSelector: Schema.optional(Schema.Struct({
      selector: Schema.String,
    })),
    ip: Schema.optional(Schema.Struct({
      ip: Schema.String,
    })),
    usePrivateIp: Schema.optional(Schema.Boolean),
  }).pipe(Schema.encodeKeys({ labelSelector: "label_selector", usePrivateIp: "use_private_ip" }));
export type AddLoadBalancerTargetRequest = typeof AddLoadBalancerTargetRequest.Type;
export const AddLoadBalancerTargetResponse = Schema.Struct({
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
export type AddLoadBalancerTargetResponse = typeof AddLoadBalancerTargetResponse.Type;

export const AttachLoadBalancerToNetworkRequest = Schema.Struct({
    network: Schema.Int,
    ip: Schema.optional(Schema.String),
    ipRange: Schema.optional(Schema.String),
  }).pipe(Schema.encodeKeys({ ipRange: "ip_range" }));
export type AttachLoadBalancerToNetworkRequest = typeof AttachLoadBalancerToNetworkRequest.Type;
export const AttachLoadBalancerToNetworkResponse = Schema.Struct({
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
export type AttachLoadBalancerToNetworkResponse = typeof AttachLoadBalancerToNetworkResponse.Type;

export const ChangeLoadBalancerAlgorithmRequest = Schema.Struct({
    type: Schema.Literals(["round_robin", "least_connections"]),
  });
export type ChangeLoadBalancerAlgorithmRequest = typeof ChangeLoadBalancerAlgorithmRequest.Type;
export const ChangeLoadBalancerAlgorithmResponse = Schema.Struct({
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
export type ChangeLoadBalancerAlgorithmResponse = typeof ChangeLoadBalancerAlgorithmResponse.Type;

export const ChangeLoadBalancerDnsPtrRequest = Schema.Struct({
    ip: Schema.String,
    dnsPtr: Schema.optional(Schema.NullOr(Schema.String)),
  }).pipe(Schema.encodeKeys({ dnsPtr: "dns_ptr" }));
export type ChangeLoadBalancerDnsPtrRequest = typeof ChangeLoadBalancerDnsPtrRequest.Type;
export const ChangeLoadBalancerDnsPtrResponse = Schema.Struct({
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
export type ChangeLoadBalancerDnsPtrResponse = typeof ChangeLoadBalancerDnsPtrResponse.Type;

export const ChangeLoadBalancerProtectionRequest = Schema.Struct({
    delete: Schema.optional(Schema.Boolean),
  });
export type ChangeLoadBalancerProtectionRequest = typeof ChangeLoadBalancerProtectionRequest.Type;
export const ChangeLoadBalancerProtectionResponse = Schema.Struct({
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
export type ChangeLoadBalancerProtectionResponse = typeof ChangeLoadBalancerProtectionResponse.Type;

export const ChangeLoadBalancerTypeRequest = Schema.Struct({
    loadBalancerType: Schema.String,
  }).pipe(Schema.encodeKeys({ loadBalancerType: "load_balancer_type" }));
export type ChangeLoadBalancerTypeRequest = typeof ChangeLoadBalancerTypeRequest.Type;
export const ChangeLoadBalancerTypeResponse = Schema.Struct({
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
export type ChangeLoadBalancerTypeResponse = typeof ChangeLoadBalancerTypeResponse.Type;

export const CreateLoadBalancerRequest = Schema.Struct({
    name: Schema.String,
    loadBalancerType: Schema.String,
    algorithm: Schema.optional(Schema.Struct({
      type: Schema.Literals(["round_robin", "least_connections"]),
    })),
    services: Schema.optional(Schema.Array(Schema.Union([Schema.Struct({
      protocol: Schema.Literal("tcp"),
      listenPort: Schema.Int,
      destinationPort: Schema.Int,
      proxyprotocol: Schema.Boolean,
      healthCheck: Schema.Struct({
        protocol: Schema.Literals(["tcp", "http"]),
        port: Schema.Int,
        interval: Schema.Int,
        timeout: Schema.Int,
        retries: Schema.Int,
        http: Schema.optional(Schema.Struct({
          domain: Schema.NullOr(Schema.String),
          path: Schema.String,
          response: Schema.optional(Schema.String),
          statusCodes: Schema.optional(Schema.Array(Schema.String)),
          tls: Schema.optional(Schema.Boolean),
        }).pipe(Schema.encodeKeys({ statusCodes: "status_codes" }))),
      }),
    }).pipe(Schema.encodeKeys({ listenPort: "listen_port", destinationPort: "destination_port", healthCheck: "health_check" })), Schema.Struct({
      protocol: Schema.Literal("http"),
      listenPort: Schema.Int,
      destinationPort: Schema.Int,
      proxyprotocol: Schema.Boolean,
      healthCheck: Schema.Struct({
        protocol: Schema.Literals(["tcp", "http"]),
        port: Schema.Int,
        interval: Schema.Int,
        timeout: Schema.Int,
        retries: Schema.Int,
        http: Schema.optional(Schema.Struct({
          domain: Schema.NullOr(Schema.String),
          path: Schema.String,
          response: Schema.optional(Schema.String),
          statusCodes: Schema.optional(Schema.Array(Schema.String)),
          tls: Schema.optional(Schema.Boolean),
        }).pipe(Schema.encodeKeys({ statusCodes: "status_codes" }))),
      }),
      http: Schema.Struct({
        cookieName: Schema.String,
        cookieLifetime: Schema.Int,
        timeoutIdle: Schema.Int,
        stickySessions: Schema.Boolean,
      }).pipe(Schema.encodeKeys({ cookieName: "cookie_name", cookieLifetime: "cookie_lifetime", timeoutIdle: "timeout_idle", stickySessions: "sticky_sessions" })),
    }).pipe(Schema.encodeKeys({ listenPort: "listen_port", destinationPort: "destination_port", healthCheck: "health_check" })), Schema.Struct({
      protocol: Schema.Literal("https"),
      listenPort: Schema.Int,
      destinationPort: Schema.Int,
      proxyprotocol: Schema.Boolean,
      healthCheck: Schema.Struct({
        protocol: Schema.Literals(["tcp", "http"]),
        port: Schema.Int,
        interval: Schema.Int,
        timeout: Schema.Int,
        retries: Schema.Int,
        http: Schema.optional(Schema.Struct({
          domain: Schema.NullOr(Schema.String),
          path: Schema.String,
          response: Schema.optional(Schema.String),
          statusCodes: Schema.optional(Schema.Array(Schema.String)),
          tls: Schema.optional(Schema.Boolean),
        }).pipe(Schema.encodeKeys({ statusCodes: "status_codes" }))),
      }),
      http: Schema.Struct({
        cookieName: Schema.String,
        cookieLifetime: Schema.Int,
        timeoutIdle: Schema.Int,
        certificates: Schema.Array(Schema.Int),
        redirectHttp: Schema.Boolean,
        stickySessions: Schema.Boolean,
      }).pipe(Schema.encodeKeys({ cookieName: "cookie_name", cookieLifetime: "cookie_lifetime", timeoutIdle: "timeout_idle", redirectHttp: "redirect_http", stickySessions: "sticky_sessions" })),
    }).pipe(Schema.encodeKeys({ listenPort: "listen_port", destinationPort: "destination_port", healthCheck: "health_check" }))]))),
    targets: Schema.optional(Schema.Array(Schema.Struct({
      type: Schema.Literals(["server", "label_selector", "ip"]),
      server: Schema.optional(Schema.Struct({
        id: Schema.Int,
        ip: Schema.optional(Schema.String),
      })),
      labelSelector: Schema.optional(Schema.Struct({
        selector: Schema.String,
      })),
      ip: Schema.optional(Schema.Struct({
        ip: Schema.String,
      })),
      usePrivateIp: Schema.optional(Schema.Boolean),
    }).pipe(Schema.encodeKeys({ labelSelector: "label_selector", usePrivateIp: "use_private_ip" })))),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    publicInterface: Schema.optional(Schema.Boolean),
    network: Schema.optional(Schema.Int),
    networkZone: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
  }).pipe(Schema.encodeKeys({ loadBalancerType: "load_balancer_type", publicInterface: "public_interface", networkZone: "network_zone" }));
export type CreateLoadBalancerRequest = typeof CreateLoadBalancerRequest.Type;
export const CreateLoadBalancerResponse = Schema.Struct({
    loadBalancer: Schema.Struct({
      id: Schema.Int,
      name: Schema.String,
      publicNet: Schema.Struct({
        enabled: Schema.Boolean,
        ipv4: Schema.Struct({
          ip: Schema.NullOr(Schema.String),
          dnsPtr: Schema.NullOr(Schema.String),
        }).pipe(Schema.encodeKeys({ dnsPtr: "dns_ptr" })),
        ipv6: Schema.Struct({
          ip: Schema.NullOr(Schema.String),
          dnsPtr: Schema.NullOr(Schema.String),
        }).pipe(Schema.encodeKeys({ dnsPtr: "dns_ptr" })),
      }),
      privateNet: Schema.Array(Schema.Struct({
        network: Schema.Int,
        ip: Schema.String,
      })),
      location: Schema.Struct({
        id: Schema.Int,
        name: Schema.String,
        description: Schema.String,
        country: Schema.String,
        city: Schema.String,
        latitude: Schema.Number,
        longitude: Schema.Number,
        networkZone: Schema.String,
      }).pipe(Schema.encodeKeys({ networkZone: "network_zone" })),
      loadBalancerType: Schema.Struct({
        id: Schema.Int,
        name: Schema.String,
        description: Schema.String,
        maxConnections: Schema.Int,
        maxServices: Schema.Int,
        maxTargets: Schema.Int,
        maxAssignedCertificates: Schema.Int,
        deprecated: Schema.NullOr(Schema.String),
        deprecation: Schema.NullOr(Schema.Struct({
          unavailableAfter: Schema.String,
          announced: Schema.String,
        }).pipe(Schema.encodeKeys({ unavailableAfter: "unavailable_after" }))),
        prices: Schema.Array(Schema.Struct({
          location: Schema.String,
          priceHourly: Schema.Struct({
            net: Schema.String,
            gross: Schema.String,
          }),
          priceMonthly: Schema.Struct({
            net: Schema.String,
            gross: Schema.String,
          }),
          includedTraffic: Schema.Int,
          pricePerTbTraffic: Schema.Struct({
            net: Schema.String,
            gross: Schema.String,
          }),
        }).pipe(Schema.encodeKeys({ priceHourly: "price_hourly", priceMonthly: "price_monthly", includedTraffic: "included_traffic", pricePerTbTraffic: "price_per_tb_traffic" }))),
      }).pipe(Schema.encodeKeys({ maxConnections: "max_connections", maxServices: "max_services", maxTargets: "max_targets", maxAssignedCertificates: "max_assigned_certificates" })),
      protection: Schema.Struct({
        delete: Schema.Boolean,
      }),
      labels: Schema.Record(Schema.String, Schema.String),
      created: Schema.String,
      services: Schema.Array(Schema.Union([Schema.Struct({
        protocol: Schema.Literal("tcp"),
        listenPort: Schema.Int,
        destinationPort: Schema.Int,
        proxyprotocol: Schema.Boolean,
        healthCheck: Schema.Struct({
          protocol: Schema.Literals(["tcp", "http"]),
          port: Schema.Int,
          interval: Schema.Int,
          timeout: Schema.Int,
          retries: Schema.Int,
          http: Schema.optional(Schema.Struct({
            domain: Schema.NullOr(Schema.String),
            path: Schema.String,
            response: Schema.optional(Schema.String),
            statusCodes: Schema.optional(Schema.Array(Schema.String)),
            tls: Schema.optional(Schema.Boolean),
          }).pipe(Schema.encodeKeys({ statusCodes: "status_codes" }))),
        }),
      }).pipe(Schema.encodeKeys({ listenPort: "listen_port", destinationPort: "destination_port", healthCheck: "health_check" })), Schema.Struct({
        protocol: Schema.Literal("http"),
        listenPort: Schema.Int,
        destinationPort: Schema.Int,
        proxyprotocol: Schema.Boolean,
        healthCheck: Schema.Struct({
          protocol: Schema.Literals(["tcp", "http"]),
          port: Schema.Int,
          interval: Schema.Int,
          timeout: Schema.Int,
          retries: Schema.Int,
          http: Schema.optional(Schema.Struct({
            domain: Schema.NullOr(Schema.String),
            path: Schema.String,
            response: Schema.optional(Schema.String),
            statusCodes: Schema.optional(Schema.Array(Schema.String)),
            tls: Schema.optional(Schema.Boolean),
          }).pipe(Schema.encodeKeys({ statusCodes: "status_codes" }))),
        }),
        http: Schema.Struct({
          cookieName: Schema.String,
          cookieLifetime: Schema.Int,
          timeoutIdle: Schema.Int,
          stickySessions: Schema.Boolean,
        }).pipe(Schema.encodeKeys({ cookieName: "cookie_name", cookieLifetime: "cookie_lifetime", timeoutIdle: "timeout_idle", stickySessions: "sticky_sessions" })),
      }).pipe(Schema.encodeKeys({ listenPort: "listen_port", destinationPort: "destination_port", healthCheck: "health_check" })), Schema.Struct({
        protocol: Schema.Literal("https"),
        listenPort: Schema.Int,
        destinationPort: Schema.Int,
        proxyprotocol: Schema.Boolean,
        healthCheck: Schema.Struct({
          protocol: Schema.Literals(["tcp", "http"]),
          port: Schema.Int,
          interval: Schema.Int,
          timeout: Schema.Int,
          retries: Schema.Int,
          http: Schema.optional(Schema.Struct({
            domain: Schema.NullOr(Schema.String),
            path: Schema.String,
            response: Schema.optional(Schema.String),
            statusCodes: Schema.optional(Schema.Array(Schema.String)),
            tls: Schema.optional(Schema.Boolean),
          }).pipe(Schema.encodeKeys({ statusCodes: "status_codes" }))),
        }),
        http: Schema.Struct({
          cookieName: Schema.String,
          cookieLifetime: Schema.Int,
          timeoutIdle: Schema.Int,
          certificates: Schema.Array(Schema.Int),
          redirectHttp: Schema.Boolean,
          stickySessions: Schema.Boolean,
        }).pipe(Schema.encodeKeys({ cookieName: "cookie_name", cookieLifetime: "cookie_lifetime", timeoutIdle: "timeout_idle", redirectHttp: "redirect_http", stickySessions: "sticky_sessions" })),
      }).pipe(Schema.encodeKeys({ listenPort: "listen_port", destinationPort: "destination_port", healthCheck: "health_check" }))])),
      targets: Schema.Array(Schema.Union([Schema.Struct({
        type: Schema.Literal("server"),
        server: Schema.Struct({
          id: Schema.Int,
          ip: Schema.String,
        }),
        healthStatus: Schema.Array(Schema.Struct({
          listenPort: Schema.Int,
          status: Schema.Literals(["healthy", "unhealthy", "unknown"]),
        }).pipe(Schema.encodeKeys({ listenPort: "listen_port" }))),
        usePrivateIp: Schema.Boolean,
      }).pipe(Schema.encodeKeys({ healthStatus: "health_status", usePrivateIp: "use_private_ip" })), Schema.Struct({
        type: Schema.Literal("label_selector"),
        labelSelector: Schema.Struct({
          selector: Schema.String,
        }),
        targets: Schema.Array(Schema.Struct({
          type: Schema.String,
          server: Schema.Struct({
            id: Schema.Int,
            ip: Schema.String,
          }),
          healthStatus: Schema.Array(Schema.Struct({
            listenPort: Schema.Int,
            status: Schema.Literals(["healthy", "unhealthy", "unknown"]),
          }).pipe(Schema.encodeKeys({ listenPort: "listen_port" }))),
          usePrivateIp: Schema.Boolean,
        }).pipe(Schema.encodeKeys({ healthStatus: "health_status", usePrivateIp: "use_private_ip" }))),
        usePrivateIp: Schema.Boolean,
      }).pipe(Schema.encodeKeys({ labelSelector: "label_selector", usePrivateIp: "use_private_ip" })), Schema.Struct({
        type: Schema.Literal("ip"),
        ip: Schema.Struct({
          ip: Schema.String,
        }),
        healthStatus: Schema.Array(Schema.Struct({
          listenPort: Schema.Int,
          status: Schema.Literals(["healthy", "unhealthy", "unknown"]),
        }).pipe(Schema.encodeKeys({ listenPort: "listen_port" }))),
      }).pipe(Schema.encodeKeys({ healthStatus: "health_status" }))])),
      algorithm: Schema.Struct({
        type: Schema.Literals(["round_robin", "least_connections"]),
      }),
      outgoingTraffic: Schema.NullOr(Schema.Int),
      ingoingTraffic: Schema.NullOr(Schema.Int),
      includedTraffic: Schema.Int,
    }).pipe(Schema.encodeKeys({ publicNet: "public_net", privateNet: "private_net", loadBalancerType: "load_balancer_type", outgoingTraffic: "outgoing_traffic", ingoingTraffic: "ingoing_traffic", includedTraffic: "included_traffic" })),
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
  }).pipe(Schema.encodeKeys({ loadBalancer: "load_balancer" }));
export type CreateLoadBalancerResponse = typeof CreateLoadBalancerResponse.Type;

export const DeleteLoadBalancerServiceRequest = Schema.Struct({
    listenPort: Schema.Int,
  }).pipe(Schema.encodeKeys({ listenPort: "listen_port" }));
export type DeleteLoadBalancerServiceRequest = typeof DeleteLoadBalancerServiceRequest.Type;
export const DeleteLoadBalancerServiceResponse = Schema.Struct({
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
export type DeleteLoadBalancerServiceResponse = typeof DeleteLoadBalancerServiceResponse.Type;

export const DetachLoadBalancerFromNetworkRequest = Schema.Struct({
    network: Schema.Int,
  });
export type DetachLoadBalancerFromNetworkRequest = typeof DetachLoadBalancerFromNetworkRequest.Type;
export const DetachLoadBalancerFromNetworkResponse = Schema.Struct({
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
export type DetachLoadBalancerFromNetworkResponse = typeof DetachLoadBalancerFromNetworkResponse.Type;

export const DisableLoadBalancerPublicInterfaceResponse = Schema.Struct({
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
export type DisableLoadBalancerPublicInterfaceResponse = typeof DisableLoadBalancerPublicInterfaceResponse.Type;

export const EnableLoadBalancerPublicInterfaceResponse = Schema.Struct({
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
export type EnableLoadBalancerPublicInterfaceResponse = typeof EnableLoadBalancerPublicInterfaceResponse.Type;

export const GetLoadBalancerResponse = Schema.Struct({
    loadBalancer: Schema.Struct({
      id: Schema.Int,
      name: Schema.String,
      publicNet: Schema.Struct({
        enabled: Schema.Boolean,
        ipv4: Schema.Struct({
          ip: Schema.NullOr(Schema.String),
          dnsPtr: Schema.NullOr(Schema.String),
        }).pipe(Schema.encodeKeys({ dnsPtr: "dns_ptr" })),
        ipv6: Schema.Struct({
          ip: Schema.NullOr(Schema.String),
          dnsPtr: Schema.NullOr(Schema.String),
        }).pipe(Schema.encodeKeys({ dnsPtr: "dns_ptr" })),
      }),
      privateNet: Schema.Array(Schema.Struct({
        network: Schema.Int,
        ip: Schema.String,
      })),
      location: Schema.Struct({
        id: Schema.Int,
        name: Schema.String,
        description: Schema.String,
        country: Schema.String,
        city: Schema.String,
        latitude: Schema.Number,
        longitude: Schema.Number,
        networkZone: Schema.String,
      }).pipe(Schema.encodeKeys({ networkZone: "network_zone" })),
      loadBalancerType: Schema.Struct({
        id: Schema.Int,
        name: Schema.String,
        description: Schema.String,
        maxConnections: Schema.Int,
        maxServices: Schema.Int,
        maxTargets: Schema.Int,
        maxAssignedCertificates: Schema.Int,
        deprecated: Schema.NullOr(Schema.String),
        deprecation: Schema.NullOr(Schema.Struct({
          unavailableAfter: Schema.String,
          announced: Schema.String,
        }).pipe(Schema.encodeKeys({ unavailableAfter: "unavailable_after" }))),
        prices: Schema.Array(Schema.Struct({
          location: Schema.String,
          priceHourly: Schema.Struct({
            net: Schema.String,
            gross: Schema.String,
          }),
          priceMonthly: Schema.Struct({
            net: Schema.String,
            gross: Schema.String,
          }),
          includedTraffic: Schema.Int,
          pricePerTbTraffic: Schema.Struct({
            net: Schema.String,
            gross: Schema.String,
          }),
        }).pipe(Schema.encodeKeys({ priceHourly: "price_hourly", priceMonthly: "price_monthly", includedTraffic: "included_traffic", pricePerTbTraffic: "price_per_tb_traffic" }))),
      }).pipe(Schema.encodeKeys({ maxConnections: "max_connections", maxServices: "max_services", maxTargets: "max_targets", maxAssignedCertificates: "max_assigned_certificates" })),
      protection: Schema.Struct({
        delete: Schema.Boolean,
      }),
      labels: Schema.Record(Schema.String, Schema.String),
      created: Schema.String,
      services: Schema.Array(Schema.Union([Schema.Struct({
        protocol: Schema.Literal("tcp"),
        listenPort: Schema.Int,
        destinationPort: Schema.Int,
        proxyprotocol: Schema.Boolean,
        healthCheck: Schema.Struct({
          protocol: Schema.Literals(["tcp", "http"]),
          port: Schema.Int,
          interval: Schema.Int,
          timeout: Schema.Int,
          retries: Schema.Int,
          http: Schema.optional(Schema.Struct({
            domain: Schema.NullOr(Schema.String),
            path: Schema.String,
            response: Schema.optional(Schema.String),
            statusCodes: Schema.optional(Schema.Array(Schema.String)),
            tls: Schema.optional(Schema.Boolean),
          }).pipe(Schema.encodeKeys({ statusCodes: "status_codes" }))),
        }),
      }).pipe(Schema.encodeKeys({ listenPort: "listen_port", destinationPort: "destination_port", healthCheck: "health_check" })), Schema.Struct({
        protocol: Schema.Literal("http"),
        listenPort: Schema.Int,
        destinationPort: Schema.Int,
        proxyprotocol: Schema.Boolean,
        healthCheck: Schema.Struct({
          protocol: Schema.Literals(["tcp", "http"]),
          port: Schema.Int,
          interval: Schema.Int,
          timeout: Schema.Int,
          retries: Schema.Int,
          http: Schema.optional(Schema.Struct({
            domain: Schema.NullOr(Schema.String),
            path: Schema.String,
            response: Schema.optional(Schema.String),
            statusCodes: Schema.optional(Schema.Array(Schema.String)),
            tls: Schema.optional(Schema.Boolean),
          }).pipe(Schema.encodeKeys({ statusCodes: "status_codes" }))),
        }),
        http: Schema.Struct({
          cookieName: Schema.String,
          cookieLifetime: Schema.Int,
          timeoutIdle: Schema.Int,
          stickySessions: Schema.Boolean,
        }).pipe(Schema.encodeKeys({ cookieName: "cookie_name", cookieLifetime: "cookie_lifetime", timeoutIdle: "timeout_idle", stickySessions: "sticky_sessions" })),
      }).pipe(Schema.encodeKeys({ listenPort: "listen_port", destinationPort: "destination_port", healthCheck: "health_check" })), Schema.Struct({
        protocol: Schema.Literal("https"),
        listenPort: Schema.Int,
        destinationPort: Schema.Int,
        proxyprotocol: Schema.Boolean,
        healthCheck: Schema.Struct({
          protocol: Schema.Literals(["tcp", "http"]),
          port: Schema.Int,
          interval: Schema.Int,
          timeout: Schema.Int,
          retries: Schema.Int,
          http: Schema.optional(Schema.Struct({
            domain: Schema.NullOr(Schema.String),
            path: Schema.String,
            response: Schema.optional(Schema.String),
            statusCodes: Schema.optional(Schema.Array(Schema.String)),
            tls: Schema.optional(Schema.Boolean),
          }).pipe(Schema.encodeKeys({ statusCodes: "status_codes" }))),
        }),
        http: Schema.Struct({
          cookieName: Schema.String,
          cookieLifetime: Schema.Int,
          timeoutIdle: Schema.Int,
          certificates: Schema.Array(Schema.Int),
          redirectHttp: Schema.Boolean,
          stickySessions: Schema.Boolean,
        }).pipe(Schema.encodeKeys({ cookieName: "cookie_name", cookieLifetime: "cookie_lifetime", timeoutIdle: "timeout_idle", redirectHttp: "redirect_http", stickySessions: "sticky_sessions" })),
      }).pipe(Schema.encodeKeys({ listenPort: "listen_port", destinationPort: "destination_port", healthCheck: "health_check" }))])),
      targets: Schema.Array(Schema.Union([Schema.Struct({
        type: Schema.Literal("server"),
        server: Schema.Struct({
          id: Schema.Int,
          ip: Schema.String,
        }),
        healthStatus: Schema.Array(Schema.Struct({
          listenPort: Schema.Int,
          status: Schema.Literals(["healthy", "unhealthy", "unknown"]),
        }).pipe(Schema.encodeKeys({ listenPort: "listen_port" }))),
        usePrivateIp: Schema.Boolean,
      }).pipe(Schema.encodeKeys({ healthStatus: "health_status", usePrivateIp: "use_private_ip" })), Schema.Struct({
        type: Schema.Literal("label_selector"),
        labelSelector: Schema.Struct({
          selector: Schema.String,
        }),
        targets: Schema.Array(Schema.Struct({
          type: Schema.String,
          server: Schema.Struct({
            id: Schema.Int,
            ip: Schema.String,
          }),
          healthStatus: Schema.Array(Schema.Struct({
            listenPort: Schema.Int,
            status: Schema.Literals(["healthy", "unhealthy", "unknown"]),
          }).pipe(Schema.encodeKeys({ listenPort: "listen_port" }))),
          usePrivateIp: Schema.Boolean,
        }).pipe(Schema.encodeKeys({ healthStatus: "health_status", usePrivateIp: "use_private_ip" }))),
        usePrivateIp: Schema.Boolean,
      }).pipe(Schema.encodeKeys({ labelSelector: "label_selector", usePrivateIp: "use_private_ip" })), Schema.Struct({
        type: Schema.Literal("ip"),
        ip: Schema.Struct({
          ip: Schema.String,
        }),
        healthStatus: Schema.Array(Schema.Struct({
          listenPort: Schema.Int,
          status: Schema.Literals(["healthy", "unhealthy", "unknown"]),
        }).pipe(Schema.encodeKeys({ listenPort: "listen_port" }))),
      }).pipe(Schema.encodeKeys({ healthStatus: "health_status" }))])),
      algorithm: Schema.Struct({
        type: Schema.Literals(["round_robin", "least_connections"]),
      }),
      outgoingTraffic: Schema.NullOr(Schema.Int),
      ingoingTraffic: Schema.NullOr(Schema.Int),
      includedTraffic: Schema.Int,
    }).pipe(Schema.encodeKeys({ publicNet: "public_net", privateNet: "private_net", loadBalancerType: "load_balancer_type", outgoingTraffic: "outgoing_traffic", ingoingTraffic: "ingoing_traffic", includedTraffic: "included_traffic" })),
  }).pipe(Schema.encodeKeys({ loadBalancer: "load_balancer" }));
export type GetLoadBalancerResponse = typeof GetLoadBalancerResponse.Type;

export const GetLoadBalancerActionResponse = Schema.Struct({
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
export type GetLoadBalancerActionResponse = typeof GetLoadBalancerActionResponse.Type;

export const GetLoadBalancersActionResponse = Schema.Struct({
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
export type GetLoadBalancersActionResponse = typeof GetLoadBalancersActionResponse.Type;

export const GetLoadBalancerMetricsResponse = Schema.Struct({
    metrics: Schema.Struct({
      start: Schema.String,
      end: Schema.String,
      step: Schema.Number,
      timeSeries: Schema.Record(Schema.String, Schema.Struct({
        values: Schema.Array(Schema.Array(Schema.Unknown)),
      })),
    }).pipe(Schema.encodeKeys({ timeSeries: "time_series" })),
  });
export type GetLoadBalancerMetricsResponse = typeof GetLoadBalancerMetricsResponse.Type;
export interface GetLoadBalancerMetricsQuery {
  type: ReadonlyArray<"open_connections" | "connections_per_second" | "requests_per_second" | "bandwidth">;
  start: string;
  end: string;
  step?: string;
}

export const ListLoadBalancersResponse = Schema.Struct({
    loadBalancers: Schema.Array(Schema.Struct({
      id: Schema.Int,
      name: Schema.String,
      publicNet: Schema.Struct({
        enabled: Schema.Boolean,
        ipv4: Schema.Struct({
          ip: Schema.NullOr(Schema.String),
          dnsPtr: Schema.NullOr(Schema.String),
        }).pipe(Schema.encodeKeys({ dnsPtr: "dns_ptr" })),
        ipv6: Schema.Struct({
          ip: Schema.NullOr(Schema.String),
          dnsPtr: Schema.NullOr(Schema.String),
        }).pipe(Schema.encodeKeys({ dnsPtr: "dns_ptr" })),
      }),
      privateNet: Schema.Array(Schema.Struct({
        network: Schema.Int,
        ip: Schema.String,
      })),
      location: Schema.Struct({
        id: Schema.Int,
        name: Schema.String,
        description: Schema.String,
        country: Schema.String,
        city: Schema.String,
        latitude: Schema.Number,
        longitude: Schema.Number,
        networkZone: Schema.String,
      }).pipe(Schema.encodeKeys({ networkZone: "network_zone" })),
      loadBalancerType: Schema.Struct({
        id: Schema.Int,
        name: Schema.String,
        description: Schema.String,
        maxConnections: Schema.Int,
        maxServices: Schema.Int,
        maxTargets: Schema.Int,
        maxAssignedCertificates: Schema.Int,
        deprecated: Schema.NullOr(Schema.String),
        deprecation: Schema.NullOr(Schema.Struct({
          unavailableAfter: Schema.String,
          announced: Schema.String,
        }).pipe(Schema.encodeKeys({ unavailableAfter: "unavailable_after" }))),
        prices: Schema.Array(Schema.Struct({
          location: Schema.String,
          priceHourly: Schema.Struct({
            net: Schema.String,
            gross: Schema.String,
          }),
          priceMonthly: Schema.Struct({
            net: Schema.String,
            gross: Schema.String,
          }),
          includedTraffic: Schema.Int,
          pricePerTbTraffic: Schema.Struct({
            net: Schema.String,
            gross: Schema.String,
          }),
        }).pipe(Schema.encodeKeys({ priceHourly: "price_hourly", priceMonthly: "price_monthly", includedTraffic: "included_traffic", pricePerTbTraffic: "price_per_tb_traffic" }))),
      }).pipe(Schema.encodeKeys({ maxConnections: "max_connections", maxServices: "max_services", maxTargets: "max_targets", maxAssignedCertificates: "max_assigned_certificates" })),
      protection: Schema.Struct({
        delete: Schema.Boolean,
      }),
      labels: Schema.Record(Schema.String, Schema.String),
      created: Schema.String,
      services: Schema.Array(Schema.Union([Schema.Struct({
        protocol: Schema.Literal("tcp"),
        listenPort: Schema.Int,
        destinationPort: Schema.Int,
        proxyprotocol: Schema.Boolean,
        healthCheck: Schema.Struct({
          protocol: Schema.Literals(["tcp", "http"]),
          port: Schema.Int,
          interval: Schema.Int,
          timeout: Schema.Int,
          retries: Schema.Int,
          http: Schema.optional(Schema.Struct({
            domain: Schema.NullOr(Schema.String),
            path: Schema.String,
            response: Schema.optional(Schema.String),
            statusCodes: Schema.optional(Schema.Array(Schema.String)),
            tls: Schema.optional(Schema.Boolean),
          }).pipe(Schema.encodeKeys({ statusCodes: "status_codes" }))),
        }),
      }).pipe(Schema.encodeKeys({ listenPort: "listen_port", destinationPort: "destination_port", healthCheck: "health_check" })), Schema.Struct({
        protocol: Schema.Literal("http"),
        listenPort: Schema.Int,
        destinationPort: Schema.Int,
        proxyprotocol: Schema.Boolean,
        healthCheck: Schema.Struct({
          protocol: Schema.Literals(["tcp", "http"]),
          port: Schema.Int,
          interval: Schema.Int,
          timeout: Schema.Int,
          retries: Schema.Int,
          http: Schema.optional(Schema.Struct({
            domain: Schema.NullOr(Schema.String),
            path: Schema.String,
            response: Schema.optional(Schema.String),
            statusCodes: Schema.optional(Schema.Array(Schema.String)),
            tls: Schema.optional(Schema.Boolean),
          }).pipe(Schema.encodeKeys({ statusCodes: "status_codes" }))),
        }),
        http: Schema.Struct({
          cookieName: Schema.String,
          cookieLifetime: Schema.Int,
          timeoutIdle: Schema.Int,
          stickySessions: Schema.Boolean,
        }).pipe(Schema.encodeKeys({ cookieName: "cookie_name", cookieLifetime: "cookie_lifetime", timeoutIdle: "timeout_idle", stickySessions: "sticky_sessions" })),
      }).pipe(Schema.encodeKeys({ listenPort: "listen_port", destinationPort: "destination_port", healthCheck: "health_check" })), Schema.Struct({
        protocol: Schema.Literal("https"),
        listenPort: Schema.Int,
        destinationPort: Schema.Int,
        proxyprotocol: Schema.Boolean,
        healthCheck: Schema.Struct({
          protocol: Schema.Literals(["tcp", "http"]),
          port: Schema.Int,
          interval: Schema.Int,
          timeout: Schema.Int,
          retries: Schema.Int,
          http: Schema.optional(Schema.Struct({
            domain: Schema.NullOr(Schema.String),
            path: Schema.String,
            response: Schema.optional(Schema.String),
            statusCodes: Schema.optional(Schema.Array(Schema.String)),
            tls: Schema.optional(Schema.Boolean),
          }).pipe(Schema.encodeKeys({ statusCodes: "status_codes" }))),
        }),
        http: Schema.Struct({
          cookieName: Schema.String,
          cookieLifetime: Schema.Int,
          timeoutIdle: Schema.Int,
          certificates: Schema.Array(Schema.Int),
          redirectHttp: Schema.Boolean,
          stickySessions: Schema.Boolean,
        }).pipe(Schema.encodeKeys({ cookieName: "cookie_name", cookieLifetime: "cookie_lifetime", timeoutIdle: "timeout_idle", redirectHttp: "redirect_http", stickySessions: "sticky_sessions" })),
      }).pipe(Schema.encodeKeys({ listenPort: "listen_port", destinationPort: "destination_port", healthCheck: "health_check" }))])),
      targets: Schema.Array(Schema.Union([Schema.Struct({
        type: Schema.Literal("server"),
        server: Schema.Struct({
          id: Schema.Int,
          ip: Schema.String,
        }),
        healthStatus: Schema.Array(Schema.Struct({
          listenPort: Schema.Int,
          status: Schema.Literals(["healthy", "unhealthy", "unknown"]),
        }).pipe(Schema.encodeKeys({ listenPort: "listen_port" }))),
        usePrivateIp: Schema.Boolean,
      }).pipe(Schema.encodeKeys({ healthStatus: "health_status", usePrivateIp: "use_private_ip" })), Schema.Struct({
        type: Schema.Literal("label_selector"),
        labelSelector: Schema.Struct({
          selector: Schema.String,
        }),
        targets: Schema.Array(Schema.Struct({
          type: Schema.String,
          server: Schema.Struct({
            id: Schema.Int,
            ip: Schema.String,
          }),
          healthStatus: Schema.Array(Schema.Struct({
            listenPort: Schema.Int,
            status: Schema.Literals(["healthy", "unhealthy", "unknown"]),
          }).pipe(Schema.encodeKeys({ listenPort: "listen_port" }))),
          usePrivateIp: Schema.Boolean,
        }).pipe(Schema.encodeKeys({ healthStatus: "health_status", usePrivateIp: "use_private_ip" }))),
        usePrivateIp: Schema.Boolean,
      }).pipe(Schema.encodeKeys({ labelSelector: "label_selector", usePrivateIp: "use_private_ip" })), Schema.Struct({
        type: Schema.Literal("ip"),
        ip: Schema.Struct({
          ip: Schema.String,
        }),
        healthStatus: Schema.Array(Schema.Struct({
          listenPort: Schema.Int,
          status: Schema.Literals(["healthy", "unhealthy", "unknown"]),
        }).pipe(Schema.encodeKeys({ listenPort: "listen_port" }))),
      }).pipe(Schema.encodeKeys({ healthStatus: "health_status" }))])),
      algorithm: Schema.Struct({
        type: Schema.Literals(["round_robin", "least_connections"]),
      }),
      outgoingTraffic: Schema.NullOr(Schema.Int),
      ingoingTraffic: Schema.NullOr(Schema.Int),
      includedTraffic: Schema.Int,
    }).pipe(Schema.encodeKeys({ publicNet: "public_net", privateNet: "private_net", loadBalancerType: "load_balancer_type", outgoingTraffic: "outgoing_traffic", ingoingTraffic: "ingoing_traffic", includedTraffic: "included_traffic" }))),
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
  }).pipe(Schema.encodeKeys({ loadBalancers: "load_balancers" }));
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
        perPage: Schema.Int,
        previousPage: Schema.NullOr(Schema.Int),
        nextPage: Schema.NullOr(Schema.Int),
        lastPage: Schema.NullOr(Schema.Int),
        totalEntries: Schema.NullOr(Schema.Int),
      }).pipe(Schema.encodeKeys({ perPage: "per_page", previousPage: "previous_page", nextPage: "next_page", lastPage: "last_page", totalEntries: "total_entries" })),
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
        perPage: Schema.Int,
        previousPage: Schema.NullOr(Schema.Int),
        nextPage: Schema.NullOr(Schema.Int),
        lastPage: Schema.NullOr(Schema.Int),
        totalEntries: Schema.NullOr(Schema.Int),
      }).pipe(Schema.encodeKeys({ perPage: "per_page", previousPage: "previous_page", nextPage: "next_page", lastPage: "last_page", totalEntries: "total_entries" })),
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
    type: Schema.Literals(["server", "label_selector", "ip"]),
    server: Schema.optional(Schema.Struct({
      id: Schema.Int,
      ip: Schema.optional(Schema.String),
    })),
    labelSelector: Schema.optional(Schema.Struct({
      selector: Schema.String,
    })),
    ip: Schema.optional(Schema.Struct({
      ip: Schema.String,
    })),
  }).pipe(Schema.encodeKeys({ labelSelector: "label_selector" }));
export type RemoveLoadBalancerTargetRequest = typeof RemoveLoadBalancerTargetRequest.Type;
export const RemoveLoadBalancerTargetResponse = Schema.Struct({
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
export type RemoveLoadBalancerTargetResponse = typeof RemoveLoadBalancerTargetResponse.Type;

export const UpdateLoadBalancerRequest = Schema.Struct({
    name: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  });
export type UpdateLoadBalancerRequest = typeof UpdateLoadBalancerRequest.Type;
export const UpdateLoadBalancerResponse = Schema.Struct({
    loadBalancer: Schema.Struct({
      id: Schema.Int,
      name: Schema.String,
      publicNet: Schema.Struct({
        enabled: Schema.Boolean,
        ipv4: Schema.Struct({
          ip: Schema.NullOr(Schema.String),
          dnsPtr: Schema.NullOr(Schema.String),
        }).pipe(Schema.encodeKeys({ dnsPtr: "dns_ptr" })),
        ipv6: Schema.Struct({
          ip: Schema.NullOr(Schema.String),
          dnsPtr: Schema.NullOr(Schema.String),
        }).pipe(Schema.encodeKeys({ dnsPtr: "dns_ptr" })),
      }),
      privateNet: Schema.Array(Schema.Struct({
        network: Schema.Int,
        ip: Schema.String,
      })),
      location: Schema.Struct({
        id: Schema.Int,
        name: Schema.String,
        description: Schema.String,
        country: Schema.String,
        city: Schema.String,
        latitude: Schema.Number,
        longitude: Schema.Number,
        networkZone: Schema.String,
      }).pipe(Schema.encodeKeys({ networkZone: "network_zone" })),
      loadBalancerType: Schema.Struct({
        id: Schema.Int,
        name: Schema.String,
        description: Schema.String,
        maxConnections: Schema.Int,
        maxServices: Schema.Int,
        maxTargets: Schema.Int,
        maxAssignedCertificates: Schema.Int,
        deprecated: Schema.NullOr(Schema.String),
        deprecation: Schema.NullOr(Schema.Struct({
          unavailableAfter: Schema.String,
          announced: Schema.String,
        }).pipe(Schema.encodeKeys({ unavailableAfter: "unavailable_after" }))),
        prices: Schema.Array(Schema.Struct({
          location: Schema.String,
          priceHourly: Schema.Struct({
            net: Schema.String,
            gross: Schema.String,
          }),
          priceMonthly: Schema.Struct({
            net: Schema.String,
            gross: Schema.String,
          }),
          includedTraffic: Schema.Int,
          pricePerTbTraffic: Schema.Struct({
            net: Schema.String,
            gross: Schema.String,
          }),
        }).pipe(Schema.encodeKeys({ priceHourly: "price_hourly", priceMonthly: "price_monthly", includedTraffic: "included_traffic", pricePerTbTraffic: "price_per_tb_traffic" }))),
      }).pipe(Schema.encodeKeys({ maxConnections: "max_connections", maxServices: "max_services", maxTargets: "max_targets", maxAssignedCertificates: "max_assigned_certificates" })),
      protection: Schema.Struct({
        delete: Schema.Boolean,
      }),
      labels: Schema.Record(Schema.String, Schema.String),
      created: Schema.String,
      services: Schema.Array(Schema.Union([Schema.Struct({
        protocol: Schema.Literal("tcp"),
        listenPort: Schema.Int,
        destinationPort: Schema.Int,
        proxyprotocol: Schema.Boolean,
        healthCheck: Schema.Struct({
          protocol: Schema.Literals(["tcp", "http"]),
          port: Schema.Int,
          interval: Schema.Int,
          timeout: Schema.Int,
          retries: Schema.Int,
          http: Schema.optional(Schema.Struct({
            domain: Schema.NullOr(Schema.String),
            path: Schema.String,
            response: Schema.optional(Schema.String),
            statusCodes: Schema.optional(Schema.Array(Schema.String)),
            tls: Schema.optional(Schema.Boolean),
          }).pipe(Schema.encodeKeys({ statusCodes: "status_codes" }))),
        }),
      }).pipe(Schema.encodeKeys({ listenPort: "listen_port", destinationPort: "destination_port", healthCheck: "health_check" })), Schema.Struct({
        protocol: Schema.Literal("http"),
        listenPort: Schema.Int,
        destinationPort: Schema.Int,
        proxyprotocol: Schema.Boolean,
        healthCheck: Schema.Struct({
          protocol: Schema.Literals(["tcp", "http"]),
          port: Schema.Int,
          interval: Schema.Int,
          timeout: Schema.Int,
          retries: Schema.Int,
          http: Schema.optional(Schema.Struct({
            domain: Schema.NullOr(Schema.String),
            path: Schema.String,
            response: Schema.optional(Schema.String),
            statusCodes: Schema.optional(Schema.Array(Schema.String)),
            tls: Schema.optional(Schema.Boolean),
          }).pipe(Schema.encodeKeys({ statusCodes: "status_codes" }))),
        }),
        http: Schema.Struct({
          cookieName: Schema.String,
          cookieLifetime: Schema.Int,
          timeoutIdle: Schema.Int,
          stickySessions: Schema.Boolean,
        }).pipe(Schema.encodeKeys({ cookieName: "cookie_name", cookieLifetime: "cookie_lifetime", timeoutIdle: "timeout_idle", stickySessions: "sticky_sessions" })),
      }).pipe(Schema.encodeKeys({ listenPort: "listen_port", destinationPort: "destination_port", healthCheck: "health_check" })), Schema.Struct({
        protocol: Schema.Literal("https"),
        listenPort: Schema.Int,
        destinationPort: Schema.Int,
        proxyprotocol: Schema.Boolean,
        healthCheck: Schema.Struct({
          protocol: Schema.Literals(["tcp", "http"]),
          port: Schema.Int,
          interval: Schema.Int,
          timeout: Schema.Int,
          retries: Schema.Int,
          http: Schema.optional(Schema.Struct({
            domain: Schema.NullOr(Schema.String),
            path: Schema.String,
            response: Schema.optional(Schema.String),
            statusCodes: Schema.optional(Schema.Array(Schema.String)),
            tls: Schema.optional(Schema.Boolean),
          }).pipe(Schema.encodeKeys({ statusCodes: "status_codes" }))),
        }),
        http: Schema.Struct({
          cookieName: Schema.String,
          cookieLifetime: Schema.Int,
          timeoutIdle: Schema.Int,
          certificates: Schema.Array(Schema.Int),
          redirectHttp: Schema.Boolean,
          stickySessions: Schema.Boolean,
        }).pipe(Schema.encodeKeys({ cookieName: "cookie_name", cookieLifetime: "cookie_lifetime", timeoutIdle: "timeout_idle", redirectHttp: "redirect_http", stickySessions: "sticky_sessions" })),
      }).pipe(Schema.encodeKeys({ listenPort: "listen_port", destinationPort: "destination_port", healthCheck: "health_check" }))])),
      targets: Schema.Array(Schema.Union([Schema.Struct({
        type: Schema.Literal("server"),
        server: Schema.Struct({
          id: Schema.Int,
          ip: Schema.String,
        }),
        healthStatus: Schema.Array(Schema.Struct({
          listenPort: Schema.Int,
          status: Schema.Literals(["healthy", "unhealthy", "unknown"]),
        }).pipe(Schema.encodeKeys({ listenPort: "listen_port" }))),
        usePrivateIp: Schema.Boolean,
      }).pipe(Schema.encodeKeys({ healthStatus: "health_status", usePrivateIp: "use_private_ip" })), Schema.Struct({
        type: Schema.Literal("label_selector"),
        labelSelector: Schema.Struct({
          selector: Schema.String,
        }),
        targets: Schema.Array(Schema.Struct({
          type: Schema.String,
          server: Schema.Struct({
            id: Schema.Int,
            ip: Schema.String,
          }),
          healthStatus: Schema.Array(Schema.Struct({
            listenPort: Schema.Int,
            status: Schema.Literals(["healthy", "unhealthy", "unknown"]),
          }).pipe(Schema.encodeKeys({ listenPort: "listen_port" }))),
          usePrivateIp: Schema.Boolean,
        }).pipe(Schema.encodeKeys({ healthStatus: "health_status", usePrivateIp: "use_private_ip" }))),
        usePrivateIp: Schema.Boolean,
      }).pipe(Schema.encodeKeys({ labelSelector: "label_selector", usePrivateIp: "use_private_ip" })), Schema.Struct({
        type: Schema.Literal("ip"),
        ip: Schema.Struct({
          ip: Schema.String,
        }),
        healthStatus: Schema.Array(Schema.Struct({
          listenPort: Schema.Int,
          status: Schema.Literals(["healthy", "unhealthy", "unknown"]),
        }).pipe(Schema.encodeKeys({ listenPort: "listen_port" }))),
      }).pipe(Schema.encodeKeys({ healthStatus: "health_status" }))])),
      algorithm: Schema.Struct({
        type: Schema.Literals(["round_robin", "least_connections"]),
      }),
      outgoingTraffic: Schema.NullOr(Schema.Int),
      ingoingTraffic: Schema.NullOr(Schema.Int),
      includedTraffic: Schema.Int,
    }).pipe(Schema.encodeKeys({ publicNet: "public_net", privateNet: "private_net", loadBalancerType: "load_balancer_type", outgoingTraffic: "outgoing_traffic", ingoingTraffic: "ingoing_traffic", includedTraffic: "included_traffic" })),
  }).pipe(Schema.encodeKeys({ loadBalancer: "load_balancer" }));
export type UpdateLoadBalancerResponse = typeof UpdateLoadBalancerResponse.Type;

export const UpdateLoadBalancerServiceRequest = Schema.Struct({
    protocol: Schema.optional(Schema.Literals(["tcp", "http", "https"])),
    listenPort: Schema.Int,
    destinationPort: Schema.optional(Schema.Int),
    proxyprotocol: Schema.optional(Schema.Boolean),
    healthCheck: Schema.optional(Schema.Struct({
      protocol: Schema.optional(Schema.Literals(["tcp", "http"])),
      port: Schema.optional(Schema.Int),
      interval: Schema.optional(Schema.Int),
      timeout: Schema.optional(Schema.Int),
      retries: Schema.optional(Schema.Int),
      http: Schema.optional(Schema.Struct({
        domain: Schema.optional(Schema.NullOr(Schema.String)),
        path: Schema.optional(Schema.String),
        response: Schema.optional(Schema.String),
        statusCodes: Schema.optional(Schema.Array(Schema.String)),
        tls: Schema.optional(Schema.Boolean),
      }).pipe(Schema.encodeKeys({ statusCodes: "status_codes" }))),
    })),
    http: Schema.optional(Schema.Struct({
      cookieName: Schema.optional(Schema.String),
      cookieLifetime: Schema.optional(Schema.Int),
      timeoutIdle: Schema.optional(Schema.Int),
      certificates: Schema.optional(Schema.Array(Schema.Int)),
      redirectHttp: Schema.optional(Schema.Boolean),
      stickySessions: Schema.optional(Schema.Boolean),
    }).pipe(Schema.encodeKeys({ cookieName: "cookie_name", cookieLifetime: "cookie_lifetime", timeoutIdle: "timeout_idle", redirectHttp: "redirect_http", stickySessions: "sticky_sessions" }))),
  }).pipe(Schema.encodeKeys({ listenPort: "listen_port", destinationPort: "destination_port", healthCheck: "health_check" }));
export type UpdateLoadBalancerServiceRequest = typeof UpdateLoadBalancerServiceRequest.Type;
export const UpdateLoadBalancerServiceResponse = Schema.Struct({
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
export type UpdateLoadBalancerServiceResponse = typeof UpdateLoadBalancerServiceResponse.Type;


export const makeLoadBalancers = (http: HttpClient.HttpClient) => ({
    /** Add Service */
    addService: (id: number, body: AddLoadBalancerServiceRequest): Effect.Effect<AddLoadBalancerServiceResponse, HetznerErrors> =>
      HttpClientRequest.post(`/load_balancers/${id}/actions/add_service`).pipe(
        HttpClientRequest.schemaBodyJson(AddLoadBalancerServiceRequest)(body),
        Effect.flatMap(http.execute),
        Effect.flatMap(decodeJson(AddLoadBalancerServiceResponse)),
        Effect.catch(handleHetznerError),
        Effect.withSpan("HetznerClient.loadBalancers.addService"),
      ),

    /** Add Target */
    addTarget: (id: number, body: AddLoadBalancerTargetRequest): Effect.Effect<AddLoadBalancerTargetResponse, HetznerErrors> =>
      HttpClientRequest.post(`/load_balancers/${id}/actions/add_target`).pipe(
        HttpClientRequest.schemaBodyJson(AddLoadBalancerTargetRequest)(body),
        Effect.flatMap(http.execute),
        Effect.flatMap(decodeJson(AddLoadBalancerTargetResponse)),
        Effect.catch(handleHetznerError),
        Effect.withSpan("HetznerClient.loadBalancers.addTarget"),
      ),

    /** Attach a Load Balancer to a Network */
    attachToNetwork: (id: number, body: AttachLoadBalancerToNetworkRequest): Effect.Effect<AttachLoadBalancerToNetworkResponse, HetznerErrors> =>
      HttpClientRequest.post(`/load_balancers/${id}/actions/attach_to_network`).pipe(
        HttpClientRequest.schemaBodyJson(AttachLoadBalancerToNetworkRequest)(body),
        Effect.flatMap(http.execute),
        Effect.flatMap(decodeJson(AttachLoadBalancerToNetworkResponse)),
        Effect.catch(handleHetznerError),
        Effect.withSpan("HetznerClient.loadBalancers.attachToNetwork"),
      ),

    /** Change Algorithm */
    changeAlgorithm: (id: number, body: ChangeLoadBalancerAlgorithmRequest): Effect.Effect<ChangeLoadBalancerAlgorithmResponse, HetznerErrors> =>
      HttpClientRequest.post(`/load_balancers/${id}/actions/change_algorithm`).pipe(
        HttpClientRequest.schemaBodyJson(ChangeLoadBalancerAlgorithmRequest)(body),
        Effect.flatMap(http.execute),
        Effect.flatMap(decodeJson(ChangeLoadBalancerAlgorithmResponse)),
        Effect.catch(handleHetznerError),
        Effect.withSpan("HetznerClient.loadBalancers.changeAlgorithm"),
      ),

    /** Change reverse DNS entry for this Load Balancer */
    changeDnsPtr: (id: number, body: ChangeLoadBalancerDnsPtrRequest): Effect.Effect<ChangeLoadBalancerDnsPtrResponse, HetznerErrors> =>
      HttpClientRequest.post(`/load_balancers/${id}/actions/change_dns_ptr`).pipe(
        HttpClientRequest.schemaBodyJson(ChangeLoadBalancerDnsPtrRequest)(body),
        Effect.flatMap(http.execute),
        Effect.flatMap(decodeJson(ChangeLoadBalancerDnsPtrResponse)),
        Effect.catch(handleHetznerError),
        Effect.withSpan("HetznerClient.loadBalancers.changeDnsPtr"),
      ),

    /** Change Load Balancer Protection */
    changeProtection: (id: number, body: ChangeLoadBalancerProtectionRequest): Effect.Effect<ChangeLoadBalancerProtectionResponse, HetznerErrors> =>
      HttpClientRequest.post(`/load_balancers/${id}/actions/change_protection`).pipe(
        HttpClientRequest.schemaBodyJson(ChangeLoadBalancerProtectionRequest)(body),
        Effect.flatMap(http.execute),
        Effect.flatMap(decodeJson(ChangeLoadBalancerProtectionResponse)),
        Effect.catch(handleHetznerError),
        Effect.withSpan("HetznerClient.loadBalancers.changeProtection"),
      ),

    /** Change the Type of a Load Balancer */
    changeType: (id: number, body: ChangeLoadBalancerTypeRequest): Effect.Effect<ChangeLoadBalancerTypeResponse, HetznerErrors> =>
      HttpClientRequest.post(`/load_balancers/${id}/actions/change_type`).pipe(
        HttpClientRequest.schemaBodyJson(ChangeLoadBalancerTypeRequest)(body),
        Effect.flatMap(http.execute),
        Effect.flatMap(decodeJson(ChangeLoadBalancerTypeResponse)),
        Effect.catch(handleHetznerError),
        Effect.withSpan("HetznerClient.loadBalancers.changeType"),
      ),

    /** Create a Load Balancer */
    create: (body: CreateLoadBalancerRequest): Effect.Effect<CreateLoadBalancerResponse, HetznerErrors> =>
      HttpClientRequest.post("/load_balancers").pipe(
        HttpClientRequest.schemaBodyJson(CreateLoadBalancerRequest)(body),
        Effect.flatMap(http.execute),
        Effect.flatMap(decodeJson(CreateLoadBalancerResponse)),
        Effect.catch(handleHetznerError),
        Effect.withSpan("HetznerClient.loadBalancers.create"),
      ),

    /** Delete a Load Balancer */
    delete: (id: number): Effect.Effect<void, HetznerErrors> =>
      http.del(`/load_balancers/${id}`).pipe(
        Effect.asVoid,
        Effect.catch(handleHetznerError),
        Effect.withSpan("HetznerClient.loadBalancers.delete"),
      ),

    /** Delete Service */
    deleteService: (id: number, body: DeleteLoadBalancerServiceRequest): Effect.Effect<DeleteLoadBalancerServiceResponse, HetznerErrors> =>
      HttpClientRequest.post(`/load_balancers/${id}/actions/delete_service`).pipe(
        HttpClientRequest.schemaBodyJson(DeleteLoadBalancerServiceRequest)(body),
        Effect.flatMap(http.execute),
        Effect.flatMap(decodeJson(DeleteLoadBalancerServiceResponse)),
        Effect.catch(handleHetznerError),
        Effect.withSpan("HetznerClient.loadBalancers.deleteService"),
      ),

    /** Detach a Load Balancer from a Network */
    detachFromNetwork: (id: number, body: DetachLoadBalancerFromNetworkRequest): Effect.Effect<DetachLoadBalancerFromNetworkResponse, HetznerErrors> =>
      HttpClientRequest.post(`/load_balancers/${id}/actions/detach_from_network`).pipe(
        HttpClientRequest.schemaBodyJson(DetachLoadBalancerFromNetworkRequest)(body),
        Effect.flatMap(http.execute),
        Effect.flatMap(decodeJson(DetachLoadBalancerFromNetworkResponse)),
        Effect.catch(handleHetznerError),
        Effect.withSpan("HetznerClient.loadBalancers.detachFromNetwork"),
      ),

    /** Disable the public interface of a Load Balancer */
    disablePublicInterface: (id: number): Effect.Effect<DisableLoadBalancerPublicInterfaceResponse, HetznerErrors> =>
      HttpClientRequest.post(`/load_balancers/${id}/actions/disable_public_interface`).pipe(
        http.execute,
        Effect.flatMap(decodeJson(DisableLoadBalancerPublicInterfaceResponse)),
        Effect.catch(handleHetznerError),
        Effect.withSpan("HetznerClient.loadBalancers.disablePublicInterface"),
      ),

    /** Enable the public interface of a Load Balancer */
    enablePublicInterface: (id: number): Effect.Effect<EnableLoadBalancerPublicInterfaceResponse, HetznerErrors> =>
      HttpClientRequest.post(`/load_balancers/${id}/actions/enable_public_interface`).pipe(
        http.execute,
        Effect.flatMap(decodeJson(EnableLoadBalancerPublicInterfaceResponse)),
        Effect.catch(handleHetznerError),
        Effect.withSpan("HetznerClient.loadBalancers.enablePublicInterface"),
      ),

    /** Get a Load Balancer */
    get: (id: number): Effect.Effect<GetLoadBalancerResponse, HetznerErrors> =>
      HttpClientRequest.get(`/load_balancers/${id}`).pipe(
        http.execute,
        Effect.flatMap(decodeJson(GetLoadBalancerResponse)),
        Effect.catch(handleHetznerError),
        Effect.withSpan("HetznerClient.loadBalancers.get"),
      ),

    /** Get an Action for a Load Balancer */
    getAction: (id: number, actionId: number): Effect.Effect<GetLoadBalancerActionResponse, HetznerErrors> =>
      HttpClientRequest.get(`/load_balancers/${id}/actions/${actionId}`).pipe(
        http.execute,
        Effect.flatMap(decodeJson(GetLoadBalancerActionResponse)),
        Effect.catch(handleHetznerError),
        Effect.withSpan("HetznerClient.loadBalancers.getAction"),
      ),

    /** Get an Action */
    getLoadBalancersAction: (id: number): Effect.Effect<GetLoadBalancersActionResponse, HetznerErrors> =>
      HttpClientRequest.get(`/load_balancers/actions/${id}`).pipe(
        http.execute,
        Effect.flatMap(decodeJson(GetLoadBalancersActionResponse)),
        Effect.catch(handleHetznerError),
        Effect.withSpan("HetznerClient.loadBalancers.getLoadBalancersAction"),
      ),

    /** Get Metrics for a LoadBalancer */
    getMetrics: (id: number, query?: GetLoadBalancerMetricsQuery): Effect.Effect<GetLoadBalancerMetricsResponse, HetznerErrors> =>
      HttpClientRequest.get(`/load_balancers/${id}/metrics`).pipe(
        HttpClientRequest.setUrlParams(toUrlParams({ type: query?.type, start: query?.start, end: query?.end, step: query?.step })),
        http.execute,
        Effect.flatMap(decodeJson(GetLoadBalancerMetricsResponse)),
        Effect.catch(handleHetznerError),
        Effect.withSpan("HetznerClient.loadBalancers.getMetrics"),
      ),

    /** List Load Balancers */
    list: (query?: ListLoadBalancersQuery): Effect.Effect<ListLoadBalancersResponse, HetznerErrors> =>
      HttpClientRequest.get("/load_balancers").pipe(
        HttpClientRequest.setUrlParams(toUrlParams({ sort: query?.sort, name: query?.name, label_selector: query?.labelSelector, page: query?.page, per_page: query?.perPage })),
        http.execute,
        Effect.flatMap(decodeJson(ListLoadBalancersResponse)),
        Effect.catch(handleHetznerError),
        Effect.withSpan("HetznerClient.loadBalancers.list"),
      ),

    /** List Actions for a Load Balancer */
    listActions: (id: number, query?: ListLoadBalancerActionsQuery): Effect.Effect<ListLoadBalancerActionsResponse, HetznerErrors> =>
      HttpClientRequest.get(`/load_balancers/${id}/actions`).pipe(
        HttpClientRequest.setUrlParams(toUrlParams({ sort: query?.sort, status: query?.status, page: query?.page, per_page: query?.perPage })),
        http.execute,
        Effect.flatMap(decodeJson(ListLoadBalancerActionsResponse)),
        Effect.catch(handleHetznerError),
        Effect.withSpan("HetznerClient.loadBalancers.listActions"),
      ),

    /** List Actions */
    listLoadBalancersActions: (query?: ListLoadBalancersActionsQuery): Effect.Effect<ListLoadBalancersActionsResponse, HetznerErrors> =>
      HttpClientRequest.get("/load_balancers/actions").pipe(
        HttpClientRequest.setUrlParams(toUrlParams({ id: query?.id, sort: query?.sort, status: query?.status, page: query?.page, per_page: query?.perPage })),
        http.execute,
        Effect.flatMap(decodeJson(ListLoadBalancersActionsResponse)),
        Effect.catch(handleHetznerError),
        Effect.withSpan("HetznerClient.loadBalancers.listLoadBalancersActions"),
      ),

    /** Remove Target */
    removeTarget: (id: number, body: RemoveLoadBalancerTargetRequest): Effect.Effect<RemoveLoadBalancerTargetResponse, HetznerErrors> =>
      HttpClientRequest.post(`/load_balancers/${id}/actions/remove_target`).pipe(
        HttpClientRequest.schemaBodyJson(RemoveLoadBalancerTargetRequest)(body),
        Effect.flatMap(http.execute),
        Effect.flatMap(decodeJson(RemoveLoadBalancerTargetResponse)),
        Effect.catch(handleHetznerError),
        Effect.withSpan("HetznerClient.loadBalancers.removeTarget"),
      ),

    /** Update a Load Balancer */
    update: (id: number, body: UpdateLoadBalancerRequest): Effect.Effect<UpdateLoadBalancerResponse, HetznerErrors> =>
      HttpClientRequest.put(`/load_balancers/${id}`).pipe(
        HttpClientRequest.schemaBodyJson(UpdateLoadBalancerRequest)(body),
        Effect.flatMap(http.execute),
        Effect.flatMap(decodeJson(UpdateLoadBalancerResponse)),
        Effect.catch(handleHetznerError),
        Effect.withSpan("HetznerClient.loadBalancers.update"),
      ),

    /** Update Service */
    updateService: (id: number, body: UpdateLoadBalancerServiceRequest): Effect.Effect<UpdateLoadBalancerServiceResponse, HetznerErrors> =>
      HttpClientRequest.post(`/load_balancers/${id}/actions/update_service`).pipe(
        HttpClientRequest.schemaBodyJson(UpdateLoadBalancerServiceRequest)(body),
        Effect.flatMap(http.execute),
        Effect.flatMap(decodeJson(UpdateLoadBalancerServiceResponse)),
        Effect.catch(handleHetznerError),
        Effect.withSpan("HetznerClient.loadBalancers.updateService"),
      ),
});

export type LoadBalancersApi = ReturnType<typeof makeLoadBalancers>;
