import React, { useState } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { Form } from '../components';
import  HeaderContainer  from '../containers/header';
import  FooterContainer  from '../containers/footer';
import * as ROUTES from '../constants/routes';
import useAuth  from '../hooks/useAuth';

export default function SignIn() {
  const history = useNavigate();
  const { firebase } = useAuth();

  const location = useLocation();
  const from = location.state?.from?.pathname || { from: { pathname: ROUTES.HOME } };


  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const isInvalid = password === '' || emailAddress === '';

  const handleSignin = (event) => {
    event.preventDefault();

    return firebase
      .auth()
      .signInWithEmailAndPassword(emailAddress, password)
      .then(() => {
        history(from, { replace: true })
      })
      .catch((error) => {
        setEmailAddress('');
        setPassword('');
        setError(error.message);
      });
  };

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign In</Form.Title>
          {error && <Form.Error data-testid="error">{error}</Form.Error>}

          <Form.Base onSubmit={handleSignin} method="POST">
            <Form.Input
              placeholder="Email address"
              value={emailAddress}
              onChange={({ target }) => setEmailAddress(target.value)}
            />
            <Form.Input
              type="password"
              value={password}
              autoComplete="off"
              placeholder="Password"
              onChange={({ target }) => setPassword(target.value)}
            />
            <Form.Submit disabled={isInvalid} type="submit" data-testid="sign-in">
              Sign In
            </Form.Submit>
          </Form.Base>

          <Form.Text>
            New to Netflix? <Form.Link to="/signup">Sign up now.</Form.Link>
          </Form.Text>
          <Form.TextSmall>
            This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.
          </Form.TextSmall>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
}









































// import React, { useState, useContext } from 'react'
// import FooterContainer from '../containers/footer'
// import HeaderContainer from '../containers/header'
// import { Form } from '../components'
// import { FirebaseContext } from '../context/firebase'
// import * as ROUTES from '../constants/routes'
// import { useNavigate, useLocation } from 'react-router-dom'

// export default function Signin() {
//   const history = useNavigate()
//   const { firebase } = useContext(FirebaseContext) 
//   const [emailAddress, setEmailAddress] = useState('')
//   const [password, setPassword] = useState('')
//   const [error, setError] = useState('')
//   const location = useLocation()

//   // validating form inputs 👇🏼
//   const isInvalid = password === '' || emailAddress === ''

//   const handleSignin = (event) => {
//     event.preventDefault()

//     // firebase authentication setup here 👇🏼
//     firebase
//       .auth()
//       .signInWithEmailAndPassword(emailAddress, password)
//       .then(() => {
//         location.state?.from ? history(location.state.from) : history(ROUTES.BROWSE)
//       })
//       .catch((error) => {
//         setEmailAddress('')
//         setPassword('')
//         setError(error.message)
//       })
//   }

//   return (
//     <>
//       <HeaderContainer>
//         <Form>
//           <Form.Title>Sign In</Form.Title>
//           {error && <Form.Error>{error}</Form.Error>}

//           <Form.Base onSubmit={handleSignin} method="POST">
//             <Form.Input
//               placeholder="Email address"
//               value={emailAddress}
//               onChange={({ target }) => setEmailAddress(target.value)}
//             />

//             <Form.Input
//               type="password"
//               autoComplete="off"
//               placeholder="Password"
//               value={password}
//               onChange={({ target }) => setPassword(target.value)}
//             />

//             <Form.Submit disabled={isInvalid} type="submit">
//               Sign In
//             </Form.Submit>
//           </Form.Base>

//           <Form.Text>
//             New to Netphlix? <Form.Link to="/signup">Sign up now.</Form.Link>
//           </Form.Text>

//           <Form.TextSmall>
//             This page is protected by Google reCAPTCHA to ensure you're not a bot.  
//             <Form.Link target="_blank" to="https://www.google.com/recaptcha/about/" > Learn more.</Form.Link> 
//           </Form.TextSmall>
//         </Form>
//       </HeaderContainer>
      
//       <FooterContainer />
//     </>
//   )
// }