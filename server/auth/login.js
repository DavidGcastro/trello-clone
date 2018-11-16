const router = require('express').Router();
const passport = require('passport');
const passportConfig = require('../passportConfig');

router.post('/', passport.authenticate('local'), function(req, res) {
  return res.status(200).json({ success: true, redirectUrl: '/profile' });
});

// router.post('/', function(req, res, next) {
//   //post => func => pass auth => local =>
//   console.log('Inside POST /login callback');
//   // This method takes 2 parameters. Our ‘login strategy’ which is ‘local’ in this case, since we will be authenticating with email and password
//   //(you can find a list of other login strategies using passport though. These include Facebook, Twitter, etc.)
//   //and a callback function
//   //giving us access to the user object if authentication is successful and an error object if not.

//   // passport.authenticate() will call our ‘local’ auth strategy, so we need to configure passport to use
//   //  that strategy. We can configure passport with passport.use(new strategyClass). Here we tell
//   // passport how the local strategy can be used to authenticate the user.
//   passport.authenticate('local', function(err, user, info) {
//     console.log('Inside passport.authenticate() callback');
//     if (err) {
//       res.sendStatus(404);
//       return next(err);
//     }
//     if (!user) {
//       res.sendStatus(404).redirect('/login');
//     }

//     // The req.login(user, callback()) method takes in the user object we just returned from our local strategy and calls passport.serializeUser(callback()).
//     // It takes that user object and

//     // 1) saves the user (remember we have made everything but id and first name private) to the session file store
//     // 2) saves the user in the request object as request.session.passport and
//     // 3) adds the user object to the request object as request.user.
//     //Now, on subsequent requests to authorized routes,
//     //  we can retrieve the user object without requiring the user to login again(by getting the id from
//     //   the session store and using that to get the user object from the database and adding it to our request object).

//     // The req.login() function handles serializing the user id to the session store and inside our request object and also adds the user object to our request object.
//     req.logIn(user, function(err) {
//       if (err) {
//         return next(err);
//       }
//       return res.status(200).json({ success: true, redirectUrl: '/profile' });
//     });
//   })(req, res, next);
// });

module.exports = router;
