
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tasks').insert([{
    "task_description": "Fuscia",
    "task_notes": "optional info",
    "task_complete":"0",
    "project_id":"1"    
  }, {
    "task_description": "Teal",
    "task_notes": "optional info",
    "task_complete":"0",
    "project_id":"1"
  }, {
    "task_description": "TickleMePink",
    "task_notes": "optional info",
    "task_complete":"0",
    "project_id":"2"
  }, {
    "task_description": "Goldenrod",
    "task_notes": "optional info",
    "task_complete":"0",
    "project_id":"2"
  }, {
    "task_description": "Turquoise",
    "task_notes": "optional info",
    "task_complete":"1",
    "project_id":"3"
  }, {
    "task_description": "Purple",
    "task_notes": "optional info",
    "task_complete":"1",
    "project_id":"4"
  }, {
    "task_description": "Brown",
    "task_notes": "optional info",
    "task_complete":"1",
    "project_id":"4"
  }, {
    "task_description": "Red",
    "task_notes": "optional info",
    "task_complete":"1",
    "project_id":"5"
  }, {
    "task_description": "Aquamarine",
    "task_notes": "optional info",
    "task_complete":"1",
    "project_id":"6"
  }]);
}
