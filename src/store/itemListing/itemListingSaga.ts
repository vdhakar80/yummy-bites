import { call, put, takeEvery } from "redux-saga/effects";
import { ItemListAsyncActionType, ItemListType } from "./itemListingTypes";
import axios, { AxiosResponse } from "axios";
import { setItemList } from "./itemListingSlice";

function* itemListSAsync(action: ItemListAsyncActionType) {
  try {
    const url = `http://localhost:5000/items/${action.payload}`;
    const response: AxiosResponse<ItemListType[]> = yield call(axios.get, url);
    yield put(setItemList(response.data));
    console.log("response itemList", response);
  } catch (error) {
    console.log("response itemList error", error);
  }
}

function* itemListSaga() {
  yield takeEvery("itemListing/getItemList", itemListSAsync);
}
export default itemListSaga;
