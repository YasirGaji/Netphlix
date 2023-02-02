import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { GlobalStyles } from './global-styles';
import 'normalize.css'
import  { firebase }  from './lib/firebase.prod';
import { FirebaseContext } from './context/firebase';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

render(
  <>
    <FirebaseContext.Provider value={{ firebase }}>
    <BrowserRouter>
      <GlobalStyles/>
      <Routes>
        <Route path="/*" element={<App />} />
      </Routes>
    </BrowserRouter>
    </FirebaseContext.Provider>

  </>, 
  document.getElementById('root')
);


