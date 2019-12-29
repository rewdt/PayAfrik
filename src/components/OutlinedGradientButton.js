import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const OutlinedGradientButton = () => {
  return (
    <TouchableOpacity>
      <LinearGradient
        style={{ padding: 2, borderRadius: 20 }}
        start={[0, 0.5]}
        start={[1, 0.5]}
        locations={[0.0, 1.0]}
        colors={["rgb(254,194,0)", "rgb(0,13,187)"]} //<-- last 2 chars from color control the opacity
        useViewFrame={false}
        //   style={styles.gradient}
      >
        <View
          style={{
            width: 247,
            height: 37,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 20,
            backgroundColor: "#ffffff"
          }}
        >
          <Text style={{ fontSize: 10, fontFamily: "Poppins-Regular" }}>
            Already have an account?
            <Text style={{ fontFamily: "Poppins-Bold" }}>&nbsp;Sign In!</Text>
          </Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default OutlinedGradientButton;
