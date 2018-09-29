const db = require('../index');
const Sequelize = require('sequelize');

const SwimLane = db.define('maintask', {
  name: {
    type: Sequelize.TEXT,
    allowNull: false
  }
});

module.exports = SwimLane;
