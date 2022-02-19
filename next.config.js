/** @type {import('next').NextConfig} */

const withPlugins = require("next-compose-plugins");
const imagesPlugin = require("next-images");

module.exports = withPlugins([[imagesPlugin]], {
  images: {
    disableStaticImages: true,
  },
  devIndicators: {
    autoPrerender: false,
  },
  experimental: {
    esmExternals: true,
  },
});
