const { DataTypes } = require("sequelize");
const { sequelize } = require("../db");

const User = sequelize.define("User", {
  email: {
    type: DataTypes.STRING,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
  },
});

User.sync();

module.exports = User;
