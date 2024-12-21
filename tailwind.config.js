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
      },
      fontFamily: {
        'noto': '"Noto Sans Display"',
        'montserrat': '"Montserrat"'
      },
      keyframes: {
        appear: {
          '0%': { opacity: 0 },
          '50%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        bounce : {
          '0%, 100%': { transform: 'translateY(0%)'},
          '50%': { transform: 'translateY(15%)'},
        }
      },
      animation: {
        'appear': 'appear 4s linear',
        'bounce': 'bounce 4s'
      }
    },
  },
  plugins: [],
}