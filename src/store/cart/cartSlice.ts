import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CartItemType, CartObjectType } from "./cartTypes";

const initialState: CartObjectType = { cart: [] };

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItemType>) => {
      state.cart = [...state.cart, action.payload];
    },
    clearCart: (state) => {
      state.cart = [];
    },
  },
});
export const { addToCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
