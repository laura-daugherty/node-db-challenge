const express = require('express');

const Actions = require('./actions_model.js');

const router = express.Router();

router.get('/', (req, res) => {
  Actions.getActions()
  .then(action => {
    res.status(200).json(action)
  })
  .catch(err => {
    res.status(500).json({message: "Big ole error"})
  })  
});

router.post('/', (req, res) => {
  const newAction = req.body;
  Actions.addActions(newAction)
  .then(action => {
    res.status(200).json(action)
  })
  .catch(err => {
    res.status(500).json({message: "Big ole error"})
  })
})

module.exports = router;