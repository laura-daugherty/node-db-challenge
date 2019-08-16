const db = require('../data/db-config.js');

module.exports = {
  getTasks,
  addTasks,
}


function getTasks() {
  return db("tasks")
}

function addTasks(newTask) {
  return db("tasks")
  .insert(newTask, "id")
}