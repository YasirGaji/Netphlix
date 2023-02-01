import React from 'react';
import  JumbotronContainer  from '../containers/jumbotron';
import  FaqsContainer  from '../containers/faqs';
import  FooterContainer  from '../containers/footer';
import HeaderContainer  from '../containers/header';

export default function Home() {
  return (
    <HeaderContainer>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </HeaderContainer>
  )
}
