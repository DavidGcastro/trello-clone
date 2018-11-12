const router = require('express').Router();
const { User, Project } = require('../db/models/index');

router.get('/', (req, res, next) => {
  User.findAll()
    .then(users => res.send(users))
    .catch(err => console.error(err));
});

router.get('/:id', (req, res, next) => {
  let { id } = req.params;
  User.findAll({
    where: { id },
    include: [{ all: true }]
  })
    .then(user => res.send(user))
    .catch(err => console.error(err));
});

module.exports = router;
