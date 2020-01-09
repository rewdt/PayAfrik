import { createBottomTabNavigator } from "react-navigation-tabs";

import React from "react";
import { View, Text } from "react-native";
import DashboardStack from "./DashboardStack";

const Receive = () => {
  return (
    <View>
      <Text>Receive</Text>
    </View>
  );
};

const Payments = () => {
  return (
    <View>
      <Text>Payments</Text>
    </View>
  );
};

const SendFunds = () => {
  return (
    <View>
      <Text>SendFunds</Text>
    </View>
  );
};

const Exchange = () => {
  return (
    <View>
      <Text>Exchange</Text>
    </View>
  );
};

const TabNavigator = createBottomTabNavigator({
  Dashboard: DashboardStack,
  Receive: Receive,
  Payments: Payments,
  SendFunds: SendFunds,
  Exchange: Exchange
});

export default TabNavigator;
