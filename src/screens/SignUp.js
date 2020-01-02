import React, { useEffect } from "react";
import {
  View,
  Text,
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet
} from "react-native";
import {
  TextField,
  FilledTextField,
  OutlinedTextField
} from "react-native-material-textfield";
import { Button } from "react-native-paper";
import { FontAwesome5 } from "@expo/vector-icons";
import Logo from "../../assets/logo_with_title.png";
import PasswordedInput from "../components/PasswordedInput";
import { TouchableHighlight } from "react-native-gesture-handler";
import KeyboardShift from "../components/KeyboardShift";

const SignUp = props => {
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
              label="Phone Number"
              keyboardType="phone-pad"
              tintColor="#000dbb"
            />
            <PasswordedInput tintColor="#000dbb" label="Password" />
            <PasswordedInput tintColor="#000dbb" label="Confirm Password" />
            <View style={{ alignItems: "flex-end", marginVertical: 20 }}>
              <Text style={[styles.submitText, { textAlign: "justify" }]}>
                By tapping Continue, Create account, I agree to Company's
                <Text style={styles.underlineUserAgreement}>
                  &nbsp;Terms of Service
                </Text>
                ,
                <Text style={styles.underlineUserAgreement}>
                  &nbsp;Payments Terms of Service
                </Text>
                ,{" "}
                <Text style={styles.underlineUserAgreement}>
                  Privacy Policy
                </Text>
                , and
                <Text style={styles.underlineUserAgreement}>
                  &nbsp;Non-discrimination Policy.
                </Text>
              </Text>
            </View>
            <View style={{ marginTop: 20, marginBottom: 15 }}>
              <TouchableHighlight style={styles.submitButton}>
                <Text style={styles.submitText}>Next</Text>
              </TouchableHighlight>
            </View>
            <Button
              color="#000dbb"
              onPress={() => props.navigation.navigate("Login")}
            >
              Sign in instead?
            </Button>
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
    flex: 5
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
    color: "rgb(142, 145, 188)",
    fontSize: 12,
    fontFamily: "Poppins-SemiBold"
  },
  underlineUserAgreement: {
    textDecorationLine: "underline"
  }
});

export default SignUp;
