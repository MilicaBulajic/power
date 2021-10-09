import React, { useState, useContext, useEffect } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import CustomDrawer from "./Navigation/CustomDrawer";
import "../css/CustomDrawer.css";
import apiServer from "../service/apiServer";

import { Context as UserContext } from "../context/store/UserStore";
import { Context as TaskContext } from "../context/store/TaskStore";
import { Context as ProjectContext } from "../context/store/ProjectStore";
import { Context as TeamContext } from "../context/store/TeamStore";

const PrivateRoutes = () => {
  const [drawer, setDrawer] = useState(true);
  const showDrawer = () => setDrawer(!drawer);
  const [taskState, taskdispatch] = useContext(TaskContext);
  const [userState, userdispatch] = useContext(UserContext);
  const [projectState, projectdispatch] = useContext(ProjectContext);
  const [teamState, teamdispatch] = useContext(TeamContext);


const getUserInfo = async () => {
  const id = localStorage.getItem("userId");
  const res = await apiServer.get(`/user/${id}`); 
  await userdispatch({ type: "get_user_info", payload: res.data });
}

const getUserTasks = async () => {
  const id = localStorage.getItem("userId");
  const res = await apiServer.get(`/task/user/${id}`);
  await taskdispatch({ type: "get_user_tasks", payload: res.data });
};

useEffect(() => {
  getUserInfo();
  getUserTasks();
}, []);

  return (
    <BrowserRouter>
      <div className="overlay">
        <CustomDrawer showDrawer={showDrawer} drawer={drawer} />
        <div className="overlay-right-side">
          <Switch>
            <Route exact path="/" component={HomePage} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default PrivateRoutes;
