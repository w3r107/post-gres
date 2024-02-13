const { DataTypes, Sequelize } = require("sequelize");
const { sequelize } = require("../db");

module.exports = (Sequelize, sequelize) => {
  const todoModel = sequelize.define("todos", {
    // userId:DataTypes.
    user_id: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    isCompleted: DataTypes.BOOLEAN,
  });
  return todoModel;
};

// const todoModel = sequelize.define("todos", {
//   content: {
//     type: DataTypes.STRING,
//     allowNull: "false",
//   },
//   userId: {
//     type: DataTypes.UUID,
//   },
// });

// module.exports = { todoModel };
