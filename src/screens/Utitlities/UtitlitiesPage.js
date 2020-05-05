import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput as Input,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Dimensions
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { connect } from "react-redux";
import { TextInput, Divider, Button } from "react-native-paper";
import { Dropdown } from "react-native-material-dropdown";
import {
  fetchBillerCategories,
  fetchAllBillerCategories,
  fetchBillerOptions,
  submitUtilities
} from "../../actions/UtilitiesAction";
import CurrencyOptionsModal from "../../components/CurrencyOptionsModal";
import KeyboardShift from "../../components/KeyboardShift";

const { width, height } = Dimensions.get("window");
const UtilitiesPage = (props) => {
  const [visible, setVisible] = useState(false);
  const [metrenumber, setmetrenumber] = useState("");
  const [amount, setamount] = useState("0");
  const [categoryid, setCategoryId] = useState("");
  const [billerId, setbillerId] = useState("");
  const [paymentCode, setpaymentCode] = useState("");
  const [billerOptionsLabel, setBillerOptionsLabel] = useState("");

  useEffect(() => {
    // console.warn(props.electricityBillerCategories);
    props.fetchAllBillerCategories();
  }, []);

  const getFieldType = (billerid) => {
    const selectedBiller = props.electricityBillerCategories.find(
      (biller) => biller.billerid === billerid
    );
    selectedBiller
      ? setBillerOptionsLabel(selectedBiller.customerfield1)
      : setBillerOptionsLabel("");
  };

  const handleBillerTypes = (categoryId) => {
    // console.log(categoryId);
    setCategoryId(categoryId);
    props.fetchBillerCategories(categoryId);
  };

  const handleBillerChange = (billerid) => {
    setbillerId(billerid);
    getFieldType(billerid);
    props.fetchBillerOptions(billerid);
  };

  const handleBillerOptions = (paymentcode) => {
    setpaymentCode(paymentcode);
  };

  const handleSubmit = () => {
    const data = {
      paymentCode: paymentCode,
      customerId: metrenumber,
      customerMobile: props.profileDetails.phone,
      customerEmail: props.profileDetails.email,
      amount: amount
    };
    props.submitUtilities(data, props.user.token);
    // console.log(data);
  };
  return (
    <KeyboardShift>
      {() => (
        <ScrollView
        //  contentContainerStyle={{ width, height }}
        >
          <View style={styles.root}>
            <CurrencyOptionsModal
              visible={visible}
              setVisible={(status) => setVisible(status)}
            />
            <View style={{ paddingVertical: 20, paddingHorizontal: 20 }}>
              <Text style={styles.title}>Bank Details</Text>
              {/* <Text style={styles.description}>
            Lorem Ipsum Not to egt aye nor yuou thus
          </Text> */}
            </View>
            <View
              style={[
                styles.pickerMenuContainer,
                { borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }
              ]}
            >
              <View
                style={{
                  flex: 1,
                  borderBottomWidth: 1,
                  borderBottomColor: "#eeeeee",
                  paddingLeft: 30,
                  justifyContent: "center"
                }}
              >
                <Text
                  style={{
                    fontFamily: "Poppins-Medium",
                    color: "rgba(142, 145, 188, 0.75)",
                    fontSize: 15
                  }}
                >
                  Wallet
                </Text>
              </View>
              <View style={{ flex: 2 }}>
                <TouchableOpacity
                  style={styles.btnContainer}
                  disabled
                  onPress={() => setVisible(true)}
                >
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <View style={{ marginLeft: 10 }}>
                      <Text>AfriToken Balance</Text>
                      <Text>{props.afritoken_balance} AfriToken</Text>
                    </View>
                  </View>
                  {/* <FontAwesome5 name="chevron-down" color="#aaadcd" /> */}
                </TouchableOpacity>
              </View>
            </View>
            <View style={{ width: "80%", alignSelf: "center", paddingTop: 20 }}>
              <Dropdown
                label="All Billers"
                value={categoryid}
                data={props.billercategories}
                labelExtractor={(el) => el.categoryname}
                valueExtractor={(el) => el.categoryid}
                onChangeText={handleBillerTypes}
              />
              <Dropdown
                label="Biller Categories"
                value={billerId}
                data={props.electricityBillerCategories}
                labelExtractor={(el) => el.billername}
                valueExtractor={(el) => el.billerid}
                onChangeText={handleBillerChange}
              />
              <Dropdown
                label="Biller Options"
                value={paymentCode}
                data={props.billerOptions}
                labelExtractor={(el) => el.paymentitemname}
                valueExtractor={(el) => el.paymentCode}
                onChangeText={handleBillerOptions}
              />
              <TextInput
                label={billerOptionsLabel}
                mode="outlined"
                value={metrenumber}
                onChangeText={(txt) => setmetrenumber(txt)}
              />
            </View>
            <View style={{ height: 120, paddingTop: 20 }}>
              <View style={styles.currencyContainer}>
                <Input
                  value={amount}
                  defaultValue={"0"}
                  keyboardType="number-pad"
                  onChangeText={(txt) => setamount(txt)}
                  style={{
                    fontFamily: "Poppins-Thin",
                    fontSize: 20
                  }}
                />
                <Text
                  style={{
                    fontSize: 29,
                    fontFamily: "Poppins-SemiBold",
                    color: "#262626"
                  }}
                >
                  {/* &nbsp;USD */}
                </Text>
              </View>
              <Divider />
              {/* <View style={styles.currencyContainer}>
            <Text
              style={{
                fontFamily: "Poppins-Medium",
                color: "rgba(142, 145, 188, 0.75)",
                fontSize: 15
              }}
            >
              0 BTC
            </Text>
          </View> */}
            </View>
            <View style={{ width: "80%", alignSelf: "center" }}>
              <Button
                theme={{ roundness: 20, colors: { primary: "#ffffff" } }}
                mode="contained"
                uppercase={false}
                onPress={handleSubmit}
              >
                Transfer
              </Button>
            </View>
          </View>
        </ScrollView>
      )}
    </KeyboardShift>
  );
};
const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: "#fafaff" },
  pickerMenuContainer: {
    marginTop: 18,
    height: 81,
    backgroundColor: "#ffffff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5
  },
  title: {
    fontFamily: "Poppins-Bold",
    fontSize: 18,
    color: "#262626"
  },
  description: {
    fontFamily: "Poppins-Medium",
    fontSize: 12,
    color: "#262626"
  },
  btnContainer: {
    flex: 1,
    paddingHorizontal: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  currencyContainer: {
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "center"
  }
});

const mapStateToProps = (state) => ({
  user: state.AuthReducer.authDetails,
  billercategories: state.utilities.billerCategories,
  electricityBillerCategories: state.utilities.electricityBillerCategories,
  billerOptions: state.utilities.billerOptions,
  profileDetails: state.profile.profileDetails,
  afk_balance: state.profile.afk_balance,
  afritoken_balance: state.profile.afritoken_balance,
  eth_balance: state.profile.eth_balance,
  btc_balance: state.profile.eth_balance
});

export default connect(mapStateToProps, {
  fetchAllBillerCategories,
  fetchBillerCategories,
  fetchBillerOptions,
  submitUtilities
})(UtilitiesPage);
