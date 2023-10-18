// eslint-disable-next-line import/no-extraneous-dependencies
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      screens: {
        xs: '338px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1380px',
        xxl: '1600px',
      },
      colors: {
        primary: '#FFCE89',
        secondary: '#1F2233',
        tertiary: '#313550',
      },
      fontFamily: {
        inter: 'Inter',
        'dm-serif': 'DM Serif Display',
      },
      boxShadow: {
        custom: '0px 0px 10px 3px #ffce8985;',
      },
    },
  },
  plugins: [require('tailwindcss-pseudo-elements')],
};
