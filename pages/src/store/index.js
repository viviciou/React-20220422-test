import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import createSagaMiddleware from "redux-saga";
// import logger from "redux-logger";
import reducers from "../reducers";
import rootSaga from "./rootSaga";


// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
let middleware = [sagaMiddleware];
// Log only in development
// if (process.env.NODE_ENV !== "production") {
//   middleware = [...middleware, logger];
// }

// mount it on the Store
const store = createStore(reducers, applyMiddleware(...middleware));

// then run the saga
sagaMiddleware.run(rootSaga);

const persistor = persistStore(store);

export { store, persistor };
