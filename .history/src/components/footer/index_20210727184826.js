import React from 'react'
import { Container, Row,  } from '../jumbotron/styles/jumbotron'

export default function Footer({ children, ...restProps }) {
  return (
    <Container { ...restProps}>
      {children}
    </Container>
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

Footer.Text = function({ children, ... restProps}) {
  return <Text { ...restProps}>{children}</Text>
}