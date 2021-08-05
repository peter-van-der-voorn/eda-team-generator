exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('students').del()
    .then(function () {
      // Inserts seed entries
      return knex('students').insert([
        { id: 1, name: 'Emmie' },
        { id: 2, name: 'Leo' },
        { id: 3, name: 'Caitlin' }
      ])
    })
}
