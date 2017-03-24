const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({
  extended: true
}))

const Note = require('../../models/Note.js');

const dbUrl = "mongodb://nodePiServiceAccount:1234@crausaz.internet-box.ch/node-pi"

mongoose.connect(dbUrl);

router.get('/', function (req, res) {
  res.send("Hey there")
})

router.get('/getNotes', function (req, res) {
  Note.find({}, function (err, notes) {
    var result = { branches: [] }
    for (noteMongo of notes) {
      let note = noteMongo.toObject()
      let currentBranch = result.branches.filter((branch) => { branch.nom === note.branche })

      if (currentBranch.length !== 1) {
        currentBranch = { nom: note.branche, semestres: [] }
        result.branches.push(currentBranch)
      }

      let currentSemestre = currentBranch.semestres.filter((semestre) => { semestre.nom === note.semestre })

      if (currentSemestre.length !== 1) {
        currentSemestre = { number: note.semestre, notes: [] }
        currentBranch.semestres.push(currentSemestre)
      }

      currentSemestre.notes.push(note.note)
    }

    res.json(result)
    if (err) throw err
  })
})

// router.get('/getMathNotes', function (req, res) {
//   Note.find({branche: 'Mathématiques'}, function (err, notes) {
//     res.json(notes)
//     if (err) throw err
//   })
// })

router.post('/addNote', function (req, res) {
  var newNote = new Note({ _id: new mongoose.Types.ObjectId, semestre: req.body.semestre, branche: req.body.branche, note: req.body.note })
  saveNewNote(newNote)
  res.json({ status: 200, msg: 'Note ajoutée' })
})

router.post('/deleteRecord', function (req, res) {
  console.log(req.body._id)
  Note.remove({ note: req.body.note }, function (err) {
    if (err) throw err
    else res.json({ status: 200, msg: 'Note ajoutée' })
  })
})

function saveNewNote(newNote) {
  newNote.save(function (err) {
    if (err) throw err
  })
}

module.exports = router