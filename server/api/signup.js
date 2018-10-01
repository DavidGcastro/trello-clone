const router = require('express').Router();

router.get('/', function(req, res) {
  res.send('Signup');
});

module.exports = router;
