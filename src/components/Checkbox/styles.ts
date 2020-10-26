import styled, {css} from "styled-components";

import {Theme} from "../../shared/types";

export const HiddenCheckbox = styled.input.attrs({type: "checkbox"})`
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 10px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 10px;
`;

export const StyledCheckbox = styled.div(
  ({theme, checked}: Theme & {checked: boolean}) => css`
    display: inline-block;
    width: ${theme.GAP.M};
    height: ${theme.GAP.M};
    background: ${checked ? theme.COLOR.CADET_BLUE : theme.COLOR.INVERT};
    border-radius: 1px;
    border: 1px solid ${theme.COLOR.CADET_BLUE};
    transition: all 150ms;
  `
);

export const CheckboxContainer = styled.label`
  display: inline-block;
  vertical-align: middle;
`;
