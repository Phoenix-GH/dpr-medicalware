import * as React from 'react';
import { Route } from 'react-router';
import { Switch } from 'react-router-dom';

import  HomePage from 'app/containers/Home';
import { hot } from 'react-hot-loader';

export const App = hot(module)(() => (
  <Switch>
    <Route path="/" component={HomePage} />
  </Switch>
));
