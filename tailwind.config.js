// eslint-disable-next-line import/no-extraneous-dependencies
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    screens: {
      xs: '408px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      xxl: '1600px',
    },
    extend: {
      gridTemplateColumns: {
        auto: 'repeat( auto-fit, minmax(250px, 1fr) )',
      },
      boxShadow: {
        primary: '0 0 7px var(--primary)',
        '3xl': '0px 4.97291px 19.8917px rgba(0, 0, 0, 0.2)',
      },
      colors: {
        primary: '#7049DD',
        secondary: '#FFC14A',
        tertiary: '#262734',
      },
      fontFamily: {
        sans: ['Lato', ...defaultTheme.fontFamily.sans],
        'open-sans': ['Open Sans', ...defaultTheme.fontFamily.sans],
        'text-primary': 'var(--fontPrimary)',
        'poppins-medium': 'var(--PoppinsMedium)',
      },
    },
  },
  plugins: [require('tailwindcss-pseudo-elements')],
};
