const router = require('express').Router();

router.get('/me', (req, res) => {
  if (req.user) {
    res.send(req.user);
  } else {
    res.send('NO USER');
  }
});

//Map to api files
// starting from /auth
router.use('/login', require('./login'));
router.use('/signup', require('./signup'));

module.exports = router;
