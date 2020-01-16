import { createBottomTabNavigator } from "react-navigation-tabs";
import React from "react";
import { View, Text } from "react-native";
import DashboardStack from "./DashboardStack";
import CustomIcon from "../components/CustomIcon";
import ReceiveStack from "./ReceiveStack";
import SendFundsStack from "./SendFundsStack";
import ExchangeStack from "./ExchangeStack";
import PaymentStack from "./PaymentsStack";

const Payments = () => {
  return (
    <View>
      <Text>Payments</Text>
    </View>
  );
};

const TabNavigator = createBottomTabNavigator(
  {
    Dashboard: {
      screen: DashboardStack,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => (
          <CustomIcon name="dashboard" size={20} color={tintColor} />
        )
      })
    },
    Receive: {
      screen: ReceiveStack,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => (
          <CustomIcon name="receive" size={20} color={tintColor} />
        )
      })
    },
    Payments: {
      screen: PaymentStack,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => (
          <CustomIcon name="cash-out" size={20} color={tintColor} />
        )
        // tabBarLabel: <Text style={{ display: "none" }}></Text>
      })
    },
    SendFunds: {
      screen: SendFundsStack,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => (
          <CustomIcon name="send" size={20} color={tintColor} />
        )
      })
    },
    Exchange: {
      screen: ExchangeStack,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => (
          <CustomIcon name="exchange" size={20} color={tintColor} />
        )
      })
    }
  },
  {
    tabBarOptions: {
      activeTintColor: "#000dbb"
    }
  }
);

export default TabNavigator;
