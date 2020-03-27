import { FETCH_USER_PROFILE } from "../actions";

const initialState = {
  profileDetails: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_USER_PROFILE:
      return {
        ...state,
        profileDetails: action.payload
      };
    default:
      return state;
  }
}
