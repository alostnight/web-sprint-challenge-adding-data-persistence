"use strict";

exports.up = function _callee(knex) {
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(knex.schema.createTable('projects', function (tbl) {
            tbl.increments();
            tbl.text('name', 128).unique().notNullable();
            tbl.text('description');
            tbl["boolean"]('completed').defaultTo(false);
          }).createTable('resources', function (tbl) {
            tbl.increments();
            tbl.text('name', 128).unique().notNullable();
            tbl.text('description');
          }).createTable('tasks', function (tbl) {
            tbl.increments();
            tbl.integer('project_id').unsigned().notNullable().references('id').inTable('assignments').onUpdate('CASCADE').onDelete('CASCADE');
            tbl.text('description').notNullable();
            tbl.text('notes');
            tbl["boolean"]('completed').defaultTo(false);
          }));

        case 2:
        case "end":
          return _context.stop();
      }
    }
  });
};

exports.down = function _callee2(knex) {
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(knex.schema.dropTableIfExists('tasks').dropTableIfExists('resources').dropTableIfExists('projects'));

        case 2:
        case "end":
          return _context2.stop();
      }
    }
  });
};