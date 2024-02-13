// const { DataTypes } = require("sequelize");
// const { db } = require("../db");

// //  id SERIAL PRIMARY KEY,
// //   uuid VARCHAR(255) UNIQUE NOT NULL,
// //   db_name VARCHAR(100) UNIQUE NOT NULL,
// //   db_username VARCHAR(100),
// //   db_password TEXT,
// //   created_at TIMESTAMP DEFAULT NOW(),
// //   updated_at TIMESTAMP DEFAULT NOW()

// module.exports = (Sequelize, sequelize) => {
//   const userModel = sequelize.define("tenants", {
//     uuid: { type: DataTypes.TEXT },
//     db_name: DataTypes.TEXT,
//     db_username: DataTypes.TEXT,
//     db_password: DataTypes.TEXT,
//   });
//   return userModel;
// };
