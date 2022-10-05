/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",    
  ],
  theme: {
    extend: {
      screens: {
        'desktop': {'min': '1281px'},
        'laptop': {'max': '1280px'},
        'tablet': {'max': '1100px'},
        'mobile': {'max': '700px'},
      },
      fontFamily: {
        'basier_circle': ['basier circle'],
        'basier_circle_medium': ['basier circle medium'],
        'basier_circle_semibold': ['basier circle semibold'],
        'neue_metana_regular': ['neue metana regular'],
        'neue_metana_bold': ['neue metana bold'],
      },  
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'body': '#E8DFD4',
        'blue': '#2388C1',
        'yellow': '#F7CE54',
        'green': '#439948',
        'orange': '#FE6B32',
      },            
    },
  },
  plugins: [],
}
