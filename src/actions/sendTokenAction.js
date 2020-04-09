import { baseurl } from "../constants";
import createNotification from "../helpers/Notifications";
import { SEND_REQUESTING } from ".";

export const sendTokenAction = (data, props) => async (dispatch) => {
  const options = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Authorization: props.user.token,
    },
  };
  dispatch({
    type: SEND_REQUESTING,
    payload: true,
  });
  await fetch(`${baseurl}/transactions/transactions/send-afk/`, options)
    .then((res) => res.json())
    .then((res) => {
      //   console.warn("res", res);
      if (res.error) {
        createNotification({
          message: "Error",
          type: "danger",
          description: res.error,
        });
      } else {
        props.getUserBalance(props.user.token);
        createNotification({
          message: "Success",
          type: "success",
          description: res.success,
        });
      }
    })
    .catch((res) => console.warn(res));
  dispatch({
    type: SEND_REQUESTING,
    payload: false,
  });
};
