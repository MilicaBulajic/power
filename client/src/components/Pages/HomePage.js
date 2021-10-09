import React, { useContext, useEffect, useState } from "react";
import Task from "../tasks/Task";
import Tasks from "../Pages/Tasks";
import MotivationalQuotes from "../quotes/MotivationalQuotes";

import { Context as UserContext } from "../../context/store/UserStore";
import { Context as TaskContext } from "../../context/store/TaskStore";
import { Context as ProjectContext } from "../../context/store/ProjectStore";


const HomePage = () => {
  const [getUserInfo] = useContext(UserContext);
  const [taskState] = useContext(TaskContext);
  const [projectState] = useContext(ProjectContext);
  const taskList = taskState.tasks.map((task, i) => {
    return !task.completed && <Task task={task} key={i} />;
  });



  return (
    <>
    <MotivationalQuotes />
    <Tasks />
    </>
  );
};

export default HomePage;
