"use strict";

var express = require('express');

var Resources = require('./resources-model');

var router = express.Router();
router.get('/', function (req, res) {
  Resources.find().then(function (resource) {
    res.json(resource);
  })["catch"](function (err) {
    res.status(500).json({
      message: 'Failed to get Resources'
    });
  });
});
router.post('/', function (req, res) {
  var resourceData = req.body;
  Resources.add(resourceData).then(function (resource) {
    res.status(201).json(resourceData);
  })["catch"](function (err) {
    res.status(500).json({
      message: 'Failed to create new Resource'
    });
  });
});
module.exports = router;