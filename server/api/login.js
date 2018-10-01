const router = require('express').Router();

router.get('/', function(req, res) {
  res.send('Login');
});

module.exports = router;
