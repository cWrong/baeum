/** @format */

"use client";

import { createGlobalStyle } from "styled-components";
import reset from "./reset";
import {
  lightThemeScheme,
  lightThemeVariables,
  darkThemeScheme,
  darkThemeVariables,
} from "./theme";

const GlobalStyle = createGlobalStyle`
  ${reset};
    html,
    body,
    #_next {
      width: 100%;
      min-height: 100vh;
      letter-spacing: -0.2px;
    }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: inherit;
  }

  html,
  body,
  #_next {
    width: 100%;
    min-height: 100vh;
    letter-spacing: -0.2px;
    ${darkThemeVariables};
    color: ${darkThemeScheme.contrast};
    background-color: ${darkThemeScheme.theme};
  }



  a {
    color: inherit;
    text-decoration: none;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  // Firefox
  input[type=number] {
    -moz-appearance: textfield;
  }
`;

export default GlobalStyle;
