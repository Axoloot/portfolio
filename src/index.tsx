import React from 'react';
import ReactDOM from 'react-dom/client';
import { createGlobalStyle } from 'styled-components';
import Router from './Components/Router';
import Theme from './Components/ThemeProvider';
// import 'dotenv/config';

const env = process.env.NODE_ENV || 'local';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const GlobalStyle = createGlobalStyle`
  body {
    overflow: hidden;
    background: ${props => props.theme.primary};
    color: ${props => props.theme.secondary};
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }


  body > #root > div {
    height: 100svh;
    width: 100svw;
  }
`;
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
