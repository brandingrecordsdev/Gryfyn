/** @type {import('next').NextConfig} */

require('dotenv').config();
const webpack = require('webpack');

const nextConfig = {
  webpack: (config) => {
    config.plugins.push(
      new webpack.EnvironmentPlugin(process.env)
    )
    return config
  },
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: false,
  webpackDevMiddleware: (config) => {
    // Solve compiling problem via vagrant
    config.watchOptions = {
      poll: 1000,   // Check for changes every second
      aggregateTimeout: 300,   // delay before rebuilding
    };
    return config;
  }    
}

module.exports = nextConfig