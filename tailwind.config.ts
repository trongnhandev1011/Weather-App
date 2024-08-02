import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
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
          pale: "var(--purple-pale)",
          hover: "var(--purple-hover)",
          "dark-primary": "var(--dark-purple-primary)",
          "dark-strong": "var(--dark-purple-strong)",
          "dark-bold": "var(--dark-purple-bold)",
          "dark-light": "var(--dark-purple-light)",
          "dark-hover": "var(--dark-purple-hover)",
        },
        border: {
          white: "var(--border-white)",
        },
        text: {
          light: "var(--text-light)",
        },
      },
    },
  },
  plugins: [],
};
export default config;
