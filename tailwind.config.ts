import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "blog-card-gradient":
          "radial-gradient(120% 100% at 20% 0%, transparent 50%, #968c7e)",
      },

      colors: {
        primary: {
          100: "#b7ab98",
          200: "#968c7e",
        },
        dark: {
          100: "#0a0a0a",
          200: "#141414",
          300: "#1f1f1f",
          500: "#010009", //bg
          400: "#3d3d3d",
          800: "#10131e ",
        },
        white: {
          100: "#ffffff",
          200: "#f5f5f5",
          300: "#ebebeb",
          400: "#e0e0e0",
          500: "#d6d6d6",
          600: "#b8b8b8",
          700: "#858585",
        },
        gray: {
          100: "rgba(255, 255, 255, 0.1)",
          200: "rgba(255, 255, 255, 0.6)",
          300: "rgba(255, 255, 255, 0.7)",
          500: "#8a898e",
        },
      },
    },
  },
  plugins: [],
};
export default config;
