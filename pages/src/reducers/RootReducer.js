import { combineReducers } from "redux";
import UserReducer from "./UserReducer";
import NotifficationReducer from "./NotifficationReducer";

const RootRedcuer = combineReducers({
  UserReducer,
  NotifficationReducer
});
export default RootRedcuer;
