/* eslint-disable import/no-commonjs */
/* eslint-disable no-process-env */
/* eslint-disable no-console */
const CreateFileWebpack = require('create-file-webpack');
const NodemonPlugin = require('nodemon-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const path = require('path');
const webpack = require('webpack');

const packageJson = require('../package.json');

const root = path.resolve(__dirname, '../');

if (process.env.NODE_ENV === undefined) {
  process.env.NODE_ENV = 'development';
}
const buildNumber = process.env.BUILD_NUMBER || 'dev';
const version = `${packageJson.version}-${buildNumber}`;
console.log(`Building env ${process.env.NODE_ENV}, version: ${version}`);

const definitions = {
  // This is used to signify which version of the service was built
  VERSION: JSON.stringify(version),

  'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
};

const plugins = [
  new webpack.DefinePlugin(definitions),
  new webpack.SourceMapDevToolPlugin({
    filename: '[file].map',
  }),
  new CreateFileWebpack({
    path: path.join(root, 'dist'),
    fileName: 'version',
    content: `
      version: ${version};
      commithash: ${buildNumber};
    `,
  }),
];

// In development, when we do `yarn start` we want this to start up a server
// that's listening, but also compiled via webpack and auto-reloaded.
// if (process.argv.includes('--watch')) {
plugins.push(
  new NodemonPlugin({
    watch: path.resolve('./dist'),
    script: path.resolve('./dist/server.js'),
    exec: 'env-cmd ./.env node',
  }),
);
// }

const config = {
  target: 'node',
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  stats: 'minimal',
  devtool: false,
  entry: './src/index.js',
  output: {
    filename: 'server.js',
    path: path.join(root, 'dist'),
  },
  node: {
    __dirname: false,
  },
  externals: nodeExternals({
    whitelist: [/^@titelmedia\//],
  }),
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'eslint-loader',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: { loader: 'babel-loader' },
      },
      {
        exclude: /node_modules/,
        test: /\.graphql$/,
        use: [{ loader: 'graphql-import-loader' }],
      },
    ],
  },
  plugins,
};

module.exports = config;
