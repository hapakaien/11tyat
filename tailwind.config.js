const defaultTheme = require('tailwindcss/defaultTheme');
const tailwindcssTypography = require('@tailwindcss/typography');

module.exports = {
  // mode: 'jit',
  purge: {
    mode: 'all',
    preserveHtmlElements: false,
    content: [
      './*.js',
      './includes/layouts/**/*.html',
      './pages/**/*.{html,md}',
    ],
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
