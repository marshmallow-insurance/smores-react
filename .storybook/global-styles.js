import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    -webkit-tap-highlight-color: transparent;
  }

  *:focus {
    outline: none;
  }

  html, body, #root {
    height: 100%;
  }

  #root {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;