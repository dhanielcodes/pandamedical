import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PageNotFound from '../../PageNotFound';

/**
 * pages
 */

import { Home } from '../pages';

const DashboardRoute = () => (
  <Switch>
    <Route exact path="/dashboard" component={Home} />
    <Route component={PageNotFound} />
  </Switch>
);

export default DashboardRoute;
