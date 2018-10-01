const db = require('../index');
const Sequelize = require('sequelize');

const SubTask = db.define('subtask', {
  title: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT
  },
  points: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  }
});

module.exports = SubTask;
