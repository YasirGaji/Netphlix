  
import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { FirebaseContext } from '../context/firebase';
import { Form } from '../components';
import HeaderContainer from '../containers/header'
import { FooterContainer } from '../containers/footer';
import * as ROUTES from '../constants/routes';

export default function Signin() {
  const { firebase } = useContext(FirebaseContext);
  const [emailAddress, setEmailAddress] = useState(' ');
  const [password, setPassword] = useState(' ');
  const [error, setError] = useState(' '); 

  const isInvalid = password === ' ' || emailAddress == ' ';
  const handleSignIn = (event) => {
    event.preventDefault();

  }

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign In</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}

          <Form.Base onSubmit={handleSignIn} method="POST">
            <Form.Input placeholder="Email address" value={emailAddress} onChange={({ target }) => setEmailAddress(target.value)} />

            <Form.Input type="password" autoComplete="off"  placeholder="Password" value={password} onChange={({ target }) => setPassword(target.value)} />

            <Form.Submit disabled={isInvalid} type="submit">Sign In</Form.Submit>
          </Form.Base>

          <Form.Text>
            New to Netphlix? <Form.Link to ="/sign-up">Sign up now.</Form.Link>
          </Form.Text>
          <Form.TextSmall>
            This page is protected by Google reCAPTCHA to ensurre you're not a bot. Learn more
          </Form.TextSmall>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  )
}
