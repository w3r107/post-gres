const { connection, sequelize, db } = require("./db");
const express = require("express");
const firstRoute = require("./firstRoute");

const app = express();
app.use(express.json());

app.listen("8000", async () => {
  console.log("server is running at 8000");
});

app.use("/first", firstRoute);
