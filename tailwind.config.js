/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./src/*.jsx",
    "./src/*.html",
    "./src/*.js",
    "./src/**/*.jsx",
    "./src/**/*.js",
    "./src/**/*.html",
    "index.html",
  ],
  theme: {
    extend: {},
    fontFamily: {
      bangers: ["Bangers", "system-ui"],
      press: ["'Press Start 2P'", "system-ui"],
      stencil: ["'Allerta Stencil'", "sans-serif"],
    },
  },
  plugins: [],
};
