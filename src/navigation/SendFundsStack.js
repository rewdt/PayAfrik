import { createStackNavigator } from "react-navigation-stack";
import SendFundsScreen from "../screens/SendFundsScreen";

const SendFundsStack = createStackNavigator(
  {
    SendFundsScreen: {
      screen: SendFundsScreen,
      navigationOptions: () => ({
        headerTitle: "Send Funds"
      })
    }
  },
  {
    headerLayoutPreset: "center"
  }
);

export default SendFundsStack;
