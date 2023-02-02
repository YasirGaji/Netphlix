import React, { useContext } from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
// import  useAuth  from '../hooks/useAuth'
import { FirebaseContext } from '../context/firebase'


const ProtectedRoute = () => {
  const { firebase } = useContext(FirebaseContext);
  const location = useLocation()

  return (
    firebase?.user
      ? <Outlet />
      : <Navigate to={{
        pathname: '/signin',
        state: { from: location },
      }} replace />
  )
  
}

export default ProtectedRoute;









// export const ProtectedRoute = ({
//   user,
//   redirectPath = '/signin',
//   children,
// }) => {
//   if (user) {
//     return children;
//   }

//   if (!user) {
//     return <Navigate to={{
//       pathname: redirectPath,
//       // eslint-disable-next-line no-restricted-globals
//       state: { from: location },
//     }} replace />;
//   }

//   return null;
// };

// export const RedirectRoute = ({
//   user,
//   loggedInPath,
//   children,
//   ...rest
// }) => {
//   if (!user) {
//     return children
//   }

//   if (user) {
//   return <Navigate to={{pathname: loggedInPath}} />;
//   }
//   return null;
// };



// if (user) {
//   return <Outlet />
// }

// if (!user) {
//   return <Navigate to={{
//     pathname: '/signin',
//     // eslint-disable-next-line no-restricted-globals
//     state: { from: location },
//   }} replace />;
// }

// return null;