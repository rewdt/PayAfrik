import { createSwitchNavigator, createAppContainer } from "react-navigation";
import AuthStack from "./AuthStack.js";
import TabNavigator from "./BottomTabBar.js";

const MainNavigationStack = createSwitchNavigator({
  AuthStack: AuthStack,
  TabNavigator: TabNavigator
});

const AppContainer = createAppContainer(MainNavigationStack);

export default AppContainer;
