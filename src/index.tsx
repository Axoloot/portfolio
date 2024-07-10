import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Router from './misc/Router';

const env = process.env.NODE_ENV || 'local';
window.document.title =
  env === 'production' ? 'Cyril de Lajudie | Portofolio' : env;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
