const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const urlencodedParser = bodyParser.urlencoded({ extended: false })

const Note = require('../../models/Note.js');

const dbUrl = "mongodb://nodePiServiceAccount:1234@crausaz.internet-box.ch/node-pi"

mongoose.connect(dbUrl);

router.get('/', function (req, res) {
  res.send("Hey there")
})

router.post('/addNote', urlencodedParser, function (req, res) {
  var newNote = new Note({ semestre: req.body.semestreSelect, branche: req.body.brancheSelect, note: req.body.noteSelect })
  newNote.save(function (err) {
    if (err) throw err;
  })
})

router.get('/listNotes', function (req, res) {
  res.json({
    data: [
      { semestre: 1, branche: 'maths', note: 5 },
      { semestre: 2, branche: 'allemand', note: 4.5 }
    ]
  })
})

module.exports = router