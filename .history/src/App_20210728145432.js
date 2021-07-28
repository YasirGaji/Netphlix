import React from 'react'
import { FaqsContainer }  from './containers/faqs';
import { FooterContainer } from './containers/footer';
import JumbotronContainer from './containers/jumbotron';

export function App() {
  return (
    <>
     <JumbotronContainer />
     <FaqsContainer />
     <FooterContainer />
    </>
  );
}
