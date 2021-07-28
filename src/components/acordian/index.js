import React, {useState} from 'react'
import { Container } from '../jumbotron/styles/jumbotron'

export default function Accordian({ children, ...restProps }) {
  return (
    <Container { ...restProps }>
      <Inner>
        {children}
      </Inner>
    </Container>
  )
}

Accordian.Title = function AccordianTitle({children, ...restProps}) {
  return <Title{ ...restProps}>{children}</Title>
}

Accordian.Frame = function AccordianFrame({children, ...restProps}) {
  return <Frame{ ...restProps}>{children}</Frame>
}