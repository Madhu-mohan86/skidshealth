/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        'Roboto':['Roboto','sans-serif'],
        'Fjalla':['Fjalla One','sans-serif'],
        'Inter':['Inter','sans-serif'],
        'Roboto_condensed':['Roboto Condensed','sans-serif'],
        'Fira_sans':['Fira Sans','sans-serif']
      },
    },
  },
  plugins: [],
}

