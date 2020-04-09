import { SEND_REQUESTING } from "../actions";

const initialState = {
  isRequesting: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SEND_REQUESTING:
      return {
        isRequesting: action.payload,
      };
    default:
      return state;
  }
}
