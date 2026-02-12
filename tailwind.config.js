/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-dark': '#1A3636',
        'brand-gold': '#D6BD98',
        'brand-light': '#F8F9F8',
      },
    },
  },
  plugins: [],
}
