const db = require('..');
const Sequelize = require('sequelize');

const SwimLane = db.define('maintask', {
  name: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT
  }
});

module.exports = SwimLane;
