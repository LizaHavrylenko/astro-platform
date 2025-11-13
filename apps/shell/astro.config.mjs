import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import { fileURLToPath } from "node:url";
import path from "node:path";
import tailwindcss from "@tailwindcss/vite";

const repoRoot = fileURLToPath(new URL("../../", import.meta.url));

export default defineConfig({
  output: "static",
  integrations: [react()],
  vite: {
    resolve: {
      alias: {
        "@ui": fileURLToPath(new URL("../../libs/ui/src", import.meta.url)),
        "@state": fileURLToPath(
          new URL("../../libs/state/src", import.meta.url)
        ),
        "@app1": fileURLToPath(
          new URL("../../libs/app-1/src", import.meta.url)
        ),
        "@app2": fileURLToPath(
          new URL("../../libs/app-2/src", import.meta.url)
        ),
      },
    },

    server: {
      fs: {
        allow: [
          repoRoot, // monorepo root
          path.join(repoRoot, "apps"), // your apps
          path.join(repoRoot, "libs"), // your libs
          path.join(repoRoot, "node_modules"), // allow astro's dev toolbar
        ],
      },
    },

    plugins: [tailwindcss()],
  },
});
