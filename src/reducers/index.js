import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import Currencies from "./CurrencyListingsReducer";

const rootReducer = combineReducers({
  AuthReducer,
  Currencies
});

export default rootReducer;
