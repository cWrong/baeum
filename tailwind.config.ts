/** @format */

import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      purple: "#3f3cbb",
      midnight: "#121063",
      metal: "#565584",
      tahiti: "#3ab7bf",
      silver: "#ecebff",
      "bubble-gum": "#ff77e9",
      bermuda: "#78dcca",
      blue: {
        light: "#2563eb",
        DEFAULT: "#1f2e3d",
        dark: "#1e1b4b",
      },
      white: {
        DEFAULT: "#ffffff",
        dark: "#adb5bd",
      },
    },
  },
  darkMode: "class",
  plugins: [require("tailwind-scrollbar-hide")],
};
export default config;
