import React from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';
import { RegisterProvider } from '../contexts/Register/RegisterContext';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

const Routes: React.FC = () => (
  <Switch>
    <Redirect exact from="/" to="/sign_in" />
    <Route path="/sign_in" component={SignIn} />
    <RegisterProvider>
      <Route path="/sign_up" component={SignUp} />
    </RegisterProvider>
  </Switch>
);

export default Routes;
