import React from 'react'
import { 
  Background, 
  Container, 
  Logo, 
  ButtonLink
} from './styles/header'
import { Link as ReactRouterLink } from 'react-router-dom'


export default function Header({ bg = true, children, ...restProps }) {
  return bg ? <Background {...restProps}>{children}</Background> : children;
}

Header.Frame = function HeaderFrame({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

// Header.Logo = function HeaderLogo({ to, ...restProps }) {
//   return (
//     <React.Fragment>
//       <Logo to={to} {...restProps} />
//     </React.Fragment>
//   );
// }

Header.Logo = function HeaderLogo({ to, ...restProps }) {
  return (
    <ReactRouterLink to={to}>
      <Logo {...restProps} />
    </ReactRouterLink>
  )
}

Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }) {
  return <ButtonLink {...restProps}>{children}</ButtonLink>;
}