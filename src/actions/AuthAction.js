import axios from "axios";
import { apiurl, baseurl } from "../constants";
import createNotification from "../helpers/Notifications";
import {
  AUTH_ACTION,
  LOGIN_LOADING,
  REGISTER_LOADING,
  HANDLE_LOGIN_ERRORS,
  HANDLE_SIGNUP_ERRORS
} from ".";
import { persistor } from "../../App";

routeHome = ({ navigation, routeTo = "Dashboard" }) => {
  navigation.navigate(routeTo);
};

export const loginAction = (data, navigation) => async (dispatch) => {
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
  await fetch(`${baseurl}/auth/accounts/signin/`, options)
    .then((res) => res.json())
    .then((res) => {
      // console.warn(res);
      if (!res.error) {
        dispatch({
          type: AUTH_ACTION,
          payload: res.user
        });
        createNotification({
          message: "Success",
          type: "success",
          description: "You have succefully logged in"
        });
        routeHome({ navigation });
      } else {
        dispatch({
          type: HANDLE_LOGIN_ERRORS,
          payload: res.error
        });
        if (typeof res.error === "string") {
          createNotification({
            message: "Error",
            type: "danger",
            description: res.error
          });
        }
        if (res.error.non_field_errors) {
          createNotification({
            message: "Error",
            type: "danger",
            description: res.error.non_field_errors[0]
          });
        }
      }
    })
    .catch((res) => console.warn(res));
  dispatch({
    type: LOGIN_LOADING,
    payload: false
  });
};

export const registerAction = (data, navigation) => async (dispatch) => {
  const options = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      "X-PFK-DT": "B"
    }
  };
  dispatch({
    type: REGISTER_LOADING,
    payload: true
  });
  await fetch(`${baseurl}/auth/accounts/signup/`, options)
    .then((res) => res.json())
    .then((res) => {
      // console.warn(res);
      if (!res.error) {
        dispatch({
          type: AUTH_ACTION,
          payload: res.user
        });
        createNotification({
          message: "Success",
          type: "success",
          description: "You have succefully Signed Up"
        });
        routeHome({ navigation, routeTo: "NumberVerification" });
      } else {
        dispatch({
          type: HANDLE_SIGNUP_ERRORS,
          payload: res.error
        });
        if (res.error.non_field_errors) {
          createNotification({
            message: "Error",
            type: "danger",
            description: res.error.non_field_errors[0]
          });
        }
      }
    })
    .catch((res) => console.warn(res));
  dispatch({
    type: REGISTER_LOADING,
    payload: false
  });
};

export const logoutAction = (navigation) => (dispatch) => {
  persistor
    .purge()
    .then(() => navigation.navigate("AuthStack"))
    .catch(() => console.warn("An error occurred"));
};
