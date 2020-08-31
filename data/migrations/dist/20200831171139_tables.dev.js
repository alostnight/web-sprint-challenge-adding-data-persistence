"use strict";

exports.up = function (knex) {
  return knex.schema.createTable("projects", function (table) {
    table.increments("id");
    table.text("name", 130).notNullable();
    table.text("description");
    table["boolean"]("completed").notNullable().defaultTo(false);
  }).createTable("resources", function (table) {
    table.increments("id");
    table.text("name", 130).notNullable().unique();
    table.text("description");
  }).createTable("tasks", function (table) {
    table.increments("id");
    table.integer("projects_id").unsigned().notNullable().references("projects.id").onDelete("CASCADE").onUpdate("CASCADE");
    table.text("description", 130).notNullable();
    table.text("notes");
    table["boolean"]("completed").notNullable().defaultTo(false);
  }).createTable("projects_resources", function (table) {
    table.integer("projects_id").unsigned().notNullable().references("projects.id").onDelete("CASCADE").onUpdate("CASCADE");
    table.integer("resources_id").unsigned().notNullable().references("resources.id").onDelete("CASCADE").onUpdate("CASCADE");
    table.primary(["projects_id", "resources_id"]);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("projects_resources").dropTableIfExists("tasks").dropTableIfExists("resources").dropTableIfExists("projects");
};