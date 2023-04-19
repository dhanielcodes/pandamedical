import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PageNotFound from '../../PageNotFound';

/**
 * pages
 */

import {
  Appointments,
  BookAppointment,
  SpecialistProfile,
  Specialities,
  Hospitals,
  HealthcareFacilities,
  SpecialityProfiles,
  HospitalProfile,
  TimeBooking,
  Confirmation,
  AppointmentDetails,
} from '../pages';

const BookAppointmentRoute = () => (
  <Switch>
    <Route exact path="/appointment/appointments" component={Appointments} />
    <Route
      exact
      path="/appointment/:appointmentId"
      component={AppointmentDetails}
    />
    <Route
      exact
      path="/appointment/book-appointment"
      component={BookAppointment}
    />
    <Route exact path="/appointment/physician" component={Specialities} />
    <Route
      exact
      path="/appointment/healthcare"
      component={HealthcareFacilities}
    />
    <Route
      exact
      path="/appointment/hospitals/:hospital"
      component={HospitalProfile}
    />
    <Route
      exact
      path="/appointment/speciality/:specialty"
      component={SpecialityProfiles}
    />
    <Route exact path="/appointment/hospitals" component={Hospitals} />
    <Route
      path="/appointment/speciality/:specialty/:doctorId"
      component={SpecialistProfile}
    />
    <Route path="/appointment/book/:doctorId" component={TimeBooking} />
    <Route
      path="/appointment/confirmation/:doctorId/:selectedDate/:selectedTime"
      component={Confirmation}
    />
    <Route component={PageNotFound} />
  </Switch>
);

export default BookAppointmentRoute;
