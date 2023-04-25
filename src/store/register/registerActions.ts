import { createAction } from "@reduxjs/toolkit";
import { User } from "./registerTypes";
// Define actions
export const fetchUserDataAsync = createAction<User | undefined>(
  "register/fetchUserDataAsync"
);
