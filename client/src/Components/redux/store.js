import { createStore, combineReducers, applyMiddleware } from "redux";
import { fetchReducer } from "./reducers/fetchReducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
  fetchReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
