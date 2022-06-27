import { all } from "redux-saga/effects";
import { PostUserSage } from "../actions/UserAction";

function* rootSaga() {
  yield all([PostUserSage()]);
}

export default rootSaga;
