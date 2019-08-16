const db = require('../data/db-config.js');

module.exports = {
  getProjects,
  addProjects,
}


function getProjects() {
  return db("projects")
}

function addProjects(newProject) {
  return db("projects")
  .insert(newProject, "id")
}