import { createAction } from "@reduxjs/toolkit";
import { CartItemType } from "./cartTypes";

export const addtoCartAction = createAction<CartItemType>("cart/addToCart");
