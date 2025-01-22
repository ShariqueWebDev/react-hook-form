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
        background: "var(--background)",
        foreground: "var(--foreground)",
        darkGolden: "#BD842F",
        lightGolden: "#FBD973",
      },
      fontFamily: {
        barlow: "var(--font-barlow)",
      },
    },
  },
  plugins: [],
};
export default config;
