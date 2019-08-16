
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').insert([{
    "name": "Fuscia"
  }, {
    "name": "Teal"
  }, {
    "name": "TickleMePink"
  }, {
    "name": "Goldenrod"
  }, {
    "name": "Turquoise"
  }, {
    "name": "Purple"
  }, {
    "name": "Brown"
  }, {
    "name": "Red"
  }, {
    "name": "Aquamarine"
  }]);
}
