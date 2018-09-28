const router = require('express').Router();
const { Project, User } = require('../db/models/index');

router.get('/', (req, res, next) => {
  Project.findAll({ include: [{ model: User }] })
    .then(projects => res.send(projects))
    .catch(err => console.error(err));
});

module.exports = router;
