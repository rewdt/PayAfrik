import React, { useState } from "react";
import { View, Text, Image, SafeAreaView, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import {
  TextField,
  FilledTextField,
  OutlinedTextField
} from "react-native-material-textfield";
import { FontAwesome5 } from "@expo/vector-icons";
import Logo from "../../assets/logo_with_title.png";
import PasswordedInput from "../components/PasswordedInput";
import { TouchableHighlight } from "react-native-gesture-handler";
import KeyboardShift from "../components/KeyboardShift";

const Login = props => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  handleSubmit = () => {
    if (phone === "123456789" && password === "password") {
      props.navigation.navigate("TabNavigator");
    }
  };
  return (
    <KeyboardShift>
      {() => (
        <View style={styles.root}>
          <SafeAreaView />
          <View style={styles.content1}>
            <Image
              source={Logo}
              resizeMode="contain"
              style={styles.logoStyle}
            />
          </View>
          <View style={styles.content2}>
            <TextField
              onChangeText={phone => setPhone(phone)}
              value={phone}
              label="Phone Number"
              keyboardType="phone-pad"
              tintColor="#000dbb"
            />
            <PasswordedInput
              label="Password"
              tintColor="#000dbb"
              onChangeText={pword => setPassword(pword)}
              value={password}
            />
            <View style={{ alignItems: "flex-end", marginVertical: 20 }}>
              <Button
                color="#000dbb"
                uppercase={false}
                onPress={() => props.navigation.navigate("ForgotPassword")}
              >
                Forgot Password?
              </Button>
            </View>
            <TouchableHighlight
              style={styles.submitButton}
              onPress={handleSubmit}
            >
              <Text style={styles.submitText}>Login</Text>
            </TouchableHighlight>
          </View>
        </View>
      )}
    </KeyboardShift>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingHorizontal: 40,
    backgroundColor: "#f0f0f7"
  },
  content1: {
    flex: 2,
    alignItems: "center",
    justifyContent: "flex-start"
  },
  content2: {
    flex: 3
  },
  logoStyle: {
    width: 130,
    height: 161
  },
  submitButton: {
    justifyContent: "center",
    alignItems: "center",
    height: 41,
    backgroundColor: "#ffffff",
    shadowColor: "rgba(0, 0, 0, 0.16)",
    shadowOffset: {
      width: 0,
      height: 1.5
    },
    shadowRadius: 3,
    shadowOpacity: 1,
    borderRadius: 23
  },
  submitText: {
    color: "#000",
    fontSize: 12,
    fontFamily: "Poppins-Bold"
  }
});

export default Login;
