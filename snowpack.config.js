/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    dist: { url: '/', static: true },
    'assets/scripts': { url: '/scripts' },
    'assets/styles': { url: '/styles' },
  },
  plugins: [
    [
      '@snowpack/plugin-postcss',
      {
        input: ['.css'],
      },
    ],
    [
      '@snowpack/plugin-run-script',
      {
        cmd: 'eleventy',
        watch: '$1 --watch',
      },
    ],
  ],
  routes: [
    /* Enable an SPA Fallback in development: */
    // {"match": "routes", "src": ".*", "dest": "/index.html"},
  ],
  optimize: {
    bundle: true,
    minify: true,
    target: 'es2020',
  },
  packageOptions: {
    NODE_ENV: true,
  },
  devOptions: {
    // Eleventy updates multiple files at once, so add a 300ms delay before we trigger a browser update
    hmrDelay: 300,
    open: 'none',
  },
  buildOptions: {
    clean: true,
  },
};
