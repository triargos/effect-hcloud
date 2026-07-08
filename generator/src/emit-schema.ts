/**
 * The core transform: an inline OpenAPI 3.1 JSON Schema node → Effect-Schema
 * source text, driven by a Dialect. This is where "input/output values map to
 * Effect schemas" actually happens; it is shared verbatim by the v3 and v4
 * emitters.
 */
import type { Dialect } from "./dialect.ts";
import { camelCase } from "./naming.ts";
import type { JsonSchema } from "./openapi.ts";

/** Split a 3.1 type into its non-null base type(s) and whether `"null"` was present. */
function splitNull(schema: JsonSchema): { types: string[]; nullable: boolean } {
  const raw = schema.type;
  let types: string[] = raw === undefined ? [] : Array.isArray(raw) ? [...raw] : [raw];
  let nullable = schema.nullable === true;
  if (types.includes("null")) {
    nullable = true;
    types = types.filter((t) => t !== "null");
  }
  return { types, nullable };
}

function isPlainObject(schema: JsonSchema, baseType: string | undefined): boolean {
  return baseType === "object" || (baseType === undefined && schema.properties !== undefined);
}

/** Wrap with NullOr when the schema admits null. */
const withNull = (d: Dialect, src: string, nullable: boolean): string =>
  nullable ? d.nullOr(src) : src;

/**
 * Emit the Effect-Schema source for a single JSON Schema node. `indent` is the
 * leading whitespace for the *contents* of any struct this node expands into,
 * so nested objects stay readable.
 */
export function schemaToEffect(schema: JsonSchema, d: Dialect, indent = "  "): string {
  // Union via oneOf/anyOf — emit a union of the branches (dropping bare null branches,
  // which we fold into nullability).
  const combinator = schema.oneOf ?? schema.anyOf;
  if (combinator && combinator.length > 0) {
    const nonNull = combinator.filter((b) => !(b.type === "null"));
    const nullable = nonNull.length !== combinator.length;
    const members = nonNull.map((b) => schemaToEffect(b, d, indent));
    const union = members.length === 1 ? members[0]! : d.union(members);
    return withNull(d, union, nullable);
  }

  // allOf — Hetzner doesn't really use it, but merge object branches defensively.
  if (schema.allOf && schema.allOf.length > 0) {
    const merged: JsonSchema = { type: "object", properties: {}, required: [] };
    for (const part of schema.allOf) {
      Object.assign(merged.properties!, part.properties ?? {});
      merged.required!.push(...(part.required ?? []));
    }
    return schemaToEffect(merged, d, indent);
  }

  const { types, nullable } = splitNull(schema);
  const baseType = types[0];

  // Closed enum → literal union (enums may also be nullable).
  if (schema.enum && schema.enum.length > 0) {
    const values = schema.enum.filter((v): v is string | number | boolean => v !== null);
    const hasNull = values.length !== schema.enum.length;
    return withNull(d, d.literal(values), nullable || hasNull);
  }
  if (schema.const !== undefined) {
    return withNull(d, d.literal([schema.const]), nullable);
  }

  // Object → Struct, or Record when it's an open map.
  if (isPlainObject(schema, baseType)) {
    const props = schema.properties ?? {};
    const keys = Object.keys(props);
    if (keys.length === 0 && schema.additionalProperties) {
      const value =
        typeof schema.additionalProperties === "object"
          ? schemaToEffect(schema.additionalProperties, d, indent)
          : d.unknown;
      return withNull(d, d.record(value), nullable);
    }
    if (keys.length === 0) {
      // Objectless object: treat as an open record of unknown.
      return withNull(d, d.record(d.unknown), nullable);
    }
    return withNull(d, structFields(schema, d, indent), nullable);
  }

  if (baseType === "array") {
    const item = schema.items ? schemaToEffect(schema.items, d, indent) : d.unknown;
    return withNull(d, d.array(item), nullable);
  }

  const scalar = scalarType(baseType, schema, d);
  return withNull(d, scalar, nullable);
}

function scalarType(baseType: string | undefined, schema: JsonSchema, d: Dialect): string {
  switch (baseType) {
    case "string":
      return d.string;
    case "integer":
      return d.int;
    case "number":
      return d.number;
    case "boolean":
      return d.boolean;
    default:
      return d.unknown;
  }
}

/**
 * Render a `Schema.Struct({ ... })` from an object schema's properties. JSON keys
 * are exposed as camelCase on the decoded (Type) side; the original snake_case
 * key is preserved on the wire via the dialect's rename hooks (`fromKey` in v3,
 * struct-level `encodeKeys` in v4). Dynamic map keys (Record) are never renamed.
 */
export function structFields(schema: JsonSchema, d: Dialect, indent: string): string {
  const props = schema.properties ?? {};
  const required = new Set(schema.required ?? []);
  const inner = indent + "  ";
  const lines: string[] = [];
  const renames: Array<readonly [string, string]> = [];
  for (const [key, prop] of Object.entries(props)) {
    const typeKey = camelCase(key);
    const optional = !required.has(key);
    let field = schemaToEffect(prop, d, inner);
    if (optional) field = d.optional(field);
    if (typeKey !== key) {
      field = d.fieldRename(field, key, optional);
      renames.push([typeKey, key]);
    }
    lines.push(`${inner}${propKey(typeKey)}: ${field},`);
  }
  return d.structRename(d.struct(`\n${lines.join("\n")}\n${indent}`), renames);
}

/** Quote a property key only when it isn't a safe JS identifier. */
export function propKey(name: string): string {
  return /^[A-Za-z_$][A-Za-z0-9_$]*$/.test(name) ? name : JSON.stringify(name);
}
