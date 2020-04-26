import * as React from "react";
import {
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { createStackNavigator, HeaderBackButton } from "react-navigation-stack";
import DashboardScreen from "../screens/DashboardStack/DashboardScreen";
import { Avatar, IconButton } from "react-native-paper";
import ProfileScreen from "../screens/DashboardStack/ProfileScreen";
import ProfileDetailsScreen from "../screens/DashboardStack/ProfileDetailsScreen";
import CustomIcon from "../components/CustomIcon";
import UtilitiesScreen from "../screens/DashboardStack/UtilitiesScreen";
import WithdrawScreen from "../screens/DashboardWithdraw/WithdrawScreen";
import WithdrawTabView from "../screens/DashboardWithdraw/WithdrawTabView";
import SettingsScreen from "../screens/DashboardStack/SettingsScreen";
import SendAFKCoin from "../screens/DashboardStack/SendAFKCoin";
import BuyOptions from "../screens/DashboardBuy/BuyOptions";
import BuyTabView from "../screens/DashboardBuy/BuyTabView";
import SendOptions from "../screens/DashboardSend/SendOptions";
import { logoutAction } from "../actions/AuthAction";
import { store } from "../../App";
import TransferOptions from "../screens/DashboardStack/TransferOptions";
import UtitlitiesPage from "../screens/Utitlities/UtitlitiesPage";
import TransactionHistory from "../screens/DashboardStack/TransactionHistory";

const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  balanceLabel: {
    color: "#acacac",
    fontFamily: "Poppins-Medium",
    fontSize: 9
  },
  balance: {
    color: "#262626",
    fontFamily: "Poppins-SemiBold",
    fontSize: 18
  },
  viewProfileText: {
    fontFamily: "Poppins-Medium",
    color: "#6470ff",
    fontSize: 6,
    textDecorationLine: "underline"
  },
  headerContainer: {
    height: 100,
    width,
    paddingTop: 20,
    top: 0,
    position: "absolute",
    overflow: "hidden",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    borderBottomLeftRadius: 50,
    backgroundColor: "#ffffff",
    zIndex: 5
  }
});

const ProfileHeader = (props) => {
  return (
    <View style={styles.headerContainer}>
      <HeaderBackButton onPress={() => props.navigation.goBack()} />
      <IconButton
        icon={() => <CustomIcon name="power-off" size={20} />}
        onPress={() => store.dispatch(logoutAction(props.navigation))}
      />
    </View>
  );
};

const DashboardStack = createStackNavigator(
  {
    DashboardScreen: {
      screen: DashboardScreen,
      navigationOptions: ({ navigation }) => ({
        headerLeft: (
          <View style={{ paddingLeft: 20, alignItems: "center" }}>
            <Text style={styles.balanceLabel}>Total Balance</Text>
            <Text style={styles.balance}>
              ${/* {navigation.getParam("balance")} */}
            </Text>
          </View>
        ),
        headerRight: (
          <View style={{ paddingRight: 20 }}>
            <TouchableOpacity
              onPress={() => navigation.navigate("ProfileScreen")}
              style={{ alignItems: "center" }}
              activeOpacity={0.7}
            >
              <Avatar.Icon
                style={{
                  backgroundColor: "#ffffff",
                  shadowColor: "#000",
                  shadowOffset: {
                    width: 0,
                    height: 2
                  },
                  shadowOpacity: 0.25,
                  shadowRadius: 3.84,

                  elevation: 5
                }}
                icon={() => <FontAwesome5 name="user" color="#e5e5f1" />}
                theme={{ primary: "#ffffff" }}
                size={30}
              />
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: 3
                }}
              >
                <Text style={styles.viewProfileText}>View profile&nbsp;</Text>
                <FontAwesome5 name="arrow-right" color="#6470ff" size={9} />
              </View>
            </TouchableOpacity>
          </View>
        ),
        headerStyle: { height: 70 }
      })
    },
    ProfileScreen: {
      screen: ProfileScreen,
      navigationOptions: ({ navigation }) => ({
        header: <ProfileHeader navigation={navigation} />
      })
    },
    ProfileDetailsScreen: {
      screen: ProfileDetailsScreen,
      navigationOptions: () => ({
        headerTitle: "Profile Details"
        // headerTitleStyle: { textAlign: "center" }
        // headerLayoutPreset: "center"
      })
    },
    TransactionHistory: {
      screen: TransactionHistory,
      navigationOptions: () => ({
        headerTitle: "History"
      })
    },
    SettingsScreen: {
      screen: SettingsScreen,
      navigationOptions: () => ({
        headerTitle: "Settings"
      })
    },
    UtilitiesScreen: {
      screen: UtilitiesScreen,
      navigationOptions: () => ({
        headerTitle: "Utilities"
      })
    },
    UtilitiesPage: {
      screen: UtitlitiesPage,
      navigationOptions: () => ({
        headerTitle: "Utilities"
      })
    },
    WithdrawTabView: {
      screen: WithdrawTabView,
      navigationOptions: () => ({
        headerTitle: "Withdraw"
      })
    },
    WithdrawScreen: {
      screen: WithdrawScreen,
      navigationOptions: () => ({
        headerTitle: "Withdraw"
      })
    },
    SendAFKCoin: {
      screen: SendAFKCoin,
      navigationOptions: () => ({
        headerTitle: ""
        // headerTitle: "Send AFK Coin"
      })
    },
    BuyOptions: {
      screen: BuyOptions,
      navigationOptions: () => ({
        headerTitle: "Buy"
      })
    },
    BuyTabView: {
      screen: BuyTabView,
      navigationOptions: () => ({
        headerTitle: "Withdraw"
      })
    },
    TransferOptions: {
      screen: TransferOptions,
      navigationOptions: () => ({
        headerTitle: "Transfer"
      })
    },
    SendOptions: {
      screen: SendOptions,
      navigationOptions: () => ({
        headerTitle: "Send"
      })
    }
  },
  {
    headerLayoutPreset: "center"
  }
);

export default DashboardStack;
