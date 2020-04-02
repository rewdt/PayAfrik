import { apiurl, baseurl } from "../constants";
import { FETCH_ELECTRICITY_BILLER_CATEGORIES, FETCH_BILLER_OPTIONS } from ".";

export const fetchBillerCategories = id => async dispatch => {
  await fetch(`${apiurl}/interswitch/billers/category/${id}`)
    .then(res => res.json())
    .then(res => {
      if (res.status) {
        dispatch({
          type: FETCH_ELECTRICITY_BILLER_CATEGORIES,
          payload: res.data
        });
      }
      // console.log(res);
    })
    .catch(res => console.warn(res));
};

export const fetchBillerOptions = billerid => async dispatch => {
  await fetch(`${apiurl}/interswitch/biller/${billerid}/`)
    .then(res => res.json())
    .then(res => {
      console.log(res);
      if (res.status) {
        dispatch({
          type: FETCH_BILLER_OPTIONS,
          payload: res.data
        });
      }
    })
    .catch(res => console.warn(res));
};

export const submitUtilities = (data, navigation) => async dispatch => {
  const options = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  };
  await fetch(`${apiurl}/interswitch/payment-advice`, options)
    .then(res => res.json())
    .then(res => {
      console.log(res);
    })
    .catch(err => console.log(err));
};
