import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const CashoutCard = () => {
  return (
    <View style={styles.root}>
      <View style={styles.contentContainer}>
        <View>
          <Text style={styles.pageTitle}>Credit Card</Text>
          <Text style={styles.pageDescription}>
            lorem This is a good option if your status bar color never needs to
            change
          </Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Image source={require("../../../assets/cc-mastercard.png")} />
          <Image source={require("../../../assets/cc-visa.png")} />
          <Image source={require("../../../assets/cc-paypal.png")} />
        </View>
        <View>
          <Text style={styles.pageDescription}>
            Kindly select one you'll be redirected to the payment gateway
          </Text>
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
  contentContainer: {
    backgroundColor: "#fafaff",
    paddingHorizontal: 20,
    paddingTop: 44,
    paddingBottom: 80
  },
  pageTitle: {
    fontFamily: "Poppins-Bold",
    fontSize: 18,
    color: "#262626"
  },
  pageDescription: {
    color: "#262626",
    fontSize: 12,
    fontFamily: "Poppins-Medium"
  }
});

export default CashoutCard;
