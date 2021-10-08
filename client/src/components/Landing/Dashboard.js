import React, { useContext, useEffect, useState } from "react";
import Tasks from "./../Pages/Tasks";
import { Context as UserContext } from "./../../context/UserContext";
import MotivationalQuotes from "../quotes/MotivationalQuotes";

const Dashboard = () => {
  const { getUserInfo } = useContext(UserContext);

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <div>
          <MotivationalQuotes />
          <Tasks />
    </div>
  );
};

export default Dashboard;
