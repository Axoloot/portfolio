/// <reference types="react-scripts" />
import 'styled-components';

declare global {
  interface Window {
    cycleTheme: any;
  }
}

declare module '*.svg' {
  const content: string;
  export default content;
}

declare module '*.png' {
  const content: string;
  export default content;
}
