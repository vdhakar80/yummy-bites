import { all } from "redux-saga/effects";
import { loginSaga } from "./login/loginSaga";
import { registerSaga } from "./register/registerSaga";
import itemListSaga from "./itemListing/itemListingSaga";
import cartSaga from "./cart/cartSaga";

export default function* rootSaga() {
  yield all([loginSaga(), registerSaga(), itemListSaga(), cartSaga()]);
}
