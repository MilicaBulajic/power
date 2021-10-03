import React, { useContext } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import Landing from "./Landing/LandingPage";
import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './Landing/PublicRoutes';

const Routes = () => {
  const { auth } = useContext(AuthContext);

  return <>{auth ? <PrivateRoutes /> : <PublicRoutes />}</>;
}

export default Routes;
