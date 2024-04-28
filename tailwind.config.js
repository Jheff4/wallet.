/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    backgroundImage: (theme) => ({
      gradient: 'linear-gradient(90deg, #FFC80F 0%, #FF9A00 100%)',
    }),
    extend: { colors: { darkText: '#271F30', yellow: '#FFC80F' } },
  },
  plugins: [],
};
