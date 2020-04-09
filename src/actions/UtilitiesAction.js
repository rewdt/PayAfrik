import { apiurl, baseurl } from "../constants";
import { FETCH_ELECTRICITY_BILLER_CATEGORIES, FETCH_BILLER_OPTIONS } from ".";
import createNotification from "../helpers/Notifications";

export const fetchBillerCategories = (id) => async (dispatch) => {
  await fetch(`${apiurl}/interswitch/billers/category/${id}`)
    .then((res) => res.json())
    .then((res) => {
      if (res.status) {
        dispatch({
          type: FETCH_ELECTRICITY_BILLER_CATEGORIES,
          payload: res.data
        });
      }
      // console.log(res);
    })
    .catch((res) => console.warn(res));
};

export const fetchBillerOptions = (billerid) => async (dispatch) => {
  await fetch(`${apiurl}/interswitch/biller/${billerid}/`)
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      if (res.status) {
        dispatch({
          type: FETCH_BILLER_OPTIONS,
          payload: res.data
        });
      }
    })
    .catch((res) => console.warn(res));
};

export const submitUtilities = (data, token) => async (dispatch) => {
  const options = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      "pfk-user-token": token
    }
  };
  await fetch(`${apiurl}/interswitch/payment-advice`, options)
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      if (res.status === false) {
        createNotification({
          message: res.name,
          type: "danger",
          description: res.message
        });
      } else {
        createNotification({
          message: "Success",
          type: "success",
          description: "you have successfully topped up"
        });
      }
    })
    .catch((err) => console.log(err));
};
