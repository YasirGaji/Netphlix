import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { GlobalStyles } from './global-styles';
import 'normalize.css'
import  firebase  from './lib/firebase.prod';

render(
  <>
    <GlobalStyles/>
    <App />
  </>, 
  document.getElementById('root')
);


