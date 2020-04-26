import {
  FETCH_USER_PROFILE,
  GET_USER_BALANCE,
  GET_TRANSACTION_HISTORY
} from "../actions";

const initialState = {
  profileDetails: {},
  transaction_history: [],
  afritoken_balance: 0,
  afk_balance: 0,
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
        afritoken_balance: action.payload,
        afk_balance: action.afk_balance,
        btc_balance: action.btc_balance,
        eth_balance: action.eth_balance
      };
    case GET_TRANSACTION_HISTORY:
      return {
        ...state,
        transaction_history: action.payload
      };
    default:
      return state;
  }
}
