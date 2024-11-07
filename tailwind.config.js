/** @type {import('tailwindcss').Config} */
export default {
  content:  ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: { 
      fontFamily: { 
        'sans': ['Lexend Zetta', 'ui-sans-serif', 'system-ui', 'sans-serif'], 
        'poiret': ['Poiret One', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        'spartan': ['League Spartan', 'ui-sans-serif', 'system-ui', 'sans-serif'],
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
  },
  },
  plugins: [],
}

