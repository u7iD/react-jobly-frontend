import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import CurrentUserContext from "./CurrentUserContext";

function PrivateRoute({ exact, path, children }) {
  console.debug(
    "PrivateRoute...",
    "exact=",
    exact,
    "path=",
    path,
    "children=",
    children
  );
  // return currentUser ? (
  //   <Route exact={exact} path={path}>
  //     {children}
  //   </Route>
  // ) : (
  //   <Redirect to="/notfound"></Redirect>
  // );

  const currentUser = useContext(CurrentUserContext);

  if (!currentUser) {
    return <Redirect to="/login"></Redirect>;
  }

  return (
    <Route exact={exact} path={path}>
      {children}
    </Route>
  );
}

export default PrivateRoute;
