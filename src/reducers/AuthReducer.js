import { AUTH_ACTION, REGISTER_LOADING, LOGIN_LOADING } from "../actions";

const initialState = {
  authDetails: {},
  loginLoading: false,
  registerLoading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case AUTH_ACTION:
      return {
        authDetails: action.payload
      };
    case LOGIN_LOADING:
      return {
        loginLoading: action.payload
      };
    case REGISTER_LOADING:
      return {
        registerLoading: action.payload
      };
    default:
      return state;
  }
}
