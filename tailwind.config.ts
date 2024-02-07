import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,

      padding: {
        DEFAULT: "1.875rem",
      },
    },
    colors: {
      black: "#000",
      white: "#fff",
      accent: "#254C10",
    },
    fontFamily: {
      primary: ["var(--montserrat)", "sans-serif"],
      secondary: ["var(--inter)", "sans-serif"],
    },
    extend: {
      fontSize: {
        h1: ["2.5rem", "1.225"],
        h2: ["1.875rem", "1.2"],
        "3xl": "1.875rem",
      },
      container: {
        screens: {
          "2xl": "1440px",
        },
      },
    },
  },
  plugins: [],
};
export default config;
