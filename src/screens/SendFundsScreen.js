import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { connect } from "react-redux";
import QRCode from "react-native-qrcode-svg";
import { Button, Divider } from "react-native-paper";
import CurrencyOptionsModal from "../components/CurrencyOptionsModal";

const SendFundsScreen = (props) => {
  const [visible, setVisible] = useState(false);
  return (
    <View style={styles.root}>
      <CurrencyOptionsModal
        visible={visible}
        setVisible={(status) => setVisible(status)}
      />
      <View style={{ flex: 2, justifyContent: "space-around" }}>
        <View
          style={[
            styles.pickerMenuContainer,
            { borderBottomLeftRadius: 20, borderBottomRightRadius: 20 },
          ]}
        >
          <View
            style={{
              flex: 1,
              borderBottomWidth: 1,
              borderBottomColor: "#eeeeee",
              paddingLeft: 30,
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontFamily: "Poppins-Medium",
                color: "rgba(142, 145, 188, 0.75)",
                fontSize: 15,
              }}
            >
              From
            </Text>
          </View>
          <View style={{ flex: 2 }}>
            <TouchableOpacity
              style={styles.btnContainer}
              onPress={() => setVisible(true)}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  source={require("../../assets/btc.png")}
                  style={{ width: 30, height: 30 }}
                />
                <View style={{ marginLeft: 10 }}>
                  <Text>0 BTC</Text>
                  <Text>BTC wallet</Text>
                </View>
              </View>
              <FontAwesome5 name="chevron-down" color="#aaadcd" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.pickerMenuContainer}>
          <View
            style={{
              flex: 1,
              borderBottomWidth: 1,
              borderBottomColor: "#eeeeee",
              paddingLeft: 30,
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontFamily: "Poppins-Medium",
                color: "rgba(142, 145, 188, 0.75)",
                fontSize: 15,
              }}
            >
              To
            </Text>
          </View>
          <View style={[styles.btnContainer, { flex: 2 }]}>
            {/* <TouchableOpacity
              style={styles.btnContainer}
              onPress={() => setVisible(true)}
            > */}
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              {/* <Text>Wallet Address</Text> */}
              <TextInput placeholder="Wallet Address" />
            </View>
            <QRCode value="123456789876543212345678" size={38} />
            {/* </TouchableOpacity> */}
          </View>
        </View>
      </View>
      <View
        style={{
          flex: 4,
          justifyContent: "space-around",
        }}
      >
        <View>
          <View style={styles.currencyContainer}>
            <Text
              style={{
                fontSize: 29,
                fontFamily: "Poppins-SemiBold",
                color: "#262626",
              }}
            >
              <Text
                style={{
                  fontFamily: "Poppins-Thin",
                }}
              >
                0
              </Text>
              &nbsp;USD
            </Text>
          </View>
          <Divider />
          <View style={styles.currencyContainer}>
            <Text
              style={{
                fontFamily: "Poppins-Medium",
                color: "rgba(142, 145, 188, 0.75)",
                fontSize: 15,
              }}
            >
              0 BTC
            </Text>
          </View>
        </View>
        <View style={{ width: "80%", alignSelf: "center" }}>
          <Button
            theme={{ roundness: 20, colors: { primary: "#ffffff" } }}
            mode="contained"
            uppercase={false}
          >
            Transfer
          </Button>
        </View>
        <View>
          <Button
            mode="text"
            onPress={() => props.navigation.navigate("SendAFKCoin")}
            uppercase={false}
            labelStyle={{
              color: "#0115fb",
              fontSize: 10,
              fontFamily: "Poppins-Bold",
            }}
          >
            <Text style={{ textDecorationLine: "underline" }}>
              Transfer to User Instead&nbsp;
            </Text>
            <FontAwesome5 name="arrow-right" />
          </Button>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  pickerMenuContainer: {
    marginTop: 18,
    height: 81,
    backgroundColor: "#ffffff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  btnContainer: {
    flex: 1,
    paddingHorizontal: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  currencyContainer: { alignItems: "center" },
});

const mapStateToProps = (state) => ({
  currencies: state.Currencies.currenciesList,
});

export default connect(mapStateToProps)(SendFundsScreen);
