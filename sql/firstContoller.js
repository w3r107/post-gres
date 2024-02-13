const { Op } = require("sequelize");
const { userModel } = require("./models/User");
const { todoModel } = require("./models/Todo");
const { db } = require("./db");

const getController = async (req, res) => {
  // const users = await userModel.findAll({
  //   attributes: ["firstName", "lastName"],
  // });
  const users = db.userModel.findAll({
    where: {
      [Op.and]: {
        firstName: "Tushar",
        lastName: { [Op.or]: ["Sinha", "Kumar"] },
      },
      // firstName: {
      //   [Op.eq]: "Tushar",
      // },
    },
    attributes: ["firstName", "lastName"],
  });
  console.log(users);
  console.log("All users:", JSON.stringify(users, null, 2));
  const resArr = JSON.stringify(users, null, 2);
  res.status(200).send(users);
};

const postContoller = async (req, res) => {
  console.log("i am in post controller");
  const { firstName, lastName, age } = req.body;
  const user = await db.userModel.create({
    firstName,
    lastName,
    age,
  });
  // await user.save();
  res.status(200).send(user);
};

const createTodoController = async (req, res) => {
  const { description, isCompleted, user_id } = req.body;
  const todo = await db.todoModel.create({
    user_id,
    description,
    isCompleted,
  });
  await todo.save();
  res.status(200).send(todo);
};

const getTodoController = async (req, res) => {
  const { userId } = req.body;
  const users = await db.userModel.findAll({
    where: { id: 1 },
    include: db.todoModel,
  });
  res.status(200).send(users);
  // const posts = await db.todoModel.findAll({
  //   include: db.userModel,
  // });
  // res.status(200).send(posts);
};
//"users" LEFT OUTER JOIN "todos" AS "todo" ON "users"."id" = "todo"."userId" WHERE "users"."id" = 1;
module.exports = {
  getController,
  postContoller,
  createTodoController,
  getTodoController,
};
