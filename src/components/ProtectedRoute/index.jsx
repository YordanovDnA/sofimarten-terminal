/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

/*
  Write your own function to determine if there is a user or import your own one.
  If your application need protected route you will have to create a Login/SignIn
  page where the user will be redirected if he/she is not logged in.
*/
const getUser = () => true;

const ProtectedRoute = ({ component: Component, render, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      if (!getUser()) return <Redirect to="/login" />;
      return Component ? <Component {...props} /> : render(props);
    }}
  />
);

export default ProtectedRoute;
