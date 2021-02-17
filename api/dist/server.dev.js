"use strict";

var express = require('express');

var helmet = require('helmet');

var server = express();

var ProjectsRouter = require('./projects/projects_router');

var ResourceRouter = require('./resources/resources-router.js');

var welcomeRouter = require('./welcome/welcome-router');

server.use(helmet(), express.json());
server.use('/projects', ProjectsRouter);
server.use('/resources', ResourceRouter);
server.use('/', welcomeRouter);
module.exports = server;