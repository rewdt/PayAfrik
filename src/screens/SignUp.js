import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet
} from "react-native";
import {
  TextField,
  FilledTextField,
  OutlinedTextField
} from "react-native-material-textfield";
import { connect } from "react-redux";
import { Button } from "react-native-paper";
import { FontAwesome5 } from "@expo/vector-icons";
import Logo from "../../assets/logo_with_title.png";
import PasswordedInput from "../components/PasswordedInput";
import { TouchableHighlight } from "react-native-gesture-handler";
import { registerAction } from "../actions/AuthAction";
import KeyboardShift from "../components/KeyboardShift";
import { validateEmail } from "../helpers/EmailValidation";

const SignUp = (props) => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [phone, setphone] = useState("");
  const [password, setpassword] = useState("");
  const [cpassword, setcpassword] = useState("");
  const [emailerror, setemailerror] = useState("");

  // handleEmailChange = mail => {
  //   setemail(mail);
  //   if (!validateEmail(mail)) {
  //     setemailerror("this is not a valid email");
  //   } else {
  //     setemailerror("");
  //   }
  // };

  handleSubmit = () => {
    const data = {
      first_name: firstname,
      last_name: lastname,
      phone,
      password
    };
    props.registerAction(data, props.navigation);
  };

  // useEffect(() => {
  // }, [username, email, phone,cpassword])

  return (
    <KeyboardShift>
      {() => (
        <View style={styles.root}>
          <ScrollView
            keyboardShouldPersistTaps="always"
            keyboardDismissMode="on-drag"
          >
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
                value={firstname}
                // error={username.length}
                onChangeText={(text) => setFirstname(text)}
                autoCapitalize="none"
                label="First Name"
                // keyboardType="phone-pad"
                tintColor="#000dbb"
              />
              <TextField
                value={lastname}
                // error={props.emailError}
                onChangeText={(text) => setLastname(text)}
                autoCapitalize="none"
                label="Last Name"
                // keyboardType="phone-pad"
                tintColor="#000dbb"
              />
              <TextField
                value={phone}
                error={props.phoneError}
                onChangeText={(text) => setphone(text)}
                autoCapitalize="none"
                label="Phone Number"
                keyboardType="phone-pad"
                tintColor="#000dbb"
              />
              <PasswordedInput
                error={props.passwordError}
                maxLength={4}
                keyboardType="number-pad"
                autoCapitalize="none"
                tintColor="#000dbb"
                label="Password"
                value={password}
                onChangeText={(text) => setpassword(text)}
              />
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
                <Button
                  // disabled={
                  //   username.length < 3 ||
                  //   !validateEmail(email) ||
                  //   phone.length < 9
                  // }
                  loading={props.isLoading}
                  onPress={handleSubmit}
                  style={styles.submitButton}
                  labelStyle={[styles.submitText, { color: "#000000" }]}
                >
                  Next
                </Button>
              </View>
              <Button
                color="#000dbb"
                onPress={() => props.navigation.navigate("Login")}
              >
                Sign in instead?
              </Button>
            </View>
          </ScrollView>
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

const mapStateToProps = (state) => ({
  isLoading: state.AuthReducer.registerLoading,
  emailError: state.AuthReducer.signupEmailError,
  phoneError: state.AuthReducer.signupPhoneError,
  passwordError: state.AuthReducer.signupPasswordError
});

export default connect(mapStateToProps, { registerAction })(SignUp);
