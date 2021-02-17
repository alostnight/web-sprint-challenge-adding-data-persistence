"use strict";

exports.seed = function _callee(knex) {
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(knex('projects_resources').insert([{
            projects_id: 1,
            resources_id: 2
          }, {
            projects_id: 1,
            resources_id: 3
          }, {
            projects_id: 2,
            resources_id: 2
          }, {
            projects_id: 2,
            resources_id: 3
          }, {
            projects_id: 3,
            resources_id: 3
          }, {
            projects_id: 3,
            resources_id: 3
          }, {
            projects_id: 4,
            resources_id: 2
          }, {
            projects_id: 4,
            resources_id: 5
          }, {
            projects_id: 5,
            resources_id: 3
          }, {
            projects_id: 5,
            resources_id: 4
          }]));

        case 2:
        case "end":
          return _context.stop();
      }
    }
  });
};