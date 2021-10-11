import React, { useContext, useEffect, useState } from "react";
import Task from "../tasks/Task";
import Tasks from "../Pages/Tasks";
import MotivationalQuotes from "../quotes/MotivationalQuotes";

import { Context as UserContext } from "../../context/store/UserStore";
import { Context as TaskContext } from "../../context/store/TaskStore";
import { Context as ProjectContext } from "../../context/store/ProjectStore";


const HomePage = () => {

  return (
    <>
    <MotivationalQuotes />
    <Tasks />
    </>
  );
};

export default HomePage;
