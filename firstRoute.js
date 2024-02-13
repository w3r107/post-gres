const express = require("express");
const {
  getController,
  postContoller,
  createTodoController,
  getTodoController,
  store,
} = require("./firstContoller");
const tenant = require("./middleware/tenant");
const { db } = require("./db");

const router = express.Router();

router.use((req, res, next) => tenant(req, res, next, db));

router.route("/").get(getController).post(postContoller);

router.route("/todo").get(getTodoController).post(createTodoController);
router.route("/tenants").post(store);

module.exports = router;
