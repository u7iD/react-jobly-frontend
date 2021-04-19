import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import CompanyList from "./CompanyList";
import CompanyDetail from "./CompanyDetail";
import JobList from "./JobList";
import LoginPage from "./LoginPage";
import ProfileForm from "./ProfileForm";
import Homepage from "./Homepage";
import PrivateRoute from "./PrivateRoute";

const Routes = ({ login, signup, setCurrentUser }) => {
  console.debug(
    "Routes...",
    `login=${typeof login}`,
    `signup=${typeof signup}`
  );
  return (
    <Switch>
      <Route exact path="/login">
        <LoginPage login={login} signup={signup} />
      </Route>
      <Route exact path="/">
        <Homepage />
      </Route>
      <PrivateRoute exact path="/companies/:handle">
        <CompanyDetail />
      </PrivateRoute>
      <PrivateRoute exact path="/companies">
        <CompanyList />
      </PrivateRoute>
      <PrivateRoute exact path="/jobs">
        <JobList />
      </PrivateRoute>
      <PrivateRoute exact path="/profile">
        <ProfileForm />
      </PrivateRoute>
      <Redirect to="/" />
    </Switch>
  );
};

export default Routes;
