const express = require('express');
const helmet = require('helmet');
const server = express();
const ProjectsRouter = require('./projects/projects_router');
const ResourceRouter = require('./resources/resources-router.js');
const welcomeRouter = require('./welcome/welcome-router')

server.use(helmet(), express.json());
server.use('/projects', ProjectsRouter);
server.use('/resources', ResourceRouter);
server.use('/', welcomeRouter);


module.exports = server;