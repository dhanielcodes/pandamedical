import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PageNotFound from '../../PageNotFound';

/**
 * pages
 */

import { AddLabResults, LabDetails, LabRecords } from '../pages';

const LabResultsRoute = () => (
  <Switch>
    <Route exact path="/lab-results" component={LabRecords} />
    <Route
      exact
      path="/lab-results/:resultPosition/details"
      component={LabDetails}
    />
    <Route exact path="/lab-results/add" component={AddLabResults} />
    <Route component={PageNotFound} />
  </Switch>
);

export default LabResultsRoute;
