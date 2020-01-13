import { createStackNavigator } from "react-navigation-stack";
import ReceiveScreen from "../screens/ReceiveScreen";

const ReceiveStack = createStackNavigator({
  ReceiveScreen: {
    screen: ReceiveScreen,
    navigationOptions: () => ({
      headerTitle: "Receive"
    })
  }
});

export default ReceiveStack;
