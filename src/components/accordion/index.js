import React, { useState, useContext, createContext } from 'react'
import {
  Container,
  Inner,
  Title,
  Item,
  Header,
  Body,
  Frame,
} from './styles/accordion';

const ToggleContext = createContext();

export default function Accordion({ children, ...restProps }) {
  return (
    <Container {...restProps}>
      <Inner>{children}</Inner>
    </Container>
  )
}

Accordion.Title = function AccordionTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>
}

Accordion.Frame = function AccordionFrame({ children, ...restProps }) {
  return <Frame {...restProps}>{children}</Frame>
}

// Accordion.Item = function AccordionItem({ children, ...restProps }) {
//   const [toggleShow, setToggleShow] = useState(false)

//   return (
//     <Item {...restProps}>
//       <Header onClick={() => setToggleShow((toggleShow) => !toggleShow)}>
//         {children}
//       </Header>
//       <Body className={toggleShow ? 'open' : 'close'}>{children}</Body>
//     </Item>
//   )
// }

Accordion.Item = function AccordionItem({ children, ...restProps }) {
  const [toggleShow, setToggleShow] = useState(false);

  return (
    <ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
      <Item {...restProps}>{children}</Item>
    </ToggleContext.Provider>
  )
}


Accordion.Header = function AccordionHeader({ children, ...restProps }) {
  // eslint-disable-next-line no-unused-vars
  const { toggleShow, setToggleShow } = useContext(ToggleContext);

  return (
    <Header onClick={() => setToggleShow((toggleShow) => !toggleShow)} {...restProps}>
      {children}
    </Header>
  )
}


Accordion.Body = function AccordionBody({ children, ...restProps }) {
  return <Body {...restProps}>{children}</Body>
}
