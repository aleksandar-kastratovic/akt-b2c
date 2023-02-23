const webpack = require('webpack');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // trailingSlash: true,
  images: {
    loader: 'imgix',
    path: '/',
    domains: [
      'static.tehnomanija.rs',
      'www.tehnomanija.rs',
      'online.bancaintesa.rs',
      'api.akt.croonus.com',
      '25.19.215.162',
      'api.staging.croonus.com',
    ]
  },
  env: {
    API_URL: process.env.API_URL,
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.plugins.push(
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
      })
    );
    return config;
  },
};

module.exports = nextConfig;
