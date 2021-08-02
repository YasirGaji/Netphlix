import React from 'react'

export default function Header({ bg  = true, children , ...resProps }) {
  return bg ? <Background{ ...resProps}>{children}</Background> : children;

}

Header.Frame = function HeaderFrame({ children, ...restProps }) {
  return <Container { ...restProps}>{children}</Container>
}

Header.Logo = function HeaderLogo({to, ...restProps }) {
  return (
    <ReactRouterLink to={to}>
      <Logo { ...restProps} />
    </ReactRouterLink>
  )
}