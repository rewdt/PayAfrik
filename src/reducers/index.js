import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import Currencies from "./CurrencyListingsReducer";
import profileReducer from "./ProfileReducer";
import utilities from "./UtilitiesReducer";
import sendReducer from "./SendReducer";

const rootReducer = combineReducers({
  AuthReducer,
  Currencies,
  profile: profileReducer,
  utilities,
  sendReducer,
});

export default rootReducer;
