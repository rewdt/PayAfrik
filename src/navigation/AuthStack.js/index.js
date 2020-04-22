import { createStackNavigator } from "react-navigation-stack";
import SignUp from "../../screens/SignUp";
import Login from "../../screens/Login";
import ForgotPassword from "../../screens/ForgotPassword";
import Onboarding from "../../screens/Onboarding";
import NumberVerification from "../../screens/NumberVerification";

const AuthStack = createStackNavigator(
  {
    Onboarding: { screen: Onboarding },
    Signup: { screen: SignUp },
    Login: { screen: Login },
    VerifyPhone: { screen: NumberVerification },
    ForgotPassword: { screen: ForgotPassword }
  },
  {
    defaultNavigationOptions: () => ({
      header: null
    })
  }
);

export default AuthStack;
