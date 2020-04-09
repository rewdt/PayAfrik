import { FETCH_USER_PROFILE, GET_USER_BALANCE } from "../actions";

const initialState = {
  profileDetails: {},
  balance: 0,
  btc_balance: 0,
  eth_balance: 0
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_USER_PROFILE:
      return {
        ...state,
        profileDetails: action.payload
      };
    case GET_USER_BALANCE:
      return {
        ...state,
        balance: action.payload,
        btc_balance: action.btc_balance,
        eth_balance: action.eth_balance
      };
    default:
      return state;
  }
}
