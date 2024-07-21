import { ReactElement, useCallback, useState } from 'react';
import { ThemeProvider } from 'styled-components';

const main = {
  primary: '#393e41',
  secondary: '#f6f7eb',
  tertiary: '#e94f37',
};

const theme2 = {
  primary: '#1e1e24',
  secondary: '#fff8f0',
  tertiary: '#92140c',
};

const theme3 = {
  primary: '#191716',
  secondary: '#e0e2db',
  tertiary: '#e6af2e',
};

const lightblue = {
  primary: '#4e598c',
  secondary: '#ffffff',
  tertiary: '#f9c784',
};

const light = {
  primary: '#8d99ae',
  secondary: '#2b2d42',
  tertiary: '#d90429',
};

const dark = {
  primary: '#2b2d42',
  secondary: '#8d99ae',
  tertiary: '#d90429',
};

const themes = [main, theme2, theme3, lightblue, dark, light];

interface ThemeProps {
  children: ReactElement;
}

const Theme = (props: ThemeProps) => {
  const [index, setIndex] = useState(0);

  const cycleTheme = useCallback(() => {
    if (index >= themes.length - 1) setIndex(0);
    else setIndex(i => i + 1);
  }, [index]);

  (window as any).cycleTheme = cycleTheme;

  return <ThemeProvider theme={themes[index]}>{props.children}</ThemeProvider>;
};

export default Theme;
