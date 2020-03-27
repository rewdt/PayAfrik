import React from "react";
import { View, Text, ImageBackground, StyleSheet, Image } from "react-native";
import { Button } from "react-native-paper";
import WelcomeBg from "../../assets/Welcome-bg.png";
import AfricaMap from "../../assets/AfricaMap-PayAfrik.png";

const WelcomeScreen = props => {
  return (
    <ImageBackground style={styles.root} source={WelcomeBg}>
      <View
        style={[
          styles.contentContainer,
          { justifyContent: "flex-end", alignItems: "center" }
        ]}
      >
        <Image source={AfricaMap} />
      </View>
      <View style={[styles.contentContainer]}>
        <View style={{ alignItems: "center", marginTop: 31, marginBottom: 52 }}>
          <Text style={styles.alertText}>You're all set up</Text>
        </View>
        <View style={{ paddingHorizontal: 30 }}>
          <Button
            mode="contained"
            color="#ffffff"
            uppercase={false}
            theme={{ roundness: 23 }}
            onPress={() => props.navigation.navigate("TabNavigator")}
          >
            Get Started
          </Button>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  contentContainer: { flex: 1 },
  alertText: {
    width: 165,
    color: "#f0f0f7",
    fontSize: 34,
    fontFamily: "Poppins-ExtraBoldItalic",
    textAlign: "center"
  }
});

export default WelcomeScreen;
