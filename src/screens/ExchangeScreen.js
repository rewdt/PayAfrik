import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import QRCode from "react-native-qrcode-svg";
import { Button, Divider } from "react-native-paper";
import CustomIcon from "../components/CustomIcon";

const ExchangeScreen = () => {
  return (
    <View style={styles.root}>
      <View style={{ flex: 2, justifyContent: "space-around" }}>
        <View
          style={[
            styles.pickerMenuContainer,
            {
              borderBottomLeftRadius: 20,
              borderBottomRightRadius: 20,
              marginBottom: 20
            }
          ]}
        >
          <View
            style={{
              flex: 1,
              borderBottomWidth: 1,
              borderBottomColor: "#eeeeee",
              paddingLeft: 30,
              justifyContent: "center"
            }}
          >
            <Text
              style={{
                fontFamily: "Poppins-Medium",
                color: "rgba(142, 145, 188, 0.75)",
                fontSize: 15
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
        <View
          style={[
            styles.pickerMenuContainer,
            { borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }
          ]}
        >
          <View
            style={{
              flex: 1,
              borderBottomWidth: 1,
              borderBottomColor: "#eeeeee",
              paddingLeft: 30,
              justifyContent: "center"
            }}
          >
            <Text
              style={{
                fontFamily: "Poppins-Medium",
                color: "rgba(142, 145, 188, 0.75)",
                fontSize: 15
              }}
            >
              To
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
      </View>
      <View
        style={{
          flex: 4,
          justifyContent: "space-around"
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: 20
          }}
        >
          <View>
            <View style={styles.currencyContainer}>
              <Text style={styles.btcText}>0 BTC</Text>
              <Text style={styles.btcLarge}>
                <Text
                  style={{
                    fontFamily: "Poppins-Thin"
                  }}
                >
                  0
                </Text>
                &nbsp;USD
              </Text>
            </View>
            <Divider />
          </View>
          <CustomIcon name="exchange" color="#000dbb" size={40} />
          <View>
            <View style={styles.currencyContainer}>
              <Text style={styles.btcText}>0 BTC</Text>
              <Text style={styles.btcLarge}>
                <Text
                  style={{
                    fontFamily: "Poppins-Thin"
                  }}
                >
                  0
                </Text>
                &nbsp;USD
              </Text>
            </View>
            <Divider />
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
          {/* <Button
            mode="text"
            uppercase={false}
            labelStyle={{
              color: "#0115fb",
              fontSize: 10,
              fontFamily: "Poppins-Bold"
            }}
          >
            <Text style={{ textDecorationLine: "underline" }}>
              Transfer to User Instead&nbsp;
            </Text>
            <FontAwesome5 name="arrow-right" />
          </Button> */}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#ffffff"
  },
  pickerMenuContainer: {
    marginTop: 18,
    height: 81,
    backgroundColor: "#ffffff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5
  },
  btnContainer: {
    flex: 1,
    paddingHorizontal: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  currencyContainer: { alignItems: "center" },
  btcText: {
    fontFamily: "Poppins-Medium",
    color: "rgba(142, 145, 188, 0.75)",
    fontSize: 15
  },
  btcLarge: {
    fontSize: 29,
    fontFamily: "Poppins-SemiBold",
    color: "#262626"
  }
});

export default ExchangeScreen;
