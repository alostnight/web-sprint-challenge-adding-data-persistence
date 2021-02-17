"use strict";

var express = require('express');

var Projects = require('./projects-model');

var router = express.Router();
router.get('/', function (req, res) {
  Projects.find().then(function (project) {
    res.json(project);
  })["catch"](function (err) {
    res.status(500).json({
      message: 'Error finding projects'
    });
  });
});
router.get('/:id', function (req, res) {
  var id = req.params.id;
  Projects.findById(id).then(function (project) {
    if (project) {
      res.json(project);
    } else {
      res.status(404).json({
        message: 'Project with ID not found'
      });
    }
  })["catch"](function (err) {
    res.status(500).json({
      message: 'Failed to get Project'
    });
  });
});
router.post('/', function (req, res) {
  var projectData = req.body;
  Projects.add(projectData).then(function (project) {
    res.status(201).json(project);
  })["catch"](function (err) {
    res.status(500).json({
      message: 'Project failed to create'
    });
  });
});
router.get('/:id/tasks', function (req, res) {
  var id = req.params.id;
  Projects.findTask(id).then(function (task) {
    if (task.length) {
      res.json(task);
    } else {
      res.status(404).json({
        message: 'Task not found'
      });
    }
  })["catch"](function (err) {
    res.status(500).json({
      message: 'Failed to get tasks'
    });
  });
});
router.post('/:id/tasks', function (req, res) {
  var taskData = req.body;
  var id = req.params.id;
  Projects.findById(id).then(function (project) {
    if (project) {
      Projects.addTask(taskData, id).then(function (task) {
        res.status(201).json(taskData);
      });
    } else {
      res.status(404).json({
        message: 'Project not found'
      });
    }
  })["catch"](function (err) {
    res.status(500).json({
      message: 'Failed to create new task'
    });
  });
});
module.exports = router;