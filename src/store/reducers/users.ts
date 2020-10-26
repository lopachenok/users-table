import {UserActionType} from "../../shared/constants";
import {loadUsersComplete, loadUsersStart} from "../actions";
import {UsersState} from "../types";

const initialState: UsersState = {
  users: [],
  isError: false,
  isLoading: false,
};

type Action =
  | ReturnType<typeof loadUsersStart>
  | ReturnType<typeof loadUsersComplete>;

export default (state: UsersState = initialState, action: Action) => {
  switch (action.type) {
    case UserActionType.LOADING_START: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case UserActionType.LOADING_COMPLETE: {
      return {
        ...state,
        users: action.payload,
        isLoading: false,
      };
    }

    default:
      return state;
  }
};
