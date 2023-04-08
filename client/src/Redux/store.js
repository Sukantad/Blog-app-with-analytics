import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
} from "redux";
import thunk from "redux-thunk";
import { AuthReducer } from "./AuthReducer";

const middlewares = applyMiddleware(thunk);
const RootReducer = combineReducers({
  AuthState: AuthReducer,
});

export const store = createStore(RootReducer, middlewares);
