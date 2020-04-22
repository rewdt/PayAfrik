import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
  Image,
  Dimensions,
  StyleSheet
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome5 } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import { IconButton, Avatar, Button, FAB } from "react-native-paper";
const { width, height } = Dimensions.get("window");

const GradientButton = (props) => {
  return (
    <TouchableOpacity {...props}>
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
            width: props.width,
            height: props.height,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 20,
            backgroundColor: "#ffffff"
          }}
        >
          <Text style={{ fontSize: 10, fontFamily: "Poppins-Regular" }}>
            {props.title}
          </Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const ProfileScreen = (props) => {
  return (
    <View style={styles.root}>
      {/* <StatusBar translucent={false} /> */}
      <FAB
        theme={{ colors: { accent: "#ffffff" } }}
        color="#ffffff"
        style={styles.fab}
        // small={false}
        icon={() => (
          <Image
            source={require("../../../assets/robot.png")}
            style={{ alignSelf: "center" }}
          />
        )}
        onPress={() => console.log("Pressed")}
      />
      <ScrollView>
        <View
          style={{
            width: Dimensions.get("window").width,
            height: 352,
            zIndex: -2,
            overflow: "hidden",
            borderBottomLeftRadius: 100
          }}
        >
          <LinearGradient
            colors={["#fec200", "#000dbb"]}
            useAngle
            // angleCenter={{ x: 0.5, y: 0.5 }}
            angle={120}
            start={{ x: 0.2, y: 0 }}
            end={{ x: 0.5, y: 0.8 }}
            style={{
              flex: 1,
              zIndex: -1,
              paddingTop: 100
              // paddingTop: 100
            }}
          >
            <View
              style={{
                flex: 1,
                flexDirection: "row"
              }}
            >
              <View
                style={{
                  flex: 1,
                  paddingBottom: 50,
                  alignItems: "center",
                  justifyContent: "space-around"
                }}
              >
                <Avatar.Icon
                  style={{
                    backgroundColor: "#8e91bc"
                  }}
                  icon={() => (
                    <FontAwesome5 name="user" color="#e5e5f1" size={62} />
                  )}
                  theme={{ primary: "#ffffff" }}
                  size={120}
                />
                <GradientButton height={29} width={124} title="Get Your Card" />
              </View>
              <View
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "flex-end"
                }}
              >
                <View>
                  <Text style={styles.limitStyle}>Limit</Text>
                  <Text style={styles.dollarStyle}>150 USD</Text>
                  <Text style={styles.limitStyle}>Security Level</Text>
                  <View style={styles.bronzeContainer}>
                    <Text>Bronze</Text>
                  </View>
                </View>
              </View>
            </View>
          </LinearGradient>
        </View>
        <View style={{ alignSelf: "flex-end", marginTop: 32, zIndex: 1 }}>
          <Button
            mode="contained"
            uppercase={false}
            contentStyle={styles.iLimitBtn}
            theme={{ roundness: 23, colors: { primary: "#ffffff" } }}
          >
            Increase Limits
          </Button>
        </View>
        <View style={styles.tHistoryCont}>
          <Button
            onPress={() => props.navigation.navigate("TransactionHistory")}
            uppercase={false}
            labelStyle={{ color: "#0115fb" }}
            contentStyle={{ alignItems: "center" }}
          >
            Transaction History&nbsp;
            <FontAwesome5 name="arrow-right" />
          </Button>
        </View>
        <View style={styles.settingsContainer}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => props.navigation.navigate("ProfileDetailsScreen")}
            style={[
              styles.settingsItemCont,
              {
                marginTop: 27,
                alignItems: undefined,
                justifyContent: "space-between"
              }
            ]}
          >
            <View style={{ flexDirection: "row", alignSelf: "center" }}>
              <FontAwesome5 name="user" size={22} color="#000dbb" />
              <Text style={styles.settingsItemText}>
                &nbsp;&nbsp;Profile Details
              </Text>
            </View>
            <View style={{ paddingTop: 2 }}>
              <Text style={styles.confirmationText}>Confirmation Required</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.settingsItemCont}
            onPress={() => props.navigation.navigate("SettingsScreen")}
          >
            <FontAwesome5 name="cog" size={22} color="#000dbb" />
            <Text style={styles.settingsItemText}>&nbsp;&nbsp;Settings</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.settingsItemCont}>
            <FontAwesome5 name="question-circle" size={22} color="#000dbb" />
            <Text style={styles.settingsItemText}>&nbsp;&nbsp;FAQ</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.settingsItemCont}>
            <FontAwesome5 name="info-circle" size={22} color="#000dbb" />
            <Text style={styles.settingsItemText}>&nbsp;&nbsp;About</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#ffffff"
  },
  limitStyle: {
    color: "#eeeef0",
    fontSize: 9,
    marginBottom: 11.9,
    fontFamily: "Poppins-SemiBold"
  },
  dollarStyle: {
    color: "#eeeef0",
    fontSize: 13,
    marginBottom: 22.1,
    fontFamily: "Poppins-Bold"
  },
  bronzeContainer: {
    width: 97,
    marginBottom: 22,
    height: 26,
    backgroundColor: "#ffffff",
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center"
  },
  iLimitBtn: {
    width: 220,
    height: 34,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5
  },
  tHistoryCont: {
    height: 80,
    padding: 20,
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "flex-start"
  },
  settingsContainer: {
    backgroundColor: "#f0f0f7",
    width
  },
  settingsItemCont: {
    marginBottom: 10,
    paddingHorizontal: 20,
    alignSelf: "flex-end",
    flexDirection: "row",
    alignItems: "center",
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    backgroundColor: "#ffffff",
    width: "90%",
    height: 57
  },
  settingsItemText: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 16,
    color: "#262626"
  },
  confirmationText: {
    color: "#ff0000",
    fontFamily: "Poppins-Bold",
    fontSize: 10
  },
  fab: {
    position: "absolute",
    zIndex: 100,
    margin: 16,
    right: 0,
    bottom: 0
  }
});

export default ProfileScreen;
