import React, {FunctionComponent} from "react";
import {Cell, Column, Hooks, useRowSelect, useTable} from "react-table";

import {
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHeader,
  TableHeadRow,
  TableRow,
} from "./styles";

import {User} from "../../shared/types";
import {Checkbox} from "../Checkbox";
import {Loader} from "../Loader";

export type TableProps<T extends object> = {
  columns: Column<T>[];
  data: T[];
  isLoading: boolean;
};

const selectionHook = (hooks: Hooks<any>) => {
  hooks.allColumns.push(columns => [
    {
      id: "_selector",
      disableResizing: true,
      disableGroupBy: true,
      minWidth: 45,
      width: 45,
      maxWidth: 45,
      Header: header => {
        return <Checkbox {...header.getToggleAllRowsSelectedProps()} />;
      },
      Cell: ({row}: {row: Cell}) => (
        <Checkbox {...row.getToggleRowSelectedProps()} />
      ),
    },
    ...columns,
  ]);
};

export const Table: FunctionComponent<TableProps<User>> = ({
  columns,
  data,
  isLoading,
}) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    selectedFlatRows,
  } = useTable<User>(
    {
      columns,
      data,
    },
    useRowSelect,
    selectionHook
  );

  return (
    <div>
      <TableContainer {...getTableProps()}>
        <TableHeader>
          {headerGroups.map((headerGroup, index) => (
            <TableHeadRow {...headerGroup.getHeaderGroupProps()} key={index}>
              {headerGroup.headers.map((column, j) => (
                <TableCell {...column.getHeaderProps()} key={j}>
                  {column.render("Header")}
                </TableCell>
              ))}
            </TableHeadRow>
          ))}
        </TableHeader>
        {isLoading ? (
          <Loader />
        ) : (
          <TableBody {...getTableBodyProps()}>
            {rows.map(row => {
              prepareRow(row);
              return (
                <TableRow
                  {...row.getRowProps()}
                  key={row.original.id}
                  isSelected={row.isSelected}>
                  {row.cells.map((cell, j) => {
                    return (
                      <TableCell {...cell.getCellProps()} key={j}>
                        {cell.render("Cell")}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        )}
        <TableFooter>
          Пользователи:{" "}
          {selectedFlatRows.map(item => item.original.firstName).join(", ")}
        </TableFooter>
      </TableContainer>
    </div>
  );
};
