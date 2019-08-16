
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').insert([{
    "description": "Fuscia",
    "notes": "optional info",
    "task_complete":"0",
    "project_id":"1"    
  }, {
    "description": "Teal",
    "notes": "optional info",
    "task_complete":"0",
    "project_id":"1"
  }, {
    "description": "TickleMePink",
    "notes": "optional info",
    "task_complete":"0",
    "project_id":"2"
  }, {
    "description": "Goldenrod",
    "notes": "optional info",
    "task_complete":"0",
    "project_id":"2"
  }, {
    "description": "Turquoise",
    "notes": "optional info",
    "task_complete":"1",
    "project_id":"3"
  }, {
    "description": "Purple",
    "notes": "optional info",
    "task_complete":"1",
    "project_id":"4"
  }, {
    "description": "Brown",
    "notes": "optional info",
    "task_complete":"1",
    "project_id":"4"
  }, {
    "description": "Red",
    "notes": "optional info",
    "task_complete":"1",
    "project_id":"5"
  }, {
    "description": "Aquamarine",
    "notes": "optional info",
    "task_complete":"1",
    "project_id":"6"
  }]);
}
