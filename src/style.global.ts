import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
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
