/* eslint-disable react/function-component-definition */
import React from 'react';
import { Redirect, Route } from 'react-router';

const PublicRoute = ({ children, ...routeProps }) => {
  const profile = false;
  if (profile) {
    return <Redirect to="/" />;
  }
  return <Route {...routeProps}>{children}</Route>;
};

export default PublicRoute;
