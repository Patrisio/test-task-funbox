const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TenserPlugin = require('terser-webpack-plugin');

const path = require('path');
const autoprefixer = require('autoprefixer');

module.exports = {
  entry: ['./src/index.js', './src/scss/main.scss'],

  mode: 'production',

  output: {
    filename: '[name].[hash].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          },
        ],
      },
      {
        test: /\.(png|jpg|jpeg|webp|svg|otf|woff|woff2|ttf)$/,
        use: [
          {
            loader: 'file-loader',
          },
          {
            loader: 'image-webpack-loader',
          }
        ],
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
					{
            loader: 'css-loader',
            options: { sourceMap: true }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [autoprefixer()]
            }
          },
          {
            loader: 'sass-loader',
            options: { sourceMap: true }
          },
				]
      }
    ],
  },

  devServer: {
    historyApiFallback: true,
  },
  
  plugins: [
    new MiniCssExtractPlugin({ filename: '[name].[contentHash].css' }),
    new OptimizeCssAssetsPlugin(),
    new TenserPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      minify: {
        removeAttributeQuotes: true,
        collapseWhitespace: true,
        removeComments: true,
      },
    })
  ]
};