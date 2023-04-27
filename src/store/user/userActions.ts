import { createAction } from "@reduxjs/toolkit";
import { User } from "./userTypes";
// Define actions
export const fetchUserDataAsync = createAction<User | undefined>(
  "user/fetchUserDataAsync"
);
