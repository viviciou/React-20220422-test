import { persistReducer } from "redux-persist";
import asyncSessionStorage from "redux-persist/lib/storage/session";
//import storage from 'redux-persist/es/storage'

import RootReducer from "./RootReducer";
// 資料物件
const RootPersistConfig = {
  key: "root", //必須有的
  storage: asyncSessionStorage, //storage is now required
  //   storage: storage, // 必須有的
  whilelist: ["LoginReducer"], //reducer 裡不持久化的資料
  blacklist: []
};

export default persistReducer(RootPersistConfig, RootReducer);
