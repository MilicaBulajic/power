const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const userRouter = require("./routes/users");
const server = express();
const path = __dirname + '/views/';
server.use(express.static(path));

server.use(morgan("dev"));
server.use(cors({ origin: true }));

server.use(userRouter);

server.get("/", (req, res) => {
  res.send({ message: "Hello, connection succeeded" });
});

server.use((req, res, next) => {
  const err = new Error("The requested resource couldn't be found.");
  err.status = 404;
  err.errors = ["Could not find string of resource"];
  next(err);
});




module.exports = server;