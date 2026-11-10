import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#080D18",
        panel: "#101827",
        accent: "#78A9FF"
      },
      fontFamily: {
        sans: ["Arial", "Helvetica", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;