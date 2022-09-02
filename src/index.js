import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
//const myFirstElement = <h1>Hello React!</h1>
//const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(myFirstElement);
ReactDOM.render(
  <BrowserRouter>
    <h1>Hello</h1>
    <App />
  </BrowserRouter>,
  
  document.getElementbyId('root')
  );

