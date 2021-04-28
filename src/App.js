import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./Navigation";
import Routes from "./Routes";
import JoblyApi from "./JoblyAPI";
import jsonwebtoken from "jsonwebtoken";
import LoadingSpinner from "./LoadingSpinner";
import CurrentUserContext from "./CurrentUserContext";
import useLocalStorage from "./useLocalStorage";

const App = () => {
  const [infoLoaded, setInfoLoaded] = useState(false);
  const [token, setToken] = useLocalStorage("jobly-token");
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
      return { success: true };
    } catch (errors) {
      return { success: false, errors: errors };
    }
  };

  const logout = async () => {
    setInfoLoaded(false);
    setToken(null);
    setCurrentUser(null);
  };

  const signup = async (data) => {
    try {
      const userToken = await JoblyApi.signup(data);
      setToken(userToken);
      return { success: true };
    } catch (errors) {
      return { success: false, errors: errors };
    }
  };

  useEffect(() => {
    console.debug("App useEffect...", "token=", token);

    const getUserData = async () => {
      if (token) {
        try {
          const currentUsername = jsonwebtoken.decode(token).username;
          const user = await JoblyApi.getUser(currentUsername);
          setCurrentUser(user);
        } catch (error) {
          console.error("App useEffect error...", error);
        }
        setInfoLoaded(true);
      }
    };
    setInfoLoaded(false);
    getUserData();
  }, [token]);

  if (token && !infoLoaded) return <LoadingSpinner />;

  return (
    <div className="App">
      <BrowserRouter>
        <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
          <Navigation logout={logout} />
          <Routes login={login} signup={signup} />
        </CurrentUserContext.Provider>
      </BrowserRouter>
    </div>
  );
};

export default App;
