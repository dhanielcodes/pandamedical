import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import PageNotFound from '../../PageNotFound';
import { Login, Register, OTP, Pin, Fingerprint, DoctorLogin } from '../pages';

export default () => (
  <Switch>
    <Route exact path="/auth/login" component={Login} />
    <Route exact path="/auth/doctor/login" component={DoctorLogin} />
    <Route path="/auth/register" component={Register} />
    <Route path="/auth/otp" component={OTP} />
    <Route path="/auth/pin" component={Pin} />
    <Route path="/auth/fingerprint" component={Fingerprint} />
    <Redirect to="/auth/login" from="/auth" />
    <Route component={PageNotFound} />
  </Switch>
);
