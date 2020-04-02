import {
  FETCH_ELECTRICITY_BILLER_CATEGORIES,
  FETCH_BILLER_OPTIONS
} from "../actions";

const initialState = {
  electricityBillerCategories: [],
  topUpBillerCategories: [],
  billerOptions: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_ELECTRICITY_BILLER_CATEGORIES:
      return {
        ...state,
        electricityBillerCategories: action.payload
      };
    case FETCH_BILLER_OPTIONS:
      return {
        ...state,
        billerOptions: action.payload
      };
    default:
      return state;
  }
}
