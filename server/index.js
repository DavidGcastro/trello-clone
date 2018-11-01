const db = require('./db/models').db;
const PORT = 3000;
const express = require('express');
const app = express();
const volleyball = require('volleyball');
const bodyParser = require('body-parser');
const path = require('path');
const session = require('express-session');
const SessionStore = require('connect-session-sequelize')(session.Store);
const passport = require('passport');
const seed = require('./db/seed');
const uuidv4 = require('uuid/v4');

//logging middleware
app.use(volleyball);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Note: in this step and others to come, you should consider carefully where to place any session -
//related middleware.Just like logging and body - parsing middleware, the session middleware should come
//before any kind of routing,
//otherwise our request / response would not have been "processed" early enough.
app.use(
  session({
    // this mandatory configuration ensures that session IDs are not predictable
    secret: uuidv4(), // or whatever you like
    // this option is recommended and reduces session concurrency issues
    resave: false,
    //Forces a session that is "uninitialized" to be saved to the store. A session is uninitialized
    //when it is new but not modified.Choosing false is useful for
    // implementing login sessions, reducing server storage usage,
    //or complying with laws that require permission before setting a cookie.
    //Choosing false will also help with race conditions where a client makes multiple
    //parallel requests without a session.
    //The default value is true, but using the default has been deprecated, as the default will change in the future.
    //Please research into this setting and choose what is appropriate to your use -case.
    store: new SessionStore({
      db
    }),
    saveUninitialized: true
  })
);
app.use(passport.initialize());
app.use(passport.session());
// Note, that we call this after we configure our app to use express - session and the session - file - store.This is because passport rides on top of these.

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});
app.use(function(req, res, next) {
  console.log('******SESSION HERE***** ', req.session);
  if (req.session.passport) {
    console.log('USER WAS HERE BEFORE');
  } else {
    console.log('NEW USER');
  }
  next();
});

app.use('/api', require('./api')); // include our routes!
app.use('/auth', require('./auth'));
app.use(express.static('./public'));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
}); // Send index.html for any other requests

//error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error');
});

module.exports = app;

db.sync({ force: true }) // if you update your db schemas, make sure you drop the tables first and then recreate them
  .then(() => seed())
  .then(() => {
    console.log('db synced');
    app.listen(PORT, () => console.log(`Listening on ${PORT}`));
  });
