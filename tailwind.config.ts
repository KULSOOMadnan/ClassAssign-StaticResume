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
        primary: '#3490dc', 
      },
      fontFamily: {
        sans: ['Satisfy', 'cursive'], // Add the Satisfy cursive font
      },
    },
  },
  plugins: [],
};
export default config;
