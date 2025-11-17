/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./apps/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}",
    "./libs/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
