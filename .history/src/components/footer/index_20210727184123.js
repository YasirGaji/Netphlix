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
