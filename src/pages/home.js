import React from 'react';
import  JumbotronContainer  from '../containers/jumbotron';
import  FaqsContainer  from '../containers/faqs';
import  FooterContainer  from '../containers/footer';
import HeaderContainer  from '../containers/header';
import { OptForm } from '../components/';

export default function Home() {
  return (
    <>
      <HeaderContainer>
        <OptForm>
          <OptForm.Input placeholder="Email address" />
          <OptForm.Button>Sign Up</OptForm.Button>
          <OptForm.Break />
          <OptForm.Text>
            Don't have an account? Try it now.
          </OptForm.Text>
        </OptForm>
      </HeaderContainer>

      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  )
}
