import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import LoginPage from "./LoginPage";
import Landing from "./LandingPage";
import RegisterPage from "./RegisterPage";
import Onboard from "./Onboard";

const PublicRoutes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Landing} />
                <Route path="/login" component={LoginPage} />
                <Route path="/register" component={RegisterPage} />
                <Route exact path="/register/onboard" component={Onboard} />
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