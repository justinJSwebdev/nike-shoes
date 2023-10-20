/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      'body': ['Montserrat', 'sans-serif'],
      'title': ['Playfair Display', 'serif']
    },
    extend: {
      colors: {
        "black24": "#242424",
        "darkGrey": "#505050",
        "mediumGrey": "#7C7C7C",
        "thinGrey": "#A7A7A7",
        "lightGrey": "#D3D3D3",
        "smoothGrey": "#EAEAEA",
        "whiteSlay": "#F4F4F4",
        "yellowLinear": "#BB7E2F",
        "footer": "#F8F8F8"
      }
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],

}