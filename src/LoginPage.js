import React, { useState } from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

const LoginPage = ({ login, signup }) => {
  const [loginMode, setLoginMode] = useState(true);

  console.debug(
    "LoginPage...",
    "loginMode=",
    loginMode,
    "typeof login=",
    typeof login,
    "typeof signup=",
    typeof signup
  );

  function handleClick(e) {
    if (e.target.name === "login") {
      setLoginMode(true);
    } else if (e.target.name === "signup") {
      setLoginMode(false);
    }
  }

  return (
    <div className="card col-md-4 offset-md-4 px-0 border-0">
      <div className="card-header p-0 text-right">
        <button
          name="login"
          className={loginMode ? "btn btn-primary active" : "btn btn-primary"}
          onClick={handleClick}
        >
          Login
        </button>

        <button
          className={loginMode ? "btn btn-primary" : "btn btn-primary active"}
          name="signup"
          onClick={handleClick}
        >
          Sign up
        </button>
      </div>
      <div className="card-body">
        {loginMode ? (
          <LoginForm login={login} />
        ) : (
          <SignupForm signup={signup} />
        )}
      </div>
    </div>
  );
};

export default LoginPage;
