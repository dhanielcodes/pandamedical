import React from 'react';
import { Route, Switch } from 'react-router-dom';

/**
 * pages
 */

import { RecordsList } from '../pages';

const MedicalRecordsRoute = () => (
  <Switch>
    <Route exact path="/medical-records" component={RecordsList} />
  </Switch>
);

export default MedicalRecordsRoute;
