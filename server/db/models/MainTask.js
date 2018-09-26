const db = require('../index');
const Sequelize = require('sequelize');

const MainTask = db.define('maintask', {
  name: {
    type: Sequelize.TEXT,
    allowNull: false
  }
});

module.exports = MainTask;
