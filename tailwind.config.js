// eslint-disable-next-line import/no-extraneous-dependencies
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      screens: {
        xs: '408px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        xxl: '1600px',
      },
      colors: {
        primary: '#0D1321',
        secondary: '#FFBE0A',
        tertiary: '#20242D',
      },
      fontFamily: {
        inter: 'Inter',
        'dm-serif': 'DM Serif Display',
      },
    },
  },
  plugins: [require('tailwindcss-pseudo-elements')],
};
