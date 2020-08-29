"use strict";

exports.seed = function _callee(knex) {
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(knex('tasks').insert([{
            description: 'Tasks 1',
            project_id: 2,
            notes: 'Note 1'
          }, {
            description: 'Tasks 2',
            project_id: 4,
            notes: 'Note 2'
          }, {
            description: 'Tasks 3',
            project_id: 1,
            notes: 'Note 3'
          }, {
            description: 'Tasks 4',
            project_id: 2,
            notes: 'Note 4'
          }, {
            description: 'Tasks 5',
            project_id: 5,
            notes: 'Note 5'
          }]));

        case 2:
        case "end":
          return _context.stop();
      }
    }
  });
};