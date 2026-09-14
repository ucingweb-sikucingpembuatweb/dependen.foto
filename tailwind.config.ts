import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Arial", "Helvetica", "sans-serif"],
        display: ["Impact", "Arial Narrow", "Arial", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;