import {
  applyMiddleware,
  combineReducers,
  createStore as reduxCreateStore,
} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";

import {Action, ApplicationState} from "./types";

import users from "./reducers/users";

const persistedReducer = combineReducers<ApplicationState, Action<any>>({
  users,
});

const store = reduxCreateStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
