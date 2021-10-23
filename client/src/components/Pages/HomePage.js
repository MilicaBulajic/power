import React, { useContext, useEffect, useState } from "react";
import Task from "../tasks/Task";
import Tasks from "../Pages/Tasks";
import MotivationalQuotes from "../quotes/MotivationalQuotes";

import { Context as UserContext } from "../../context/store/UserStore";
import { Context as TaskContext } from "../../context/store/TaskStore";
import { Context as ProjectContext } from "../../context/store/ProjectStore";
import TopNavbar from "../Navigation/TopNavbar";


const HomePage = () => {
  const [userState] = useContext(UserContext);
  const [taskState] = useContext(TaskContext);
  const [projectState] = useContext(ProjectContext);

  const uncompletedTaskList = taskState.tasks.filter((task) => {
    return !task.completed;
  });


  return (
    <>
    <TopNavbar />
    <MotivationalQuotes />
 
    </>
  );
};

export default HomePage;
