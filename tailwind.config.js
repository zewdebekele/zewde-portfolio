/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: { base: "var(--bg)", brand: { purple: "var(--purple)", cyan: "var(--cyan)", pink: "var(--pink)" } },
      fontFamily: { heading: ["Space Grotesk", "sans-serif"], body: ["Inter", "sans-serif"] },
    },
  },
  plugins: [],
};
