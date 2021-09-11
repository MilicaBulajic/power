import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Dasboard from "./Landing/Dasboard";


const PrivateRoutes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Dasboard} />
            </Switch> 
        </BrowserRouter> 
    )
};

export default PrivateRoutes;