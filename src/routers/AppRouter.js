import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import styled, { css } from 'react-emotion';

import ServiceDashboard from '../components/ServiceDashboard';
import EditService from '../components/EditService';
import AddService from '../components/AddService';
import NotFound from '../components/NotFound';
import Cars from '../components/cars/Cars';
import Login from '../components/Login';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history} >
      <Switch>
        <PublicRoute exact path="/" component={Login} />
        <PrivateRoute path="/dashboard" component={ServiceDashboard} />
        <PrivateRoute path="/addcar" component={Cars} />
        <PrivateRoute path="/create" component={AddService} />
        <PrivateRoute path="/edit/:id" component={EditService} />
        <Route component={NotFound} />
      </Switch>
  </Router>
);

export default AppRouter;

// const AppRouter = () => (
//   <Router history={history} >
//       <Switch>
//         <PublicRoute exact path="/" component={Login} />
//         <PrivateRoute path="/dashboard" component={ServiceDashboard} />
//         <PrivateRoute path="/addcar" component={Cars} />
//         <PrivateRoute path="/create" component={AddService} />
//         <PrivateRoute path="/edit/:id" component={EditService} />
//         <Route component={NotFound} />
//       </Switch>
//   </Router>
// );