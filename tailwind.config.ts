import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1a472a",
          50: "#f0f7f1",
          100: "#dcede0",
          200: "#bcdcc4",
          300: "#90c49f",
          400: "#5fa575",
          500: "#3d8854",
          600: "#2b6d41",
          700: "#1a472a",
          800: "#1a4029",
          900: "#163523",
        },
        secondary: {
          DEFAULT: "#8b5a2b",
          50: "#faf6f1",
          100: "#f3e9dc",
          200: "#e6d1b8",
          300: "#d5b38c",
          400: "#c49264",
          500: "#b87a4a",
          600: "#8b5a2b",
          700: "#784b25",
          800: "#643e21",
          900: "#54351e",
        },
        cream: "#f5f5dc",
        background: "#fafafa",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      fontFeatureSettings: {
        tnum: '"tnum"',
      },
    },
  },
  plugins: [],
};

export default config;
