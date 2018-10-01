const router = require('express').Router();
const { Project } = require('../db/models/index');

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

router.get('/:id', (req, res, next) => {
  let { id } = req.params;
  Project.findAll({
    where: { id },
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
