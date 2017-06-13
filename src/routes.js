'use strict';

import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Layout from './components/Layout';
import IndexPage from './components/IndexPage';
import DJPage from './components/DJPage';

const routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={IndexPage}/>
    <Route path="dj/:id" component={DJPage}/>
  </Route>
);

export default routes;
