import styled, {css} from "styled-components";

import {Theme} from "../../shared/types";

export const LoaderContainer = styled.div`
  display: flex;
  justify-content:center;
  align-items: center;
`;

export const LoaderInner = styled.div(
  ({theme}: Theme) => css`
      display: inline-block;
      width: 60px;
      height: 60px;

    &:after {
      content: " ";
      display: block;
      width: 50px;
      height: 50px;
      margin: 8px;
      border-radius: 50%;
      border: 6px solid ${theme.COLOR.CADET_BLUE};
      border-color: ${theme.COLOR.CADET_BLUE} transparent ${theme.COLOR.CADET_BLUE} transparent;
      animation: lds-dual-ring 1.2s linear infinite;
    }
    
    @keyframes lds-dual-ring {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  `
);
