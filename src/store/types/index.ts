import {User} from "../../shared/types";

export type Action<T extends string, P = any> = {
  type: T;
  payload?: P;
};

export type UsersState = {
  users: User[];
  isLoading: boolean;
  isError: boolean;
};

export type ApplicationState = {
  users: UsersState;
};
