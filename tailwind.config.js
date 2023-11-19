/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      'body': ['Poppins', 'sans-serif']
    },

    extend: {
      colors: {
        "black24": "#242424",
        "darkGrey": "#535050",
        "mediumGrey": "#7C7C7C",
        "thinGrey": "#D9D9D9",
        "lightGrey": "#ABABAB",
        "smoothGrey": "#EAEAEA",
        "whiteSlay": "#F4F4F4",
        "yellowLinear": "#BB7E2F",
        "footer": "#F8F8F8",
      },
      backgroundImage: {
        'hero-pattern': 'url(/images/banner_cart.jpg)'
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