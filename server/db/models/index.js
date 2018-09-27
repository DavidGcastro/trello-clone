'use strict';
const db = require('../index');
// Require all the models
const Board = require('./Board');
const MainTask = require('./MainTask');
const SubTask = require('./SubTask');
const User = require('./User');
const Project = require('./Project');
// Running each model (i.e. table) module (i.e. file) registers each model into our sequelize db
// This works if we all use the same Sequelize instance (instantiated in and exported from `/db/index.js`)
// Exporting all models from here seems like a good idea!

Board.hasMany(MainTask);
MainTask.hasMany(SubTask);


// This is also probably a good place for you to set up your associations

module.exports = { db, Board, MainTask, SubTask, User, Project };
