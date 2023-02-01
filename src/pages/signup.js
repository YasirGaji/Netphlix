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

  const [userName, setUserName] = useState('')
  const [emailAddress, setEmailAddress] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  // validating form inputs 👇🏼
  const isInvalid = userName === '' || password === '' || emailAddress === ''

  const handleSignup = (event) => {
    event.preventDefault()

    firebase
      .auth()
      .createUserWithEmailAndPassword(emailAddress, password)
      .then((result) =>
        result.user
          .updateProfile({
            displayName: userName,
            photoURL: Math.floor(Math.random() * 5) + 1,
          })
          .then(() => {
            history(ROUTES.BROWSE)
          }
        )
      )
      .catch((error) => {
        setUserName('')
        setEmailAddress('')
        setPassword('')
        setError(error.message)
      }
    )
  }

  return (
    <>
      <HeaderContainer>
        <Form>
        <Form.Title>Sign Up</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}

          <Form.Base onSubmit={handleSignup} method="POST">
            <Form.Input 
              placeholder="User name"
              value={userName}
              onChange={({ target }) => setUserName(target.value)}
            />

            <Form.Input
              placeholder="Email address"
              value={emailAddress}
              onChange={({ target }) => setEmailAddress(target.value)}
            />

            <Form.Input
              type="password"
              autoComplete="off"
              placeholder="Set Password"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />

            <Form.Submit disabled={isInvalid} type="submit">
              Sign Up
            </Form.Submit>
          </Form.Base>

          <Form.Text>
            Already have an account? <Form.Link to="/signin">Sign in now.</Form.Link>
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
