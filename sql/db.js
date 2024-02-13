const { Sequelize, DataTypes, Model } = require("sequelize");
const { userModel } = require("./models/User");
const sequelize = new Sequelize("first", "postgres", "password", {
  host: "localhost",
  dialect: "postgres",
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Database connected");
  })
  .catch((e) => {
    console.log("Error in database", e);
  });

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.userModel = require("./models/User")(Sequelize, sequelize);
db.todoModel = require("./models/Todo")(Sequelize, sequelize);

// db.userModel.hasOne(db.todoModel, { foreignKey: "user_id" });
db.userModel.hasMany(db.todoModel, { foreignKey: "user_id" });
db.todoModel.belongsTo(db.userModel, { foreignKey: "user_id" });
module.exports = { db };
