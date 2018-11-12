const db = require('../index');
const Sequelize = require('sequelize');

const Project = db.define(
  'project',
  {
    name: {
      type: Sequelize.STRING,
      allowNull: false
    }
  },
  { timestamps: false }
);

module.exports = Project;
