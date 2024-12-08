/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ben-green': '#02B7AF',
        'ben-white': '#F8F8F8'
      }
    },
  },
  plugins: [],
}