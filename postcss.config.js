const postcssImport = require('postcss-import');
const postcssNested = require('postcss-nested');
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

const mode = process.env.NODE_ENV;
const prod = mode === 'production';

module.exports = {
  plugins: [
    postcssImport(),
    tailwindcss(),
    postcssNested(),
    autoprefixer(),

    prod &&
      cssnano({
        preset: [
          'default',
          {
            discardComments: {
              removeAll: true,
            },
          },
        ],
      }),
  ],
};
