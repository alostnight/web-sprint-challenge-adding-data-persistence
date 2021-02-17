"use strict";

var db = require('../../data/dbConfig');

var find = function find() {
  return db('projects');
};

var findById = function findById(id) {
  return db('projects').where({
    id: id
  }).first();
};

var add = function add(project) {
  return db('projects').insert(project).then(function (ids) {
    return findById(ids[0]);
  });
};

var findTask = function findTask(projects_id) {
  return db.select('t.*', 'p.name as project_name', 'p.description as project_desc').from('tasks as t').join('projects as p', 't.projects_id', 't.id').orderBy('t.id');
};

var addTask = function addTask(task) {
  return db('tasks').insert(task).then(function (ids) {
    return findById(ids[0]);
  });
};

module.exports = {
  find: find,
  findById: findById,
  add: add,
  findTask: findTask,
  addTask: addTask
};