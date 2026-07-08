/**
 * Downloads the official Hetzner Cloud OpenAPI spec and vendors it into the repo.
 * Run: `bun spec/fetch.ts`. The generator reads the vendored copy, never the network,
 * so generation is reproducible and CI can diff spec bumps.
 */
const SPEC_URL = "https://docs.hetzner.cloud/cloud.spec.json";
const OUT = new URL("./cloud.spec.json", import.meta.url);

const res = await fetch(SPEC_URL);
if (!res.ok) throw new Error(`Failed to fetch spec: ${res.status} ${res.statusText}`);
const text = await res.text();
// Validate it parses and looks like the hcloud spec before overwriting the vendored copy.
const json = JSON.parse(text) as { openapi?: string; info?: { title?: string } };
if (!json.openapi || !json.info?.title?.includes("Hetzner")) {
  throw new Error(`Unexpected spec payload (openapi=${json.openapi}, title=${json.info?.title})`);
}
await Bun.write(OUT, JSON.stringify(json, null, 2) + "\n");
console.log(`Vendored ${json.info.title} (OpenAPI ${json.openapi}) → spec/cloud.spec.json`);
