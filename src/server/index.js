import React from 'react'
import path from 'path'
import fs from 'fs'
import App from '../App'

const express = require('express')
const { renderToString } = require('react-dom/server')

const app = express()
app.use(express.static('static'))
app.get('/', (req, res) => {
  const indexFile = path.resolve('./index.html')
  fs.readFile(indexFile, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send('Oops, better luck next time!')
    }

    return res.send(
      data.replace('<div id="root"></div>', `<div id="root">${renderToString(<App />)}</div>`),
    )
  })
})

app.listen(process.env.PORT || 8080, () => console.log('Development enviroment running on http//:localhost:8080'))
