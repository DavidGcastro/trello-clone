const router = require('express').Router();

//Map to api files
// starting from /api
router.use('/boards', require('./boards'));
router.use('/projects', require('./projects'));
router.use('/users', require('./users'));
router.use('/login', require('./login'));
router.use('/signup', require('./signup'));

module.exports = router;
