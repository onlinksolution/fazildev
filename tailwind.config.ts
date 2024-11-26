import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#2E2E2E',
        nav: '#131313',
        hightlight: '#BCFF00'
      },
      fontFamily: {
        poppins: ['Poppins', 'serif'],
        main: ['Bai Jamjuree', 'serif'],
        title: ['Bebas Neue', 'serif']
      },
      fontWeight: {
        400: '400',
        600: '600'
      }
    },
  },
  plugins: [],
} satisfies Config;
