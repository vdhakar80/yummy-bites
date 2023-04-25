import { combineReducers } from "@reduxjs/toolkit";

import loginSliceReducer from "./login/loginSlice";
import registerSliceReducer from "./register/registerSlice";

const rootReducer = combineReducers({
  loginSlice: loginSliceReducer,
  registerSlice: registerSliceReducer,
});

export default rootReducer;
