import { call, put, takeEvery } from "redux-saga/effects";
import { setUser } from "./userSlice";
import axios, { AxiosResponse } from "axios";
import { User } from "./userTypes";

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
  } catch (error: any) {
    console.log("inside saga", error);
  }
}

export function* userSagaSaga() {
  yield takeEvery("register/fetchUserDataAsync", fetchUserDataAsync);
}
