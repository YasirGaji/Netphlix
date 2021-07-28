import React from 'react'
import  FaqsContainer, { Faqs }  from './containers/faqs';
import { FooterContainer } from './containers/footer';
import JumbotronContainer from './containers/jumbotron';

export default function App() {
  return (
    <>
     <JumbotronContainer />
     <Faqs />
     <FooterContainer />
    </>
  );
}
