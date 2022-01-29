const now = String(Date.now())
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function (eleventyConfig) {
  eleventyConfig.setUseGitIgnore(false)
  eleventyConfig.addWatchTarget('./src/_styles');
  eleventyConfig.addWatchTarget('./src/main.js');
  eleventyConfig.addPassthroughCopy('./src/main.js');
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addWatchTarget("src/images");
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/favicon.ico");
  eleventyConfig.addPassthroughCopy("src/apple-touch-icon.png");

  eleventyConfig.addPassthroughCopy({ './_tmp/style.css': './style.css' })
  eleventyConfig.addShortcode('version', function () {
    return now
  })

  return {
		dir: {
			input: "src/",
			output: "dist",
			includes: "_includes"
		},
		templateFormats: ["html", "md", "njk"],
		htmlTemplateEngine: "njk",
    pathPrefix: "/art114/"
	};

}