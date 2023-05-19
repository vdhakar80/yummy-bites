import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ItemListInitialStateType, ItemListType } from "./itemListingTypes";
const initialState: ItemListInitialStateType = {
  categories: [],
  itemList: [],
};

const itmeListingSlice = createSlice({
  name: "itemListing",
  initialState: initialState,
  reducers: {
    setItemList: (state, action: PayloadAction<ItemListType[]>) => {
      state.itemList = action.payload;
    },
  },
});

export const { setItemList } = itmeListingSlice.actions;
export default itmeListingSlice.reducer;
