import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App.js';
import Header from './components/Header.js';
import Body from './components/Body.js'

const divApp = document.getElementById('app');

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <App />
    <Body />
  </React.StrictMode>,
  divApp
);
