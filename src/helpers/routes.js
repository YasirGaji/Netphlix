import React from 'react'
import { Navigate } from 'react-router-dom'

// export function IsUserRedirect({ user, loggedInPath, children, ...rest }) {
//   return (
//     <Routes>
//       <Route 
//           {...rest}
//           render={() => {
//             if (!user) {
//               return children
//             }

//             if (user) {
//               return (
//                 <Navigate 
//                   to={{
//                     pathname: loggedInPath
//                   }}
//                 />
//               )
//             }

//             // return null
//           }}/>
//     </Routes>
//   )
// }

export const ProtectedRoute = ({
  user,
  redirectPath = '/signin',
  children,
}) => {
  if (!user) {
    return <Navigate to={redirectPath} replace />;
  }

  return children;
};

export const IsUserRedirect = ({
  user,
  loggedInPath,
  children,
  ...rest
}) => {
  if (!user) {
    return children
  }

  if (user) {
  return <Navigate to={{pathname: loggedInPath}} />;
  }
  return null;
};