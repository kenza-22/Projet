const express = require('express');
const router = express.Router();
const IssuesController = require('../Controllers/IssuesController');
const ProjectsController = require('../Controllers/ProjectsController');

router.get('/issues', IssuesController.getIssues);
router.get('/issues/:issueKey', IssuesController.getIssuesByKey);
router.get('/projects', ProjectsController.getProjects);
router.get('/projects/:projectKey', ProjectsController.getProjectByKey);

module.exports = router;