const path = require("path");

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
    ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "storybook-addon-designs",
    "@storybook/addon-notes/register",
    "@storybook/addon-a11y",
    "storybook-addon-pseudo-states",
    "storybook-dark-mode",
    "@storybook/addon-controls",
    "@storybook/addon-backgrounds"
  ],
  webpackFinal: async (config, { configType }) => {
    if (configType ==="PRODUCTION") config.output.publicPath ="/preact-story-book/assets/";
    config.module.rules.push({
      test: /\.less$/,
      use: ["style-loader","css-loader","less-loader"],
      include: path.resolve(__dirname,"../"),
    });    
    return config;
  },
  managerWebpack: async (config, { configType }) => {
    if (configType ==="PRODUCTION") config.output.publicPath ="/preact-story-book/assets/";

    return config;
  },
"framework":"@storybook/preact"
}