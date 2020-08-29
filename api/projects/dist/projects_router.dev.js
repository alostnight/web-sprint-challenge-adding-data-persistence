"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var express = require('express');

var router = express.Router();

var db = require("../../data/dbConfig");

router.get('/projects', function _callee(req, res) {
  var projects;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(db('projects'));

        case 3:
          projects = _context.sent;
          res.json(projects);
          _context.next = 10;
          break;

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          next(_context.t0);

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 7]]);
});
router.get('/resources', function _callee2(req, res) {
  var resources;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(db('resources'));

        case 3:
          resources = _context2.sent;
          res.json(resources);
          _context2.next = 10;
          break;

        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          next(_context2.t0);

        case 10:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 7]]);
});
router.post('/projects', function _callee3(req, res, next) {
  var payload, _ref, _ref2, projectID, project;

  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          payload = {
            name: req.body.name,
            description: req.body.description,
            completed: req.body.completed
          };
          _context3.next = 4;
          return regeneratorRuntime.awrap(db('projects').insert(payload));

        case 4:
          _ref = _context3.sent;
          _ref2 = _slicedToArray(_ref, 1);
          projectID = _ref2[0];
          _context3.next = 9;
          return regeneratorRuntime.awrap(db.first('*').from('projects').where('id', projectID));

        case 9:
          project = _context3.sent;
          res.status(201).json(project);
          _context3.next = 16;
          break;

        case 13:
          _context3.prev = 13;
          _context3.t0 = _context3["catch"](0);
          next(_context3.t0);

        case 16:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 13]]);
});
router.post('/resources', function _callee4(req, res, next) {
  var payload, _ref3, _ref4, resourceID, resource;

  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          payload = {
            name: req.body.name,
            description: req.body.description
          };
          _context4.next = 4;
          return regeneratorRuntime.awrap(db('resources').insert(payload));

        case 4:
          _ref3 = _context4.sent;
          _ref4 = _slicedToArray(_ref3, 1);
          resourceID = _ref4[0];
          _context4.next = 9;
          return regeneratorRuntime.awrap(db('resources').where('id', resourceID).first());

        case 9:
          resource = _context4.sent;
          res.status(201).json(resource);
          _context4.next = 16;
          break;

        case 13:
          _context4.prev = 13;
          _context4.t0 = _context4["catch"](0);
          next(_context4.t0);

        case 16:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[0, 13]]);
});
router.post('/projects/:id/tasks', function _callee5(req, res, next) {
  var payload, _ref5, _ref6, id, task;

  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          payload = {
            project_id: req.params.id,
            description: req.body.description,
            notes: req.body.notes,
            completed: req.body.completed
          };
          _context5.next = 4;
          return regeneratorRuntime.awrap(db('tasks').insert(_objectSpread({}, payload)));

        case 4:
          _ref5 = _context5.sent;
          _ref6 = _slicedToArray(_ref5, 1);
          id = _ref6[0];
          _context5.next = 9;
          return regeneratorRuntime.awrap(db('tasks').where({
            id: id
          }).first());

        case 9:
          task = _context5.sent;
          res.status(201).json(task);
          _context5.next = 16;
          break;

        case 13:
          _context5.prev = 13;
          _context5.t0 = _context5["catch"](0);
          next(_context5.t0);

        case 16:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[0, 13]]);
});
router.get('/projects/:id/tasks', function _callee6(req, res, next) {
  var tasks;
  return regeneratorRuntime.async(function _callee6$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          _context6.next = 3;
          return regeneratorRuntime.awrap(db('tasks').join('projects', 'tasks.project_id', '=', 'projects.id').select('tasks.id as task_id', 'projects.name as project_name', 'projects.description as project_description', 'tasks.description as task_description', 'tasks.notes as task_notes', 'tasks.completed as task_completed').where('projects.id', req.params.id));

        case 3:
          tasks = _context6.sent;
          res.status(201).json(tasks);
          _context6.next = 10;
          break;

        case 7:
          _context6.prev = 7;
          _context6.t0 = _context6["catch"](0);
          next(_context6.t0);

        case 10:
        case "end":
          return _context6.stop();
      }
    }
  }, null, null, [[0, 7]]);
});
module.exports = router;