import { all } from "redux-saga/effects";
import { loginSaga } from "./login/loginSaga";
import { registerSaga } from "./register/registerSaga";

export default function* rootSaga() {
  yield all([loginSaga(), registerSaga()]);
}
