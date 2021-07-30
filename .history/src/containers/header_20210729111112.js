import React from 'react'
import { Header } from '../components'; 

export default function HeaderContainer({ children }) {
  return (
    <Header>
      <Header.Frame>
        <Header.Logo />
      </Header.Frame>
      {children}
    </Header>
  )
}
