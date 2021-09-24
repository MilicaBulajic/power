import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Dasboard from "./Landing/Dasboard";
import CustomDrawer from "./Navigation/CustomDrawer"

const PrivateRoutes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <CustomDrawer>
                     <Route exact path="/" component={Dasboard} />
                </CustomDrawer>
            </Switch> 
        </BrowserRouter> 
    )
};

export default PrivateRoutes;