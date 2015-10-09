import config from '../../webpack.config.js'
import express from 'express'
import path from 'path'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import webpack from 'webpack'

import React from 'react'
import App from '../components/App'
import { renderToString } from 'react-dom/server'

const app = express()
const compiler = webpack(config)
const port = process.env.PORT || 3000

app.set('views', './app/views')
app.set('view engine', 'jade')

app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
  stats: {
    colors: true
  }
}))

app.use(webpackHotMiddleware(compiler))
app.use(express.static(path.resolve(__dirname, 'public')))

app.get('/', (req, res) => {
  res.render('index', {
    content: renderToString(<App />)
  })
})

app.listen(port, 'localhost', err => {
  if (err) {
    console.log(err)
  }

  console.log(`Listening on ${port}...`)
})
