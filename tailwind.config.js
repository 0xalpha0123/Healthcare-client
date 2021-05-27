const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: (theme) => ({
      ...theme('colors'),
      primary: '#2d64b3',
      secondary: '#ec3564',
      danger: '#f00',
    }),
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      gray: colors.coolGray,
      blue: colors.lightBlue,
      white: colors.white,
      black: colors.black,
      green: colors.green,
      primary: '#2d64b3',
      secondary: '#ec3564',
      red: colors.red,
      accent: '#1ec66c',
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        128: '32rem',
        144: '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      height: {
        navbar: '10%',
        wrapper: '90%',
      },
    },
    zIndex: {
      100: 100,
      10000: 10000,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
