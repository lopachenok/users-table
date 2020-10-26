import {Dispatch} from "redux";

import {UserActionType} from "../shared/constants";
import {loadUsers as loadUsersApi} from "../shared/fakeApi";
import {User} from "../shared/types";

export const loadUsersStart = () => {
  return {
    type: UserActionType.LOADING_START,
  } as const;
};

export const loadUsersComplete = (users: User[]) => {
  return {
    type: UserActionType.LOADING_COMPLETE,
    payload: users,
  } as const;
};

export const loadUsers = (): ((dispatch: Dispatch) => Promise<void>) => {
  return async dispatch => {
    dispatch(loadUsersStart());
    const users = await loadUsersApi();

    dispatch(loadUsersComplete(users));
  };
};
