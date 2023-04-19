import React from 'react';
import { Route, Switch } from 'react-router-dom';

/**
 * pages
 */

import { Landing } from '../pages';

export default () => (
  <Switch>
    <Route exact path="/" component={Landing} />
    <Route exact path="/about" component={()=><div>about</div>} />
  </Switch>
);
