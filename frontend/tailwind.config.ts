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

        pastel: {
          "bg-primary": "#f8f8ff",
          "bg-secondary": "#e6e6fa",
          "bg-tertiary": "#ffe4e1",
          "fg-primary": "#696969",
          "fg-secondary": "#808080",
          "fg-tertiary": "#a9a9a9",
          "fg-quaternary": "#c0c0c0",
          red: "#ffb6c1",
          green: "#98fb98",
          yellow: "#fffacd",
          blue: "#add8e6",
          purple: "#dda0dd",
          aqua: "#e0ffff",
          orange: "#ffdab9",
          gray: "#d3d3d3",
        },
      },
    },
  },
  plugins: [],
};

export default config;
