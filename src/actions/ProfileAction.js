import { apiurl, baseurl } from "../constants";
import { FETCH_USER_PROFILE, GET_USER_BALANCE } from ".";

export const fetchUserProfile = (token) => async (dispatch) => {
  // console.log(token);
  const headers = new Headers({
    "Content-Type": "application/json",
    Authorization: token
  });
  await fetch(`${baseurl}/auth/user/profile/`, { headers })
    .then((res) => res.json())
    .then((res) => {
      dispatch({
        type: FETCH_USER_PROFILE,
        payload: res
      });
      // console.log(res);
    })
    .catch((res) => console.warn(res));
};

export const getUserBalance = (token) => async (dispatch) => {
  const headers = new Headers({
    "Content-Type": "application/json",
    Authorization: token
  });
  await fetch(`${baseurl}/auth/user/balance/`, { headers })
    .then((res) => res.json())
    .then((res) => {
      // console.log(res);
      dispatch({
        type: GET_USER_BALANCE,
        payload: res.balance,
        btc_balance: res.btc_balance,
        eth_balance: res.eth_balance
      });
    })
    .catch((res) => console.warn(res));
};
