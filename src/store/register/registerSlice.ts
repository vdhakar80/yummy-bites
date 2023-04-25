import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "./registerTypes";

const initialState: User = {
  name: "",
  userId: "",
  emailId: "",
  contactNo: "",
  password: "",
  orders: [],
  profilePicture: "",
  address: "",
  city: "",
  state: "",
  country: "",
};

const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.name = action.payload.name;
      state.emailId = action.payload.emailId;
      state.userId = action.payload.userId;
    },
  },
});

export const { setUser } = registerSlice.actions;

export default registerSlice.reducer;
