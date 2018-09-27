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
User.hasMany(Project); //.get(projects)User
Project.belongsToMany(User, { through: 'team' }); //project.get(user)
User.hasMany(SubTask);

Board.belongsTo(Project);
Project.hasMany(Board);

MainTask.belongsTo(Board);
Board.hasMany(MainTask);

SubTask.belongsTo(MainTask);
MainTask.hasMany(SubTask);

//Pug.belongsTo(Owner)
//Owner.hasMany(Pug)
// Sequelize automatically creates three instance methods for pugs, "getOwner", "setOwner", and
//"createOwner".This is because we defined Pug.belongsTo(Owner).Likewise, owners get a bunch
//of new instance methods, "getPugs", "setPugs", "createPug", "addPug", "addPugs", "removePug",
//"removePugs", "hasPug", "hasPugs", and "countPugs"(because we defined Owner.hasMany(Pug)).

module.exports = { db, Board, MainTask, SubTask, User, Project };
