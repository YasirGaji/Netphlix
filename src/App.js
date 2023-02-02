import React from 'react';
import { Routes, Route } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import { 
  Home,
  Signin,
  Signup,
  Browse
 } from './pages';
 import { RedirectRoute,  } from './helpers/routes';
  import ProtectedRoute from './helpers/routes';
import { Layout } from './components';


export default function App() {
  const user = { };

  return (
    <Routes>
      <Route exact path="/" element={<Layout />}>
        <Route exact path="signin" element={<Signin />} />
        <Route exact path="signup" element={<Signup />} />
        <Route exact path="/" element={<Home />} /> 

        <Route element={<ProtectedRoute />}>
          <Route exact path="browse" element={<Browse />} />
        </Route>
      </Route> 
    </Routes>   
  );
}


 /* <Route exact path={ROUTES.SIGN_IN}  loggedInPath={ROUTES.BROWSE} user={user} element={
        <RedirectRoute path={ROUTES.SIGN_IN}  loggedInPath={ROUTES.BROWSE} user={user}>
          <Signin />
        </RedirectRoute>
      } />

      <Route exact path={ROUTES.SIGN_UP}  loggedInPath={ROUTES.BROWSE} user={user} element={
        <RedirectRoute >
          <Signup />
        </RedirectRoute>
      } />

      <Route exact path={ROUTES.BROWSE} redirectPath={ROUTES.SIGN_IN} user={user} element={
        <ProtectedRoute >
          <Browse />
        </ProtectedRoute>
      } /> 

      <Route exact path={ROUTES.HOME} loggedInPath={ROUTES.BROWSE} user={user} element={
        <RedirectRoute >
          <Home />
        </RedirectRoute>
      } />  */

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