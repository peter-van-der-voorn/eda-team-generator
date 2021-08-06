const config = require('../../knexfile').development
const database = require('knex')(config)

function getStudents (db = database) {
  return db('students').select()
}

module.exports = { getStudents }
