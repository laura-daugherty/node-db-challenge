
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('resources').insert([{
    "resource_name": "Ceratotherium simum",
    "resource_description": "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
  }, {
    "resource_name": "Hippotragus equinus",
    "resource_description": "Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
  }, {
    "resource_name": "Dasyurus maculatus",
    "resource_description": "Nullam molestie nibh in lectus.",
  }, {
    "resource_name": "Mephitis mephitis",
    "resource_description": "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo.",
  }, {
    "resource_name": "Marmota monax",
    "resource_description": "Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio.",
  }, {
    "resource_name": "Galago crassicaudataus",
    "resource_description": "Curabitur in libero ut massa volutpat convallis.",
  }]);
}
