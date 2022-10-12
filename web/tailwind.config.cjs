/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html',
  ],
  theme: {
    fontFamily: {
      sans: ['Inter','sans-serif']
    },
    extend: {
      backgroundColor:{
        'personal-color-red' : 'bg-red-600'
      }
    },
  },
  plugins: [],
}
