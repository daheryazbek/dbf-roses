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
        ivory: "#f8f5ef",
        pine: "#0f3d2e",
        rose: "#9f3a47",
        moss: "#2f5f4d",
        ink: "#1f2a26",
      },
      boxShadow: {
        soft: "0 12px 34px rgba(15, 61, 46, 0.08)",
      },
      maxWidth: {
        "8xl": "90rem",
      },
    },
  },
  plugins: [],
};

export default config;

