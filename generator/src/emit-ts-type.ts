/**
 * Shallow JSON Schema → TypeScript type text. Used only for query-parameter
 * objects, which are flat (string/int/boolean, enums, and arrays thereof).
 * Request/response bodies get their types from Effect-Schema `.Type` inference,
 * so they don't go through here.
 */
import type { JsonSchema } from "./openapi.ts";

export function tsTypeForQueryParam(schema: JsonSchema | undefined): string {
  if (!schema) return "string";
  const raw = schema.type;
  const types = Array.isArray(raw) ? raw.filter((t) => t !== "null") : raw ? [raw] : [];
  const base = types[0];

  if (schema.enum && schema.enum.length > 0) {
    const vals = schema.enum.filter((v) => v !== null).map((v) => JSON.stringify(v));
    return vals.join(" | ");
  }
  if (base === "array") {
    return `ReadonlyArray<${tsTypeForQueryParam(schema.items)}>`;
  }
  switch (base) {
    case "integer":
    case "number":
      return "number";
    case "boolean":
      return "boolean";
    case "string":
      return "string";
    default:
      return "string";
  }
}
