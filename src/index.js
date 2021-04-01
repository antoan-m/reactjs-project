import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Backendless from 'backendless'
import ScrollToTop from 'react-router-scroll-top'


Backendless.initApp('7ECE9EFE-DB9E-D320-FF17-04C136319800', 'D25AC5BB-3B9F-4F71-866A-6F9F6ED00656');

Backendless.serverURL = 'https://eu-api.backendless.com';

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <ScrollToTop>
    <App />
    </ScrollToTop>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
