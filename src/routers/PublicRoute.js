import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

//--Check to see if logged in.  If so, redirect to /dashboard
//--If not logged in, redirect to the component sent.
//--Will be Components like login page or other page to show ONLY when logged out.
export const PublicRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => (
  <Route
    {...rest}
    component={props => {
      return (
      !isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect to="/dashboard" />
      )
    )}
  }
  />
);

const mapStateToProps = state => ({
  isAuthenticated: !!state.auth.uid
});

export default withRouter(connect(mapStateToProps)(PublicRoute));
