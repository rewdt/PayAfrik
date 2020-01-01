import { createStackNavigator } from "react-navigation-stack";
import SignUp from "../../screens/SignUp";
import Login from "../../screens/Login";
import ForgotPassword from "../../screens/ForgotPassword";

const AuthStack = createStackNavigator(
  {
    Signup: { screen: SignUp },
    Login: { screen: Login },
    ForgotPassword: { screen: ForgotPassword }
  },
  {
    defaultNavigationOptions: () => ({
      header: null
    })
  }
);

export default AuthStack;
