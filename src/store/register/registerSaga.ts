import { put, takeEvery } from "redux-saga/effects";
import { setUser } from "./registerSlice";

function* fetchUserDataAsync() {
  yield put(
    setUser({
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
    })
  );
}

export function* registerSaga() {
  yield takeEvery("register/fetchUserDataAsync", fetchUserDataAsync);
}
