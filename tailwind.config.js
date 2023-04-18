/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js, jsx, ts, tsx}"],
  theme: {
    extend: {
      colors: {
        "red" : "#FF0000",
        "dark-red" : "#CC0000",
        "blue" : "#3B4CCA",
        "yellow" : "#FFDE00",
        "gold" : "#B3A125"
      }
    },
  },
  plugins: [],
}

