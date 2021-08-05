import React from 'react'
import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom';
import { Home, Browse, Signin, Signup } from "./pages"
import * as ROUTES from './constants/routes';
import { IsUserRedirect, ProtectedRoute  } from './helpers/routes';

export default function App() {
  const user = {};

  return (
    <Router>

      <IsUserRedirect
         user={user} 
         loggedInPath={ROUTES.BROWSE}
          path={ROUTES.SIGN_IN}
          exact >
        <Signin />
      </IsUserRedirect>
       
      <IsUserRedirect
         user={user} 
         loggedInPath={ROUTES.BROWSE}
          path={ROUTES.SIGN_UP}
          exact >
        <Signup />
      </IsUserRedirect>

      <ProtectedRoute user={user} path={ROUTES.BROWSE} exact>
         <Browse />
      </ProtectedRoute>

      <Route exact path={ROUTES.HOME}>
        <Home />
      </Route>
    </Router>
  );
}
