const Image = require('@11ty/eleventy-img');
const svgContents = require('eleventy-plugin-svg-contents');

async function imageShortcode(src, alt,
  sizes='(max-width: 640px) 100vw, (max-width: 768px) 80vw, (max-width: 1280px) 75vw, (max-width: 1500px) 50vw, 900px') {
  let metadata = await Image(src, {
    widths: [300, 600, 900],
    formats:["avif", "webp", "jpeg"],
    outputDir: './dist/img'
  });

  let imageAttributes = {
    class: "w-full max-w-prose h-auto object-cover",
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

  // Plugin
  config.addPlugin(svgContents);

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
