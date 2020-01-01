import React, { useState } from "react";
import { View, Text } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { TextField } from "react-native-material-textfield";

const PasswordedInput = props => {
  const [hideInput, setHiddenState] = useState(true);
  return (
    <TextField
      {...props}
      secureTextEntry={hideInput}
      renderRightAccessory={() => (
        <FontAwesome5
          name={hideInput === true ? "eye" : "eye-slash"}
          size={24}
          onPress={() => setHiddenState(!hideInput)}
        />
      )}
    />
  );
};

export default PasswordedInput;
