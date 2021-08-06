const express = require('express')
const db = require('../db/db')
const router = express.Router()

module.exports = router

router.get('/', (req, res) => {
  db.getStudents()
    .then(students => {
      res.json(students)
      return null
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})
