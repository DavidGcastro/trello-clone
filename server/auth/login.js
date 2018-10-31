const router = require('express').Router();
const { User } = require('../db/models/index');
const passport = require('passport');
const decrypt = require('../utils/hashing');

router.post('/', (req, res, next) => {
  let { email, password } = req.body;
  User.findOne({
    where: {
      email
    }
  })
    .then(user => {
      if (!user) {
        res.sendStatus(401);
      } else if (
        decrypt.isCorrectPassword(password, user.salt(), user.password())
      ) {
        console.log('PASSWORD FOUND');
        req.session.userId = user.id;
        req.session.userName = user.firstName;
        res.sendStatus(200);
      } else {
        console.log('Password not found');
        res.sendStatus(404);
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
