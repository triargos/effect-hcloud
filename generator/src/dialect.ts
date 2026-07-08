/**
 * A Dialect supplies the Effect-Schema atom spellings that differ between
 * Effect v3 and Effect v4. The schema transform (emit-schema.ts) and the
 * resource/runtime emitters are written once against this interface; picking a
 * dialect is the only thing that distinguishes the v3 and v4 outputs.
 */
export type Dialect = {
  /** effect major this dialect targets, for banners/peerDeps. */
  readonly effectMajor: 3 | 4;

  // --- scalar atoms ---
  readonly string: string;
  readonly int: string;
  readonly number: string;
  readonly boolean: string;
  readonly unknown: string;

  // --- combinators (return source strings) ---
  array(item: string): string;
  nullOr(inner: string): string;
  optional(inner: string): string;
  record(value: string): string;
  union(members: string[]): string;
  /** A closed set of literal values → the smallest correct literal schema. */
  literal(values: Array<string | number | boolean>): string;
  struct(fieldsSource: string): string;

  // --- key normalization (camelCase Type keys ↔ snake_case wire keys) ---
  /**
   * Attach the wire key to a single field whose Type key was camelCased. v3 wraps
   * the field with `fromKey`; v4 is a no-op (renames are applied at the struct level).
   */
  fieldRename(fieldSource: string, wireKey: string, optional: boolean): string;
  /**
   * Attach all wire keys to a struct. v4 appends `.pipe(Schema.encodeKeys({...}))`;
   * v3 is a no-op (each field already carries its own `fromKey`).
   */
  structRename(structSource: string, renames: ReadonlyArray<readonly [typeKey: string, wireKey: string]>): string;
};

const q = (v: string | number | boolean): string =>
  typeof v === "string" ? JSON.stringify(v) : String(v);

const objKey = (k: string): string => (/^[A-Za-z_$][A-Za-z0-9_$]*$/.test(k) ? k : JSON.stringify(k));

export const v3: Dialect = {
  effectMajor: 3,
  string: "Schema.String",
  int: "Schema.Int",
  number: "Schema.Number",
  boolean: "Schema.Boolean",
  unknown: "Schema.Unknown",
  array: (item) => `Schema.Array(${item})`,
  nullOr: (inner) => `Schema.NullOr(${inner})`,
  optional: (inner) => `Schema.optional(${inner})`,
  record: (value) => `Schema.Record({ key: Schema.String, value: ${value} })`,
  union: (members) => `Schema.Union(${members.join(", ")})`,
  literal: (values) => `Schema.Literal(${values.map(q).join(", ")})`,
  struct: (fields) => `Schema.Struct({${fields}})`,
  fieldRename: (field, wireKey, optional) =>
    optional
      ? `${field}.pipe(Schema.fromKey(${JSON.stringify(wireKey)}))`
      : `Schema.propertySignature(${field}).pipe(Schema.fromKey(${JSON.stringify(wireKey)}))`,
  structRename: (struct) => struct,
};

export const v4: Dialect = {
  effectMajor: 4,
  string: "Schema.String",
  int: "Schema.Int",
  number: "Schema.Number",
  boolean: "Schema.Boolean",
  unknown: "Schema.Unknown",
  array: (item) => `Schema.Array(${item})`,
  nullOr: (inner) => `Schema.NullOr(${inner})`,
  optional: (inner) => `Schema.optional(${inner})`,
  // v4 Record takes positional args.
  record: (value) => `Schema.Record(Schema.String, ${value})`,
  // v4 Union takes a single array of members.
  union: (members) => `Schema.Union([${members.join(", ")}])`,
  // v4 uses Schema.Literals([...]) for a set, Schema.Literal(x) for a single value.
  literal: (values) =>
    values.length === 1 ? `Schema.Literal(${q(values[0]!)})` : `Schema.Literals([${values.map(q).join(", ")}])`,
  struct: (fields) => `Schema.Struct({${fields}})`,
  fieldRename: (field) => field,
  structRename: (struct, renames) =>
    renames.length === 0
      ? struct
      : `${struct}.pipe(Schema.encodeKeys({ ${renames.map(([t, w]) => `${objKey(t)}: ${JSON.stringify(w)}`).join(", ")} }))`,
};
