import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import { fileURLToPath } from "node:url";
import path from "node:path";

const repoRoot = fileURLToPath(new URL("../../", import.meta.url));

export default defineConfig({
  output: "static",
  integrations: [react()],
  vite: {
    resolve: {
      alias: {
        "@app1-ui": fileURLToPath(
          new URL("../../libs/app-1/src", import.meta.url)
        ),
      },
    },
    server: {
      fs: {
        allow: [
          repoRoot,
          path.join(repoRoot, "apps"),
          path.join(repoRoot, "libs"),
          path.join(repoRoot, "node_modules"),
        ],
      },
    },
  },
});
