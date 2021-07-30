import React from 'react';
import { render } from 'react-dom';
import App from './app';
import './index.css';
import 'normalize.css';
import { GlobalStyles } from "./global-styles"
import { firebase } from "./lib/firebase.prod"

render(
  <>
    <FirebaseContext.Provider value={{ firebase }}>
      <GlobalStyles />
      <App />
    </FirebaseContext.Provider>
  </>, document.getElementById('root')
);