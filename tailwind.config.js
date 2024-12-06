/** @type {import('tailwindcss').Config} */
export default {
  content:  ['./src/**/*.{vue,js,ts,jsx,tsx}', './public/index.html'],
  theme: {
    extend: { 
      fontFamily: { 
        'sans': ['Lexend Zetta', 'ui-sans-serif', 'system-ui', 'sans-serif'], 
        'poiret': ['Poiret One', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        'spartan': ['League Spartan', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        'montserrat': ['Montserrat', 'ui-sans-serif', 'system-ui', 'sans'],
        'roboto': ['Roboto', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      fontWeight: { 
        extraLight: 200, 
        light: 300, 
        normal: 400, 
        medium: 500, 
        semiBold: 600, 
        bold: 700, 
        extraBold: 800, 
        black: 900, 
      },
      width: {
        '128': '32rem',
        '144': '36rem',
        '160': '40rem',
        '192': '48rem',
        '256': '64rem',
        '320': '80rem',
      },
      height: {
        '128': '32rem',
        '144': '36rem',
        '160': '40rem',
        '192': '48rem',
        '256': '64rem',
        '320': '80rem',
      },
      colors: {
        'primary': '#000000',
        'secondary': '#ffffff',
        'gold': '#9c8922',
        'darkGold': '#7a6f2a',
      }, 
      padding: {
        '433px': '433px',
      }
  },
  },
  plugins: [],
}

