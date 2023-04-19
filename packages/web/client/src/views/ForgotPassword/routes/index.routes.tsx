import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PageNotFound from '../../PageNotFound';

/**
 * pages
 */

import {
  Method,
  EmailRecovery,
  NewPassword,
  SMSRecovery,
  OTPRecovery,
} from '../pages';

const ForgotPasswordRoute = () => (
  <Switch>
    <Route exact path="/forgot-password" component={Method} />
    <Route path="/forgot-password/email" component={EmailRecovery} />
    <Route path="/forgot-password/sms" component={SMSRecovery} />
    <Route path="/forgot-password/otp" component={OTPRecovery} />
    <Route path="/forgot-password/reset-password" component={NewPassword} />
    <Route component={PageNotFound} />
  </Switch>
);

export default ForgotPasswordRoute;
