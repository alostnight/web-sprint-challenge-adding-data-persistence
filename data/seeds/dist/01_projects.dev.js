"use strict";

exports.seed = function _callee(knex) {
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(knex('projects').insert([{
            name: 'project 1',
            description: 'Des 1',
            completed: true
          }, {
            name: 'project 2',
            description: 'Des 2',
            completed: false
          }, {
            name: 'project 3',
            description: 'Des 3',
            completed: true
          }, {
            name: 'project 4',
            description: 'Des 4',
            completed: false
          }, {
            name: 'project 5',
            description: 'Des 5',
            completed: true
          }]));

        case 2:
        case "end":
          return _context.stop();
      }
    }
  });
};