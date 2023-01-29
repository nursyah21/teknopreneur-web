/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px'
    },
    extend: {
      screens: {
        'desktop': '1076px',
        'tablet': '640px',
        'mobile': '360px',
      }
    },
  },
  plugins: [],
}
