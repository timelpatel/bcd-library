const webpack = require('webpack')
const path = require('path')
const APP_DIR = path.resolve(__dirname, 'src')
const copyPlugin = require('copy-webpack-plugin')
const BUILD_DIR = path.resolve(__dirname, 'dist')

const config = {
  entry: APP_DIR + '/app.js',
  output: {
    filename: 'bundle.js',
    path: BUILD_DIR,
    publicPath: '/',
  },
  devServer: {
    contentBase: BUILD_DIR,
    inline: true,
    port: 3000,
    watchContentBase: true,
  },
  module: {
    rules: [
      {
        include: APP_DIR,
        exclude: /(node_modules)/,
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
      },
      {
        test : /\.scss$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
          {
            loader: 'sass-loader',
          },
        ]
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new copyPlugin([
      {
        from: APP_DIR + '/index.html',
        to: BUILD_DIR
      }
    ])
  ],
  resolve: {
    extensions: [
      '.js',
      '.jsx',
      '.scss',
    ],
    mainFiles: [
      'index',
      'style',
    ],
  },
}

module.exports = config
