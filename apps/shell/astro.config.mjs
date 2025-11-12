import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import netlify from "@astrojs/netlify";
import { fileURLToPath } from "node:url";

export default defineConfig({
  output: "server",
  adapter: netlify(),
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
    server: { fs: { allow: ["..", "../../libs"] } },
  },
});
