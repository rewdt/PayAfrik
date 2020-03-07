import { createSwitchNavigator, createAppContainer } from "react-navigation";
import AuthStack from "./AuthStack.js";
import TabNavigator from "./BottomTabBar.js";
import SplashScreen from "../screens/SplashScreen.js";

const MainNavigationStack = createSwitchNavigator({
  SplashScreen: SplashScreen,
  AuthStack: AuthStack,
  TabNavigator: TabNavigator
});

const AppContainer = createAppContainer(MainNavigationStack);

export default AppContainer;
