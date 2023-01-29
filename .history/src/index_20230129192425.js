import React from 'react';
// import { render } from 'react-dom';
import App from './app';
import { createRoot } from 'react-dom/client';


// render(<App />, document.getElementById('root'));


const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App tab="home" />);
