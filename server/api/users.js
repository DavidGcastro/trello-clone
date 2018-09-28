const router = require('express').Router();
const { User } = require('../db/models/index');

router.get('/', (req, res, next) => {
  User.findAll()
    .then(users => res.send(users))
    .catch(err => console.error(err));
});

module.exports = router;
