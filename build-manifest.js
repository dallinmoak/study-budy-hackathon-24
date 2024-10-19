import { readFileSync, writeFileSync } from "fs";
import { join, dirname } from "path";

import { fileURLToPath } from "url";

// Get the current file name and directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const viteManifestPath = join(__dirname, "dist/.vite", "manifest.json");
const newManifestPath = join(__dirname, "dist", "manifest.json");

const viteManifest = JSON.parse(readFileSync(viteManifestPath, "utf-8"));

const newManifest = {
  manifest_version: 3,
  name: "Hello Extensions",
  description: "Base Level Extension",
  version: "1.0",
  action: {
    default_popup: "src/popup.html",
  },
  content_scripts: [
    {
      matches: ["<all_urls>"],
      js: ["test.js"],
    },
  ],
  permissions: ["activeTab"],
  host_permissions: ["<all_urls>"],
};

// for (const key in viteManifest) {
//   if (viteManifest[key].isEntry && viteManifest[key].file.includes("index")) {
//     newManifest.content_scripts[0].js.push(viteManifest[key].file);
//   }
// }

writeFileSync(newManifestPath, JSON.stringify(newManifest, null, 2));
