const express = require('express');

const ProjectsRouter = require('./projects/projects_router.js');
const ActionsRouter = require('./actions/actions_router.js');


const server = express();

server.use(express.json());
server.use('/api/projects', ProjectsRouter);
server.use('/api/actions', ActionsRouter)

module.exports = server;