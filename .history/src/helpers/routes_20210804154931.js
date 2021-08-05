import React from 'react'
import { Route, Redirect } from 'react-router-dom'

export function IsUserRedirect({ user, loggedInPath, children, ...rest }) {
  return (
    <Route
      { ...rest }
      render={() => {
        if (!user) {
          return children
        }
        return <Redirect to={loggedInPath} />
      }
      }}
  )
}
