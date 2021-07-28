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