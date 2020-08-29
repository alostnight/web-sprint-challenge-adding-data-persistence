"use strict";

var knex = require('knex');

var config = require('../knexfile.js');

var database = "development";
module.exports = knex(config[database]);