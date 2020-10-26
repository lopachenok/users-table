import {createGlobalStyle} from "styled-components";

import {Theme} from "../../shared/types";

import {THEME_DEFAULT} from "./themes";

export const GlobalStyle = createGlobalStyle<{theme: typeof THEME_DEFAULT}>(
  ({theme}: Theme) => `
  html {
    font-size: ${theme.FONT.SIZE.BASE};
    box-sizing: border-box;
  }
  
  body {
    display: flex;
    flex-direction: column;
    padding: 0;
    margin: 0;
    min-height: 100%;
    width: 100vw;
    font-family: ${theme.FONT.FAMILY.BASE};
    font-weight: ${theme.FONT.WEIGHT.BASE};
    background-color: ${theme.BACKGROUND.PRIMARY};
    color: ${theme.COLOR.PRIMARY};
    overflow: auto;
    user-select: none;
    
    & > .bootstrap {
       display: none!important;
    }
  }
  
  *,
  *:after,
  *:before {
    box-sizing: inherit;
    -webkit-tap-highlight-color: transparent;
    outline: none;
  }
  
  #___gatsby,
  #gatsby-focus-wrapper,
  div[role="group"] {
    min-height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    flex: 1 0 auto;
  }
  
  button {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 1em;
    font-family: inherit;
    outline: none;
    border-radius: 0;
    background: none;
    box-shadow: none;
    cursor: pointer;
  }
  
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  
  a {
    text-decoration: none;

    &:hover,
    &:focus,
    &:visited {
      text-decoration: none;
    }
  }
  
  h1, h2, h3, h4, h5, p {
    margin: 0;
    padding: 0;
    font-weight: ${theme.FONT.WEIGHT.BASE};
  }
`
);
