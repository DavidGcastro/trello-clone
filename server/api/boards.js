const router = require('express').Router();
const {
  Board,
  SwimLane,
  SubTask,
  Project,
  User
} = require('../db/models/index');

router.get('/', (req, res, next) => {
  Board.findAll({
    include: [
      {
        model: SwimLane,
        include: [
          {
            model: SubTask
          }
        ]
      }
    ]
  })
    .then(boards => res.send(boards))
    .catch(next);
});

router.get('/:id', (req, res, next) => {
  let { id } = req.params;
  Board.findAll({
    where: { id },
    include: [
      {
        model: SwimLane,
        include: [
          {
            model: SubTask
          }
        ]
      }
    ]
  })
    .then(board => res.send(board))
    .catch(err => console.error(err));
});

module.exports = router;
