/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#7b1c1c",
        secondary: "#b02a2a",
        light: "#fff5f5",
      },
      fontFamily: {
        heading: ["Righteous", "cursive"],   // Logo / brand
        body: ["Bai Jamjuree", "sans-serif"], // Main text
        alt: ["Noto Sans", "sans-serif"],     // Optional
      },
    },
  },
  plugins: [],
}

