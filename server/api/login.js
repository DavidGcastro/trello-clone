const router = require('express').Router();
const { User } = require('../db/models/index');

router.get('/', (req, res) => {
  res.send('Login');
});

router.post('/', (req, res) => {
  let { email, password } = req.body;
  User.findOne({ where: { email, password } }) // let's say `birthday` defaults to today
    .then(foundUser => {
      res.send(foundUser);
    });
});

//SETS COOKIE
// app.post('/login', function(req, res) {
//   User.findOne({ email: req.body.email }, function(err, user) {
//     if (!user) {
//       res.render('login.jade', { error: 'Invalid email or password.' });
//     } else {
//       if (req.body.password === user.password) {
//         // sets a cookie with the user's info
//         req.session.user = user;
//         res.redirect('/dashboard');
//       } else {
//         res.render('login.jade', { error: 'Invalid email or password.' });
//       }
//     }
//   });
// });

module.exports = router;
