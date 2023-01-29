import React from 'react';
import { render } from 'react-dom';
import App from './app';

render(<App />, document.getElementById('root'));


const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
