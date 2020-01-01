import { createStackNavigator } from "react-navigation-stack";
import SignUp from "../../screens/SignUp";
import Login from "../../screens/Login";
import ForgotPassword from "../../screens/ForgotPassword";
import Onboarding from "../../screens/Onboarding";

const AuthStack = createStackNavigator(
  {
    Onboarding: { screen: Onboarding },
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
