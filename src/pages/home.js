import React from 'react';
import  JumbotronContainer  from '../containers/jumbotron';
import  FaqsContainer  from '../containers/faqs';
import  FooterContainer  from '../containers/footer';
import HeaderContainer  from '../containers/header';
import { 
  OptForm,
  Feature
} from '../components/';

export default function Home() {
  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>Unlimited films & Series Curated By Yasir Gaji.</Feature.Title>
          <Feature.SubTitle>Watch anywhere. Cancel at any time.</Feature.SubTitle>

          <OptForm>
            <OptForm.Input placeholder="Email address" />
            <OptForm.Button>Try it now</OptForm.Button>
            <OptForm.Break />
            <OptForm.Text>
              Don't have an account? 
              <OptForm.Link to={"/signup"}> Sign up</OptForm.Link> 
            </OptForm.Text>
          </OptForm>
        </Feature>
      </HeaderContainer>

      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  )
}
