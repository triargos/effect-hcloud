/**
 * Turn a query object into URL param pairs: skips undefined/null, stringifies
 * scalars, and expands arrays into repeated keys (Hetzner's list filters).
 */
export const toUrlParams = (
  query: object | undefined,
): ReadonlyArray<readonly [string, string]> => {
  if (!query) return [];
  const out: Array<[string, string]> = [];
  for (const [key, value] of Object.entries(query as Record<string, unknown>)) {
    if (value === undefined || value === null) continue;
    if (Array.isArray(value)) {
      for (const item of value) if (item !== undefined && item !== null) out.push([key, String(item)]);
    } else {
      out.push([key, String(value)]);
    }
  }
  return out;
};
