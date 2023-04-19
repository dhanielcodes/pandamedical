import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PageNotFound from '../../PageNotFound';

/**
 * pages
 */

import {
  AddPatient,
  DocAppointmentDetails,
  AppointmentReschedule,
  DoctorAppointments,
  DoctorDashboard,
  MyPatients,
  PatientProfile,
  ReferDoctor,
  ReferSpecialties,
  RescheduleConfirm,
} from '../pages';

const DoctorRoute = () => (
  <Switch>
    {/* <Route exact path="/doctor/auth/login" component={DoctorLogin} /> */}
    <Route exact path="/doctor/dashboard" component={DoctorDashboard} />
    <Route exact path="/doctor/my-patients" component={MyPatients} />
    <Route exact path="/doctor/patients/add" component={AddPatient} />
    <Route exact path="/doctor/patients/:patient" component={PatientProfile} />
    <Route exact path="/doctor/appointments" component={DoctorAppointments} />
    <Route
      exact
      path="/doctor/appointments/:appointmentId"
      component={DocAppointmentDetails}
    />
    <Route
      exact
      path="/doctor/appointments/:appointmentId/reschedule"
      component={AppointmentReschedule}
    />
    <Route
      exact
      path="/doctor/appointment/confirmation/:appointmentId/:selectedDate/:selectedTime"
      component={RescheduleConfirm}
    />
    <Route
      exact
      path="/doctor/patients/referral/specialties"
      component={ReferSpecialties}
    />
    <Route
      exact
      path="/doctor/patients/referral/specialties/:specialty"
      component={ReferDoctor}
    />
    <Route component={PageNotFound} />
  </Switch>
);

export default DoctorRoute;
