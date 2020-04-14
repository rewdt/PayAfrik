import { apiurl, baseurl } from "../constants";
import { FETCH_ALL_CURRENCIES, SELECT_CURRENCY } from ".";

export const fetchAllCurrencies = (data, navigation) => async (dispatch) => {
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  };
  await fetch(`${baseurl}/utilities/currencies/`, options)
    .then((res) => res.json())
    .then((res) => {
      dispatch({
        type: FETCH_ALL_CURRENCIES,
        payload: res
      });
      //   console.log(res);
    })
    .catch((res) => console.warn("error"));
};

export const currencySelectionAction = (value) => (dispatch) => {
  dispatch({
    type: SELECT_CURRENCY,
    payload: value
  });
  console.log("okay");
};
