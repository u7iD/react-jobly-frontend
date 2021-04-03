import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./Navigation";
import Routes from "./Routes";
import JoblyApi from "./JoblyAPI";
import jsonwebtoken from "jsonwebtoken";
import LoadingSpinner from "./LoadingSpinner";
import CurrentUserContext from "./CurrentUserContext";

const App = () => {
  const [infoLoaded, setInfoLoaded] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("jobly-token"));
  const [currentUser, setCurrentUser] = useState(null);

  console.debug(
    "App...",
    "infoLoaded=",
    infoLoaded,
    "currentUser=",
    currentUser,
    `token=${token}`
  );

  const login = async ({ username, password }) => {
    try {
      const userToken = await JoblyApi.login({ username, password });
      setToken(userToken);
      localStorage.setItem("jobly-token", userToken);
      return { success: true };
    } catch (errors) {
      return { success: false, errors: errors };
    }
  };

  const logout = async () => {
    setInfoLoaded(false);
    setToken(null);
    localStorage.removeItem("jobly-token");
    setCurrentUser(null);
  };

  const signup = async (data) => {
    try {
      const userToken = await JoblyApi.signup(data);
      setToken(userToken);
      localStorage.setItem("jobly-token", userToken);
      return { success: true };
    } catch (errors) {
      return { success: false, errors: errors };
    }
  };

  useEffect(() => {
    console.debug("App useEffect...", "token=", token, "inLoaded=", infoLoaded);

    async function getUserData() {
      if (token) {
        try {
          const currentUsername = jsonwebtoken.decode(token).username;
          const user = await JoblyApi.getUser(currentUsername);
          setCurrentUser(user);
        } catch (error) {
          // bad token
          setToken(null);
          localStorage.removeItem("jobly-token");
          console.error("App useEffect error...", error);
        }
        setInfoLoaded(true);
      }
    }
    setInfoLoaded(false);
    getUserData();
  }, [token]);

  if (token && !infoLoaded) return <LoadingSpinner />;

  return (
    <div>
      <div className="App">
        <BrowserRouter>
          <CurrentUserContext.Provider value={currentUser}>
            <Navigation logout={logout} />
            <Routes login={login} signup={signup} />
          </CurrentUserContext.Provider>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
