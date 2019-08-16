const express = require('express');

const Tasks = require('./tasks_model.js');

const router = express.Router();

router.get('/', (req, res) => {
  Tasks.getTasks()
  .then(tasks => {
    tasks.forEach(task => {
      if (task.task_complete === 1) {
        task.task_complete = "true"
      } else {
        task.task_complete = "false"
      }
    })
    res.status(200).json(tasks)
  })
  .catch(err => {
    res.status(500).json({message: "Error getting tasks"})
  })  
});

router.post('/', (req, res) => {
  const newTask = req.body;
  console.log(newTask)
  Tasks.addTasks(newTask)
  .then(task => {
    res.status(200).json(task)
  })
  .catch(err => {
    res.status(500).json({message: "Error Posting task"})
  })
})

module.exports = router;