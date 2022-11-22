

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      "white": "#ffffff",
      "black": "#000000",
      "transparent-gray-05": "rgba(0, 0, 0, 0.05)",
      "transparent-gray-50": "rgba(0, 0, 0, 0.50)",
      "white-green": "#ebf5df",
      "light-green": "#bad4aa",
      "green": "#84c25e",
      "blue": "#5ea9c2",
      "light-mustard": "#d4d4aa",
      "mustard": "#edb458",
      "orangeade": "#e8871e",
      "gray": "#ccc",
    }
  },
  plugins: [],
}
