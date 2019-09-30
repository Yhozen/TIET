module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  },
  devIndicators: {
    autoPrerender: false
  },
  assetPrefix: process.env.NODE_ENV === "production" ? "/TIET" : ""
};
