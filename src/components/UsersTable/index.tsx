import React, {FunctionComponent, useEffect, useMemo} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Column} from "react-table";

import {User} from "../../shared/types";
import {loadUsers} from "../../store/actions";
import {ApplicationState} from "../../store/types";
import {Table} from "../Table";

export const UsersTable: FunctionComponent = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUsers());
  }, []);

  const {users, isLoading} = useSelector(
    (state: ApplicationState) => state.users
  );

  const columns: Column<User>[] = useMemo(
    () => [
      {
        Header: "Имя",
        accessor: "firstName",
      },
      {
        Header: "Фамилия",
        accessor: "lastName",
      },
      {
        Header: "Возраст",
        accessor: "age",
      },
    ],
    []
  );

  const data: User[] = useMemo(() => users, [users]);

  return <Table columns={columns} data={data} isLoading={isLoading} />;
};
