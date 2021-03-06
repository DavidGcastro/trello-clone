const db = require('../index');
const Sequelize = require('sequelize');

const Board = db.define(
  'board',
  {
    name: {
      type: Sequelize.STRING, // for shorter strings (< 256 chars)
      allowNull: false
    },
    description: {
      type: Sequelize.STRING
    }
  },
  { timestamps: false }
);

module.exports = Board;
