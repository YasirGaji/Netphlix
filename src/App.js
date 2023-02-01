import React from 'react';
import { BrowserRouter as Router, Switch, Routes, Route } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import { 
  Home,
  Signin,
  Signup,
  Browse
 } from './pages';


export default function App() {
  return( 
    <Router>
    <Routes>
      <Route exact path={ROUTES.HOME} element={<Home />} />
      <Route exact path={ROUTES.SIGN_IN} element={<Signin />} /> 
      <Route exact path={ROUTES.SIGN_UP} element={<Signup />} /> 
      <Route exact path={ROUTES.BROWSE} element={<Browse />} /> 
    </Routes>
    </Router>
  )
}

