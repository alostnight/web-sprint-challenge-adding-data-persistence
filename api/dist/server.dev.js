"use strict";

var express = require('express');

var server = express();

var welcomeRouter = require("./welcome/welcome-router");

var projectsRouter = require("./projects/projects_router");

server.use(express.json());
server.use('', welcomeRouter);
server.use('/api/projects', projectsRouter);
module.exports = server;