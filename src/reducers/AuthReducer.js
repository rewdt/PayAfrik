import { LOGIN_ACTION } from "../actions";

const initialState = {
  authDetails: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOGIN_ACTION:
      return {
        authDetails: action.payload
      };
    default:
      return state;
  }
}
