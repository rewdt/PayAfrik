import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

const BuyOptions = props => {
  return (
    <View style={styles.root}>
      <TouchableOpacity
        style={[styles.contentItemContainer, { marginTop: 27 }]}
        onPress={() => props.navigation.navigate("BuyTabView", { index: 0 })}
      >
        <Text style={styles.labelText}>With Crypto</Text>
        <FontAwesome5 name="chevron-right" color="#262626" />
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.contentItemContainer]}
        onPress={() => props.navigation.navigate("BuyTabView", { index: 1 })}
      >
        <Text style={styles.labelText}>With Card</Text>
        <FontAwesome5 name="chevron-right" color="#262626" />
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.contentItemContainer]}
        onPress={() => props.navigation.navigate("BuyTabView", { index: 2 })}
      >
        <Text style={styles.labelText}>With Bank Transfer</Text>
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
export default BuyOptions;
