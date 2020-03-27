import React from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";

const DefaultLoader = () => {
  return (
    <View style={styles.root}>
      <ActivityIndicator />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default DefaultLoader;
