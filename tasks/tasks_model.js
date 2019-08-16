const db = require('../data/db-config.js');

module.exports = {
  getTasks,
  addTasks,
}


function getTasks() {
  return db("tasks as t")
  .innerJoin("projects as p", "p.id", "=", "t.project_id")
  .select("p.project_name", "p.project_description", "t.task_description", "t.task_notes", "t.task_complete")
}

function addTasks(newTask) {
  console.log("inside new task", newTask)
  return db("tasks")
  .insert(newTask, "id")
}
