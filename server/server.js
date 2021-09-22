const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const userRouter = require("./routes/users");
const taskRouter = require("./routes/tasks");
const projectRouter = require("./routes/projects");
const teamRouter = require("./routes/teams");
const tasklistRouter = require("./routes/tasklists");
require("./auth/passport");
const server = express();
const path = __dirname + '/views/';
server.use(express.static(path));

server.use(morgan("dev"));
server.use(cors({ origin: true }));

server.use(express.json()); //Used to parse JSON bodies
server.use(express.urlencoded());

server.use(userRouter);
server.use("/task", taskRouter);
server.use("/project", projectRouter);
server.use("/team", teamRouter);
server.use("/tasklist", tasklistRouter);



server.get("/*", (req, res) => {
  res.sendFile(path + 'index.html');
});





module.exports = server;