import { FETCH_ALL_CURRENCIES } from "../actions";

const initialState = {
  currenciesList: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_ALL_CURRENCIES:
      return {
        currenciesList: action.payload
      };
    default:
      return state;
  }
}
