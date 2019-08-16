const express = require('express');

const Resources = require('./resources_model.js');

const router = express.Router();

router.get('/', (req, res) => {
  Resources.getResources()
  .then(resource => {
    res.status(200).json(resource)
  })
  .catch(err => {
    res.status(500).json({message: "Big ole error"})
  })  
});

router.post('/', (req, res) => {
  const newResource = req.body;
  Resources.addResources(newResource)
  .then(resource => {
    res.status(200).json(resource)
  })
  .catch(err => {
    res.status(500).json({message: "Big ole error"})
  })
})

module.exports = router;