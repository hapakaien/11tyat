const Image = require('@11ty/eleventy-img');

async function imageShortcode(src, alt,
  sizes='(max-width: 640px) 100vw, (max-width: 768px) 80vw, (max-width: 1280px) 75vw, (max-width: 1500px) 50vw, 1500px') {
  let metadata = await Image(src, {
    widths: [300, 600, 900, 1500],
    formats:["avif", "webp", "jpeg"],
    outputDir: './dist/img'
  });

  let imageAttributes = {
    alt,
    sizes,
    loading: "lazy",
    decoding: "async"
  };

  return Image.generateHTML(metadata, imageAttributes);
}

module.exports = function(config) {
  // Set Liquid
  config.setLiquidOptions({
    dynamicPartials: true,
  });

  // Copy files
  config.addPassthroughCopy({ 'static': '/' });

  // Shortcode
  config.addLiquidShortcode('image', imageShortcode, {
    whitespaceMode: 'inline'
  });

  // Base config
  return {
    dir: {
      input: 'pages',
      includes: '../includes',
      data: '../config',
      output: 'dist',
    },
    passthroughFileCopy: true,
    templateFormats: ['html', 'md', 'liquid', 'png', 'svg', 'txt'],
    htmlTemplateEngine: 'liquid',
    dataTemplateEngine: 'liquid',
    markdownTemplateEngine: 'liquid',
  };
};
