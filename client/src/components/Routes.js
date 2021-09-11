import React, { useContext } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import UserContext from "../context/UserContext";
import Landing from "./Landing/LandingPage";
import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './Landing/PublicRoutes';

const Routes = () => {
  const { auth } = useContext(UserContext);

  return <>{auth ? <PrivateRoutes /> : <PublicRoutes />}</>;
}

export default Routes;
