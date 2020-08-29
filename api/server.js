const express = require('express');

const server = express();

const welcomeRouter = require("./welcome/welcome-router");
const projectsRouter = require("./projects/projects_router");

server.use(express.json());

server.use('', welcomeRouter);
server.use('/api/projects', projectsRouter);

module.exports = server;