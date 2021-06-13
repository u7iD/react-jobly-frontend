import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import CurrentUserContext from "./CurrentUserContext";
import "./Navigation.css";

const Navigation = ({ logout }) => {
  const { currentUser } = useContext(CurrentUserContext);
  console.debug("Navigation...", "currentUser=", currentUser);

  // Using a function to set the links when a user is logged
  // is better than using a const. Using const creates a bug
  // "Uncaught TypeError: Cannot read property 'first_name' of null"
  const loggedInLinks = () => {
    return (
      <ul className="nav">
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/companies">
            Companies
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/jobs">
            Jobs
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/profile">
            Profile
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/login" onClick={logout}>
            <span>
              Log out {currentUser.first_name || currentUser.username}
            </span>
          </NavLink>
        </li>
      </ul>
    );
  };

  const loggedOutLinks = () => {
    return (
      <NavLink className="nav-link" to="/login">
        Login
      </NavLink>
    );
  };

  return (
    <nav className="navbar bg-white mb-4">
      <NavLink className="nav-link" exact to="/">
        Jobly
      </NavLink>
      {currentUser ? loggedInLinks() : loggedOutLinks()}
    </nav>
  );
};

export default Navigation;
