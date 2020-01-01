import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
  SafeAreaView,
  StyleSheet
} from "react-native";
import Swiper from "react-native-swiper";
import { LinearGradient } from "expo-linear-gradient";
import Logo from "../../assets/logo_with_title.png";
import OutlinedGradientButton from "../components/OutlinedGradientButton";

const Onboarding = props => {
  return (
    <View style={styles.root}>
      <SafeAreaView />
      <View style={styles.content1}>
        <Image source={Logo} resizeMode="stretch" style={styles.logoStyle} />
      </View>
      <View style={styles.content2}>
        <Swiper activeDotColor="#000dbb" autoplay>
          <View style={styles.itemContainer}>
            <View style={styles.itemImageContainer}>
              <Image
                source={require("../../assets/OnboardingImg1.png")}
                style={{ height: "100%", width: "100%" }}
                resizeMode="contain"
              />
            </View>
            <View style={styles.itemLabelContainer}>
              <Text style={styles.onboardingItemLabel}>
                We help merchants and users utilize cryptocurrencies for
                payments
              </Text>
            </View>
          </View>
          <View style={styles.itemContainer}>
            <View style={styles.itemImageContainer}>
              <Image
                source={require("../../assets/OnboardingImg2.png")}
                style={{ height: "100%", width: "100%" }}
                resizeMode="contain"
              />
            </View>
            <View style={styles.itemLabelContainer}>
              <Text style={styles.onboardingItemLabel}>
                Engage with traditional banking and payment services
              </Text>
            </View>
          </View>
          <View style={styles.itemContainer}>
            <View style={styles.itemImageContainer}>
              <Image
                source={require("../../assets/OnboardingImg3.png")}
                style={{ height: "100%", width: "100%" }}
                resizeMode="contain"
              />
            </View>
            <View style={styles.itemLabelContainer}>
              <Text style={styles.onboardingItemLabel}>
                Send to Phone number/USSD Invest and earn using our platform
              </Text>
            </View>
          </View>
        </Swiper>
      </View>
      <View style={styles.content3}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Signup")}
          style={{
            width: 247,
            height: 37,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 20,
            elevation: 2,
            shadowColor: "rgba(0, 0, 0, 0.16)",
            shadowOffset: {
              width: 0,
              height: 1.5
            },
            shadowRadius: 3,
            shadowOpacity: 1,
            backgroundColor: "#ffffff",
            marginBottom: 20
          }}
        >
          <Text style={{ fontSize: 12, fontFamily: "Poppins-Bold" }}>
            &nbsp;Get Started
          </Text>
        </TouchableOpacity>
        <OutlinedGradientButton
          onPress={() => props.navigation.navigate("Login")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "rgb(229, 229, 241)"
  },
  content1: {
    flex: 1.5,
    alignItems: "center"
  },
  content2: {
    flex: 3.5
  },
  content3: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25
  },
  logoStyle: {
    width: 130,
    height: 161
  },
  itemLabelContainer: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 50
  },
  onboardingItemLabel: {
    fontFamily: "Poppins-Bold",
    color: "#262626",
    fontSize: 11,
    textAlign: "center"
  },
  itemContainer: { height: "85%", width: "100%" },
  itemImageContainer: {
    flex: 6
  }
});

export default Onboarding;
