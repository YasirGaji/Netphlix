import React from 'react';
import { BrowserRouter as Router, Switch, Routes, Route } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import { Home } from './pages';


export default function App() {
  return( 
    <Router>
    <Routes>
      <Route exact path={ROUTES.HOME} element={<Home />}>  
      </Route>
    </Routes>
    </Router>
  )
}

