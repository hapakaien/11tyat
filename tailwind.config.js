const defaultTheme = require('tailwindcss/defaultTheme');
const tailwindcssTypography = require('@tailwindcss/typography');

module.exports = {
  purge: {
    mode: 'all',
    preserveHtmlElements: false,
    content: ['./pages/**/*.html', './pages/**/*.md'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Lato', ...defaultTheme.fontFamily.sans],
        serif: ['Playfair Display', ...defaultTheme.fontFamily.serif],
        mono: ['Fira Code', ...defaultTheme.fontFamily.mono],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [tailwindcssTypography],
};
