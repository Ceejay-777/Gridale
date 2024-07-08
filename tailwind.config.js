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
    extend: {
      keyframes: {
        scrollUp: {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(-100%)" },
        },
      },
      animation: {
        "scrollUp" : "scrollUp 5s linear infinite"
      }
    },
    fontFamily: {
      bangers: ["Bangers", "system-ui"],
      press: ["'Press Start 2P'", "system-ui"],
      stencil: ["'Allerta Stencil'", "sans-serif"],
    },
  },
  plugins: [],
};
