import axios from "axios";
import { apiurl } from "../constants";
import createNotification from "../helpers/Notifications";
import { AUTH_ACTION } from ".";

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
  await fetch(`${apiurl}/login`, options)
    .then(res => res.json())
    .then(res => {
      //   console.log(res);
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
    .catch(res => console.warn("error"));
};

export const registerAction = (data, navigation) => async dispatch => {
  const options = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  };
  await fetch(`${apiurl}/signup`, options)
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
    .catch(res => console.warn("error"));
};
