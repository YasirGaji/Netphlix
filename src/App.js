import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import { Home } from './pages';


export default function App() {
  return( 
    <Router>
      <Route exact path={ROUTES.HOME}>
        <Home />
      </Route>
    </Router>
  )
}

