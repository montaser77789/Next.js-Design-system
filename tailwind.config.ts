import type { Config } from "tailwindcss";

const config: Config = {
  darkMode:["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "hsl(var(--defult-brand))",
          foreground: "red",
        },
        destructive: {
          DEFAULT: "hsl(var(--defult-destructive))",
          foreground:  "hsl(var(--defult-destructive))",
        },
      },
    },
  },
  plugins: [],
};
export default config;
