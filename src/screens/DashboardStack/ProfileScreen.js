import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
  Dimensions,
  StyleSheet
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome5 } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import { IconButton, Avatar } from "react-native-paper";

const GradientButton = props => {
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

const ProfileScreen = () => {
  return (
    <View style={styles.root}>
      <StatusBar translucent={false} />
      <ScrollView>
        <View
          style={{
            width: Dimensions.get("window").width,
            height: 352,
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
              zIndex: -1
              // paddingTop: 100
            }}
          >
            <View
              style={{
                flex: 1,
                borderBottomLeftRadius: 50,
                backgroundColor: "#ffffff",
                zIndex: 5
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  paddingHorizontal: 20,
                  top: 40
                }}
              >
                <IconButton
                  icon={() => <FontAwesome5 name="arrow-left" size={20} />}
                />
                <IconButton
                  icon={() => <FontAwesome5 name="power-off" size={20} />}
                />
              </View>
            </View>
            <View
              style={{
                flex: 1,
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
              <GradientButton height={48} width={124} title="Get Your Card" />
            </View>
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "flex-end"
              }}
            >
              <Text>Limit</Text>
              <Text>150 USD</Text>

              <Text>Limit</Text>
            </View>
          </LinearGradient>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#ffffff"
  }
});

export default ProfileScreen;
