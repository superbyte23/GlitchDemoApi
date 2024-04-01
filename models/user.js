// models/user.js
const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const User = sequelize.define("User", {
  username: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: false,
  },
});

module.exports = User;
