import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --text-color: #6C6C80;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #F0F0F5;
    -webkit-font-smoothing: antialiased;
    color: var(--text-color);
    font-family: Roboto;
  }
`;

export default GlobalStyle;
