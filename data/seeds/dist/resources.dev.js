"use strict";

var _require = require("../../api/server"),
    resource = _require.resource;

exports.seed = function _callee(knex) {
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(knex("resources").insert([{
            name: "resource 1",
            description: "1"
          }, {
            name: "resource 2",
            description: "2"
          }, {
            name: "resource 3",
            description: "3"
          }, {
            name: "resource 4",
            description: "4"
          }, {
            name: "resource 5",
            description: "5"
          }]));

        case 2:
        case "end":
          return _context.stop();
      }
    }
  });
};