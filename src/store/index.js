import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { AsyncStorage } from "react-native";
import { persistStore, persistReducer } from "redux-persist";
import rootReducer from "../reducers";

const initialState = {};

const enhancers = [];
const middleware = [thunk];

const persistConfig = {
  key: "root",
  storage: AsyncStorage
};

const persistedReducer = persistReducer(
  persistConfig,
  rootReducer,
  applyMiddleware(thunk)
);

const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers);

const configureStore = () => {
  const store = createStore(persistedReducer, initialState, composedEnhancers);
  const persistor = persistStore(store);
  return { store, persistor };
};

export default configureStore;
