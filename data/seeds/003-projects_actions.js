
exports.seed = function(knex) {
  // Deletes ALL existing entries
      return knex('projects_actions').insert([
        { "project_id": 1, "action_id": 1},
        { "project_id": 1, "action_id": 3},
        { "project_id": 2, "action_id": 4},
        { "project_id": 2, "action_id": 5},
        { "project_id": 2, "action_id": 6},
        { "project_id": 3, "action_id": 7},
        { "project_id": 3, "action_id": 8},
        { "project_id": 3, "action_id": 9},
      ]);
    }
