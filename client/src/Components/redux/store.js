import { createStore, combineReducers, applyMiddleware } from "redux";
import { fetchReducer } from "./reducers/fetchReducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import foodReducer from "./reducers/foodReducer";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { snackbarReducer } from "./reducers/snackbarReducer";
import { userFormReducer } from "./reducers/userFormReducer";

const rootReducer = combineReducers({
  fetch: fetchReducer,
  selectedFootStore: foodReducer,
  snackbar: snackbarReducer,
  auth: userFormReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whiteList: ["selectedFootStore"],
  blacklist: ["snackbar"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export const persist = persistStore(store);
