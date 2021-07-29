import React from 'react'
import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom';
import Home from "./"
import * as ROUTES from './constants/routes';

export default function App() {
  return (
    <Router>
    <Route exact path={ROUTES.HOME}}>
       <Home />
      </Route>
    </Router>
  );
}
