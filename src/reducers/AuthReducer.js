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
    default:
      return state;
  }
}
