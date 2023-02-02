import React from 'react';
import { Routes, Route } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import { 
  Home,
  Signin,
  Signup,
  Browse
 } from './pages';
 import  {RedirectRoute, ProtectedRoute} from './helpers/routes';
import { Layout } from './components';
import { useAuthListener } from './hooks/useAuth';


export default function App() {
  const user = useAuthListener();
  console.log(user)

  return (
    <Routes>
      <Route exact path="/" element={<Layout />}>
      <Route exact path="/" element={<Home />} /> 
        {/* <Route exact path="signin" element={<Signin />} /> */}
        {/* <Route exact path="signup" element={<Signup />} /> */}
        {/* <Route exact path="browse" element={<Browse />} /> */}
        
        <Route element={<RedirectRoute loggedInPath={ROUTES.BROWSE} user={user} />}>
          <Route path="signup" element={<Signup />} />
          <Route exact path="signin" element={<Signin />} />
        </Route> 

        <Route element={<ProtectedRoute user={user} />}>
          <Route path="browse" element={<Browse />} />
        </Route>
      </Route> 
    </Routes>   
  );
}


