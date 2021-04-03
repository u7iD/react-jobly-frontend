import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import CurrentUserContext from "./CurrentUserContext";

function Navigation({ logout }) {
  const currentUser = useContext(CurrentUserContext);
  const loggedInLinks = (
    <>
      <NavLink to="/companies">Companies</NavLink>
      <NavLink to="/jobs">Jobs</NavLink>
      <NavLink to="/profile">Profile</NavLink>
      <NavLink to="/">
        <span onClick={logout}>Log out</span>
      </NavLink>
    </>
  );

  const loggedOutLinks = <NavLink to="/login">Login</NavLink>;
  return (
    <nav>
      <NavLink to="/">Jobly</NavLink>
      {currentUser ? loggedInLinks : loggedOutLinks}
    </nav>
  );
}

export default Navigation;
