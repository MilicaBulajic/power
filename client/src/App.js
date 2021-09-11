import React, { useContext, useState } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Routes from "./components/Routes";
import LandingPage from "./components/Landing/LandingPage";
import UserContext from "./context/UserContext";
import PublicRoutes from './components/Landing/PublicRoutes';

const App = () => {
  const [auth, setAuth] = useState(localStorage.getItem("token") || "");
  const [userId, setUserId] = useState(null);
  const [email, setEmail] = useState(null);
  const context = {
    auth,
    setAuth,
    userId,
    setUserId,
    email,
    setEmail,
  };

  return (
    <UserContext.Provider value={context}>
      <Routes />
    </UserContext.Provider>
  );
};

export default App;
