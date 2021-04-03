import React, { useState } from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

const LoginPage = ({ login, signup }) => {
  const [loginMode, setLoginMode] = useState(true);
  function handleClick(e) {
    if (e.target.name === "login") {
      setLoginMode(true);
    } else {
      setLoginMode(false);
    }
  }

  return (
    <div>
      <button name="login" onClick={handleClick}>
        Login
      </button>
      <button name="signup" onClick={handleClick}>
        Sign up
      </button>
      {loginMode ? <LoginForm login={login} /> : <SignupForm signup={signup} />}
    </div>
  );
};

export default LoginPage;
