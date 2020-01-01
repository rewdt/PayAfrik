import { createSwitchNavigator, createAppContainer } from "react-navigation";
import AuthStack from "./AuthStack.js";

const MainNavigationStack = createSwitchNavigator({
  AuthStack: AuthStack
});

const AppContainer = createAppContainer(MainNavigationStack);

export default AppContainer;
