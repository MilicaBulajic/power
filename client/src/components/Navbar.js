import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Register from "./Landing/RegisterPage";
import { Link } from 'react-router-dom';
import "../css/Navbar.css";


export default function NavBar() {

  return (
    <div className="navbar">
        <Toolbar>
          <Typography variant="h6">
            Power
          </Typography>
          <div className="links">
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
          </div>
        </Toolbar>
    </div>
  );
}