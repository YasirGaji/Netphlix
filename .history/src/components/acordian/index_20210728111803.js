import { createContext } from 'istanbul-lib-report'
import React, { useState, useContext } from 'react'
import { Container } from '../jumbotron/styles/jumbotron'

const ToggleContext = createContext();

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
  return <Title { ...restProps}>{children}</Title>
}

Accordian.Frame = function AccordianFrame({children, ...restProps}) {
  return <Frame { ...restProps}>{children}</Frame>
}

Accordian.Item = function AccordianItem({children, ...restProps}) {
  const [toggleShow, setToggleShow] = useState(false);

  return <Item { ...restProps}>{children}</Item>
}

Accordian.Header = function AccordianHeader({children, ...restProps}) {
  return <Header onClick={() => setToggle()} { ...restProps}>{children}</Header>
}