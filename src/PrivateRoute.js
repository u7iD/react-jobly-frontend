import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import CurrentUserContext from "./CurrentUserContext";

const PrivateRoute = ({ exact, path, children }) => {
  console.debug(
    "PrivateRoute...",
    "exact=",
    exact,
    "path=",
    path,
    "children=",
    children
  );

  const { currentUser } = useContext(CurrentUserContext);

  if (!currentUser) {
    return <Redirect to="/login"></Redirect>;
  }

  return (
    <Route exact={exact} path={path}>
      {children}
    </Route>
  );
};

export default PrivateRoute;
