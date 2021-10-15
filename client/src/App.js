import React, { useContext, useState } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Routes from "./components/Routes";
import AuthContext from "./context/AuthContext";
import UserStore from "./context/store/UserStore";
import TeamStore from "./context/store/TeamStore";
import TaskStore from "./context/store/TaskStore";
import ProjectStore from "./context/store/ProjectStore";
import { Provider as UserProvider } from "./context/UserContext";
import PublicRoutes from './components/Landing/PublicRoutes';

const App = () => {
  const [auth, setAuth] = useState(localStorage.getItem("token") || "");
  const [userId, setUserId] = useState(localStorage.getItem("userId") || null);
  const [email, setEmail] = useState(localStorage.getItem("email") || null);
  const [user, setUser] = useState(localStorage.getItem("user") || null);

  const [drawer, setDrawer] = useState(true);
  const showDrawer = () => setDrawer(!drawer);
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    localStorage.removeItem("userId");
    setAuth(null);
    setEmail(null);
    setUserId(null);
  };

  const context = {
    auth,
    setAuth,
    userId,
    setUserId,
    email,
    setEmail,
    user,
    setUser,
    drawer,
    setDrawer,
    showDrawer,
    logout,
  };

  return (
    <AuthContext.Provider value={context}>
      <UserStore>
        <ProjectStore>
          <TeamStore>
            <TaskStore>
              {/* {state.auth ? <Routes /> : <LandingRoutes/> } */}
              {/* <Route exact path="/" component={LandingPage}></Route> */}
              <Routes />
              {/* {state.auth ? <Route path="/" component={Home} /> : <Routes />} */}
            </TaskStore>
          </TeamStore>
        </ProjectStore>
      </UserStore>
    </AuthContext.Provider>
  );
};

export default App;
