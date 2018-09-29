const router = require('express').Router();
const { Project, User, SubTask, Board } = require('../db/models/index');

router.get('/', (req, res, next) => {
  Project.findAll({
    include: [
      {
        all: true
      }
    ]
  })
    .then(projects => res.send(projects))
    .catch(err => console.error(err));
});

module.exports = router;
