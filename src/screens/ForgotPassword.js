import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import {
  TextField,
  FilledTextField,
  OutlinedTextField
} from "react-native-material-textfield";
import { FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import { HeaderBackButton } from "react-navigation-stack";
import { Button } from "react-native-paper";

const ForgotPassword = props => {
  return (
    <View style={styles.root}>
      <SafeAreaView />
      <View style={styles.buttonContainer}>
        <HeaderBackButton
          backImage={<MaterialIcons name="keyboard-backspace" size={20} />}
          onPress={() => props.navigation.goBack()}
        />
      </View>
      <Text style={styles.pageTitleText}>Forgot Password</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>
          We'll send you a password recovery email. Kindly provide the email
          address registered to this account
        </Text>
      </View>
      <View style={styles.inputContainer}>
        <TextField
          label="Email Address"
          keyboardType="phone-pad"
          tintColor="#000dbb"
        />
      </View>
      <View style={{ alignItems: "center" }}>
        <Button
          theme={{ roundness: 20 }}
          uppercase={false}
          color="black"
          style={styles.buttonStyle}
        >
          Submit
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#f0f0f7",
    paddingHorizontal: 20
  },
  buttonContainer: {
    marginTop: 15,
    marginBottom: 33.5
  },
  infoContainer: {
    marginTop: 43,
    marginBottom: 40
  },
  pageTitleText: {
    fontFamily: "Poppins-Bold",
    color: "#000",
    fontSize: 20
  },
  infoText: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 14,
    textAlign: "justify"
  },
  inputContainer: {
    marginBottom: 44
  },
  buttonStyle: {
    backgroundColor: "#fff",
    height: 41,
    width: 266
  }
});

export default ForgotPassword;
