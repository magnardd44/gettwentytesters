import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      default_blue : "#87BDD7",
      white: "#FFFFFF",
      red: "#FF0000",
      check: "#d3d3d3",
      cardBg: "#b3dde8",
      cardTitle: "#003D99",
      cardText: "#5C5858",
      gold: "#E5AF00",
      pricingCard: "#d4d2d2",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
