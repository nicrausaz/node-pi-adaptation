const express = require('express')
const app = express()
const api = require('./api')
const mongoose = require('mongoose')

app.use('/api', api)
app.use(express.static('static'))

const Note = require('../models/Note.js');

app.use(function (req, res, next) {
  const err = new Error('Not Found')
  err.status = 404
  res.json(err)
})

app.listen(3000, function () {
  console.log('Listening on port 3000!')
})

/*
[
          { semestre: 1, branche: 'maths', note: 5 },
          { semestre: 2, branche: 'allemand', note: 4.5 }
        ]
*/