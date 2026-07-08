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
    listen_port: Schema.Int,
    destination_port: Schema.Int,
    proxyprotocol: Schema.Boolean,
    health_check: Schema.Struct({
      protocol: Schema.Literals(["tcp", "http"]),
      port: Schema.Int,
      interval: Schema.Int,
      timeout: Schema.Int,
      retries: Schema.Int,
      http: Schema.optional(Schema.Struct({
        domain: Schema.optional(Schema.NullOr(Schema.String)),
        path: Schema.optional(Schema.String),
        response: Schema.optional(Schema.String),
        status_codes: Schema.optional(Schema.Array(Schema.String)),
        tls: Schema.optional(Schema.Boolean),
      })),
    }),
    http: Schema.optional(Schema.Struct({
      cookie_name: Schema.optional(Schema.String),
      cookie_lifetime: Schema.optional(Schema.Int),
      timeout_idle: Schema.optional(Schema.Int),
      certificates: Schema.optional(Schema.Array(Schema.Int)),
      redirect_http: Schema.optional(Schema.Boolean),
      sticky_sessions: Schema.optional(Schema.Boolean),
    })),
  });
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
    label_selector: Schema.optional(Schema.Struct({
      selector: Schema.String,
    })),
    ip: Schema.optional(Schema.Struct({
      ip: Schema.String,
    })),
    use_private_ip: Schema.optional(Schema.Boolean),
  });
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
    ip_range: Schema.optional(Schema.String),
  });
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
    dns_ptr: Schema.optional(Schema.NullOr(Schema.String)),
  });
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
    load_balancer_type: Schema.String,
  });
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
    load_balancer_type: Schema.String,
    algorithm: Schema.optional(Schema.Struct({
      type: Schema.Literals(["round_robin", "least_connections"]),
    })),
    services: Schema.optional(Schema.Array(Schema.Union([Schema.Struct({
      protocol: Schema.Literal("tcp"),
      listen_port: Schema.Int,
      destination_port: Schema.Int,
      proxyprotocol: Schema.Boolean,
      health_check: Schema.Struct({
        protocol: Schema.Literals(["tcp", "http"]),
        port: Schema.Int,
        interval: Schema.Int,
        timeout: Schema.Int,
        retries: Schema.Int,
        http: Schema.optional(Schema.Struct({
          domain: Schema.NullOr(Schema.String),
          path: Schema.String,
          response: Schema.optional(Schema.String),
          status_codes: Schema.optional(Schema.Array(Schema.String)),
          tls: Schema.optional(Schema.Boolean),
        })),
      }),
    }), Schema.Struct({
      protocol: Schema.Literal("http"),
      listen_port: Schema.Int,
      destination_port: Schema.Int,
      proxyprotocol: Schema.Boolean,
      health_check: Schema.Struct({
        protocol: Schema.Literals(["tcp", "http"]),
        port: Schema.Int,
        interval: Schema.Int,
        timeout: Schema.Int,
        retries: Schema.Int,
        http: Schema.optional(Schema.Struct({
          domain: Schema.NullOr(Schema.String),
          path: Schema.String,
          response: Schema.optional(Schema.String),
          status_codes: Schema.optional(Schema.Array(Schema.String)),
          tls: Schema.optional(Schema.Boolean),
        })),
      }),
      http: Schema.Struct({
        cookie_name: Schema.String,
        cookie_lifetime: Schema.Int,
        timeout_idle: Schema.Int,
        sticky_sessions: Schema.Boolean,
      }),
    }), Schema.Struct({
      protocol: Schema.Literal("https"),
      listen_port: Schema.Int,
      destination_port: Schema.Int,
      proxyprotocol: Schema.Boolean,
      health_check: Schema.Struct({
        protocol: Schema.Literals(["tcp", "http"]),
        port: Schema.Int,
        interval: Schema.Int,
        timeout: Schema.Int,
        retries: Schema.Int,
        http: Schema.optional(Schema.Struct({
          domain: Schema.NullOr(Schema.String),
          path: Schema.String,
          response: Schema.optional(Schema.String),
          status_codes: Schema.optional(Schema.Array(Schema.String)),
          tls: Schema.optional(Schema.Boolean),
        })),
      }),
      http: Schema.Struct({
        cookie_name: Schema.String,
        cookie_lifetime: Schema.Int,
        timeout_idle: Schema.Int,
        certificates: Schema.Array(Schema.Int),
        redirect_http: Schema.Boolean,
        sticky_sessions: Schema.Boolean,
      }),
    })]))),
    targets: Schema.optional(Schema.Array(Schema.Struct({
      type: Schema.Literals(["server", "label_selector", "ip"]),
      server: Schema.optional(Schema.Struct({
        id: Schema.Int,
        ip: Schema.optional(Schema.String),
      })),
      label_selector: Schema.optional(Schema.Struct({
        selector: Schema.String,
      })),
      ip: Schema.optional(Schema.Struct({
        ip: Schema.String,
      })),
      use_private_ip: Schema.optional(Schema.Boolean),
    }))),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    public_interface: Schema.optional(Schema.Boolean),
    network: Schema.optional(Schema.Int),
    network_zone: Schema.optional(Schema.String),
    location: Schema.optional(Schema.String),
  });
export type CreateLoadBalancerRequest = typeof CreateLoadBalancerRequest.Type;
export const CreateLoadBalancerResponse = Schema.Struct({
    load_balancer: Schema.Struct({
      id: Schema.Int,
      name: Schema.String,
      public_net: Schema.Struct({
        enabled: Schema.Boolean,
        ipv4: Schema.Struct({
          ip: Schema.NullOr(Schema.String),
          dns_ptr: Schema.NullOr(Schema.String),
        }),
        ipv6: Schema.Struct({
          ip: Schema.NullOr(Schema.String),
          dns_ptr: Schema.NullOr(Schema.String),
        }),
      }),
      private_net: Schema.Array(Schema.Struct({
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
        network_zone: Schema.String,
      }),
      load_balancer_type: Schema.Struct({
        id: Schema.Int,
        name: Schema.String,
        description: Schema.String,
        max_connections: Schema.Int,
        max_services: Schema.Int,
        max_targets: Schema.Int,
        max_assigned_certificates: Schema.Int,
        deprecated: Schema.NullOr(Schema.String),
        deprecation: Schema.NullOr(Schema.Struct({
          unavailable_after: Schema.String,
          announced: Schema.String,
        })),
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
      }),
      protection: Schema.Struct({
        delete: Schema.Boolean,
      }),
      labels: Schema.Record(Schema.String, Schema.String),
      created: Schema.String,
      services: Schema.Array(Schema.Union([Schema.Struct({
        protocol: Schema.Literal("tcp"),
        listen_port: Schema.Int,
        destination_port: Schema.Int,
        proxyprotocol: Schema.Boolean,
        health_check: Schema.Struct({
          protocol: Schema.Literals(["tcp", "http"]),
          port: Schema.Int,
          interval: Schema.Int,
          timeout: Schema.Int,
          retries: Schema.Int,
          http: Schema.optional(Schema.Struct({
            domain: Schema.NullOr(Schema.String),
            path: Schema.String,
            response: Schema.optional(Schema.String),
            status_codes: Schema.optional(Schema.Array(Schema.String)),
            tls: Schema.optional(Schema.Boolean),
          })),
        }),
      }), Schema.Struct({
        protocol: Schema.Literal("http"),
        listen_port: Schema.Int,
        destination_port: Schema.Int,
        proxyprotocol: Schema.Boolean,
        health_check: Schema.Struct({
          protocol: Schema.Literals(["tcp", "http"]),
          port: Schema.Int,
          interval: Schema.Int,
          timeout: Schema.Int,
          retries: Schema.Int,
          http: Schema.optional(Schema.Struct({
            domain: Schema.NullOr(Schema.String),
            path: Schema.String,
            response: Schema.optional(Schema.String),
            status_codes: Schema.optional(Schema.Array(Schema.String)),
            tls: Schema.optional(Schema.Boolean),
          })),
        }),
        http: Schema.Struct({
          cookie_name: Schema.String,
          cookie_lifetime: Schema.Int,
          timeout_idle: Schema.Int,
          sticky_sessions: Schema.Boolean,
        }),
      }), Schema.Struct({
        protocol: Schema.Literal("https"),
        listen_port: Schema.Int,
        destination_port: Schema.Int,
        proxyprotocol: Schema.Boolean,
        health_check: Schema.Struct({
          protocol: Schema.Literals(["tcp", "http"]),
          port: Schema.Int,
          interval: Schema.Int,
          timeout: Schema.Int,
          retries: Schema.Int,
          http: Schema.optional(Schema.Struct({
            domain: Schema.NullOr(Schema.String),
            path: Schema.String,
            response: Schema.optional(Schema.String),
            status_codes: Schema.optional(Schema.Array(Schema.String)),
            tls: Schema.optional(Schema.Boolean),
          })),
        }),
        http: Schema.Struct({
          cookie_name: Schema.String,
          cookie_lifetime: Schema.Int,
          timeout_idle: Schema.Int,
          certificates: Schema.Array(Schema.Int),
          redirect_http: Schema.Boolean,
          sticky_sessions: Schema.Boolean,
        }),
      })])),
      targets: Schema.Array(Schema.Union([Schema.Struct({
        type: Schema.Literal("server"),
        server: Schema.Struct({
          id: Schema.Int,
          ip: Schema.String,
        }),
        health_status: Schema.Array(Schema.Struct({
          listen_port: Schema.Int,
          status: Schema.Literals(["healthy", "unhealthy", "unknown"]),
        })),
        use_private_ip: Schema.Boolean,
      }), Schema.Struct({
        type: Schema.Literal("label_selector"),
        label_selector: Schema.Struct({
          selector: Schema.String,
        }),
        targets: Schema.Array(Schema.Struct({
          type: Schema.String,
          server: Schema.Struct({
            id: Schema.Int,
            ip: Schema.String,
          }),
          health_status: Schema.Array(Schema.Struct({
            listen_port: Schema.Int,
            status: Schema.Literals(["healthy", "unhealthy", "unknown"]),
          })),
          use_private_ip: Schema.Boolean,
        })),
        use_private_ip: Schema.Boolean,
      }), Schema.Struct({
        type: Schema.Literal("ip"),
        ip: Schema.Struct({
          ip: Schema.String,
        }),
        health_status: Schema.Array(Schema.Struct({
          listen_port: Schema.Int,
          status: Schema.Literals(["healthy", "unhealthy", "unknown"]),
        })),
      })])),
      algorithm: Schema.Struct({
        type: Schema.Literals(["round_robin", "least_connections"]),
      }),
      outgoing_traffic: Schema.NullOr(Schema.Int),
      ingoing_traffic: Schema.NullOr(Schema.Int),
      included_traffic: Schema.Int,
    }),
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
export type CreateLoadBalancerResponse = typeof CreateLoadBalancerResponse.Type;

export const DeleteLoadBalancerServiceRequest = Schema.Struct({
    listen_port: Schema.Int,
  });
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
    load_balancer: Schema.Struct({
      id: Schema.Int,
      name: Schema.String,
      public_net: Schema.Struct({
        enabled: Schema.Boolean,
        ipv4: Schema.Struct({
          ip: Schema.NullOr(Schema.String),
          dns_ptr: Schema.NullOr(Schema.String),
        }),
        ipv6: Schema.Struct({
          ip: Schema.NullOr(Schema.String),
          dns_ptr: Schema.NullOr(Schema.String),
        }),
      }),
      private_net: Schema.Array(Schema.Struct({
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
        network_zone: Schema.String,
      }),
      load_balancer_type: Schema.Struct({
        id: Schema.Int,
        name: Schema.String,
        description: Schema.String,
        max_connections: Schema.Int,
        max_services: Schema.Int,
        max_targets: Schema.Int,
        max_assigned_certificates: Schema.Int,
        deprecated: Schema.NullOr(Schema.String),
        deprecation: Schema.NullOr(Schema.Struct({
          unavailable_after: Schema.String,
          announced: Schema.String,
        })),
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
      }),
      protection: Schema.Struct({
        delete: Schema.Boolean,
      }),
      labels: Schema.Record(Schema.String, Schema.String),
      created: Schema.String,
      services: Schema.Array(Schema.Union([Schema.Struct({
        protocol: Schema.Literal("tcp"),
        listen_port: Schema.Int,
        destination_port: Schema.Int,
        proxyprotocol: Schema.Boolean,
        health_check: Schema.Struct({
          protocol: Schema.Literals(["tcp", "http"]),
          port: Schema.Int,
          interval: Schema.Int,
          timeout: Schema.Int,
          retries: Schema.Int,
          http: Schema.optional(Schema.Struct({
            domain: Schema.NullOr(Schema.String),
            path: Schema.String,
            response: Schema.optional(Schema.String),
            status_codes: Schema.optional(Schema.Array(Schema.String)),
            tls: Schema.optional(Schema.Boolean),
          })),
        }),
      }), Schema.Struct({
        protocol: Schema.Literal("http"),
        listen_port: Schema.Int,
        destination_port: Schema.Int,
        proxyprotocol: Schema.Boolean,
        health_check: Schema.Struct({
          protocol: Schema.Literals(["tcp", "http"]),
          port: Schema.Int,
          interval: Schema.Int,
          timeout: Schema.Int,
          retries: Schema.Int,
          http: Schema.optional(Schema.Struct({
            domain: Schema.NullOr(Schema.String),
            path: Schema.String,
            response: Schema.optional(Schema.String),
            status_codes: Schema.optional(Schema.Array(Schema.String)),
            tls: Schema.optional(Schema.Boolean),
          })),
        }),
        http: Schema.Struct({
          cookie_name: Schema.String,
          cookie_lifetime: Schema.Int,
          timeout_idle: Schema.Int,
          sticky_sessions: Schema.Boolean,
        }),
      }), Schema.Struct({
        protocol: Schema.Literal("https"),
        listen_port: Schema.Int,
        destination_port: Schema.Int,
        proxyprotocol: Schema.Boolean,
        health_check: Schema.Struct({
          protocol: Schema.Literals(["tcp", "http"]),
          port: Schema.Int,
          interval: Schema.Int,
          timeout: Schema.Int,
          retries: Schema.Int,
          http: Schema.optional(Schema.Struct({
            domain: Schema.NullOr(Schema.String),
            path: Schema.String,
            response: Schema.optional(Schema.String),
            status_codes: Schema.optional(Schema.Array(Schema.String)),
            tls: Schema.optional(Schema.Boolean),
          })),
        }),
        http: Schema.Struct({
          cookie_name: Schema.String,
          cookie_lifetime: Schema.Int,
          timeout_idle: Schema.Int,
          certificates: Schema.Array(Schema.Int),
          redirect_http: Schema.Boolean,
          sticky_sessions: Schema.Boolean,
        }),
      })])),
      targets: Schema.Array(Schema.Union([Schema.Struct({
        type: Schema.Literal("server"),
        server: Schema.Struct({
          id: Schema.Int,
          ip: Schema.String,
        }),
        health_status: Schema.Array(Schema.Struct({
          listen_port: Schema.Int,
          status: Schema.Literals(["healthy", "unhealthy", "unknown"]),
        })),
        use_private_ip: Schema.Boolean,
      }), Schema.Struct({
        type: Schema.Literal("label_selector"),
        label_selector: Schema.Struct({
          selector: Schema.String,
        }),
        targets: Schema.Array(Schema.Struct({
          type: Schema.String,
          server: Schema.Struct({
            id: Schema.Int,
            ip: Schema.String,
          }),
          health_status: Schema.Array(Schema.Struct({
            listen_port: Schema.Int,
            status: Schema.Literals(["healthy", "unhealthy", "unknown"]),
          })),
          use_private_ip: Schema.Boolean,
        })),
        use_private_ip: Schema.Boolean,
      }), Schema.Struct({
        type: Schema.Literal("ip"),
        ip: Schema.Struct({
          ip: Schema.String,
        }),
        health_status: Schema.Array(Schema.Struct({
          listen_port: Schema.Int,
          status: Schema.Literals(["healthy", "unhealthy", "unknown"]),
        })),
      })])),
      algorithm: Schema.Struct({
        type: Schema.Literals(["round_robin", "least_connections"]),
      }),
      outgoing_traffic: Schema.NullOr(Schema.Int),
      ingoing_traffic: Schema.NullOr(Schema.Int),
      included_traffic: Schema.Int,
    }),
  });
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
      time_series: Schema.Record(Schema.String, Schema.Struct({
        values: Schema.Array(Schema.Array(Schema.Unknown)),
      })),
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
    load_balancers: Schema.Array(Schema.Struct({
      id: Schema.Int,
      name: Schema.String,
      public_net: Schema.Struct({
        enabled: Schema.Boolean,
        ipv4: Schema.Struct({
          ip: Schema.NullOr(Schema.String),
          dns_ptr: Schema.NullOr(Schema.String),
        }),
        ipv6: Schema.Struct({
          ip: Schema.NullOr(Schema.String),
          dns_ptr: Schema.NullOr(Schema.String),
        }),
      }),
      private_net: Schema.Array(Schema.Struct({
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
        network_zone: Schema.String,
      }),
      load_balancer_type: Schema.Struct({
        id: Schema.Int,
        name: Schema.String,
        description: Schema.String,
        max_connections: Schema.Int,
        max_services: Schema.Int,
        max_targets: Schema.Int,
        max_assigned_certificates: Schema.Int,
        deprecated: Schema.NullOr(Schema.String),
        deprecation: Schema.NullOr(Schema.Struct({
          unavailable_after: Schema.String,
          announced: Schema.String,
        })),
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
      }),
      protection: Schema.Struct({
        delete: Schema.Boolean,
      }),
      labels: Schema.Record(Schema.String, Schema.String),
      created: Schema.String,
      services: Schema.Array(Schema.Union([Schema.Struct({
        protocol: Schema.Literal("tcp"),
        listen_port: Schema.Int,
        destination_port: Schema.Int,
        proxyprotocol: Schema.Boolean,
        health_check: Schema.Struct({
          protocol: Schema.Literals(["tcp", "http"]),
          port: Schema.Int,
          interval: Schema.Int,
          timeout: Schema.Int,
          retries: Schema.Int,
          http: Schema.optional(Schema.Struct({
            domain: Schema.NullOr(Schema.String),
            path: Schema.String,
            response: Schema.optional(Schema.String),
            status_codes: Schema.optional(Schema.Array(Schema.String)),
            tls: Schema.optional(Schema.Boolean),
          })),
        }),
      }), Schema.Struct({
        protocol: Schema.Literal("http"),
        listen_port: Schema.Int,
        destination_port: Schema.Int,
        proxyprotocol: Schema.Boolean,
        health_check: Schema.Struct({
          protocol: Schema.Literals(["tcp", "http"]),
          port: Schema.Int,
          interval: Schema.Int,
          timeout: Schema.Int,
          retries: Schema.Int,
          http: Schema.optional(Schema.Struct({
            domain: Schema.NullOr(Schema.String),
            path: Schema.String,
            response: Schema.optional(Schema.String),
            status_codes: Schema.optional(Schema.Array(Schema.String)),
            tls: Schema.optional(Schema.Boolean),
          })),
        }),
        http: Schema.Struct({
          cookie_name: Schema.String,
          cookie_lifetime: Schema.Int,
          timeout_idle: Schema.Int,
          sticky_sessions: Schema.Boolean,
        }),
      }), Schema.Struct({
        protocol: Schema.Literal("https"),
        listen_port: Schema.Int,
        destination_port: Schema.Int,
        proxyprotocol: Schema.Boolean,
        health_check: Schema.Struct({
          protocol: Schema.Literals(["tcp", "http"]),
          port: Schema.Int,
          interval: Schema.Int,
          timeout: Schema.Int,
          retries: Schema.Int,
          http: Schema.optional(Schema.Struct({
            domain: Schema.NullOr(Schema.String),
            path: Schema.String,
            response: Schema.optional(Schema.String),
            status_codes: Schema.optional(Schema.Array(Schema.String)),
            tls: Schema.optional(Schema.Boolean),
          })),
        }),
        http: Schema.Struct({
          cookie_name: Schema.String,
          cookie_lifetime: Schema.Int,
          timeout_idle: Schema.Int,
          certificates: Schema.Array(Schema.Int),
          redirect_http: Schema.Boolean,
          sticky_sessions: Schema.Boolean,
        }),
      })])),
      targets: Schema.Array(Schema.Union([Schema.Struct({
        type: Schema.Literal("server"),
        server: Schema.Struct({
          id: Schema.Int,
          ip: Schema.String,
        }),
        health_status: Schema.Array(Schema.Struct({
          listen_port: Schema.Int,
          status: Schema.Literals(["healthy", "unhealthy", "unknown"]),
        })),
        use_private_ip: Schema.Boolean,
      }), Schema.Struct({
        type: Schema.Literal("label_selector"),
        label_selector: Schema.Struct({
          selector: Schema.String,
        }),
        targets: Schema.Array(Schema.Struct({
          type: Schema.String,
          server: Schema.Struct({
            id: Schema.Int,
            ip: Schema.String,
          }),
          health_status: Schema.Array(Schema.Struct({
            listen_port: Schema.Int,
            status: Schema.Literals(["healthy", "unhealthy", "unknown"]),
          })),
          use_private_ip: Schema.Boolean,
        })),
        use_private_ip: Schema.Boolean,
      }), Schema.Struct({
        type: Schema.Literal("ip"),
        ip: Schema.Struct({
          ip: Schema.String,
        }),
        health_status: Schema.Array(Schema.Struct({
          listen_port: Schema.Int,
          status: Schema.Literals(["healthy", "unhealthy", "unknown"]),
        })),
      })])),
      algorithm: Schema.Struct({
        type: Schema.Literals(["round_robin", "least_connections"]),
      }),
      outgoing_traffic: Schema.NullOr(Schema.Int),
      ingoing_traffic: Schema.NullOr(Schema.Int),
      included_traffic: Schema.Int,
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
export type ListLoadBalancersResponse = typeof ListLoadBalancersResponse.Type;
export interface ListLoadBalancersQuery {
  sort?: ReadonlyArray<"id" | "id:asc" | "id:desc" | "name" | "name:asc" | "name:desc" | "created" | "created:asc" | "created:desc">;
  name?: string;
  label_selector?: string;
  page?: number;
  per_page?: number;
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
        per_page: Schema.Int,
        previous_page: Schema.NullOr(Schema.Int),
        next_page: Schema.NullOr(Schema.Int),
        last_page: Schema.NullOr(Schema.Int),
        total_entries: Schema.NullOr(Schema.Int),
      }),
    }),
  });
export type ListLoadBalancerActionsResponse = typeof ListLoadBalancerActionsResponse.Type;
export interface ListLoadBalancerActionsQuery {
  sort?: ReadonlyArray<"id" | "id:asc" | "id:desc" | "command" | "command:asc" | "command:desc" | "status" | "status:asc" | "status:desc" | "started" | "started:asc" | "started:desc" | "finished" | "finished:asc" | "finished:desc">;
  status?: ReadonlyArray<"running" | "success" | "error">;
  page?: number;
  per_page?: number;
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
        per_page: Schema.Int,
        previous_page: Schema.NullOr(Schema.Int),
        next_page: Schema.NullOr(Schema.Int),
        last_page: Schema.NullOr(Schema.Int),
        total_entries: Schema.NullOr(Schema.Int),
      }),
    }),
  });
export type ListLoadBalancersActionsResponse = typeof ListLoadBalancersActionsResponse.Type;
export interface ListLoadBalancersActionsQuery {
  id?: ReadonlyArray<number>;
  sort?: ReadonlyArray<"id" | "id:asc" | "id:desc" | "command" | "command:asc" | "command:desc" | "status" | "status:asc" | "status:desc" | "started" | "started:asc" | "started:desc" | "finished" | "finished:asc" | "finished:desc">;
  status?: ReadonlyArray<"running" | "success" | "error">;
  page?: number;
  per_page?: number;
}

export const RemoveLoadBalancerTargetRequest = Schema.Struct({
    type: Schema.Literals(["server", "label_selector", "ip"]),
    server: Schema.optional(Schema.Struct({
      id: Schema.Int,
      ip: Schema.optional(Schema.String),
    })),
    label_selector: Schema.optional(Schema.Struct({
      selector: Schema.String,
    })),
    ip: Schema.optional(Schema.Struct({
      ip: Schema.String,
    })),
  });
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
    load_balancer: Schema.Struct({
      id: Schema.Int,
      name: Schema.String,
      public_net: Schema.Struct({
        enabled: Schema.Boolean,
        ipv4: Schema.Struct({
          ip: Schema.NullOr(Schema.String),
          dns_ptr: Schema.NullOr(Schema.String),
        }),
        ipv6: Schema.Struct({
          ip: Schema.NullOr(Schema.String),
          dns_ptr: Schema.NullOr(Schema.String),
        }),
      }),
      private_net: Schema.Array(Schema.Struct({
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
        network_zone: Schema.String,
      }),
      load_balancer_type: Schema.Struct({
        id: Schema.Int,
        name: Schema.String,
        description: Schema.String,
        max_connections: Schema.Int,
        max_services: Schema.Int,
        max_targets: Schema.Int,
        max_assigned_certificates: Schema.Int,
        deprecated: Schema.NullOr(Schema.String),
        deprecation: Schema.NullOr(Schema.Struct({
          unavailable_after: Schema.String,
          announced: Schema.String,
        })),
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
      }),
      protection: Schema.Struct({
        delete: Schema.Boolean,
      }),
      labels: Schema.Record(Schema.String, Schema.String),
      created: Schema.String,
      services: Schema.Array(Schema.Union([Schema.Struct({
        protocol: Schema.Literal("tcp"),
        listen_port: Schema.Int,
        destination_port: Schema.Int,
        proxyprotocol: Schema.Boolean,
        health_check: Schema.Struct({
          protocol: Schema.Literals(["tcp", "http"]),
          port: Schema.Int,
          interval: Schema.Int,
          timeout: Schema.Int,
          retries: Schema.Int,
          http: Schema.optional(Schema.Struct({
            domain: Schema.NullOr(Schema.String),
            path: Schema.String,
            response: Schema.optional(Schema.String),
            status_codes: Schema.optional(Schema.Array(Schema.String)),
            tls: Schema.optional(Schema.Boolean),
          })),
        }),
      }), Schema.Struct({
        protocol: Schema.Literal("http"),
        listen_port: Schema.Int,
        destination_port: Schema.Int,
        proxyprotocol: Schema.Boolean,
        health_check: Schema.Struct({
          protocol: Schema.Literals(["tcp", "http"]),
          port: Schema.Int,
          interval: Schema.Int,
          timeout: Schema.Int,
          retries: Schema.Int,
          http: Schema.optional(Schema.Struct({
            domain: Schema.NullOr(Schema.String),
            path: Schema.String,
            response: Schema.optional(Schema.String),
            status_codes: Schema.optional(Schema.Array(Schema.String)),
            tls: Schema.optional(Schema.Boolean),
          })),
        }),
        http: Schema.Struct({
          cookie_name: Schema.String,
          cookie_lifetime: Schema.Int,
          timeout_idle: Schema.Int,
          sticky_sessions: Schema.Boolean,
        }),
      }), Schema.Struct({
        protocol: Schema.Literal("https"),
        listen_port: Schema.Int,
        destination_port: Schema.Int,
        proxyprotocol: Schema.Boolean,
        health_check: Schema.Struct({
          protocol: Schema.Literals(["tcp", "http"]),
          port: Schema.Int,
          interval: Schema.Int,
          timeout: Schema.Int,
          retries: Schema.Int,
          http: Schema.optional(Schema.Struct({
            domain: Schema.NullOr(Schema.String),
            path: Schema.String,
            response: Schema.optional(Schema.String),
            status_codes: Schema.optional(Schema.Array(Schema.String)),
            tls: Schema.optional(Schema.Boolean),
          })),
        }),
        http: Schema.Struct({
          cookie_name: Schema.String,
          cookie_lifetime: Schema.Int,
          timeout_idle: Schema.Int,
          certificates: Schema.Array(Schema.Int),
          redirect_http: Schema.Boolean,
          sticky_sessions: Schema.Boolean,
        }),
      })])),
      targets: Schema.Array(Schema.Union([Schema.Struct({
        type: Schema.Literal("server"),
        server: Schema.Struct({
          id: Schema.Int,
          ip: Schema.String,
        }),
        health_status: Schema.Array(Schema.Struct({
          listen_port: Schema.Int,
          status: Schema.Literals(["healthy", "unhealthy", "unknown"]),
        })),
        use_private_ip: Schema.Boolean,
      }), Schema.Struct({
        type: Schema.Literal("label_selector"),
        label_selector: Schema.Struct({
          selector: Schema.String,
        }),
        targets: Schema.Array(Schema.Struct({
          type: Schema.String,
          server: Schema.Struct({
            id: Schema.Int,
            ip: Schema.String,
          }),
          health_status: Schema.Array(Schema.Struct({
            listen_port: Schema.Int,
            status: Schema.Literals(["healthy", "unhealthy", "unknown"]),
          })),
          use_private_ip: Schema.Boolean,
        })),
        use_private_ip: Schema.Boolean,
      }), Schema.Struct({
        type: Schema.Literal("ip"),
        ip: Schema.Struct({
          ip: Schema.String,
        }),
        health_status: Schema.Array(Schema.Struct({
          listen_port: Schema.Int,
          status: Schema.Literals(["healthy", "unhealthy", "unknown"]),
        })),
      })])),
      algorithm: Schema.Struct({
        type: Schema.Literals(["round_robin", "least_connections"]),
      }),
      outgoing_traffic: Schema.NullOr(Schema.Int),
      ingoing_traffic: Schema.NullOr(Schema.Int),
      included_traffic: Schema.Int,
    }),
  });
export type UpdateLoadBalancerResponse = typeof UpdateLoadBalancerResponse.Type;

export const UpdateLoadBalancerServiceRequest = Schema.Struct({
    protocol: Schema.optional(Schema.Literals(["tcp", "http", "https"])),
    listen_port: Schema.Int,
    destination_port: Schema.optional(Schema.Int),
    proxyprotocol: Schema.optional(Schema.Boolean),
    health_check: Schema.optional(Schema.Struct({
      protocol: Schema.optional(Schema.Literals(["tcp", "http"])),
      port: Schema.optional(Schema.Int),
      interval: Schema.optional(Schema.Int),
      timeout: Schema.optional(Schema.Int),
      retries: Schema.optional(Schema.Int),
      http: Schema.optional(Schema.Struct({
        domain: Schema.optional(Schema.NullOr(Schema.String)),
        path: Schema.optional(Schema.String),
        response: Schema.optional(Schema.String),
        status_codes: Schema.optional(Schema.Array(Schema.String)),
        tls: Schema.optional(Schema.Boolean),
      })),
    })),
    http: Schema.optional(Schema.Struct({
      cookie_name: Schema.optional(Schema.String),
      cookie_lifetime: Schema.optional(Schema.Int),
      timeout_idle: Schema.optional(Schema.Int),
      certificates: Schema.optional(Schema.Array(Schema.Int)),
      redirect_http: Schema.optional(Schema.Boolean),
      sticky_sessions: Schema.optional(Schema.Boolean),
    })),
  });
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
    getAction: (id: number, action_id: number): Effect.Effect<GetLoadBalancerActionResponse, HetznerErrors> =>
      HttpClientRequest.get(`/load_balancers/${id}/actions/${action_id}`).pipe(
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
        HttpClientRequest.setUrlParams(toUrlParams(query)),
        http.execute,
        Effect.flatMap(decodeJson(GetLoadBalancerMetricsResponse)),
        Effect.catch(handleHetznerError),
        Effect.withSpan("HetznerClient.loadBalancers.getMetrics"),
      ),

    /** List Load Balancers */
    list: (query?: ListLoadBalancersQuery): Effect.Effect<ListLoadBalancersResponse, HetznerErrors> =>
      HttpClientRequest.get("/load_balancers").pipe(
        HttpClientRequest.setUrlParams(toUrlParams(query)),
        http.execute,
        Effect.flatMap(decodeJson(ListLoadBalancersResponse)),
        Effect.catch(handleHetznerError),
        Effect.withSpan("HetznerClient.loadBalancers.list"),
      ),

    /** List Actions for a Load Balancer */
    listActions: (id: number, query?: ListLoadBalancerActionsQuery): Effect.Effect<ListLoadBalancerActionsResponse, HetznerErrors> =>
      HttpClientRequest.get(`/load_balancers/${id}/actions`).pipe(
        HttpClientRequest.setUrlParams(toUrlParams(query)),
        http.execute,
        Effect.flatMap(decodeJson(ListLoadBalancerActionsResponse)),
        Effect.catch(handleHetznerError),
        Effect.withSpan("HetznerClient.loadBalancers.listActions"),
      ),

    /** List Actions */
    listLoadBalancersActions: (query?: ListLoadBalancersActionsQuery): Effect.Effect<ListLoadBalancersActionsResponse, HetznerErrors> =>
      HttpClientRequest.get("/load_balancers/actions").pipe(
        HttpClientRequest.setUrlParams(toUrlParams(query)),
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
