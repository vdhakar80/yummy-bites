import { call, put, takeEvery } from "redux-saga/effects";
import { setUser } from "./../user/userSlice";
import axios, { AxiosResponse } from "axios";
import { User } from "./../user/userTypes";
import { setRegisterError, setRegisterSuccess } from "./registerSlice";

function* fetchUserDataAsync(action: { type: string; payload: User }) {
  try {
    const url = `${process.env.REACT_APP_API_HOST}/user/register`;
    console.log(
      "inside saga",
      action.payload,
      process.env.REACT_APP_API_HOST,
      url,
      action.payload
    );
    const response: AxiosResponse<User> = yield call(
      axios.post,
      url,
      action.payload
    );
    console.log("inside saga", response);
    yield put(setUser(response.data));
    yield put(setRegisterError(""));
    yield put(setRegisterSuccess("Successully Registered"));
  } catch (error: any) {
    const { response: { data: { message = "" } = {} } = {} } = error;
    yield put(setRegisterError(message));
    yield put(setRegisterSuccess(""));
  }
}

export function* registerSaga() {
  yield takeEvery("register/fetchUserDataAsync", fetchUserDataAsync);
}
