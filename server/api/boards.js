const router = require('express').Router();
const { Board, MainTask, SubTask } = require('../db/models/index');

router.get('/', (req, res, next) => {
  Board.findAll({
    include: [{
      model: MainTask,
      include: [{
        model: SubTask,
      }],
    }]
  })
    .then(boards => res.send(boards))
    .catch(next);
});

module.exports = router;
