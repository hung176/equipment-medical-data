import { combineReducer } from "redux";
import { authReducer, namespace as authNameSpace } from "./auth";

export const rootReducer = combineReducer({
  [authNameSpace]: authReducer
});

export { login, getAuth } from "./auth";