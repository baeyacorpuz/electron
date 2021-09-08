import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ForgotPassword from './ForgotPassword/ForgotPassword';
import ResetPassword from './ForgotPassword/ResetPassword';
import Login from './Login/Login';
import Signup from './Signup/Signup';

const Home = () => {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/forgot-password" component={ForgotPassword} />
      <Route path="/reset-password" component={ResetPassword} />
    </Switch>
  );
}

export default Home;