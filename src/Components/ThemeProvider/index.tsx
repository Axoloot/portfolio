import { ReactElement } from 'react';
import { ThemeProvider } from 'styled-components';

const main = {
  primary: '#393e41',
  secondary: '#f6f7eb',
  tertiary: '#e94f37',
};

const themes = [main];

interface ThemeProps {
  children: ReactElement;
}

const Theme = (props: ThemeProps) => {
  return <ThemeProvider theme={main}>{props.children}</ThemeProvider>;
};

export default Theme;
