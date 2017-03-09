const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
var bodyParser = require('body-parser')

router.use( bodyParser.json() )
router.use(bodyParser.urlencoded({
  extended: true
}))

const Note = require('../../models/Note.js');

const dbUrl = "mongodb://nodePiServiceAccount:1234@crausaz.internet-box.ch/node-pi"

mongoose.connect(dbUrl);

router.get('/', function (req, res) {
  res.send("Hey there")
})

router.post('/addNote', function (req, res) {
  var newNote = new Note({ semestre: req.body.semestre, branche: req.body.branche, note: req.body.note})
  saveNewNote(newNote)
  res.json({status: 200, msg: 'DONE'})
})

router.get('/listNotes', function (req, res) {
  res.json({
    data: [
      { semestre: 1, branche: 'maths', note: 5 },
      { semestre: 2, branche: 'allemand', note: 4.5 }
    ]
  })
})

function saveNewNote(newNote) {
  newNote.save(function (err) {
    if (err) throw err;
  })
}

module.exports = router