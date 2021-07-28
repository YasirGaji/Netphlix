import React from 'react';
import { render } from 'react-dom';
import App from './app';
import './index.css';
import GlobalStyles form "./global-styles"

render(
<>
  <GlobalStyles />
  <App />
</.>, document.getElementById('root')
);