import React, { useState } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Dasboard from "./Landing/Dashboard";
import CustomDrawer from "./Navigation/CustomDrawer";
import "../css/CustomDrawer.css";

const PrivateRoutes = () => {
  const [drawer, setDrawer] = useState(true);
  const showDrawer = () => setDrawer(!drawer);
  return (
    <BrowserRouter>
      <div className="overlay">
        <CustomDrawer showDrawer={showDrawer} drawer={drawer} />
        <div className="overlay-right-side">
          <Switch>
            <Route exact path="/" component={Dasboard} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default PrivateRoutes;
