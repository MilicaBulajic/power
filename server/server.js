const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const userRouter = require("./routes/users");
const projectRouter = require("./routes/projects");
const server = express();
const path = __dirname + '/views/';
server.use(express.static(path));

server.use(morgan("dev"));
server.use(cors({ origin: true }));

server.use('/login', userRouter);
server.use("/project", projectRouter);

server.get("/", (req, res) => {
  res.send({ message: "Hello, connection succeeded" });
});





module.exports = server;