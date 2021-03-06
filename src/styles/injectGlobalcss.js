import { css, injectGlobal } from "emotion"

injectGlobal`
  * {
    box-sizing: border-box;
  }

  html {
    font-size: 100%;
  }
  body {
    color: #333;
    background: white;
    font-family: Helvetica, Arial, sans-serif;
    font-size: 1rem;
  }

  button {
    cursor: pointer;
  }

  button:disabled {
    cursor: default;
  }

  is-active {
    font-weight: bold;
  }
`;


