
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('resources').insert([{
    "name": "Ceratotherium simum",
    "description": "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
  }, {
    "name": "Hippotragus equinus",
    "description": "Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
  }, {
    "name": "Dasyurus maculatus",
    "description": "Nullam molestie nibh in lectus.",
  }, {
    "name": "Mephitis mephitis",
    "description": "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo.",
  }, {
    "name": "Marmota monax",
    "description": "Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio.",
  }, {
    "name": "Galago crassicaudataus",
    "description": "Curabitur in libero ut massa volutpat convallis.",
  }]);
}
