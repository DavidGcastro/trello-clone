const db = require('./db/models').db;
const PORT = 3000;
const express = require('express');
const app = express();
const volleyball = require('volleyball');
const bodyParser = require('body-parser');
const path = require('path');
var session = require('client-sessions');

//logging middleware
app.use(volleyball);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  session({
    cookieName: 'session TESTING',
    secret: 'random_string_goes_here',
    duration: 30 * 60 * 1000,
    activeDuration: 5 * 60 * 1000
  })
);

app.use('/api', require('./api')); // include our routes!

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
