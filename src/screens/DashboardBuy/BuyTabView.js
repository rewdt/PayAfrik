import * as React from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import ElectricityBills from "../Utitlities/ElectricityBills";
import MobileTopUp from "../Utitlities/MobileTopUp";

const initialLayout = { width: Dimensions.get("window").width };

export default function BuyTabView(props) {
  const defaultIndex = props.navigation.getParam("index");
  const [index, setIndex] = React.useState(defaultIndex);
  const [routes] = React.useState([
    { key: "first", title: "Crypto Wallet", icon: null },
    { key: "second", title: "Credit Card", icon: "credit-card" },
    { key: "third", title: "Bank Transfer", icon: "building" }
  ]);

  const renderScene = SceneMap({
    first: ElectricityBills,
    second: MobileTopUp,
    third: ElectricityBills
  });

  const widthTabBar = 50 * 2;

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={index => setIndex(index)}
      // initialLayout={initialLayout}
      renderTabBar={props => (
        <View style={styles.tabBarContainer}>
          <TabBar
            {...props}
            style={{ backgroundColor: "#ffffff", elevation: 0 }}
            indicatorStyle={{ backgroundColor: "#e5e5f1" }}
            labelStyle={{ color: "black" }}
            renderIcon={({ route, focused, color }) =>
              focused ? (
                <View>
                  {route.key === "first" ? (
                    <Image
                      source={require("../../../assets/crypto-wallet-icon.png")}
                    />
                  ) : (
                    <FontAwesome5 name={route.icon} size={23} />
                  )}
                  {/* <FontAwesome5 name={route.icon} size={23} /> */}
                </View>
              ) : (
                <View
                  style={{
                    height: 23,
                    width: 23,
                    alignItems: "center",
                    justifyContent: "flex-end"
                  }}
                >
                  {route.key === "first" ? (
                    <Image
                      source={require("../../../assets/crypto-wallet-icon.png")}
                    />
                  ) : (
                    <FontAwesome5 name={route.icon} size={11} />
                  )}
                  {/* <FontAwesome5 name={route.icon} size={11} /> */}
                </View>
              )
            }
            renderLabel={({ route, focused, color }) => (
              <View
                style={{
                  width: 150,
                  height: 60,
                  alignItems: "center"
                }}
              >
                <Text
                  style={{
                    color: "#262626",
                    textAlign: "center",
                    fontFamily: "Poppins-SemiBold",
                    fontSize: focused ? 20 : 11
                  }}
                >
                  {route.title.replace(" ", "\n")}
                </Text>
              </View>
            )}
          />
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  scene: {
    flex: 1
  },
  tabBarContainer: {
    width: 250,
    alignSelf: "center"
  }
});
