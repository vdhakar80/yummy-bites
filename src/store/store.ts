import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";

import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";

import rootReducer from "./reducers";
const sagaMiddleware = createSagaMiddleware();
// Define the root state type
export type RootState = ReturnType<typeof rootReducer>;

// Define the typed hooks to use with the store
export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

//getting data from localstorage
// const storageState = localStorage.getItem("myAppStore") as string;
// const initialState = JSON.parse(storageState);

// Create the Redux store
const store = configureStore({
  reducer: rootReducer,
  // preloadedState: initialState,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
  devTools: process.env.NODE_ENV !== "production",
});
store.subscribe(() => {
  //setting redux state to local storage
  // localStorage.setItem("myAppStore", JSON.stringify(store.getState()));
});
sagaMiddleware.run(rootSaga);

export default store;
