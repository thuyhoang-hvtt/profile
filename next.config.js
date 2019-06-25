const path = require("path");
const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');



module.exports = withSass(withCSS({
  webpack: (config, { dev }) => {
    // Fixes npm packages that depend on `fs` module
    config.resolve.alias = {
      ...config.resolve.alias,
      components: path.resolve(__dirname, "components/"),
      assets: path.resolve(__dirname, "assets/"),
      scss: path.resolve(__dirname, "scss/")
    };

    return config;
  }
}));
