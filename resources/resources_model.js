const db = require('../data/db-config.js');

module.exports = {
  getResources,
  addResources,
}


function getResources() {
  return db("resources")
}

function addResources(newResource) {
  return db("resources")
  .insert(newResource, "id")
}