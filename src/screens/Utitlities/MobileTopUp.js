import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { TextInput, Divider, Button } from "react-native-paper";

const MobileTopUp = () => {
  return (
    <ScrollView>
      <View style={styles.root}>
        <View style={{ paddingVertical: 20, paddingHorizontal: 20 }}>
          <Text style={styles.title}>Phone Number</Text>
          <Text style={styles.description}>
            Lorem Ipsum Not to egt aye nor yuou thus
          </Text>
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
              Wallet
            </Text>
          </View>
          <View style={{ flex: 2 }}>
            <TouchableOpacity
              style={styles.btnContainer}
              //   onPress={() => setVisible(true)}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View style={{ marginLeft: 10 }}>
                  <Text>BTC wallet</Text>
                  <Text>0 BTC</Text>
                </View>
              </View>
              <FontAwesome5 name="chevron-down" color="#aaadcd" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ width: "80%", alignSelf: "center", paddingTop: 20 }}>
          <TextInput
            mode="flat"
            style={{ backgroundColor: "transparent" }}
            label="Phone Number"
          />
        </View>
        <View style={{ height: 120, paddingTop: 20 }}>
          <View style={styles.currencyContainer}>
            <Text
              style={{
                fontSize: 29,
                fontFamily: "Poppins-SemiBold",
                color: "#262626"
              }}
            >
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
          <View style={styles.currencyContainer}>
            <Text
              style={{
                fontFamily: "Poppins-Medium",
                color: "rgba(142, 145, 188, 0.75)",
                fontSize: 15
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
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: "#fafaff" },
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
  title: {
    fontFamily: "Poppins-Bold",
    fontSize: 18,
    color: "#262626"
  },
  description: {
    fontFamily: "Poppins-Medium",
    fontSize: 12,
    color: "#262626"
  },
  btnContainer: {
    flex: 1,
    paddingHorizontal: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  currencyContainer: { alignItems: "center" }
});

export default MobileTopUp;
