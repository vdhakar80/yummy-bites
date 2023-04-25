import { call, put, takeEvery } from "redux-saga/effects";
import { setError, setToken } from "./loginSlice";
import { LoginAsyncAction } from "./loginTypes";
import axios, { AxiosError, AxiosResponse } from "axios";
const apiHost = process.env.REACT_APP_API_HOST;
// function* incrementAsync() {
//   yield put(increment());
// }

// function* decrementAsync() {
//   yield put(decrement());
// }
function* loginAsync(action: LoginAsyncAction) {
  //post call
  try {
    let url = `${apiHost}/user/login`;
    let data = action.payload;
    console.log(
      "inside saga",
      action.payload,
      process.env.REACT_APP_API_HOST,
      url,
      data
    );
    const response: AxiosResponse<{ token: string }> = yield call(
      axios.post,
      url,
      data
    );
    yield put(setToken(response.data.token));
    yield put(setError(""));
  } catch (error: any) {
    console.log("error inside saga", error);
    const { response: { data: { message = "" } = {} } = {} } = error;
    yield put(setError(message));
    yield put(setToken(""));
  }
}
export function* loginSaga() {
  // yield takeEvery("login/incrementAsync", incrementAsync);
  // yield takeEvery("login/decrementAsync", decrementAsync);
  yield takeEvery("login/loginAsync", loginAsync);
}
