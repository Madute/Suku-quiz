const pluginSEO = require("eleventy-plugin-seo");

module.exports = function(eleventyConfig) {
  // Add SEO plugin
  eleventyConfig.addPlugin(pluginSEO, {
    title: "Default title",
    description: "Default description",
    url: "https://yourdomain.com", // Change this to your site's URL
    author: "Your Name"
  });

  return {
    dir: {
      input: ".",
      includes: "_includes",
      output: "public"
    }
  };
};