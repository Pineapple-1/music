import React from "react";
import { Switch, Route } from "react-router-dom";
import SignIn from "../signin/signin";
import SignUp from "../signup/signup";
import { Logout } from "../logout/logout";
import Feed from "../feed/feed";
import { Redirect } from "../redirect/redirect";

const Router = ({ setToken, Token }) => {
  return (
    <Switch>
      <Route path="/" exact>
        <Feed Token={Token} />
      </Route>
      <Route path="/signin">
        <SignIn Token={Token} setToken={setToken} />
      </Route>
      <Route path="/signup" component={SignUp} />
      <Route path="/logout">
        {" "}
        <Logout setToken={setToken} />
      </Route>
      <Route path="/redirect">
        {" "}
        <Redirect />
      </Route>
    </Switch>
  );
};

export default Router;
