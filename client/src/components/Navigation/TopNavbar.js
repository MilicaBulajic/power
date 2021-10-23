import React, { useContext } from 'react';
import { Context as UserContext } from "../../context/store/UserStore";
import AuthContext from "../../context/AuthContext";
import { Menu, MenuItem } from "@material-ui/core";
import "../../css/TopNavbar.css";
import Avatar from "./Avatar";

const TopNavbar = ({ drawer, showDrawer }) => {
    const { logout } = useContext(AuthContext)
    const { setAuth, setEmail, setUserId } = useContext(UserContext);
    const userId = localStorage.getItem("userId");


    return (
        <div className="top-container">
            <div className="top-nav-bar-left">
            </div>

                      <MenuItem> <button onClick={logout}>Logout</button></MenuItem>
                      <Avatar id={localStorage.getItem("userId")} />
        </div>
    );
};

export default TopNavbar;