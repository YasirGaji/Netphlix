import React from 'react';
import { render } from 'react-dom';
import App from './app';
import './index.css';
import 'normalize.css';
import { GlobalStyles } from "./global-styles"
import { firebase } from "./lib/firebase.prod"

render(
  <>
    <GlobalStyles />
    <App />
  </>, document.getElementById('root')
);