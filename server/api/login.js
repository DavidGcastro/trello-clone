const router = require('express').Router();
const { User } = require('../db/models/index');

router.get('/', (req, res) => {
  res.send('Login');
});

module.exports = router;
