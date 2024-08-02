import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        light: "url('/bg-light.png')",
        dark: "url('/bg-dark.png')",
      },
      colors: {
        gray: {
          primary: "var(--gray-primary)",
          strong: "var(--gray-strong)",
        },
        purple: {
          primary: "var(--purple-primary)",
          strong: "var(--purple-strong)",
          light: "var(--purple-light)",
          hover: "var(--purple-hover)",
        },
        border: {
          white: "var(--border-white)",
        },
      },
    },
  },
  plugins: [],
};
export default config;
