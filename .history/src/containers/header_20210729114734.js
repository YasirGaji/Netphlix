import React from 'react'
import { Header } from '../components'; 
import * as ROUTES from "../constants/routes"

export default function HeaderContainer({ children }) {
  return (
    <Header>
      <Header.Frame>
        <Header.Logo to={ROUTES.HOME} alt="Netflix" src=""  />
        <Header.ButtonLink to={ROUTES.SIGN_IN}>sign in</Header.ButtonLink>
      </Header.Frame>
      {children}
    </Header>
  )
}
