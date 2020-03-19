import axios from "axios";
import { apiurl, baseurl } from "../constants";
import createNotification from "../helpers/Notifications";
import { AUTH_ACTION, LOGIN_LOADING, REGISTER_LOADING } from ".";

routeHome = ({ navigation, routeTo = "Dashboard" }) => {
  navigation.navigate(routeTo);
};

export const loginAction = (data, navigation) => async dispatch => {
  const options = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  };
  dispatch({
    type: LOGIN_LOADING,
    payload: true
  });
  await fetch(`${apiurl}/login`, options)
    .then(res => res.json())
    .then(res => {
      if (res.status === true) {
        // alert(res.status);
        // console.warn(res.data);
        dispatch({
          type: AUTH_ACTION,
          payload: res.data
        });
        createNotification({
          message: "Success",
          type: "success",
          description: "You have succefully logged in"
        });
        routeHome({ navigation });
      } else {
        createNotification({
          message: "Error",
          type: "danger",
          description: res.message
        });
      }
    })
    .catch(res => console.warn("error"));
  dispatch({
    type: LOGIN_LOADING,
    payload: false
  });
};

export const registerAction = (data, navigation) => async dispatch => {
  const options = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  };
  dispatch({
    type: REGISTER_LOADING,
    payload: true
  });
  await fetch(`${baseurl}/signup`, options)
    .then(res => res.json())
    .then(res => {
      console.log(res);
      if (res.status === true) {
        dispatch({
          type: AUTH_ACTION,
          payload: res.data
        });
        createNotification({
          message: "Success",
          type: "success",
          description: "You have succefully logged in"
        });
        routeHome({ navigation });
      } else {
        createNotification({
          message: "Error",
          type: "danger",
          description: res.message
        });
      }
    })
    .catch(res => console.warn(res));
  dispatch({
    type: REGISTER_LOADING,
    payload: false
  });
};
