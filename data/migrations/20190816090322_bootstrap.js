
exports.up = function(knex) {
  return knex.schema
    .createTable('projects', tbl => {
      tbl.increments();
      tbl.string("name", 255)
        .notNullable()
        .unique();
      tbl.string("description", 4000)
      tbl.integer("project_complete")
        .notNullable()
        .default(0)
    })
    .createTable('tasks', tbl => {
      tbl.increments();
      tbl.string("description", 255)
        .notNullable()
      tbl.string("notes", 4000)
      tbl.integer("task_complete")
        .notNullable()
        .default(0)
      tbl
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("projects")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE")
      
    })
    .createTable('resources', tbl => {
      tbl.increments();
      tbl.string("name", 255)
        .notNullable()
      tbl.string("description", 4000)
    })
    .createTable('projects_resources', tbl => {
      tbl.increments();
      tbl
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("projects")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE")
      tbl
        .integer("resource_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("resources")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE")
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('projects_resources')
    .dropTableIfExists('resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('projects')
};
