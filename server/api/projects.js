const router = require('express').Router();
const {
  Project,
  User,
  MainTask,
  SubTask
} = require('../db/models/index');

router.get('/', (req, res, next) => {
  Project.findAll({
    include: [
      { model: User },
      {
        model: MainTask,
        include: [
          {
            model: SubTask
          }
        ]
      }
    ]
  })
    .then(projects => res.send(projects))
    .catch(err => console.error(err));
});

module.exports = router;
