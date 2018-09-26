const router = require('express').Router();
const Boards = require('../db/models/index').Board;

router.get('/', (req, res, next) => {
  Boards.findAll()
    .then(boards => res.send(boards))
    .catch(next);
});

module.exports = router;
