const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("test_db", "root", "root", {
  host: "localhost",
  dialect: "mysql",
});

const connect = async () => {
  try {
    await sequelize.authenticate();
    console.log("DB Connected!");
  } catch (err) {
    console.log("Unable to connect: ", err.message);
  }
};

module.exports = { sequelize, connect };
