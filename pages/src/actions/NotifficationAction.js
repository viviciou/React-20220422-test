import {
  SET_NOTIFFICATION,
  HANDLE_NOTIFFICATION_CLOSE
} from "../constants/Notiffication-action-type";

export const setNotiffication = (data) => ({
  type: SET_NOTIFFICATION,
  payload: {
    mode: data.mode,
    active: data.active,
    title: data.title,
    message: data.message
  }
});

export const handleNotifficationClose = () => ({
  type: HANDLE_NOTIFFICATION_CLOSE,
  payload: {
    mode: "info",
    active: false,
    title: "",
    message: ""
  }
});
