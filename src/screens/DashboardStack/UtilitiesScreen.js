import React, { useEffect } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { connect } from "react-redux";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import ElectricityBills from "../Utitlities/ElectricityBills";
import MobileTopUp from "../Utitlities/MobileTopUp";
import { fetchBillerCategories } from "../../actions/UtilitiesAction";
const initialLayout = { width: Dimensions.get("window").width };

function UtilitiesScreen(props) {
  const defaultIndex = props.navigation.getParam("index");
  const [index, setIndex] = React.useState(defaultIndex);
  const [routes] = React.useState([
    { key: "first", title: "Electricity Bills", icon: "building" },
    { key: "second", title: "Mobile Top-up", icon: "mobile-alt" }
  ]);

  const getElectrictyIndex = (index) => {
    if (index === 0) {
      props.fetchBillerCategories(1);
    }
    if (index === 1) {
      props.fetchBillerCategories(3);
    }
  };

  // useEffect(() => {}, []);

  const renderScene = SceneMap({
    first: ElectricityBills,
    second: MobileTopUp
  });

  const widthTabBar = 50 * 2;

  const handleIndexChange = (index) => {
    // console.log(index);
    getElectrictyIndex(index);
    setIndex(index);
  };
  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={handleIndexChange}
      // initialLayout={initialLayout}
      renderTabBar={(props) => (
        <View style={styles.tabBarContainer}>
          <TabBar
            {...props}
            tabStyle={{ backgroundColor: "transparent" }}
            style={{ backgroundColor: "transparent", elevation: 0 }}
            indicatorStyle={{ backgroundColor: "#e5e5f1" }}
            labelStyle={{ color: "black" }}
            renderIcon={({ route, focused, color }) =>
              focused ? (
                <FontAwesome5 name={route.icon} size={23} />
              ) : (
                <View
                  style={{
                    height: 23,
                    width: 23,
                    alignItems: "center",
                    justifyContent: "flex-end"
                  }}
                >
                  <FontAwesome5 name={route.icon} size={11} />
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

export default connect(null, { fetchBillerCategories })(UtilitiesScreen);
