import { createAction } from "@reduxjs/toolkit";
import { LoginCredentials } from "./loginTypes";
// Define actions
export const incrementAsync = createAction<string | undefined>(
  "counter/incrementAsync"
);

export const decrementAsync = createAction<string | undefined>(
  "counter/decrementAsync"
);

export const loginAsync = createAction<LoginCredentials | undefined>(
  "login/loginAsync"
);
