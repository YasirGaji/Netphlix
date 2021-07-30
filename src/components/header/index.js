import React from 'react'
import { Link as ReactRouterLink } from 'react-router-dom';

import { Background, ButtonLink, Frame, Container, Logo } from './styles/header'

export default function Header({ bg  = true, children , ...resProps }) {
  return bg ? <Background{ ...resProps}>{children}</Background> : children;

}

Header.Frame = function HeaderFrame({ children, ...restProps }) {
  return <Container { ...restProps}>{children}</Container>
}

Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }) {
  return <ButtonLink { ...restProps}>{children}</ButtonLink>
}

Header.Logo = function HeaderLogo({ to, ...restProps }) {
  return (
    <ReactRouterLink to={to}>
      <Logo { ...restProps} />
    </ReactRouterLink>
  )
}