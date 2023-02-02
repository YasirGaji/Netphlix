import React from 'react'
import { Navigate } from 'react-router-dom'

export const ProtectedRoute = ({
  user,
  redirectPath = '/signin',
  children,
}) => {
  if (user) {
    return children;
  }

  if (!user) {
    return <Navigate to={{
      pathname: redirectPath,
      // eslint-disable-next-line no-restricted-globals
      state: { from: location },
    }} replace />;
  }

  return null;
};

export const IsUserRedirect = ({
  user,
  loggedInPath,
  children,
}) => {
  if (!user) {
    return children
  }

  if (user) {
  return <Navigate to={{pathname: loggedInPath}} />;
  }
  return null;
};