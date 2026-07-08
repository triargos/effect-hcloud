/**
 * Spec → runtime-agnostic IR. Groups operations into resources, resolves path
 * and query parameters, and picks the success response. The IR carries raw
 * JSON Schema nodes; turning those into Effect-Schema text is the emitters' job
 * (via schemaToEffect), so the IR itself is dialect-independent.
 */
import { HTTP_METHODS, type HttpMethod, type JsonSchema, type OpenApiSpec, type Parameter } from "./openapi.ts";
import { camelCase, groupKeyForPath, groupSegmentForPath, isParamSeg, pascalCase, resolveMethodNames } from "./naming.ts";

export type PathParamIR = { name: string; tsType: "number" | "string" };

export type OperationIR = {
  operationId: string;
  method: HttpMethod;
  path: string;
  methodName: string;
  summary?: string;
  description?: string;
  deprecated: boolean;
  pathParams: PathParamIR[];
  queryParams: Parameter[];
  requestSchema?: JsonSchema;
  requestRequired: boolean;
  successCode: string;
  successSchema?: JsonSchema;
  /** undefined content type ⇒ empty body (void). "application/json" ⇒ decode. */
  successContentType?: string;
};

export type ResourceIR = {
  key: string; // camelCase group, e.g. "loadBalancers"
  segment: string; // raw first path segment, e.g. "load_balancers"
  pascal: string; // "LoadBalancers"
  operations: OperationIR[];
};

const pathParamType = (schema: JsonSchema | undefined, name: string): "number" | "string" => {
  const t = schema?.type;
  const types = Array.isArray(t) ? t : t ? [t] : [];
  if (types.includes("integer") || types.includes("number")) return "number";
  if (types.length > 0) return "string";
  // No schema: infer from the well-known hcloud param names.
  return name === "id" || name.endsWith("_id") ? "number" : "string";
};

/** Choose the success response: the lowest 2xx code, preferring one with a body. */
function pickSuccess(responses: Record<string, { description?: string; content?: Record<string, { schema?: JsonSchema }> }>) {
  const codes = Object.keys(responses)
    .filter((c) => c.startsWith("2") || c === "2xx")
    .sort();
  for (const preferBody of [true, false]) {
    for (const code of codes) {
      const json = responses[code]?.content?.["application/json"];
      if (preferBody && json?.schema) return { code, schema: json.schema, contentType: "application/json" };
      if (!preferBody) {
        const anyContent = responses[code]?.content;
        const firstType = anyContent ? Object.keys(anyContent)[0] : undefined;
        return { code, schema: firstType ? anyContent![firstType]!.schema : undefined, contentType: firstType };
      }
    }
  }
  return { code: codes[0] ?? "200", schema: undefined, contentType: undefined };
}

export function buildIR(spec: OpenApiSpec): ResourceIR[] {
  const byGroup = new Map<string, { segment: string; ops: OperationIR[] }>();

  for (const [path, item] of Object.entries(spec.paths)) {
    const pathLevelParams = item.parameters ?? [];
    for (const method of HTTP_METHODS) {
      const op = item[method];
      if (!op) continue;
      const operationId = op.operationId ?? `${method}_${path.replace(/\W+/g, "_")}`;
      const params = [...pathLevelParams, ...(op.parameters ?? [])];

      const pathParams: PathParamIR[] = path
        .split("/")
        .filter((seg) => isParamSeg(seg))
        .map((seg) => {
          const name = seg.slice(1, -1);
          const decl = params.find((p) => p.in === "path" && p.name === name);
          return { name, tsType: pathParamType(decl?.schema, name) };
        });

      const queryParams = params.filter((p) => p.in === "query");
      const reqJson = op.requestBody?.content?.["application/json"];
      const success = pickSuccess(op.responses ?? {});

      const opIR: OperationIR = {
        operationId,
        method,
        path,
        methodName: "", // filled after grouping (needs the whole group for collision resolution)
        summary: op.summary,
        description: op.description,
        deprecated: op.deprecated === true,
        pathParams,
        queryParams,
        requestSchema: reqJson?.schema,
        requestRequired: op.requestBody?.required === true,
        successCode: success.code,
        successSchema: success.schema,
        successContentType: success.contentType,
      };

      const key = groupKeyForPath(path);
      const segment = groupSegmentForPath(path);
      const bucket = byGroup.get(key) ?? byGroup.set(key, { segment, ops: [] }).get(key)!;
      bucket.ops.push(opIR);
    }
  }

  const resources: ResourceIR[] = [];
  for (const [key, { segment, ops }] of byGroup) {
    const names = resolveMethodNames(segment, ops);
    for (const op of ops) op.methodName = names.get(op)!;
    ops.sort((a, b) => a.methodName.localeCompare(b.methodName));
    resources.push({ key, segment, pascal: pascalCase(segment), operations: ops });
  }
  resources.sort((a, b) => a.key.localeCompare(b.key));
  return resources;
}
