import React from 'react'
import App from '../App'

const express = require('express')
const { renderToString } = require('react-dom/server')

function renderMarkup(html) {
  return `<!DOCTYPE html>
<html>
  <head>
    <title>React</title><meta charset="utf-8" />
    <link REL=StyleSheet href="./style.css" TYPE="text/css">
  </head>
  <body>
    <div id="root">${html}</div>
    <script src="./client.js"></script>
  </body>
</html>`
}

const app = express()
app.use(express.static('static'))
app.get('/', (req, res) => {
  res.status(200).send(renderMarkup(renderToString(
    <App />,
  )))
})

app.listen(process.env.PORT || 8080)
