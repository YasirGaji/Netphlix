import React from 'react'
import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom';
import { FaqsContainer }  from './containers/faqs';
import { FooterContainer } from './containers/footer';
import JumbotronContainer from './containers/jumbotron';
import * as ROUTES from './constants/routes';

export default function App() {
  return (
    <Router>
    <Route exact path='/'>
        <JumbotronContainer />
        <FaqsContainer />
        <FooterContainer />
      </Route>
    </Router>
  );
}
