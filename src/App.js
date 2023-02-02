import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import { 
  Home,
  Signin,
  Signup,
  Browse
 } from './pages';
 import { IsUserRedirect, ProtectedRoute } from './helpers/routes';


export default function App() {
  const user = { };

  return (
    <Router>
    <Routes>
      <Route exact path={ROUTES.SIGN_IN}  loggedInPath={ROUTES.BROWSE} user={user} element={
        <IsUserRedirect>
          <Signin />
        </IsUserRedirect>
      } />

      <Route exact path={ROUTES.SIGN_UP}  loggedInPath={ROUTES.BROWSE} user={user} element={
        <IsUserRedirect >
          <Signup />
        </IsUserRedirect>
      } />

      {/* <Route exact path={ROUTES.SIGN_IN} element={<Signin />} /> */}
      {/* <Route exact path={ROUTES.SIGN_UP} element={<Signup />} /> */}
      {/* <Route exact path={ROUTES.HOME} element={<Home />} />  */}
      {/* <Route exact path={ROUTES.BROWSE} element={<Browse />}  */}

      <Route exact path={ROUTES.BROWSE} redirectPath={ROUTES.SIGN_IN} user={user} element={
        <ProtectedRoute >
          <Browse />
        </ProtectedRoute>
      } /> 

      <Route exact path={ROUTES.HOME} loggedInPath={ROUTES.BROWSE} user={user} element={
        <IsUserRedirect >
          <Home />
        </IsUserRedirect>
      } /> 

    </Routes>
    </Router>
  );
}




// <Router>
    //   <Routes>
    //     <Route>
    //       <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_IN} exact>
    //         <Signin />
    //       </IsUserRedirect>
    //     </Route>

    //     <Route></Route>
    //     <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_UP} exact>
    //       <Signup />
    //     </IsUserRedirect>
    //     <ProtectedRoute user={user} path={ROUTES.BROWSE} exact>
    //       <Browse />  
    //     </ProtectedRoute>
    //     <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.HOME} exact>
    //       <Home />
    //     </IsUserRedirect>
    //   </Routes>
    // </Router>