const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

const env = process.env.NODE_ENV || 'development';
const isProd = env === 'production';

const finalCSSLoader = isProd ? MiniCssExtractPlugin.loader : { loader: 'style-loader' };

module.exports = {
  mode: env,
  entry: ['./src'],
  output: {
    publicPath: '/',
    filename: isProd ? 'assets/js/[name].[contenthash].js' : 'assets/js/[name].js',
    assetModuleFilename: 'assets/media/[name][ext]',
  },
  devtool: 'source-map',
  devServer: {
    hot: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [{ loader: 'babel-loader' }],
      },
      {
        test: /\.s?css$/,
        use: [
          finalCSSLoader,
          { loader: 'css-loader', options: { sourceMap: true } },
          { loader: 'postcss-loader', options: { sourceMap: true } },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              implementation: require('sass-embedded'), // avoids legacy JS API
            },
          }],
      },
      {
        test: /\.(jpe?g|png|gif|svg|pdf|ico)$/i,
        type: 'asset/resource',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new ESLintPlugin({ extensions: ['js', 'jsx'] }),
    ...(isProd ? [new MiniCssExtractPlugin({ filename: 'assets/css/[name].[contenthash].css' })] : []),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      favicon: './src/media/favicon.ico',
      filename: './index.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './200.html',
    }),
  ],
};
