import { apiurl, baseurl } from "../constants";
import { FETCH_USER_PROFILE } from ".";

export const fetchUserProfile = token => async dispatch => {
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: token
    }
  };
  await fetch(`${baseurl}/auth/user/profile/`, options)
    .then(res => res.json())
    .then(res => {
      dispatch({
        type: FETCH_USER_PROFILE,
        payload: res
      });
      //   console.log(res);
    })
    .catch(res => console.warn("error"));
};
