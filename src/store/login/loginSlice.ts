import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LoginState } from "./loginTypes";

const initialState: LoginState = {
  token: "",
  error: "",
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
  },
});

export const { setToken, setError } = loginSlice.actions;

export default loginSlice.reducer;
