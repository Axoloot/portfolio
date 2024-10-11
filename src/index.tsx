import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyle from './style.global';
import Router from './Components/Router';
import Theme from './Components/ThemeProvider';
import './translations';

// import 'dotenv/config';

const env = process.env.NODE_ENV || 'local';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

window.document.title =
  env === 'production' ? 'Cyril de Lajudie | Portofolio' : env;

root.render(
  <React.StrictMode>
    <Theme>
      <>
        <GlobalStyle />
        <Router />
      </>
    </Theme>
  </React.StrictMode>
);
