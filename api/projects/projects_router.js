const express = require('express');
const router = express.Router();

const db = require("../../data/dbConfig");

router.get('/projects', async (req, res) => {
	try {
		const projects  = await db('projects');
		res.json(projects);
	} catch (err) {
		next(err);
	}
})

router.get('/resources', async (req, res) => {
	try {
		const resources  = await db('resources');
		res.json(resources);
	} catch (err) {
		next(err);
	}
})

router.post('/projects', async (req, res, next) => {

	try {
		const payload = {
			name: req.body.name,
			description: req.body.description,
			completed: req.body.completed
		}

		const [projectID] = await db('projects').insert(payload);
		const project = await db.first('*').from('projects').where('id', projectID);

		res.status(201).json(project);
	} catch (err) {
		next(err);
	}
})

router.post('/resources', async (req, res, next) => {

	try {
		const payload = {
			name: req.body.name,
			description: req.body.description
		}

		const [resourceID] = await db('resources').insert(payload);
		const resource = await db('resources').where('id', resourceID).first();

		res.status(201).json(resource);
	} catch (err) {
		next(err);
	}
})

router.post('/projects/:id/tasks', async (req, res, next) => {

	try {
		const payload = {
			project_id: req.params.id,
			description: req.body.description,
			notes: req.body.notes,
			completed: req.body.completed
		}

		const [id] = await db('tasks').insert({ ...payload })
		const task = await db('tasks').where({ id }).first();

		res.status(201).json(task);
	} catch (err) {
		next(err);
	}
})

router.get('/projects/:id/tasks', async (req, res, next) => {

	try {
		const tasks = await db('tasks').join('projects', 'tasks.project_id', '=', 'projects.id')
			.select('tasks.id as task_id', 'projects.name as project_name', 'projects.description as project_description',
				'tasks.description as task_description', 'tasks.notes as task_notes','tasks.completed as task_completed')
			.where('projects.id', req.params.id);

		res.status(201).json(tasks);
	} catch (err) {
		next(err);
	}
})


module.exports = router;