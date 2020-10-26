import styled, {css} from "styled-components";

import {Theme} from "../../shared/types";

export const TableContainer = styled.div(
  ({theme}: Theme) => css`
    border-spacing: 0;
    border: 1px solid ${theme.COLOR.GRAY};
    font-size: ${theme.FONT.SIZE.S};
    width: 500px;
    margin: ${theme.GAP.L} auto 0;
  `
);

export const TableHeader = styled.div``;

export const TableBody = styled.div``;

export const TableHeadRow = styled.div`
  font-weight: 500;
  line-height: 1.5;
  display: flex;
`;

export const TableCell = styled.div(
  ({theme}: Theme) => css`
  padding: ${theme.GAP.M};
  text-align: left;
  border-right: 1px solid ${theme.COLOR.GRAY};
  border-bottom: 1px solid ${theme.COLOR.GRAY};
  flex: 0 0 150px;
  
  &:first-child {
    flex: 0 0 50px;
  }
  
  &:last-child {
    border-right: none;
  },
`
);

export const TableRow = styled.div(
  ({theme, isSelected}: Theme & {isSelected: boolean}) => css`
    color: inherit;
    outline: none;
    background-color: ${isSelected
      ? theme.BACKGROUND.LIGHT
      : theme.BACKGROUND.PRIMARY};
    display: flex;

    &:hover {
      background-color: ${theme.BACKGROUND.LIGHT};
    }

    &:last-child {
      border-bottom: none;
    }
  `
);

export const TableFooter = styled.div(
  ({theme}: Theme) => css`
    padding: ${theme.GAP.M};
  `
);
