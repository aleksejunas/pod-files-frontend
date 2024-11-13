import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        gruvbox: {
          "bg-primary": "#282828",
          "bg-secondary": "#3c3836",
          "bg-tertiary": "#504945",
          "fg-primary": "#ebdbb2",
          "fg-secondary": "#d5c4a1",
          "fg-tertiary": "#bdae93",
          "fg-quaternary": "#a89984",
          red: "#cc241d",
          green: "#98971a",
          yellow: "#d79921",
          blue: "#458588",
          purple: "#b16286",
          aqua: "#689d6a",
          orange: "#d65d0e",
          gray: "#928374",
        },
      },
    },
  },
  plugins: [],
};
export default config;

// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }
//
