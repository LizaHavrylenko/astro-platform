import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx}",
    "../../libs/**/*.{astro,html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // optional: extend colors, fonts, spacing, etc.
    },
  },
} satisfies Config;
