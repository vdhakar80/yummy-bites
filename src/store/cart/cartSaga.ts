import { takeEvery } from "redux-saga/effects";

function* cartSync() {
  console.log("inside cart saga");
}

function* cartSaga() {
  yield takeEvery("cart/addToCart", cartSync);
}

export default cartSaga;
