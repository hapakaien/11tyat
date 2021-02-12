const postcssImport = require('postcss-import');
const tailwindcss = require('tailwindcss');
const postcssPresetEnv = require('postcss-preset-env');
const cssnano = require('cssnano');

const mode = process.env.NODE_ENV;
const prod = mode === 'production';

module.exports = {
  plugins: [
    postcssImport(),
    tailwindcss(),
    postcssPresetEnv({
      stage: 1,
      features: {
        // enable nesting
        'nesting-rules': true,
      },
    }),

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
