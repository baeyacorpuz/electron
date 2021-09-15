import React, { useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Dashboard from "../components/dashboard/Dashboard";
import Home from "../components/home/Home";
import CommonRoute from "./CommonRoute";
import ProtectedRoute from "./ProtectedRoute";

const MainRoute = () => {
  // const [isVerified, setIsVerified] = useState(false)
  return (
    <Switch>
      <Route exact path="/" render={() => <Redirect to={"/login"} />}></Route>

      
      <CommonRoute path="/login" component={Home} />
      <CommonRoute path="/signup" component={Home} />
      {/* Redirect to /d if user is authenticated */}

      <ProtectedRoute path="/d" component={Dashboard} />
      
    </Switch>
  );
}
 
export default MainRoute;