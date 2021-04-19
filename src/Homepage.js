import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import CurrentUserContext from "./CurrentUserContext";

const Homepage = () => {
  const history = useHistory();
  const { currentUser } = useContext(CurrentUserContext);

  return (
    <div className="d-flex flex-column align-items-center">
      <h1>Jobly</h1>
      <p>All the jobs in one, convenient place.</p>
      {currentUser ? (
        <h2>Welcome Back {currentUser.first_name}!</h2>
      ) : (
        <button onClick={() => history.push("/login")}>Log in</button>
      )}
    </div>
  );
};

export default Homepage;
