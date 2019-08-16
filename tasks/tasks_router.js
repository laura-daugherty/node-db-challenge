const express = require('express');

const Tasks = require('./tasks_model.js');

const router = express.Router();

router.get('/', (req, res) => {
  Tasks.getTasks()
  .then(task => {
    res.status(200).json(task)
  })
  .catch(err => {
    res.status(500).json({message: "Big ole error"})
  })  
});

router.post('/', (req, res) => {
  const newTask = req.body;
  Tasks.addTasks(newTask)
  .then(task => {
    res.status(200).json(task)
  })
  .catch(err => {
    res.status(500).json({message: "Big ole error"})
  })
})

module.exports = router;