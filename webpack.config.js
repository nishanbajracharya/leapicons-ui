const path = require('path');
const dotenv = require('dotenv');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// Initialize environment variables
dotenv.config();

module.exports = {
  context: path.resolve(__dirname, 'src'),

  devServer: {
    port: 8000,
    hot: true, // enable HMR on the server
    publicPath: '/', // match the output 'publicPath'
    historyApiFallback: true, // respond to 404s with index.html
    contentBase: path.resolve(__dirname, 'dist'), // match the output path
  },
  devtool: 'inline-source-map',

  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8000', // WebpackDevServer host and port
    'webpack/hot/only-dev-server', // 'only' prevents reload on syntax errors
    './index.js', // the entry point of our app
  ],

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader',
        }),
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use:
          'file-loader?name=[name].[ext]&publicPath=/images/&outputPath=/images/',
      },
      {
        test: /\.ico$/,
        use: 'file-loader?name=[name].[ext]&publicPath=/images/&outputPath=/',
      },
      {
        test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        use:
          'file-loader?name=[name].[ext]&publicPath=/fonts/&outputPath=/fonts/',
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader'],
        }),
      },
    ],
  },

  output: {
    publicPath: '/',
    filename: 'js/bundle.js', // the output bundle
    chunkFilename: '[id].js',
    path: path.resolve(__dirname, 'dist'),
  },

  plugins: [
    new ExtractTextPlugin('css/bundle.css'),
    new CopyWebpackPlugin([{ from: path.resolve(__dirname, 'public') }]),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html'),
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new webpack.NamedModulesPlugin(), // prints more readable module names in the browser console on HMR updates
    new webpack.NoEmitOnErrorsPlugin(), // do not emit compiled assets that include errors
    new webpack.HotModuleReplacementPlugin(), // enable HMR globally
  ],
};
