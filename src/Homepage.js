import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import CurrentUserContext from "./CurrentUserContext";

const Homepage = () => {
  const history = useHistory();
  const { currentUser } = useContext(CurrentUserContext);

  return (
    <div className="text-center mb-4">
      <h1 className="font-weight-bold">Jobly</h1>
      <p className="lead">All the jobs in one, convenient place.</p>
      {currentUser ? (
        <h2>Welcome Back {currentUser.first_name || currentUser.username}!</h2>
      ) : (
        <button
          className="btn btn-primary font-weight-bold"
          onClick={() => history.push("/login")}
        >
          Log in
        </button>
      )}
    </div>
  );
};

export default Homepage;
