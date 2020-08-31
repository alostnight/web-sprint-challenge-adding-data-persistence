"use strict";

var knex = require('knex');

var knexfile = require('../knexfile.js');

var knexConfig = knexfile.development;
module.exports = knex(knexConfig);