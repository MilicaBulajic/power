import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import LoginPage from "./LoginPage";
import LandingPage from "./LandingPage";
import RegisterPage from "./RegisterPage";
import Onboard from "./Onboard";

const PublicRoutes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/login" component={LoginPage} />
                <Route exact path="/register" component={RegisterPage} />
                <Route exact path="/" component={LandingPage} />
                <Route
                 path="/*"
                 render={() => {
                    return <Redirect to="/" />;
                }}
             />
            </Switch> 
        </BrowserRouter> 
    );
};

export default PublicRoutes;