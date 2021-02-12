module.exports = function (config) {
  // Set Liquid
  config.setLiquidOptions({
    dynamicPartials: true,
  });

  // Copy files
  config.addPassthroughCopy({ 'src/static': '' });

  // Base config
  return {
    dir: {
      input: 'src',
      output: 'src/_site',
    },
    passthroughFileCopy: true,
    templateFormats: ['html', 'md', 'liquid'],
    htmlTemplateEngine: 'liquid',
    dataTemplateEngine: 'liquid',
    markdownTemplateEngine: 'liquid',
  };
}
