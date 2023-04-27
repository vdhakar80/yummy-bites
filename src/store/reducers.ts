import { combineReducers } from "@reduxjs/toolkit";

import loginSliceReducer from "./login/loginSlice";
import registerSliceReducer from "./register/registerSlice";
import userSliceReducer from "./user/userSlice";

const rootReducer = combineReducers({
  loginSlice: loginSliceReducer,
  registerSlice: registerSliceReducer,
  user: userSliceReducer,
});

export default rootReducer;
