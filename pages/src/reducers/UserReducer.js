import {
  CHANGE_USER_STATUS,
  GET_USER_IDLE,
  GET_USER_LOAD,
  GET_USER_SUCCESS,
  GET_USER_ERROR
} from "../constants/User-action-type";

//初始化
const initialState = {
  redirectToReferrer: false,
  status: "idle", // idle | loading(pending) | complete(successed,fulfilled) | failed(error)
  data: [],
  username: "",
  token: "",
  loading: false,
  error: ""
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_USER_STATUS:
      return {
        ...state,
        status: action.payload.status
      };
    case GET_USER_IDLE: //閒置
      return {
        ...state,
        redirectToReferrer: false,
        status: "idle",
        data: [],
        username: "",
        token: "",
        error: ""
      };
    case GET_USER_LOAD:
      return {
        ...state,
        redirectToReferrer: action.payload.redirectToReferrer,
        data: action.payload.data, // account,password,status,
        error: ""
      };
    case GET_USER_SUCCESS:
      return {
        ...state,
        redirectToReferrer: action.payload.redirectToReferrer,
        data: action.payload.data, //user info
        username: action.payload.username,
        token: action.payload.token,
        error: ""
      };
    case GET_USER_ERROR:
      return {
        ...state,
        redirectToReferrer: action.payload.redirectToReferrer,
        data: [],
        username: "",
        token: "",
        error: action.payload.error
      };
    default:
      return {
        state
      };
  }
};
export default UserReducer;
