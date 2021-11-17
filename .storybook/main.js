const path = require("path");
const WindiCSS = require("vite-plugin-windicss").default;

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-docs",
    "@storybook/addon-essentials"
  ],
  "core": {
    "builder": "storybook-builder-vite"
  },
  async viteFinal(config, { configType }) {
    config.plugins = config.plugins ?? [];
    config.plugins.push(
      WindiCSS({
        config: path.join(__dirname, "..", "windi.config.ts"), // that was my missing piece
        root: path.dirname(__dirname),
      })
    );
    // config.optimizeDeps = config.optimizeDeps ?? {};
    // config.optimizeDeps.include = config.optimizeDeps.include ?? [];
    // config.optimizeDeps.include.push("@storybook/client-api","@storybook/preact")
    
    config.optimizeDeps.include =  ["@storybook/core/client"] // overwrite instead of append

    config.build = {
      commonjsOptions: {},
    },
    console.log(config)
    return config;
  },
}