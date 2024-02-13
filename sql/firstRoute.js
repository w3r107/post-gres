const express = require("express");
const {
  getController,
  postContoller,
  createTodoController,
  getTodoController,
} = require("./firstContoller");

const router = express.Router();

router.route("/").get(getController).post(postContoller);

router.route("/todo").get(getTodoController).post(createTodoController);

module.exports = router;
