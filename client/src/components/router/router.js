import React from "react";
import { Switch, Route } from "react-router-dom";
import SignIn from "../signin/signin";
import SignUp from '../signup/signup'
import { Logout } from "../logout/logout";
import {Feed} from '../feed/feed'


const Router = ({setToken,Token}) => {
  return (
    <Switch>
      <Route path="/" exact><SignIn setToken = {setToken}/></Route>
      <Route path="/signin"><SignIn setToken = {setToken}/></Route>
      <Route path="/signup" component={SignUp} />
      <Route path="/logout" > <Logout setToken = {setToken}/></Route>
      <Route path="/feed" > <Feed Token = {Token}/></Route>
    </Switch>
  );
};

export default Router;