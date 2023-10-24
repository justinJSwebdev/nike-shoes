/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      'body': ['Montserrat', 'sans-serif'],
      'title': ['Playfair Display', 'serif'],
      'slider': ['Dancing Script', 'cursive']
    },

    extend: {
      colors: {
        "black24": "#242424",
        "darkGrey": "#505050",
        "mediumGrey": "#7C7C7C",
        "thinGrey": "#A7A7A7",
        "lightGrey": "#ABABAB",
        "smoothGrey": "#EAEAEA",
        "whiteSlay": "#F4F4F4",
        "yellowLinear": "#BB7E2F",
        "footer": "#F8F8F8",
      },
      backgroundImage: {
        'hero-pattern': 'url(/images/hero.jpg)'
      },
      screens: {
        'medium': '990px'
      }
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],

}