import React, { useContext, useEffect, useState } from "react";
import Tasks from './../Pages/Tasks'
import { Context as UserContext } from "./../../context/UserContext";

const Dashboard = () => {
    const { getUserInfo } = useContext(UserContext);

    useEffect(() => {
      getUserInfo();
    }, []);

    return (
        <div>
            <p>Welcome to Dasboard</p>
            <Tasks />
        </div>
    );
};

export default Dashboard;