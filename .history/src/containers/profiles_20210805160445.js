import React from 'react'
import { Header } from '../components'
import logo from '../logo.svg''
import  * as ROUTES from '../constants/routes'

export default function SelectProfileContainer({ user, setProfile }) {
  return (
    <>
    <Header bg={false}>
      <Header.Frame>
        <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix" />
      </Header.Frame>
    </Header>
    </>
  )
}
