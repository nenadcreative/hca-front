/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  presets: [require("./theme-default.js")],
  theme: {
    extend: {},
  },
  plugins: [],
};
