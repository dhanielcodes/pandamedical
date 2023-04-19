import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PageNotFound from '../../PageNotFound';

/**
 * pages
 */

import {
  Address,
  BloodType,
  Email,
  Phone,
  EmailOTP,
  PhoneOTP,
  EmergencyContact,
  Insurance,
  Passcode,
  Password,
  Settings,
  Physician,
  Units,
  UserInfo,
} from '../pages';

const ProfileRoute = () => (
  <Switch>
    <Route exact path="/profile/settings" component={Settings} />
    <Route exact path="/profile/settings/insurance" component={Insurance} />
    <Route exact path="/profile/settings/password" component={Password} />
    <Route exact path="/profile/settings/passcode" component={Passcode} />
    <Route exact path="/profile/settings/email" component={Email} />
    <Route exact path="/profile/settings/phone" component={Phone} />
    <Route exact path="/profile/settings/email/otp" component={EmailOTP} />
    <Route exact path="/profile/settings/phone/otp" component={PhoneOTP} />
    <Route
      exact
      path="/profile/settings/emergency"
      component={EmergencyContact}
    />
    <Route exact path="/profile/settings/blood-type" component={BloodType} />
    <Route exact path="/profile/settings/address" component={Address} />
    <Route exact path="/profile/settings/physician" component={Physician} />
    <Route exact path="/profile/settings/units" component={Units} />
    <Route
      exact
      path="/profile/settings/personal-information"
      component={UserInfo}
    />
    <Route component={PageNotFound} />
  </Switch>
);

export default ProfileRoute;
