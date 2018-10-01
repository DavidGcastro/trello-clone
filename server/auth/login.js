const router = require('express').Router();
const { User } = require('../db/models/index');

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
        res.sendStatus(200);
      }
    })
    .then(x => res.send(x))
    .catch(next);
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
