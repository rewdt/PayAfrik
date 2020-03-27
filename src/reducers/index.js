import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import Currencies from "./CurrencyListingsReducer";
import profileReducer from "./ProfileReducer";

const rootReducer = combineReducers({
  AuthReducer,
  Currencies,
  profile: profileReducer
});

export default rootReducer;
