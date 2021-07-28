import React from 'react'
import { Container, Inner } from './styles/jumbotron'

export default function Jumbotron({ children, direction = 'row', ...restProps }) {
  return (
    <div>
      <Inner direction={direction}>
       {children}
      </Inner>
    </div>
  )
}

Jumbotron.Container = function JumbotronContainer({ children, ...restProps }) {
  return <Container { ...restProps }>{children}</Container>
}

Jumbotron.Pane = function JumbotronPane({ children, ...restProps }) {
  return <Pane { ...restProps }>{children}</Pane>
}