import React, {useState} from 'react'
import { FooterContainer } from '../containers/footer'
import { HeaderContainer } from "../containers/header"
import { Form } from "../components"

export default function Signin() {
  const [emailAddress, setemailAddress] = useState();
  return (
    <>
      <HeaderContainer>
        hello from the sign
      </HeaderContainer>
      <FooterContainer />
    </>
  )
}
