import { createStackNavigator } from "react-navigation-stack";
import CashoutScreen from "../screens/PaymentsStack/CashoutScreen";
import CashoutBank from "../screens/PaymentsStack/CashoutBank";
import CashoutCard from "../screens/PaymentsStack/CashoutCard";

const PaymentStack = createStackNavigator(
  {
    Cashout: {
      screen: CashoutScreen,
      navigationOptions: ({ navigation }) => ({
        headerTitle: "Cash Out"
      })
    },
    CashoutBank: {
      screen: CashoutBank,
      navigationOptions: ({ navigation }) => ({
        headerTitle: "Cash out to Bank"
      })
    },
    CashoutCard: {
      screen: CashoutCard,
      navigationOptions: ({ navigation }) => ({
        headerTitle: "Cash Out to Card"
      })
    }
  },
  {
    headerLayoutPreset: "center"
  }
);

export default PaymentStack;
