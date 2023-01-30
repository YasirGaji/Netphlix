import React from 'react'
import { 
  Container,
  Row,
  Column,
  Link,
  Title,
  Text,
  Break
} from './styles/footer'

export default function Footer({ children, ...restProps}) {
  return (
    <Container {...restProps}>{children}</Container>
  )
}


Footer.Row = function FooterRow({ children, ...restProps}) {
  return <Row {...restProps}>{children}</Row>
}

Footer.Column = function FooterRow({ children, ...restProps}) {
  return <Column {...restProps}>{children}</Column>
}

Footer.Link = function FooterRow({ children, ...restProps}) {
  return <Link {...restProps}>{children}</Link>
}

Footer.Title = function FooterRow({ children, ...restProps}) {
  return <Title {...restProps}>{children}</Title>
}

Footer.Text = function FooterRow({ children, ...restProps}) {
  return <Text {...restProps}>{children}</Text>
}

Footer.Break = function FooterRow({ children, ...restProps}) {
  return <Break {...restProps}>{children}</Break>
}