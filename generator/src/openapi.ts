/**
 * Loose structural types for the subset of OpenAPI 3.1 the Hetzner Cloud spec uses.
 * The spec inlines every schema (no $ref graph) and expresses nullability with
 * 3.1 type-arrays (`type: ["string", "null"]`), so this stays deliberately small.
 */

export type JsonSchema = {
  type?: string | string[];
  title?: string;
  description?: string;
  format?: string;
  enum?: Array<string | number | boolean | null>;
  const?: string | number | boolean;
  properties?: Record<string, JsonSchema>;
  required?: string[];
  items?: JsonSchema;
  additionalProperties?: boolean | JsonSchema;
  oneOf?: JsonSchema[];
  anyOf?: JsonSchema[];
  allOf?: JsonSchema[];
  nullable?: boolean; // 3.0 fallback, unused by hcloud but handled defensively
  deprecated?: boolean;
  default?: unknown;
};

export type Parameter = {
  name: string;
  in: "path" | "query" | "header" | "cookie";
  required?: boolean;
  description?: string;
  deprecated?: boolean;
  schema?: JsonSchema;
};

export type MediaType = { schema?: JsonSchema };

export type RequestBody = {
  required?: boolean;
  description?: string;
  content?: Record<string, MediaType>;
};

export type Response = {
  description?: string;
  content?: Record<string, MediaType>;
};

export type Operation = {
  operationId?: string;
  summary?: string;
  description?: string;
  tags?: string[];
  deprecated?: boolean;
  parameters?: Parameter[];
  requestBody?: RequestBody;
  responses?: Record<string, Response>;
};

export type PathItem = {
  parameters?: Parameter[];
} & Partial<Record<"get" | "post" | "put" | "delete" | "patch", Operation>>;

export type OpenApiSpec = {
  openapi: string;
  info: { title: string; version: string; description?: string };
  servers?: Array<{ url: string }>;
  paths: Record<string, PathItem>;
  components?: { schemas?: Record<string, JsonSchema> };
};

export const HTTP_METHODS = ["get", "post", "put", "delete", "patch"] as const;
export type HttpMethod = (typeof HTTP_METHODS)[number];
