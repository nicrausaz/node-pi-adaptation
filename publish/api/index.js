const express = require('express')
const router = express.Router()

router.get('/', function (req, res) {
  res.json({
    data: {
      semestre: 1, branche: 'maths', note: 5
    }
  })
})

module.exports = router