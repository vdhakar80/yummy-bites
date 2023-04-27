import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { registerUserType } from "./registerTypes";

const initialState: registerUserType = {
  error: "",
  success: "",
};

const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    setRegisterError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    setRegisterSuccess: (state, action: PayloadAction<string>) => {
      state.success = action.payload;
    },
  },
});

export const { setRegisterError, setRegisterSuccess } = registerSlice.actions;

export default registerSlice.reducer;
