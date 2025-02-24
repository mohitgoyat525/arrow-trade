import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      padding: "16px",
      center: true,
      screens: {
        "2xl": "1140px",
        lg: "992px",
        md: "768px",
        sm: "576px",
        xs: "480px",
      },
    },
    extend: {
      colors: {
        lightGreen: "#71CED0",
      },
    },
  },
  plugins: [],
} satisfies Config;
