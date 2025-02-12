import type { Config } from "tailwindcss";

export default {
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
        blue: "var(--color-hello)",
        green: "var(--color-cosplay)",
        pink: "var(--color-contact)",
        kobold: "var(--color-code)",
      },
    },
  },
  plugins: [],
} satisfies Config;
