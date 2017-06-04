const { resolve } = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');

const srcPath = resolve(__dirname, 'src');
const distPath = resolve(__dirname, 'dist');

module.exports = {
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    resolve(srcPath, 'index.js'),
  ],

  output: {
    filename: '[name].bundle.js',
    path: distPath,
    publicPath: '/',
  },

  context: srcPath,

  devtool: 'inline-source-map',

  devServer: {
    historyApiFallback: true,
    hot: true,
    contentBase: distPath,
    publicPath: '/',
    stats: {
      assets: false,
      colors: true,
      version: false,
      hash: false,
      timings: false,
      chunks: false,
      chunkModules: false,
    },
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: require.resolve('babel-loader'),
        options: {
          cacheDirectory: true,
        },
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        loader: require.resolve('html-loader'),
      },
      { 
        test: /\.(png|woff|woff2|eot|ttf|svg)(\?|$)/, 
        loader: require.resolve('url-loader'),
        options: {
          limit: 100000,
        },
      },
      {
        test: /\\.(ttf|woff2|woff|eot|svg)$/,
        loader: require.resolve('file-loader'),
      },
      {
        test: /\.(css)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: require.resolve('style-loader'),
          },
          {
            loader: require.resolve('css-loader'),
            options: {
              modules: true,
              importLoaders: 1,
            },
          },
          {
            loader: require.resolve('postcss-loader'),
          },
        ],
      },
    ],
  },

  resolve: {
    extensions: ['.js', '.jsx', '.css'],
    modules: [
      srcPath,
      resolve(__dirname, 'node_modules'),
    ],
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
    }),
    new HtmlWebpackPlugin({
      template: resolve(srcPath, 'index.html'),
      xhtml: true,
    }),
    new CaseSensitivePathsPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ],
};
