import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { Linking } from "expo";

const TransferOptions = (props) => {
  return (
    <View style={styles.root}>
      <TouchableOpacity
        style={[styles.contentItemContainer, { marginTop: 27 }]}
        onPress={() =>
          props.navigation.navigate("SendAFKCoin", { pageType: "afk" })
        }
      >
        <Text style={styles.labelText}>Send to phone</Text>
        <FontAwesome5 name="chevron-right" color="#262626" />
      </TouchableOpacity>
      {/* <TouchableOpacity
        style={[styles.contentItemContainer]}
        onPress={() => Linking.openURL("tel: *737#")}
      >
        <Text style={styles.labelText}>Send to USSD</Text>
        <FontAwesome5 name="chevron-right" color="#262626" />
      </TouchableOpacity> */}
      <TouchableOpacity
        style={[styles.contentItemContainer]}
        // onPress={() => props.navigation.navigate("BuyTabView", { index: 2 })}
      >
        <Text style={styles.labelText}>Send to wallet</Text>
        <FontAwesome5 name="chevron-right" color="#262626" />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#f0f0f7"
  },
  contentItemContainer: {
    height: 57,
    paddingHorizontal: 20,
    marginBottom: 5,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#ffffff",
    flexDirection: "row"
  }
});
export default TransferOptions;
