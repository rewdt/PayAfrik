import {
  AUTH_ACTION,
  REGISTER_LOADING,
  LOGIN_LOADING,
  HANDLE_LOGIN_ERRORS,
  HANDLE_SIGNUP_ERRORS
} from "../actions";

const initialState = {
  authDetails: {},
  loginLoading: false,
  registerLoading: false,
  loginUsernameError: "",
  loginPasswordError: "",
  signupEmailError: "",
  signupPhoneError: "",
  signupPasswordError: ""
};

export default function(state = initialState, action) {
  let username = "";
  let password = "";
  let email = "";
  let phone = "";
  switch (action.type) {
    case AUTH_ACTION:
      return {
        ...state,
        authDetails: action.payload
      };
    case LOGIN_LOADING:
      return {
        ...state,
        loginLoading: action.payload
      };
    case REGISTER_LOADING:
      return {
        ...state,
        registerLoading: action.payload
      };
    case HANDLE_LOGIN_ERRORS:
      if (action.payload.username) {
        username = action.payload.username[0];
      }
      if (action.payload.password) {
        password = action.payload.password[0];
      }
      return {
        ...state,
        loginUsernameError: username,
        loginPasswordError: password
      };

    case HANDLE_SIGNUP_ERRORS:
      if (action.payload.email) {
        email = action.payload.email[0];
      }
      if (action.payload.phone) {
        phone = action.payload.phone[0];
      }
      if (action.payload.password) {
        password = action.payload.password[0];
      }
      return {
        ...state,
        signupEmailError: email,
        signupPhoneError: phone,
        signupPasswordError: password
      };
    default:
      return state;
  }
}
