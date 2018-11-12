const db = require('../index');
const hashing = require('../../utils/hashing');
const Sequelize = require('sequelize');

const User = db.define(
  'user',
  {
    firstName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    lastName: {
      type: Sequelize.STRING,
      allowNull: false,
      get() {
        return () => this.getDataValue('lastName');
      }
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
      get() {
        return () => this.getDataValue('email');
      },
      validate: {
        isEmail: true
      }
    },
    salt: {
      type: Sequelize.STRING,
      // Making `.salt` act like a function hides it when serializing to JSON.
      // This is a hack to get around Sequelize's lack of a "private" option.
      get() {
        return () => this.getDataValue('salt');
      }
    },
    password: {
      type: Sequelize.STRING,
      // Making `.password` act like a func hides it when serializing to JSON.
      // This is a hack to get around Sequelize's lack of a "private" option.
      get() {
        return () => this.getDataValue('password');
      }
    }
  },
  { timestamps: false }
);

User.generateSalt = () => hashing.generateSalt();

User.encryptPassword = (plainText, salt) =>
  hashing.encryptPassword(plainText, salt);

const setSaltAndPassword = user => {
  user.salt = User.generateSalt();
  user.password = User.encryptPassword(user.password(), user.salt());
};

User.beforeCreate(setSaltAndPassword);

module.exports = User;
