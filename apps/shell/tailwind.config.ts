import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx,vue}",
    "../../libs/**/*.{astro,html,js,jsx,ts,tsx,vue}", // include shared libs
  ],
  theme: { extend: {} },
} satisfies Config;
