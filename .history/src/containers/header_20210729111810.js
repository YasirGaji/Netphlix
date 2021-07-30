import React from 'react'
import { Header } from '../components'; 
import * 

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
