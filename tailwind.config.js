/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gradient-top': '#394253',
        'gradient-bottom': '#232936',
        'dark-teal': '#00b0a4',
        'light-teal': '#20404a',
        'ink-blue': '#181725',
      }
    },
  },
  plugins: [],
}
