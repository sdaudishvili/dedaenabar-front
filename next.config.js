const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');

const envPath = `./env/${process.env.ENVIRONMENT}.env`;
require('dotenv').config({ path: envPath });

console.log('\x1b[36m%s\x1b[0m \x1b[0m%s \x1b[4m%s\x1b[0m', 'info', ' - Environment config is loaded from', envPath);

module.exports = {
  webpack: (config, { webpack }) => {
    // eslint-disable-next-line no-param-reassign
    config.resolve.alias['@'] = path.join(__dirname, '');

    config.plugins.push(new ESLintPlugin({}));
    config.plugins.push(
      new webpack.ProvidePlugin({
        React: 'react'
      })
    );

    config.module.rules.push({
      test: /\.svg/,
      type: 'asset'
    });

    return config;
  },
  env: {
    FRONTEND_URL: process.env.FRONTEND_URL,

    STATIC_RESOURCES_URL: process.env.STATIC_RESOURCES_URL,

    API_URL: process.env.API_URL,

    ENVIRONMENT: process.env.ENVIRONMENT
  }
};
