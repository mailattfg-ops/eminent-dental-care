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
          DEFAULT: "#B8922A",
          light: "#D4A94A",
          dark: "#8C6B1A",
        },
        secondary: {
          DEFAULT: "#D4A94A",
          light: "#E8C470",
          dark: "#B8922A",
        },
        brand: {
          navy: "#1B2A4A",
          navyDark: "#111D33",
          navyLight: "#2A3F6B",
          gold: "#B8922A",
          goldLight: "#D4A94A",
          goldMid: "#C9A040",
          cream: "#FAF7F2",
          slate: "#3D4F6B",
          white: "#FFFFFF",
          // Legacy aliases for backward compat during transition
          red: "#B8922A",
          dark: "#1B2A4A",
          muted: "#FAF7F2",
        },
        base: {
          white: "#FFFFFF",
          gray: "#F8F9FA",
        },
        whatsapp: {
          DEFAULT: "#25D366",
          dark: "#128C7E",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        playfair: ["var(--font-playfair)", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
