import React, { useState } from 'react'
import FooterContainer from '../containers/footer'
import HeaderContainer from '../containers/header'
import { Form } from '../components'

export default function Signin() {
  const [emailAddress, setEmailAddress] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  // validating form inputs 👇🏼
  const isInvalid = password === '' || emailAddress === ''

  const handleSignin = (event) => {
    event.preventDefault()
  }

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign In</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}

          <Form.Base onSubmit={handleSignin} method="POST">
            <Form.Input
              placeholder="Email address"
              value={emailAddress}
              onChange={({ target }) => setEmailAddress(target.value)}
            />

            <Form.Input
              type="password"
              autoComplete="off"
              placeholder="Password"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />

            <Form.Submit disabled={isInvalid} type="submit">
              Sign In
            </Form.Submit>
          </Form.Base>

          <Form.Text>
            New to Netphlix? <Form.Link to="/signup">Sign up now.</Form.Link>
          </Form.Text>
        </Form>
      </HeaderContainer>
      
      <FooterContainer />
    </>
  )
}
