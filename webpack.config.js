const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

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
  plugins: [
    new HtmlWebpackPlugin({
      templateContent: () => `
        <html>
          <head>
            <title>Is it Christmas?</title><meta charset="utf-8" />
            <link rel="shortcut icon" href="./large.png">
            <link REL=StyleSheet href="./style.css" TYPE="text/css">
          </head>
          <body>
            <div id="root"></div>
            <script src="./client.js"></script>
          </body>
        </html>
      `,
    }),
  ],
}
