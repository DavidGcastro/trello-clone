const router = require('express').Router();
const User = require('../db/models').User;
const passport = require('passport');
const decrypt = require('../utils/hashing').isCorrectPassword;
const LocalStrategy = require('passport-local').Strategy;

router.post('/', (req, res, next) => {
  let { firstName, lastName, email, password } = req.body;
  User.create({ firstName, lastName, email, password })
    .then(user => {
      req.logIn(user, function(err) {
        if (err) {
          return next(err);
        }
        return res
          .status(200)
          .json({ success: true, redirectUrl: '/profile', user });
      });
    })
    .catch(err => console.error(err));
});

module.exports = router;
