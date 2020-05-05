import React, { useState } from "react";
import { SafeAreaView, Text, View, Image, StyleSheet } from "react-native";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell
} from "react-native-confirmation-code-field";
import { connect } from "react-redux";
import { Button } from "react-native-paper";
import LockImage from "../../assets/undraw_two_factor_authentication_namy.png";
import { baseurl } from "../constants";
import createNotification from "../helpers/Notifications";

const CELL_COUNT = 4;

const NumberVerification = ({ user, navigation }) => {
  const [value, setValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue
  });

  const handleSubmit = async () => {
    // console.log(user.token);
    setIsLoading(true);
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", user.token);

    var raw = JSON.stringify({
      nonce: value
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw
    };

    await fetch(`${baseurl}/auth/accounts/verify-phone/`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        if (result.error) {
          createNotification({
            message: "Error",
            type: "danger",
            description: result.error
          });
        }
        if (result.nonce) {
          createNotification({
            message: "Error",
            type: "danger",
            description: result.nonce[0]
          });
        }
        if (result.data) {
          navigation.navigate("WelcomeScreen");
          createNotification({
            message: "Success",
            type: "success",
            description: result.success
          });
        }
      })
      .catch((error) => console.log("error", error));
    setIsLoading(false);
  };

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Verification</Text>
      <View style={styles.imgContainer}>
        <Image
          source={LockImage}
          resizeMode="contain"
          style={styles.lockImgStyle}
        />
      </View>
      <Text
        style={{
          textAlign: "center",
          fontFamily: "Poppins-SemiBold",
          fontSize: 13
        }}
      >
        Please enter the verification code{"\n"} we sent to your phone number
      </Text>
      <CodeField
        ref={ref}
        {...props}
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFiledRoot}
        keyboardType="number-pad"
        renderCell={({ index, symbol, isFocused }) => (
          <Text
            key={index}
            style={[styles.cell, isFocused && styles.focusCell]}
            onLayout={getCellOnLayoutHandler(index)}
          >
            {symbol || (isFocused ? <Cursor /> : null)}
          </Text>
        )}
      />
      <View style={{ marginTop: 50 }}>
        <Button
          theme={{ roundness: 30 }}
          contentStyle={{ height: 50 }}
          mode="contained"
          loading={isLoading}
          onPress={handleSubmit}
        >
          Confirm
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: { flex: 1, padding: 30, paddingTop: 50 },
  title: { textAlign: "center", fontSize: 30, fontFamily: "Poppins-Bold" },
  codeFiledRoot: { marginTop: 20 },
  cell: {
    width: 40,
    height: 40,
    lineHeight: 38,
    fontSize: 24,
    borderWidth: 2,
    borderColor: "#00000030",
    textAlign: "center"
  },
  focusCell: {
    borderColor: "#000"
  },
  imgContainer: {
    alignSelf: "center",
    marginVertical: 20
  },
  lockImgStyle: {
    width: 200,
    height: 100
  }
});

const mapStateToProps = (state) => ({
  user: state.AuthReducer.authDetails
});

export default connect(mapStateToProps)(NumberVerification);
