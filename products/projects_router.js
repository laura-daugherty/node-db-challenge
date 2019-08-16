const express = require('express');

const Projects = require('./projects_model.js');

const router = express.Router();

router.get('/', (req, res) => {
  Projects.getProjects()
  .then(project => {
    res.status(200).json(project)
  })
  .catch(err => {
    res.status(500).json({message: "Big ole error"})
  })  
});

router.post('/', (req, res) => {
  const newProject = req.body;
  Projects.addProjects(newProject)
  .then(project => {
    res.status(200).json(project)
  })
  .catch(err => {
    res.status(500).json({message: "Big ole error"})
  })
})

module.exports = router;