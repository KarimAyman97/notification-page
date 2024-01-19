import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {},
      fontFamily: {
        "plus-jakarta-sans": ["var(--font-plus-jakarta-sans)"],
      },
      colors: {
        red: "hsl(1, 90%, 64%)",
        blue: "hsl(219, 85%, 26%)",
        White: " hsl(0, 0%, 100%)",
        "very-light-grayish-blue": "hsl(210, 60%, 98%)",
        "light-grayish-blue-1": "hsl(211, 68%, 94%)",
        "light-grayish-blue-2": " hsl(205, 33%, 90%)",
        "grayish-blue": "hsl(219, 14%, 63%)",
        "dark-grayish-blue": "hsl(219, 12%, 42%)",
        "very-dark-blue": "hsl(224, 21%, 14%)",
      },
      fontSize: {
        base: "16px",
      },
    },
  },
  plugins: [],
};
export default config;
