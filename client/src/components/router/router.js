import React from "react";
import { Switch, Route } from "react-router-dom";
import SignIn from "../signin/signin";
import SignUp from '../signup/signup'


const Router = () => {
  return (
    <Switch>
      <Route path="/" exact component={LandingPage} />
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />

    </Switch>
  );
};

export default Router;