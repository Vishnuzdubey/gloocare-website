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
        brand: {
          brown: {
            DEFAULT: "#4A3320",
            dark: "#2C1C12",
          },
          gold: {
            DEFAULT: "#D8B07A",
            light: "#F7F2E9",
          },
          cream: "#F7F2E9",
          ink: "#1B1712",
          green: "#3FA85E",
          gray: "#8A7B6A",
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-sora)", "sans-serif"],
      },
      keyframes: {
        shine: {
          "0%": { transform: "translateX(-150%) skewX(-15deg)" },
          "100%": { transform: "translateX(150%) skewX(-15deg)" },
        },
      },
      animation: {
        shine: "shine 1.2s cubic-bezier(0.4, 0, 0.2, 1) infinite",
        "shine-once": "shine 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards",
      },
    },
  },
  plugins: [],
};
export default config;
