const markdownIt = require("markdown-it");

// Add within your config module
const md = new markdownIt({
  html: true,
});

const createCollectionsAndFilters = require('./_utils/index.js');

module.exports = function(eleventyConfig) {
  eleventyConfig.addFilter("markdown", (content) => {
    if (typeof content == "string") {
      return md.render(content);
    }
    return content;
  });
  
  // Add dateLastMod filter for sitemap
  eleventyConfig.addFilter('dateLastMod', function(value) {
    return new Date(value).toISOString();
  });
            
  eleventyConfig.addPassthroughCopy({"theme/assets": "assets"});
  eleventyConfig.addPassthroughCopy("admin");
  
  createCollectionsAndFilters(eleventyConfig);
  
  return {
    dir: {
      input: "theme",      // Changed from "cms" to "theme" since that's where index.html is
      includes: "_includes", // Adjust this if you have includes in a different location
      output: "public"
    }
  };
};