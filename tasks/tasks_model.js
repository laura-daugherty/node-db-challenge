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
  return db("tasks")
  .insert(newTask, "id")
}


// function getShoppingList(id) {
//   return db("recipes as r")
//   .innerJoin("recipes_ingredients as ri", "r.id", "=", "ri.recipe_id")
//   .innerJoin("ingredients as i", "i.id", "=", "ri.ingredient_id")
//   .select("r.name", "i.name", "ri.quantity")
//   .where({ "r.id" : id })
// }