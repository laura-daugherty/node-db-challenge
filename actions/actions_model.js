const db = require('../data/db-config.js');

module.exports = {
  getActions,
  addActions,
}


function getActions() {
  return db("actions")
}

function addActions(newAction) {
  return db("actions")
  .insert(newAction, "id")
}