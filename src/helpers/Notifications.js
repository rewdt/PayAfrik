import React from "react";
import { showMessage, hideMessage } from "react-native-flash-message";

//receives a message, type and a description to generate a flash notification message

export default CreateNotification = ({
  message = "alert",
  type,
  description
}) => {
  switch (type) {
    case "success": {
      return showMessage({
        message: message,
        description: description,
        type: "success",
        // icon: "success",
        backgroundColor: "#18CE6A",
        color: "#ffffff", // text color
        animated: "true"
      });
      break;
    }
    case "info": {
      return showMessage({
        message: "Info",
        description: description,
        type: "info",
        // icon: "success",
        backgroundColor: "#28BFFD", // background color
        color: "#ffffff", // text color
        animated: "true"
      });
      break;
    }
    case "warning": {
      return showMessage({
        message: "Alert",
        description: description,
        type: "warning",
        // icon: "warning",
        // backgroundColor: "#04A80C",
        // background color
        color: "#ffffff", // text color
        animated: "true"
      });
      break;
    }
    case "danger": {
      return showMessage({
        message,
        description: description,
        type: "danger",
        // icon: "danger",
        // backgroundColor: "#04A80C",
        // background color
        color: "#ffffff", // text color
        animated: "true"
      });
      break;
    }
    default: {
      return showMessage({
        message: "Info",
        description: description,
        type: "info",
        // icon: "success",
        backgroundColor: "#28BFFD", // background color
        color: "#ffffff", // text color
        animated: "true"
      });
      break;
    }
  }
};
