const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const PATHS = {
  src: path.join(__dirname, './src'),
  img: path.join(__dirname, './media'),
  styles: path.join(__dirname, './css'),
  build: path.join(__dirname, 'build')
}

module.exports = {
  entry: {
    index: "./src/js/index.js",
    styles: "./src/css/main.css"
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        type: 'asset/resource',
        // use: [
        //   {
        //     loader: 'file-loader',
        //   },
        // ],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
    ],
  }
};