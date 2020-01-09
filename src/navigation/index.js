import { createSwitchNavigator, createAppContainer } from "react-navigation";
import AuthStack from "./AuthStack.js";
import TabNavigator from "./BottomTabBar.js";

const MainNavigationStack = createSwitchNavigator({
  TabNavigator: TabNavigator,
  AuthStack: AuthStack
});

const AppContainer = createAppContainer(MainNavigationStack);

export default AppContainer;
