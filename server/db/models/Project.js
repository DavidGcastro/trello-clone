const db = require('../index');
const Sequelize = require('sequelize');

const Project = db.define('project', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = Project;
