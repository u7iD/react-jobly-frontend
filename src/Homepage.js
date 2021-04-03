import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import CurrentUserContext from "./CurrentUserContext";

function Homepage() {
  const history = useHistory();
  const currentUser = useContext(CurrentUserContext);

  return (
    <div>
      <h1>Jobly</h1>
      <p>All the jobs in one, convenient place.</p>
      {currentUser ? (
        <h2>Welcome Back!</h2>
      ) : (
        <button onClick={() => history.push("/login")}>Log in</button>
      )}
    </div>
  );
}

export default Homepage;
