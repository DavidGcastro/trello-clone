const router = require('express').Router();
const { User } = require('../db/models/index');
const passport = require('passport');
const decrypt = require('../utils/hashing').isCorrectPassword;
const LocalStrategy = require('passport-local').Strategy;

// configure passport.js to use the local strategy
passport.use(
  new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
    console.log('Inside local strategy callback');
    // here is where you make a call to the database
    // to find the user based on their username or email address
    User.findOne({
      where: {
        email,
        password
      }
    })
      .then(user => {
        if (!user) {
          return done(null, false);
        } else if (decrypt(password, user.salt(), user.password())) {
          console.log('Local strategy returned true');
          return done(null, user);
        } else {
          console.log('Password not found');
          res.sendStatus(404);
        }
      })
      .catch(err => done(err));
  })
);

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
      } else if (decrypt(password, user.salt(), user.password())) {
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
