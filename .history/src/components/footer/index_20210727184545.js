import React from 'react'

export default function Footer({ children, ...restProps }) {
  return (
    <container { ...restProps}>
      {children}
    </container>
  )
}

Footer.Row = function({ children, ... restProps}) {
  return <Row { ...restProps}>{children}</Row>
}

Footer.Column = function({ children, ... restProps}) {
  return <Column { ...restProps}>{children}</Column>
}

Footer.Link = function({ children, ... restProps}) {
  return <Link { ...restProps}>{children}</Link>
}

Footer.Title = function({ children, ... restProps}) {
  return <Title { ...restProps}>{children}</Title>
}

Footer.Column = function({ children, ... restProps}) {
  return <Column { ...restProps}>{children}</Column>
}