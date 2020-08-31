"use strict";

var db = require('../../data/dbConfig');

var find = function find() {
  return db('resources');
};

var findById = function findById(id) {
  return db('resources').where({
    id: id
  }).first();
};

var add = function add(resource) {
  return db('resources').insert(resource).then(function (ids) {
    return findById(ids[0]);
  });
};

module.exports = {
  find: find,
  findById: findById,
  add: add
};