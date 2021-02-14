module.exports = function (config) {
  // Set Liquid
  config.setLiquidOptions({
    dynamicPartials: true,
  });

  // Copy files
  config.addPassthroughCopy({ 'static': '' });

  // Base config
  return {
    dir: {
      input: 'pages',
      includes: '../includes',
      data: '../config',
      output: 'dist',
    },
    passthroughFileCopy: true,
    templateFormats: ['html', 'md', 'liquid'],
    htmlTemplateEngine: 'liquid',
    dataTemplateEngine: 'liquid',
    markdownTemplateEngine: 'liquid',
  };
}
