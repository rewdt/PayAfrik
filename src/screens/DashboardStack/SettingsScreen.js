import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { Switch } from "react-native-paper";

const SettingsScreen = () => {
  return (
    <View style={styles.root}>
      <View style={styles.itemContainer}>
        <TouchableOpacity
          style={[styles.contentItemContainer]}
          activeOpacity={0.8}
        >
          <View style={styles.itemTitleWithLogo}>
            <Image source={require("../../../assets/currency.png")} />
            <Text style={styles.labelText}>&nbsp;&nbsp;Primary Currency</Text>
          </View>
          <Text style={styles.valueText}>USD</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.contentItemContainer]}
          activeOpacity={0.8}
        >
          <View style={styles.itemTitleWithLogo}>
            <Image source={require("../../../assets/bell.png")} />
            <Text style={styles.labelText}>&nbsp;&nbsp;Notification</Text>
          </View>
          <Switch
            color="#0115fb"
            value={true}
            // onValueChange={() =>
            //   { this.setState({ isSwitchOn: !isSwitchOn }); }
            // }
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.contentItemContainer]}
          activeOpacity={0.8}
        >
          <View style={styles.itemTitleWithLogo}>
            <Image source={require("../../../assets/fingerprint.png")} />
            <Text style={styles.labelText}>&nbsp;&nbsp;Touch ID</Text>
          </View>
          <Switch
            color="#0115fb"
            value={false}
            // onValueChange={() =>
            //   { this.setState({ isSwitchOn: !isSwitchOn }); }
            // }
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.contentItemContainer]}
          activeOpacity={0.8}
        >
          <View style={styles.itemTitleWithLogo}>
            <Image source={require("../../../assets/key.png")} />
            <Text style={styles.labelText}>&nbsp;&nbsp;Change Password</Text>
          </View>
          {/* <Text style={styles.valueText}>USD</Text> */}
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.contentItemContainer]}
          activeOpacity={0.8}
        >
          <View style={styles.itemTitleWithLogo}>
            <Image source={require("../../../assets/at.png")} />
            <Text style={styles.labelText}>&nbsp;&nbsp;Change Email</Text>
          </View>
          {/* <Text style={styles.valueText}>USD</Text> */}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#ffffff"
  },
  itemContainer: {
    backgroundColor: "#f0f0f7",
    paddingVertical: 20
  },
  contentItemContainer: {
    height: 57,
    paddingHorizontal: 20,
    marginBottom: 5,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#ffffff",
    flexDirection: "row"
  },
  labelText: {
    fontFamily: "Poppins-Regular",
    fontSize: 12,
    color: "#262626"
  },
  valueText: {
    fontFamily: "Poppins-Bold",
    fontSize: 12,
    color: "#262626"
  },
  itemTitleWithLogo: {
    flexDirection: "row",
    justifyContent: "space-between"
  }
});
export default SettingsScreen;
