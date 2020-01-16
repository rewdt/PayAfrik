import { createStackNavigator } from "react-navigation-stack";
import ExchangeScreen from "../screens/ExchangeScreen";

const ExchangeStack = createStackNavigator(
  {
    ExchangeScreen: {
      screen: ExchangeScreen,
      navigationOptions: () => ({
        headerTitle: "Exchange"
      })
    }
  },
  {
    headerLayoutPreset: "center"
  }
);

export default ExchangeStack;
