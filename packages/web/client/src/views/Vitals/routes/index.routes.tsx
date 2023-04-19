import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PageNotFound from '../../PageNotFound';

/**
 * pages
 */

import { AddVitals, VitalDetails, VitalHistory, VitalsRecords } from '../pages';

const VitalsRoute = () => (
  <Switch>
    <Route exact path="/vitals" component={VitalsRecords} />
    <Route exact path="/vitals/add" component={AddVitals} />
    <Route
      exact
      path="/vitals/history/:vital/:vitalPosition"
      component={VitalDetails}
    />
    <Route exact path="/vitals/history/:vital" component={VitalHistory} />
    <Route component={PageNotFound} />
  </Switch>
);

export default VitalsRoute;
