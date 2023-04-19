import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from '../helpers/hoc/PrivateRoute';
import PhysicianRoute from '../helpers/hoc/PhysicianRoute';
import GuestRoute from '../helpers/hoc/GuestRoute';
import { HomeRoute } from '../views/Home';
import { AuthRoute } from '../views/Auth';
import { DashboardRoute } from '../views/Dashboard';
import { VitalsRoute } from '../views/Vitals';
import { BookAppointmentRoute } from '../views/Appointment';
import { ForgotPasswordRoute } from '../views/ForgotPassword';
import { LabResultsRoute } from '../views/LabResults';
import { MedicalRecordsRoute } from '../views/MedicalRecords';
import PageNotFound from '../views/PageNotFound';
import { ProfileRoute } from '../views/Profile';
import { DoctorRoute } from '../views/Doctor';

export default () => (
  <Switch>
    <GuestRoute path="/auth" component={AuthRoute} />
    <PrivateRoute path="/dashboard" component={DashboardRoute} />
    <PrivateRoute path="/profile" component={ProfileRoute} />
    <PrivateRoute path="/appointment" component={BookAppointmentRoute} />
    <PrivateRoute path="/vitals" component={VitalsRoute} />
    <PrivateRoute path="/medical-records" component={MedicalRecordsRoute} />
    <PrivateRoute path="/lab-results" component={LabResultsRoute} />

    <PhysicianRoute path="/doctor" component={DoctorRoute} />

    <GuestRoute path="/forgot-password" component={ForgotPasswordRoute} />
    <GuestRoute exact path="/" component={HomeRoute} />
    <Route component={PageNotFound} />
  </Switch>
);
