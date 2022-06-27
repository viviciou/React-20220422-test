import {
  SET_NOTIFFICATION,
  HANDLE_NOTIFFICATION_CLOSE
} from "../constants/Notiffication-action-type";

//初始化
const initialState = {
  mode: "info",
  active: false,
  title: "",
  message: ""
};

const NotifficationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NOTIFFICATION:
      return {
        ...state,
        mode: action.payload.mode,
        active: action.payload.active,
        title: action.payload.title,
        message: action.payload.message
      };
    case HANDLE_NOTIFFICATION_CLOSE:
      return {
        ...state,
        mode: "info",
        active: false,
        title: "",
        message: ""
      };
    default:
      return state;
  }
};
export default NotifficationReducer;
