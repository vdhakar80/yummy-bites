import { combineReducers } from "@reduxjs/toolkit";

import loginSliceReducer from "./login/loginSlice";
import registerSliceReducer from "./register/registerSlice";
import userSliceReducer from "./user/userSlice";
import itemListReducer from "./itemListing/itemListingSlice";

const rootReducer = combineReducers({
  loginSlice: loginSliceReducer,
  registerSlice: registerSliceReducer,
  user: userSliceReducer,
  itemList: itemListReducer,
});

export default rootReducer;
