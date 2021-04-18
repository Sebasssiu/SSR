const path = require('path')
const Web = require('copy-webpack-plugin')

const APP_SOURCE = path.join(__dirname, 'src')

module.exports = {
  mode: 'development',
  entry: './src/server/index.js',
  target: 'node',
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '',
    filename: 'server.js',
    libraryTarget: 'umd',
    globalObject: 'this',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: APP_SOURCE,
        use: 'babel-loader',
      },
      {
        use: [
          'isomorphic-style-loader',
          'css-loader',
        ],
        test: /\.(css)$/,
      },
      {
        use: [
          {
            loader: 'file-loader',
          },
        ],
        test: /\.(png|jpe?g|gif)$/i,
      },
    ],
  },
  plugins: [
    new Web({
      patterns: [{
        from: 'src/styles',
        to: 'static',
      }],
    }),
    new Web({
      patterns: [{
        from: 'src/images/large.png',
        to: 'static',
      }],
    }),
  ],
}
