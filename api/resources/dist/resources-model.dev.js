"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var db = require('../../data/dbConfig');

var find = function find() {
  return db('resources');
};

var findById = function findById(id) {
  return db('resources').where({
    id: id
  }).first();
};

var add = function add(data) {
  return db("resources").insert(data, "id").then(function (ids) {
    var _ids = _slicedToArray(ids, 1),
        id = _ids[0];

    return db("resources").where({
      id: id
    }).first().then(function (resource) {
      return resource;
    });
  });
};

module.exports = {
  find: find,
  findById: findById,
  add: add
};