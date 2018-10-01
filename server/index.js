const db = require('./db/models').db;
const PORT = 3000;
const express = require('express');
const app = express();
const volleyball = require('volleyball');
const bodyParser = require('body-parser');
const path = require('path');
var session = require('express-session');

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
    secret: 'tongiscool', // or whatever you like
    // this option is recommended and reduces session concurrency issues
    resave: false
  })
);

app.use('/api', require('./api')); // include our routes!
app.use('/auth', require('./auth'));

app.use(express.static('./public'));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'));
}); // Send index.html for any other requests

//error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error');
});

module.exports = app;

db.sync({ force: true }) // if you update your db schemas, make sure you drop the tables first and then recreate them
  .then(() => {
    console.log('db synced');
    app.listen(PORT, () => console.log(`Listening on ${PORT}`));
  });
