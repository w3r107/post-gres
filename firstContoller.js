const { Op } = require("sequelize");
const { userModel } = require("./models/User");
const { tenantModel } = require("./models/Tenant");
const { db } = require("./db");
const { v4: uuidv4 } = require("uuid");
// const generator = require("generate-password");
const slugify = require("slugify");
const { down, up } = require("./Tenant-Service");

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
  const { email, pwd } = req.body;
  const user = await db.userModel.create({
    email,
    pwd,
  });
  // await user.save();
  res.status(200).send(user);
};

const createTodoController = async (req, res) => {
  const { name, subdomain, adminEmail } = req.body;
  const tenant = await db.todoModel.create({
    name,
    subdomain,
    adminEmail,
  });

  await todo.save();
  res.status(200).send(todo);
};

const getTodoController = async (req, res) => {
  // const { userId } = req.body;
  const user = await db.userModel.findOne({
    where: { id: req.user.toString() },
  });

  res.status(200).send(user);
};
//"users" LEFT OUTER JOIN "todos" AS "todo" ON "users"."id" = "todo"."userId" WHERE "users"."id" = 1;

// index

const store = async (req, res) => {
  const {
    body: { organization },
  } = req;

  const tenantName = slugify(organization.toLowerCase(), "_");
  const password = "pass2023";
  const uuid = uuidv4();
  const tenant = {
    uuid,
    db_name: tenantName,
    db_username: tenantName,
    db_password: password,
  };
  await db("tenants").insert(tenant);
  await up({ tenantName, password, uuid });

  return res.status(200).send({ tenant: { ...tenant } });
};

const destroy = async (req, res) => {
  const {
    params: { uuid },
  } = req;

  const tenant = await db
    .select("db_name", "db_username", "uuid")
    .where("uuid", uuid)
    .from("tenants");

  await down({
    userName: tenant[0].db_username,
    tenantName: tenant[0].db_name,
    uuid: tenant[0].uuid,
  });
  await db("tenants").where("uuid", uuid).del();

  return res.formatter.ok({ message: "tenant was deleted successfully" });
};

// module.exports = {
//   // index,
//   store,
//   destroy,
// };

module.exports = {
  getController,
  postContoller,
  createTodoController,
  getTodoController,
  store,
  destroy,
};
