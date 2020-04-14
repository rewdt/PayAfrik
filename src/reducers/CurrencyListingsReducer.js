import { FETCH_ALL_CURRENCIES, SELECT_CURRENCY } from "../actions";

const initialState = {
  currenciesList: [],
  selectedcurrency: "afk"
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_ALL_CURRENCIES:
      return {
        ...state,
        currenciesList: action.payload
      };
    case SELECT_CURRENCY:
      return {
        ...state,
        selectedcurrency: action.payload
      };
    default:
      return state;
  }
}
