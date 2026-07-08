/**
 * Deterministic naming: how a path becomes a client resource group, and how an
 * operationId becomes a method on that group. The whole scheme is derived from
 * the URL structure + operationId so it stays stable across spec bumps.
 */

/** Irregular single-token casings that a naive camelCase would get wrong. */
const CASING_OVERRIDES: Record<string, string> = {
  poweron: "powerOn",
  poweroff: "powerOff",
  dns: "Dns",
  ptr: "Ptr",
  ip: "Ip",
  ips: "Ips",
  ttl: "Ttl",
  rrset: "Rrset",
  rrsets: "Rrsets",
  iso: "Iso",
  ssh: "Ssh",
  id: "Id",
};

const capitalize = (s: string): string => (s ? s[0]!.toUpperCase() + s.slice(1) : s);

/** snake/kebab tokens → camelCase, honoring the irregular-casing overrides. */
export function camelCase(input: string): string {
  const tokens = input.split(/[_\-\s]+/).filter(Boolean);
  return tokens
    .map((tok, i) => {
      const override = CASING_OVERRIDES[tok.toLowerCase()];
      if (override) return i === 0 ? override[0]!.toLowerCase() + override.slice(1) : override;
      return i === 0 ? tok.toLowerCase() : capitalize(tok.toLowerCase());
    })
    .join("");
}

export const pascalCase = (input: string): string => capitalize(camelCase(input));

/** Naive depluralize sufficient for hcloud path segments (…s → …, …ies → …y). */
function singularizeToken(tok: string): string {
  if (tok.endsWith("ies")) return tok.slice(0, -3) + "y";
  if (tok.endsWith("s") && !tok.endsWith("ss")) return tok.slice(0, -1);
  return tok;
}

/** The resource group key for a path = camelCase of its first segment. */
export function groupKeyForPath(path: string): string {
  const first = path.split("/").filter(Boolean)[0] ?? "root";
  return camelCase(first);
}

/** Raw first path segment (e.g. "load_balancers"), used to derive resource tokens. */
export function groupSegmentForPath(path: string): string {
  return path.split("/").filter(Boolean)[0] ?? "root";
}

/** Does this path segment denote a path parameter? */
export const isParamSeg = (seg: string): boolean => seg.startsWith("{") && seg.endsWith("}");

/** Remove the first contiguous run of `tokens` from `haystack` (whole-token match). */
function removeTokenRun(haystack: string[], tokens: string[]): string[] | null {
  if (tokens.length === 0) return null;
  for (let i = 0; i + tokens.length <= haystack.length; i++) {
    let match = true;
    for (let j = 0; j < tokens.length; j++) {
      if (haystack[i + j] !== tokens[j]) {
        match = false;
        break;
      }
    }
    if (match) return [...haystack.slice(0, i), ...haystack.slice(i + tokens.length)];
  }
  return null;
}

/**
 * The name we'd *like* a method to have: the operationId with the resource noun
 * (singular or plural) stripped, camelCased. e.g. group `servers`:
 *   create_server → create,  list_server_actions → listActions,
 *   add_server_to_placement_group → addToPlacementGroup.
 * Collisions between these preferred names are resolved by resolveMethodNames.
 */
export function preferredMethodName(groupSegment: string, operationId: string): string {
  const resourceTokens = groupSegment.split("_");
  const pluralTokens = resourceTokens;
  const singularTokens = [...resourceTokens.slice(0, -1), singularizeToken(resourceTokens.at(-1)!)];

  let tokens = operationId.split("_");
  const stripped =
    removeTokenRun(tokens, pluralTokens) ?? removeTokenRun(tokens, singularTokens) ?? tokens;
  const name = camelCase(stripped.join("_"));
  return name || camelCase(operationId);
}

/** How specific a path is to a single resource instance — used to break name ties. */
function pathSpecificity(path: string): number {
  const segs = path.split("/").filter(Boolean);
  const params = segs.filter(isParamSeg).length;
  return params * 100 + segs.length;
}

/**
 * Assign a unique method name to every operation in a group. The most
 * instance-specific operation keeps the short preferred name; losers fall back
 * to the full camelCased operationId, then a numeric suffix as a last resort.
 */
export function resolveMethodNames<T extends { path: string; operationId: string }>(
  groupSegment: string,
  ops: T[],
): Map<T, string> {
  const preferred = new Map<T, string>();
  const byName = new Map<string, T[]>();
  for (const op of ops) {
    const name = preferredMethodName(groupSegment, op.operationId);
    preferred.set(op, name);
    (byName.get(name) ?? byName.set(name, []).get(name)!).push(op);
  }

  const result = new Map<T, string>();
  const taken = new Set<string>();

  for (const [name, group] of byName) {
    if (group.length === 1) {
      result.set(group[0]!, name);
      taken.add(name);
    }
  }
  for (const [name, group] of byName) {
    if (group.length === 1) continue;
    // Most specific keeps the short name; others fall back.
    const sorted = [...group].sort((a, b) => pathSpecificity(b.path) - pathSpecificity(a.path));
    for (let i = 0; i < sorted.length; i++) {
      const op = sorted[i]!;
      let candidate = i === 0 && !taken.has(name) ? name : camelCase(op.operationId);
      let n = 2;
      while (taken.has(candidate)) candidate = `${camelCase(op.operationId)}${n++}`;
      result.set(op, candidate);
      taken.add(candidate);
    }
  }
  return result;
}
