import { createGlobalStyle } from "styled-components";

export const CSSReset = createGlobalStyle`
  /* Reset */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: sans-serif;
    background-color: ${({ theme }) => theme.backgroundBase};
    color: ${({theme}) => theme.textColorBase}
  }
  /* NextJS */
  html {
    display: flex;
    flex-direction: column;
    min-height: 100%;
  }
  body {
    display: flex;
    flex: 1;
  }
  #__next {
    display: flex;
    flex: 1;
  }
  /* Globals */
  button,
  a {
    text-decoration: none;
    opacity: 1;
    transition: .3s;
    &:hover,
    &:focus {
      opacity: .5;
    }
  }
  ::-webkit-scrollbar {
  width: 10px;
  height: 10px;
  background-color: none;
 
}
::-webkit-scrollbar-track {
  background: none;
}
/* Handle */
::-webkit-scrollbar-thumb {
  background: ${({theme}) => theme.borderBase};
  opacity: 0.5;
  border-radius: 20px;
  border-style: solid;
  border-width: 1px;
  border-color: ${({theme}) => theme.backgroundBase} ;
}
::-webkit-scrollbar-thumb:hover {
  background: ${({theme}) => theme.backgroundLevel2};
  opacity: 0;
}
`;