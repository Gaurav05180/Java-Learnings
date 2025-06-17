import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import LoginButton from './LoginButton';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />

    <p>Hey! i'm main.jsx...</p>
    
    <LoginButton />
    
  </BrowserRouter>
);
