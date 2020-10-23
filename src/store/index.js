import { combineReducers } from "redux";
import { authReducer, namespace as authNameSpace } from "./auth";

export const rootReducer = combineReducers({
  [authNameSpace]: authReducer
});

export { login, logout, getAuth } from "./auth";