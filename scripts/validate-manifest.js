/**
 * validate-manifest.js
 * Checks manifest.json for required MV3 fields.
 */
import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { join, dirname } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const manifest = JSON.parse(readFileSync(join(__dirname, "../manifest.json"), "utf8"));

const required = ["manifest_version", "name", "version", "description", "action"];
const errors = [];

for (const field of required) {
  if (!manifest[field]) errors.push(`Missing required field: ${field}`);
}

if (manifest.manifest_version !== 3) errors.push("manifest_version must be 3");
if (!/^\d+\.\d+\.\d+$/.test(manifest.version)) errors.push("version must be semver (x.y.z)");

if (errors.length > 0) {
  console.error("❌ manifest.json validation failed:");
  errors.forEach((e) => console.error("  -", e));
  process.exit(1);
}

console.log("✅ manifest.json is valid (MV3)");
