import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "./userTypes";

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

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.name = action.payload.name;
      state.emailId = action.payload.emailId;
      state.userId = action.payload.userId;
      state.password = action.payload.password;
      state.contactNo = action.payload.contactNo;
      state.address = action.payload.address;
      state.city = action.payload.city;
      state.state = action.payload.state;
      state.country = action.payload.country;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
