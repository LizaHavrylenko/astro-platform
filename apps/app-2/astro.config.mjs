import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import { fileURLToPath } from "node:url";
import path from "node:path";

const repoRoot = fileURLToPath(new URL("../../", import.meta.url));

export default defineConfig({
  output: "static",
  integrations: [react()],
  plugins: [tailwindcss()],
  vite: {
    resolve: {
      alias: {
        "@app2-ui": fileURLToPath(
          new URL("../../libs/app-2/src", import.meta.url)
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
