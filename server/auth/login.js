const router = require('express').Router();
const { User } = require('../db/models/index');
const passport = require('passport');

router.post('/', (req, res, next) => {
  let { email, password } = req.body;
  User.findOne({
    where: {
      email,
      password
    }
  })
    .then(function(user) {
      if (!user) {
        res.sendStatus(401);
      } else {
        req.session.userId = user.id;
        res.redirect('/account');
        // res.status(200).send(user);
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
