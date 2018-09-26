const db = require('../index');
const Sequelize = require('sequelize');

const SubTask = db.define('subtask', {
  description: {
    type: Sequelize.TEXT,
    allowNull: false
  }
});

module.exports = SubTask;
