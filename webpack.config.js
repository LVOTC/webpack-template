const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
var path = require('path');
const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
             loader: MiniCssExtractPlugin.loader,
             options: {
               publicPath: (resourcePath, context) => {
                 return path.relative(path.dirname(resourcePath), context) + '/';
               },
             },
           },
          'css-loader',
          'sass-loader',
         ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
        },
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Mano Title',
      filename: 'index.html',
      template: 'src/index.html'
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ]
}
