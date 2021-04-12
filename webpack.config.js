/*
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.(jsx?)$/,
        use: [
          'babel-loader',
          'eslint-loader',
        ],
      },
      {
        use: [
          'style-loader',
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
  resolve: {
    extensions: ['*', '.js', '.jsx', '.css'],
  },
  devServer: {
    contentBase: './dist',
  },
  plugins: [
    new HtmlWebpackPlugin({
      templateContent: `
        <html>
          <head>
          <title>Blizzard Entertainment</title>
          </head>
          <body>
            <div id="root" />
          </body>
        </html>
      `,
    }),
  ],
}
*/
const path = require('path')

const APP_SOURCE = path.join(__dirname, 'src')

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist/static'),
    filename: 'client.js',
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
}
