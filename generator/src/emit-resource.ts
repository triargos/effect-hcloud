/**
 * The resource-module emitter (Style A), shared by both targets. A `Profile`
 * captures the only things that differ between Effect v3 and v4: the import
 * block, the schema Dialect, the response-decode combinator name, and the
 * catch-all name. Everything else — schemas, method shapes, HTTP pipelines — is
 * emitted identically, which is what keeps the two published packages in lockstep.
 */
import type { Dialect } from "./dialect.ts";
import { schemaToEffect, propKey } from "./emit-schema.ts";
import { tsTypeForQueryParam } from "./emit-ts-type.ts";
import type { OperationIR, ResourceIR } from "./ir.ts";
import { pascalCase } from "./naming.ts";

export type Profile = {
  readonly dialect: Dialect;
  /** Import block placed at the top of every resource module. */
  readonly header: string;
  /** Response body decoder, e.g. "HttpClientResponse.schemaBodyJson" (v3) / "schemaJson" (v4). */
  readonly responseDecode: string;
  /** Catch-all combinator, e.g. "Effect.catchAll" (v3) / "Effect.catch" (v4). */
  readonly catchAll: string;
};

const reqName = (op: OperationIR) => `${pascalCase(op.operationId)}Request`;
const resName = (op: OperationIR) => `${pascalCase(op.operationId)}Response`;
const queryName = (op: OperationIR) => `${pascalCase(op.operationId)}Query`;

const isJson = (op: OperationIR) => op.successContentType?.startsWith("application/json") ?? false;
const isVoid = (op: OperationIR) => op.successContentType === undefined;
const isText = (op: OperationIR) => !isJson(op) && !isVoid(op);

function pathExpr(op: OperationIR): string {
  if (op.pathParams.length === 0) return JSON.stringify(op.path);
  return "`" + op.path.replace(/\{([^}]+)\}/g, (_m, name) => "${" + name + "}") + "`";
}

function returnType(op: OperationIR): string {
  if (isVoid(op)) return "void";
  if (isText(op)) return "string";
  return op.successSchema ? resName(op) : "unknown";
}

function methodArgs(op: OperationIR): string {
  const args: string[] = [];
  for (const p of op.pathParams) args.push(`${p.name}: ${p.tsType}`);
  if (op.requestSchema) args.push(op.requestRequired ? `body: ${reqName(op)}` : `body?: ${reqName(op)}`);
  if (op.queryParams.length > 0) args.push(`query?: ${queryName(op)}`);
  return args.join(", ");
}

function pipeSteps(op: OperationIR, span: string, p: Profile): string[] {
  const path = pathExpr(op);
  const steps: string[] = [];

  if (op.method === "delete") {
    steps.push(`http.del(${path}).pipe(`);
  } else {
    steps.push(`HttpClientRequest.${op.method}(${path}).pipe(`);
    if (op.queryParams.length > 0) steps.push(`  HttpClientRequest.setUrlParams(toUrlParams(query)),`);
    if (op.requestSchema) {
      const body = op.requestRequired ? "body" : `body ?? ({} as ${reqName(op)})`;
      steps.push(`  HttpClientRequest.schemaBodyJson(${reqName(op)})(${body}),`);
      steps.push(`  Effect.flatMap(http.execute),`);
    } else {
      steps.push(`  http.execute,`);
    }
  }

  if (isVoid(op)) steps.push(`  Effect.asVoid,`);
  else if (isText(op)) steps.push(`  Effect.flatMap((response) => response.text),`);
  else if (op.successSchema) steps.push(`  Effect.flatMap(${p.responseDecode}(${resName(op)})),`);
  else steps.push(`  Effect.flatMap((response) => response.json),`);

  steps.push(`  ${p.catchAll}(handleHetznerError),`);
  steps.push(`  Effect.withSpan(${JSON.stringify(span)}),`);
  steps.push(`)`);
  return steps;
}

function emitMethod(resource: ResourceIR, op: OperationIR, p: Profile): string {
  const doc = op.summary ? `    /** ${op.summary.replace(/\*\//g, "*\\/")} */\n` : "";
  const span = `HetznerClient.${resource.key}.${op.methodName}`;
  const body = pipeSteps(op, span, p)
    .map((s) => `      ${s}`)
    .join("\n");
  return doc + `    ${op.methodName}: (${methodArgs(op)}): Effect.Effect<${returnType(op)}, HetznerError> =>\n` + body + `,`;
}

function emitSchemas(op: OperationIR, d: Dialect): string {
  const out: string[] = [];
  if (op.requestSchema) {
    out.push(`export const ${reqName(op)} = ${schemaToEffect(op.requestSchema, d)};`);
    out.push(`export type ${reqName(op)} = typeof ${reqName(op)}.Type;`);
  }
  if (isJson(op) && op.successSchema) {
    out.push(`export const ${resName(op)} = ${schemaToEffect(op.successSchema, d)};`);
    out.push(`export type ${resName(op)} = typeof ${resName(op)}.Type;`);
  }
  if (op.queryParams.length > 0) {
    const fields = op.queryParams
      .map((qp) => `  ${propKey(qp.name)}${qp.required ? "" : "?"}: ${tsTypeForQueryParam(qp.schema)};`)
      .join("\n");
    out.push(`export interface ${queryName(op)} {\n${fields}\n}`);
  }
  return out.join("\n");
}

export function emitResource(resource: ResourceIR, p: Profile): string {
  const schemas = resource.operations.map((op) => emitSchemas(op, p.dialect)).filter(Boolean).join("\n\n");
  const methods = resource.operations.map((op) => emitMethod(resource, op, p)).join("\n\n");
  const factory =
    `export const make${resource.pascal} = (http: HttpClient.HttpClient) => ({\n` +
    methods +
    `\n});\n\n` +
    `export type ${resource.pascal}Api = ReturnType<typeof make${resource.pascal}>;\n`;

  const header = `/**\n * ${resource.pascal} — generated from the Hetzner Cloud OpenAPI spec. Do not edit by hand.\n */\n${p.header}`;
  return `${header}\n\n${schemas}\n\n\n${factory}`;
}
