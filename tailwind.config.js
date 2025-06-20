/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#9EC864",
        secondary: "#FBBB4C",
        tertiary: "#EB5D60",
        quaternary: "#4DAAE4",
      },
      fontFamily: {
        custom1: ['rocgrotesk', 'sans-serif'],
        custom2: ['kumbh', 'sans-serif'],
      },
    },
  },
  corePlugins: {
    transitionOpacity: true
  },
  plugins: [],
}