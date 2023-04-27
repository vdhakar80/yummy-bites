import { createAction } from "@reduxjs/toolkit";
import { User } from "./../user/userTypes";
// Define actions
export const registerDataAsync = createAction<User | undefined>(
  "register/fetchUserDataAsync"
);
