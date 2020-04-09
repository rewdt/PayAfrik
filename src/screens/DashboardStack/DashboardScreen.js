import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  ImageBackground,
  StyleSheet
} from "react-native";
import { connect } from "react-redux";
import { FontAwesome5 } from "@expo/vector-icons";
import { Button, TouchableRipple } from "react-native-paper";
import DashboardWalletModal from "../../components/DashboardWalletModal";
import { fetchAllCurrencies } from "../../actions/CurrencyListings";
import { fetchUserProfile, getUserBalance } from "../../actions/ProfileAction";

const DashboardScreen = (props) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // console.log("user", props.user);
    props.fetchAllCurrencies();
    props.getUserBalance(props.user.token);
    // props.fetchUserProfile()
    // console.warn(props.currencies);
  }, []);

  useEffect(() => {
    props.navigation.setParams({
      balance: props.balance
    });
  }, [props.balance]);

  showModal = (status) => {
    setVisible(status);
  };

  return (
    <View>
      <ScrollView>
        <DashboardWalletModal
          visible={visible}
          setVisible={(status) => showModal(status)}
        />
        <View style={styles.mainsubHeader}>
          <Button
            theme={{ roundness: 23, colors: { primary: "#ffffff" } }}
            mode="contained"
            uppercase={false}
            labelStyle={{ fontSize: 10 }}
          >
            Refer & Earn
          </Button>
          <Button
            contentStyle={{
              // width: 118.5,
              height: 21
            }}
            onPress={() => showModal(true)}
            mode="contained"
            uppercase={false}
            labelStyle={{
              fontSize: 14,
              fontFamily: "Poppins-SemiBold",
              height: 20,
              color: "#262626"
            }}
            theme={{ roundness: 5, colors: { primary: "#ffffff" } }}
          >
            Wallets&nbsp;
            <FontAwesome5 name="chevron-down" />
          </Button>
          <View style={{ alignItems: "center" }}>
            <Text
              style={{
                fontFamily: "Poppins-Medium",
                color: "#acacac",
                fontSize: 11
              }}
            >
              Change Today
            </Text>
            <Text
              style={{
                fontSize: 16,
                color: "#262626",
                fontFamily: "Poppins-SemiBold"
              }}
            >
              0.00%
            </Text>
          </View>
        </View>
        <ScrollView horizontal contentContainerStyle={{ paddingVertical: 20 }}>
          {[1, 2, 3, 4, 5, 6].map((e) => (
            <ImageBackground
              key={e}
              resizeMode="center"
              source={require("../../../assets/crypto-banner.png")}
              style={{
                width: 122,
                height: 50.8,
                alignItems: "flex-end",
                justifyContent: "flex-start"
              }}
            >
              <View style={{ right: 15, top: 3 }}>
                <FontAwesome5 name="times" color="#ffffff" />
              </View>
            </ImageBackground>
          ))}
        </ScrollView>
        <View style={[styles.imageContainers, { backgroundColor: "#f0f0f7" }]}>
          <View style={{ paddingTop: 21, left: 12, flex: 1 }}>
            <Text
              style={{
                color: "#262626",
                fontFamily: "Poppins-SemiBold",
                fontSize: 16
              }}
            >
              Market News
            </Text>
            <Text
              style={{
                fontSize: 9,
                fontFamily: "Poppins-Medium",
                color: "#acacac"
              }}
            >
              Stay on top of your game with real time quotes and news
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "flex-end"
            }}
          >
            <TouchableOpacity style={styles.subContainerButton}>
              <FontAwesome5 name="chart-line" />
              <Text style={styles.subButtonText}>Market Quotas</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.subContainerButton,
                { backgroundColor: "#aaadcd" }
              ]}
              disabled
            >
              <View style={styles.soonContainer}>
                <Text style={styles.soonText}>Soon</Text>
              </View>
              <Text style={styles.subButtonText}>Latest News</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.subContainerButton,
                { backgroundColor: "#aaadcd" }
              ]}
              disabled
            >
              <View style={styles.soonContainer}>
                <Text style={styles.soonText}>Soon</Text>
              </View>
              <Text style={styles.subButtonText}>Trading Signals</Text>
            </TouchableOpacity>
          </View>
        </View>
        <ImageBackground
          style={styles.imageContainers}
          source={require("../../../assets/blue-bg.png")}
        >
          <View
            style={{
              flex: 1,
              justifyContent: "space-evenly",
              paddingLeft: 10,
              paddingTop: 10
            }}
          >
            <Text
              style={{
                fontFamily: "Poppins-Bold",
                color: "#ffffff",
                fontSize: 16
              }}
            >
              AFK TOKEN
            </Text>
            <Text
              style={{
                fontFamily: "Poppins-Medium",
                color: "#f0f0f7",
                fontSize: 7,
                textDecorationLine: "underline"
              }}
            >
              Value: $265.01
            </Text>
            <Text
              style={{
                fontFamily: "Poppins-Medium",
                color: "#f0f0f7",
                fontSize: 9,
                width: 147
              }}
            >
              Fast doesn't mean expensive. send money internationally at best
              rates
            </Text>
            <View style={{ flexDirection: "row" }}>
              <View style={styles.blueLabelsContainer}>
                <Text style={styles.blueLabelsText}>Efficient</Text>
              </View>
              <View style={styles.blueLabelsContainer}>
                <Text style={styles.blueLabelsText}>Fast</Text>
              </View>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-end"
            }}
          >
            <TouchableOpacity
              style={styles.subContainerButton}
              onPress={() => props.navigation.navigate("BuyOptions")}
            >
              <FontAwesome5 name="plus" size={19} />
              <Text style={styles.subButtonText}>Buy</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.subContainerButton}
              onPress={() => props.navigation.navigate("SendOptions")}
            >
              <FontAwesome5 name="paper-plane" size={19} />
              <Text style={styles.subButtonText}>Send</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.subContainerButton}
              onPress={() => props.navigation.navigate("WithdrawScreen")}
            >
              <FontAwesome5 name="arrow-up" size={19} />
              <Text style={styles.subButtonText}>Withdraw</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
        <ImageBackground
          style={styles.imageContainers}
          source={require("../../../assets/yellow-bg.png")}
        >
          <View style={{ flex: 1, paddingTop: 10, paddingLeft: 20 }}>
            <Text
              style={{
                fontFamily: "Poppins-Bold",
                fontSize: 16,
                color: "#000000"
              }}
            >
              AFK Coin
            </Text>
            <Text
              style={{
                color: "#000000",
                fontFamily: "Poppins-Medium",
                fontSize: 9,
                width: 149
              }}
            >
              The token that makes everything possible. learn all about it!
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-end"
            }}
          >
            <TouchableOpacity style={styles.subContainerButton}>
              <FontAwesome5 name="info" size={19} />
              <Text style={[styles.subButtonText, { width: 32 }]}>
                About AFK Coin
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.subContainerButton}
              onPress={() => props.navigation.navigate("BuyOptions")}
            >
              <FontAwesome5 name="paper-plane" size={19} />
              <Text style={[styles.subButtonText, { width: 32 }]}>
                Buy AFK Coin
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.subContainerButton}
              onPress={() => props.navigation.navigate("TransferOptions")}
            >
              {/* () => props.navigation.navigate("SendAFKCoin") */}
              <Image
                source={require("../../../assets/send-back.png")}
                style={{ height: 19.7, width: 24.6 }}
              />
              <Text style={[styles.subButtonText, { width: 32 }]}>
                Transfer
              </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
        <ImageBackground
          style={styles.imageContainers}
          source={require("../../../assets/white-bg.png")}
        >
          <View style={{ flex: 1, paddingTop: 20, paddingLeft: 20 }}>
            <Text
              style={{
                fontFamily: "Poppins-Bold",
                fontSize: 16,
                color: "#262626"
              }}
            >
              Utilities
            </Text>
            <Text
              style={{
                width: 202,
                fontFamily: "Poppins-Medium",
                fontSize: 9,
                color: "#acacac"
              }}
            >
              Nothing stops you. Pay your phone, bills and taxes with crypto
            </Text>
          </View>
          <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
            <TouchableOpacity
              style={styles.subContainerButton}
              onPress={() =>
                props.navigation.navigate("UtilitiesScreen", { index: 0 })
              }
            >
              <FontAwesome5 name="building" size={19} />
              <Text style={styles.subButtonText}>Electricity Bills</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.subContainerButton}
              onPress={() =>
                props.navigation.navigate("UtilitiesScreen", { index: 1 })
              }
            >
              <FontAwesome5 name="mobile-alt" size={19} />
              <Text style={styles.subButtonText}>Mobile Top-ups</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
        <ImageBackground
          style={styles.imageContainers}
          source={require("../../../assets/green-bg.png")}
        >
          <View
            style={{
              flex: 1,
              justifyContent: "space-evenly",
              paddingTop: 20,
              paddingLeft: 20
            }}
          >
            <Text
              style={{
                fontFamily: "Poppins-Bold",
                fontSize: 16,
                color: "#ffffff"
              }}
            >
              Investment Services
            </Text>
            <Text
              style={{
                width: 118,
                fontFamily: "Poppins-Medium",
                fontSize: 9,
                color: "#acacac"
              }}
            >
              Unleash the power of your assets
            </Text>
            <View style={styles.blueLabelsContainer}>
              <Text style={styles.blueLabelsText}>Up to 5 eturn</Text>
            </View>
          </View>
          <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
            <TouchableOpacity
              style={[
                styles.subContainerButton,
                { backgroundColor: "#aaadcd" }
              ]}
              disabled
            >
              <View style={styles.soonContainer}>
                <Text style={styles.soonText}>Soon</Text>
              </View>
              <Text style={[styles.subButtonText, { width: 36 }]}>
                Savings Account
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.subContainerButton,
                { backgroundColor: "#aaadcd" }
              ]}
              disabled
            >
              <View style={styles.soonContainer}>
                <Text style={styles.soonText}>Soon</Text>
              </View>
              <Text style={[styles.subButtonText, { width: 36 }]}>
                Investment Portfolio
              </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  root: { flex: 1 },
  mainsubHeader: {
    backgroundColor: "rgb(240,240,247)",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    height: 71,
    paddingHorizontal: 20,
    width: "100%"
  },
  imageContainers: {
    width: 325,
    height: 216,
    marginBottom: 20,
    borderRadius: 20,
    alignSelf: "center"
  },
  subContainerButton: {
    width: 69,
    height: 76,
    marginHorizontal: 10,
    justifyContent: "space-around",
    alignItems: "center",
    padding: 5,
    borderRadius: 15,
    backgroundColor: "#ffffff"
  },
  subButtonText: {
    fontFamily: "Poppins-SemiBold",
    color: "#262626",
    textAlign: "center",
    width: 24,
    fontSize: 6
  },
  soonContainer: {
    width: 54,
    height: 15,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    backgroundColor: "#f0f0f7"
  },
  soonText: {
    fontFamily: "Poppins-Bold",
    color: "#262626",
    fontSize: 8
  },
  blueLabelsContainer: {
    width: 58,
    height: 15,
    marginRight: 5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
    borderRadius: 5
  },
  blueLabelsText: {
    fontFamily: "Poppins-Bold",
    color: "#8e91bc",
    fontSize: 7
  }
});

const mapStateToProps = (state) => ({
  user: state.AuthReducer.authDetails,
  currencies: state.Currencies.currenciesList,
  balance: state.profile.balance
});

export default connect(mapStateToProps, {
  fetchAllCurrencies,
  fetchUserProfile,
  getUserBalance
})(DashboardScreen);
