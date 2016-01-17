'use strict'

const path = require('path')
const express = require('express')

const app = express()
let server

const PATH_DIST = path.resolve(__dirname, './dist')
const ONE_DAY = 86400000

app.use(express.static(PATH_DIST, {
  maxage: ONE_DAY
}))

app.get('*', (req, res, next) => {
  if (!req.accepts('html')) {
    return next()
  }

  res.sendFile(path.join(PATH_DIST, 'index.html'))
})

server = app.listen(process.env.PORT || 3000, () => {
  const port = server.address().port

  console.log('Server is listening at %s', port)
})
