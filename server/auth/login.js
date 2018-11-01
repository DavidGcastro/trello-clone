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
        email
      }
    })
      .then(user => {
        if (!user) {
          console.log('NOT FOUND');
          return done(null, false);
        } else if (decrypt(password, user.salt(), user.password())) {
          console.log('Local strategy returned true');
          return done(null, user);
        }
      })
      .catch(err => done(err));
  })
);
router.post('/', function(req, res, next) {
  console.log('Inside POST /login callback');
  passport.authenticate('local', function(err, user, info) {
    console.log('Inside passport.authenticate() callback');
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.redirect('/login');
    }
    req.logIn(user, function(err) {
      if (err) {
        return next(err);
      }
      return res.status(200).json({ success: true, redirectUrl: '/account' });
    });
  })(req, res, next);
});

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});
module.exports = router;
