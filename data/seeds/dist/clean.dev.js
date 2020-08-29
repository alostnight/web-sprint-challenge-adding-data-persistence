"use strict";

exports.seed = function _callee(knex) {
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(knex('projects').truncate());

        case 2:
          _context.next = 4;
          return regeneratorRuntime.awrap(knex('resources').truncate());

        case 4:
          _context.next = 6;
          return regeneratorRuntime.awrap(knex('tasks').truncate());

        case 6:
        case "end":
          return _context.stop();
      }
    }
  });
};