import { createStackNavigator } from "react-navigation-stack";
import SendFundsScreen from "../screens/SendFundsScreen";
import SendAFKCoin from "../screens/DashboardStack/SendAFKCoin";

const SendFundsStack = createStackNavigator(
  {
    SendFundsScreen: {
      screen: SendFundsScreen,
      navigationOptions: () => ({
        headerTitle: ""
        // headerTitle: "Send Funds",
      })
    },
    SendAFKCoin: {
      screen: SendAFKCoin,
      navigationOptions: () => ({
        headerTitle: " "
        // headerTitle: "Send AFK Coin"
      })
    }
  },
  {
    headerLayoutPreset: "center"
  }
);

export default SendFundsStack;
