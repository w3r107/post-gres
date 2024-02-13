const { Model, DataTypes, Sequelize } = require("sequelize");
const { sequelize, db } = require("../db");

module.exports = (Sequelize, sequelize) => {
  const userModel = sequelize.define("users", {
    firstName: DataTypes.TEXT,
    lastName: DataTypes.TEXT,
    age: DataTypes.INTEGER,
  });
  return userModel;
};

// const userModel = (db.Sequelize,db.sequelize)=>sequelize.define("users", {
//   firstName: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   lastName: {
//     type: DataTypes.STRING,
//   },
// });

// module.exports = { userModel };
