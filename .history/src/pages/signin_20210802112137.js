  
import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { FirebaseContext } from '../context/firebase';
import { Form } from '../components';
import { HeaderContainer } from '../components/header';
import { FooterContainer } from '../containers/footer';
import * as ROUTES from '../constants/routes';

export default function Signin() {
  const [emailAddress, setEmailAddress] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState(' '); 

  return (
    <>
      <H1> hello from the sign </H1>
      <FooterContainer />
    </>
  )
}
