import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CartItemType, CartObjectType, UpdateItemType } from "./cartTypes";

const initialState: CartObjectType = { cart: [] };

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItemType>) => {
      state.cart = [...state.cart, action.payload];
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      const updatedItem = state.cart.filter(
        (ele) => ele.itemId != action.payload
      );
      state.cart = updatedItem;
    },
    clearCart: (state) => {
      state.cart = [];
    },
    updateItem: (state, action: PayloadAction<UpdateItemType>) => {
      const updatedCart = state.cart.map((ele) => {
        if (ele.itemId == action.payload.itemId) {
          ele.itemQuantity = action.payload.itemQuantity;
          return ele;
        } else {
          return ele;
        }
      });
    },
  },
});
export const { addToCart, clearCart, removeFromCart, updateItem } =
  cartSlice.actions;

export default cartSlice.reducer;
