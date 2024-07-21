import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import Router from './Pages/Router';

const env = process.env.NODE_ENV || 'local';
window.document.title =
  env === 'production' ? 'Cyril de Lajudie | Portofolio' : env;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const GlobalStyle = createGlobalStyle<{ $whiteColor?: boolean }>`
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
    height: 100%;
    width: 100svw;
  }
`;

const theme = {
  primary: '#393e41',
  secondary: '#f6f7eb',
  tertiary: '#e94f37',
};

// const theme = {
//   primary: '#264653',
//   secondary: '#2a9d8f',
//   tertiary: '#f4a261',
// };

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
