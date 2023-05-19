import { createAction } from "@reduxjs/toolkit";

export const getItemListAsync = createAction<string>("itemListing/getItemList");
