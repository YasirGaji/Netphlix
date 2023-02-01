import React, { useState, useContext } from 'react'
import FooterContainer from '../containers/footer'
import HeaderContainer from '../containers/header'
import { Form } from '../components'
import { FirebaseContext } from '../context/firebase'
import * as ROUTES from '../constants/routes'
import { useNavigate } from 'react-router-dom'

export default function Signup() {
  const history = useNavigate()
  const { firebase } = useContext(FirebaseContext) 
  const [emailAddress, setEmailAddress] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  // validating form inputs 👇🏼
  const isInvalid = password === '' || emailAddress === ''

  const handleSignup = (event) => {
    event.preventDefault()
  }

  return (
    <>
      <HeaderContainer>
        <Form>
        <Form.Title>Sign Up</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}

          <Form.Base onSubmit={handleSignup} method="POST">
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
              Sign Up
            </Form.Submit>
          </Form.Base>

          <Form.Text>
            Have an account? <Form.Link to="/signin">Sign in now.</Form.Link>
          </Form.Text>

          <Form.TextSmall>
            This page is protected by Google reCAPTCHA to ensure you're not a bot.  
            <Form.Link target="_blank" to="https://www.google.com/recaptcha/about/" > Learn more.</Form.Link> 
          </Form.TextSmall>
        </Form>
      </HeaderContainer>

      <FooterContainer />
    </>
  )
}
