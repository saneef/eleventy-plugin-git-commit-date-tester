const pluginGitCommitDate = require("eleventy-plugin-git-commit-date");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(pluginGitCommitDate);
};
