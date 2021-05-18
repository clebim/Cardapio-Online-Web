import React from 'react';
import { Redirect, Switch } from 'react-router-dom';
import { RegisterProvider } from '../contexts/Register/RegisterContext';
import Dashboard from '../pages/Dashboard';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Route from './Route';

const Routes: React.FC = () => (
  <Switch>
    <Redirect exact from="/" to="/sign_in" />
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/sign_in" component={SignIn} />
    <Route path="/sign_up" component={SignUp} />
  </Switch>
);

export default Routes;
