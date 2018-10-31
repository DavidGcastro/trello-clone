const router = require('express').Router();
const { User } = require('../db/models/index');
const passport = require('passport');
const decrypt = require('../utils/hashing');

router.post('/', (req, res, next) => {
  let { email, password } = req.body;
  User.findOne({
    where: {}
  })
    .then(user => {
      if (!user) {
        res.sendStatus(401);
      } else if (
        decrypt.isCorrectPassword(password, user.salt(), user.password())
      ) {
        req.session.userId = user.id;
        res.sendStatus(200);
      }
    })
    .catch(next);
});

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

module.exports = router;
