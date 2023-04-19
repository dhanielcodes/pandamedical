import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Routes from './routes/index.routes';
import './App.css';
import './shared/themes/sass/main.sass';
import 'react-toastify/dist/ReactToastify.css';

export default () => (
  <div className="App">
    <Router>
      <Routes />
      <ToastContainer />
    </Router>
  </div>
);
