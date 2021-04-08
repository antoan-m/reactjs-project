import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Backendless from 'backendless'
import ScrollToTop from 'react-router-scroll-top'


Backendless.initApp('C7A24F3C-33CE-35BA-FF4A-7C481F350D00', '7CE8EFC6-36B6-40D6-A318-0A35F1491D94');

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
