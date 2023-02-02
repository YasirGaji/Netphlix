import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'


export const RedirectRoute = ({user, loggedInPath}) => {
  return (
    !user? <Outlet />
      : <Navigate to={{
        pathname: loggedInPath,
      }} replace />
  )
}


export const  ProtectedRoute =({user}) => {
  
  const location = useLocation()

  return (
   user? <Outlet />
      : <Navigate to={{
        pathname: '/signin',
        state: { from: location },
      }} replace />
  )
}




