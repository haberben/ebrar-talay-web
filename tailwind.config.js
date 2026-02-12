/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-dark': '#1A3636',   // Koyu, lüks yeşil
        'brand-gold': '#D6BD98',   // Altın vizon (vurgu rengi)
        'brand-light': '#F8F9F8',  // Saf temiz arka plan
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'], // Başlıklar için lüks font
      },
    },
  },
  plugins: [],
}