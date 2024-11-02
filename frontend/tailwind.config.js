/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue: '#090F2D',
        customLightBlue: '#72799B',
        customOrange: '#DC5A27',
      },
      fontFamily: {
        'madefor': ['"Wix Madefor Text"', 'sans-serif']
      },
      fontSize: {
        '2xl': '1.5rem', 
        '3xl': '1.875rem'
      },
    },
  },
  plugins: [],
}

