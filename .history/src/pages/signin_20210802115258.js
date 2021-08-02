  
import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { FirebaseContext } from '../context/firebase';
import { Form } from '../components';
import HeaderContainer from '../containers/header'
import { FooterContainer } from '../containers/footer';
import * as ROUTES from '../constants/routes';

export default function Signin() {
  const [emailAddress, setEmailAddress] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState(' '); 

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign In</Form.Title>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  )
}
