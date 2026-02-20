/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    screens: {
      '2xs': '400px',
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1300px',
      '2xl': '1536px',
    },
    extend: {
      backgroundImage: (theme) => ({
        gradient: 'linear-gradient(90deg, #FFC80F 0%, #FF9A00 100%)',
      }),
      colors: { 
        darkText: '#271F30', 
        yellow: '#FFC80F' 
      },
    },
  },
  plugins: [],
}
