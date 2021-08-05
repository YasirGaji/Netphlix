import React from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Home, Browse, Signin, Signup } from "./pages"
import * as ROUTES from './constants/routes';
import { IsUserRedirect, ProtectedRoute  } from './helpers/routes';

export default function App() {
  const user = null;

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

      <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.HOME}>
        <Home />
      </IsUserRedirect>
     
    </Router>
  );
}
