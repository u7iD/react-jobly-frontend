import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import CurrentUserContext from "./CurrentUserContext";

const Homepage = () => {
  const history = useHistory();
  const { currentUser } = useContext(CurrentUserContext);

  return (
    <div className="d-flex align-items-center" style={{ minHeight: "100%" }}>
      <div className="container text-center">
        <h1 className="font-weight-bold">Jobly</h1>
        <p className="lead">All the jobs in one, convenient place.</p>
        {currentUser ? (
          <h2>
            Welcome Back {currentUser.first_name || currentUser.username}!
          </h2>
        ) : (
          <button
            className="btn btn-primary font-weight-bold"
            onClick={() => history.push("/login")}
          >
            Log in
          </button>
        )}
      </div>
    </div>
  );
};

export default Homepage;
