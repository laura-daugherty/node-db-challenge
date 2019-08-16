
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').insert([{
    "project_name": "Ceratotherium simum",
    "project_description": "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
    "project_complete": "0"  
  }, {
    "project_name": "Hippotragus equinus",
    "project_description": "Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
    "project_complete": "0"
  }, {
    "project_name": "Dasyurus maculatus",
    "project_description": "Nullam molestie nibh in lectus.",
    "project_complete": "0"
  }, {
    "project_name": "Mephitis mephitis",
    "project_description": "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo.",
    "project_complete": "1"
  }, {
    "project_name": "Marmota monax",
    "project_description": "Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio.",
    "project_complete": "1"
  }, {
    "project_name": "Galago crassicaudataus",
    "project_description": "Curabitur in libero ut massa volutpat convallis.",
    "project_complete": "1"
  }]);
}
