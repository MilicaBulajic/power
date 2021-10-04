import React, { useContext, useState } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Routes from "./components/Routes";
import LandingPage from "./components/Landing/LandingPage";
import AuthContext from "./context/AuthContext";
import { Provider as UserProvider } from "./context/UserContext";
import PublicRoutes from './components/Landing/PublicRoutes';

const App = () => {
  const [auth, setAuth] = useState(localStorage.getItem("token") || "");
  const [userId, setUserId] = useState(localStorage.getItem("userId") || null);
  const [email, setEmail] = useState(localStorage.getItem("email") || null);
  const [user, setUser] = useState(localStorage.getItem("user") || null);
  const context = {
    auth,
    setAuth,
    userId,
    setUserId,
    email,
    setEmail,
    user,
    setUser,
  };

  return (
    <AuthContext.Provider value={context}>
      <UserProvider>
       <Routes />
      </UserProvider>
    </AuthContext.Provider>
  );
};

export default App;
