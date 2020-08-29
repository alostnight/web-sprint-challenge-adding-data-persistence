"use strict";

exports.seed = function _callee(knex) {
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(knex('project_resources').insert([{
            project_id: 1,
            resource_id: 2
          }, {
            project_id: 1,
            resource_id: 3
          }, {
            project_id: 2,
            resource_id: 2
          }, {
            project_id: 2,
            resource_id: 3
          }, {
            project_id: 3,
            resource_id: 3
          }, {
            project_id: 3,
            resource_id: 3
          }, {
            project_id: 4,
            resource_id: 2
          }, {
            project_id: 4,
            resource_id: 5
          }, {
            project_id: 5,
            resource_id: 3
          }, {
            project_id: 5,
            resource_id: 4
          }]));

        case 2:
        case "end":
          return _context.stop();
      }
    }
  });
};