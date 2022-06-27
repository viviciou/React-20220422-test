import { call, put, takeLatest } from "redux-saga/effects";
import {
  CHANGE_USER_STATUS,
  GET_USER_IDLE,
  GET_USER_LOAD,
  GET_USER_SUCCESS,
  GET_USER_ERROR
} from "../constants/User-action-type";

export const changeUserStatus = (status) => ({
  type: CHANGE_USER_STATUS,
  payload: {
    status: status
  }
});

//data放入store
export const getUserIdle = () => ({
  type: GET_USER_IDLE,
  payload: {
    redirectToReferrer: false,
    data: [],
    error: ""
  }
});
export const getUserLoading = (obj) => ({
  type: GET_USER_LOAD,
  payload: {
    data: obj, // account,password,status,
    error: ""
  }
});
export const getUserSuccess = (data) => ({
  type: GET_USER_SUCCESS,
  payload: {
    redirectToReferrer: true,
    data: data, // user info
    username: data.username,
    token: data.token,
    error: ""
  }
});
export const getUserError = (error) => ({
  type: GET_USER_ERROR,
  payload: {
    redirectToReferrer: false,
    data: [],
    error: error
  }
});

function* getUserSaga(obj) {
  const { account, password, status } = obj.payload.data;
  //console.log("obj", account, password, status);
  yield put(changeUserStatus(status)); //idle 閒置狀態
  // const url = ``;
  if (status === "pending") {
    yield put(changeUserStatus("pending"));
    try {
      // yield call(() => {
      // const data = fetch(url,{
      //   method: 'POST', //'GET'
      //   headers: new Headers({
      //     'Content-Type': 'application/json'
      //   })
      //   .then( res => {
      //     if(res.status === 200) {
      //       return res.json()
      //     }else {
      //       return []
      //     }
      //   })
      // })
      // if(data.code === '00') {
      //   yield put(changeUserStatus("complete"));
      //   yield put(getUserSuccess(data));
      // }else {
      //   yield put(changeUserStatus("failed"));
      //   yield put(getUserError(error));
      // }
      // });

      yield put(changeUserStatus("complete"));
      yield put(getUserSuccess({ username: "UserName", token: "ok" }));
    } catch (error) {
      yield put(changeUserStatus("failed"));
      yield put(getUserError(error));
    }
    // finally {
    // yield put(changeUserStatus("idle"));
    // yield put(getUserIdle());
    // }
  }
}

export function* PostUserSage() {
  yield takeLatest(GET_USER_LOAD, getUserSaga);
}
