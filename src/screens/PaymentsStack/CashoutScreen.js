import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Dimensions
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { Portal, Modal } from "react-native-paper";
import Chip from "../../../assets/chip.png";
import PayAfrikMark from "../../../assets/PayAfrik-Mark.png";

const { width } = Dimensions.get("window");
const CashoutScreen = props => {
  const [visible, setvisibility] = useState(false);
  return (
    <ScrollView contentContainerStyle={{ paddingBottom: 50 }}>
      <View style={styles.root}>
        <Portal>
          <Modal
            visible={visible}
            contentContainerStyle={{ flex: 1, justifyContent: "flex-end" }}
          >
            <View style={styles.modalContainer}>
              <TouchableOpacity
                style={styles.buttonLink}
                onPress={() => {
                  setvisibility(false);
                  props.navigation.navigate("CashoutBank");
                }}
              >
                <Text style={styles.buttonLinkText}>Cash out to bank</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.buttonLink}
                onPress={() => {
                  setvisibility(false);
                  props.navigation.navigate("CashoutCard");
                }}
              >
                <Text style={styles.buttonLinkText}>Cash out to Card</Text>
              </TouchableOpacity>
            </View>
          </Modal>
        </Portal>
        <View style={styles.accountDetails}>
          <Text
            style={{
              color: "#000000",
              fontSize: 9,
              fontFamily: "Poppins-Bold"
            }}
          >
            Total Balance
          </Text>
          <View
            style={{
              flexDirerction: "row",
              flexDirection: "row",
              alignItems: "center"
            }}
          >
            <FontAwesome5 name="dollar-sign" />
            <Text
              style={{
                color: "#000000",
                fontSize: 9,
                fontFamily: "Poppins-Bold"
              }}
            >
              &nbsp;20 USD
            </Text>
          </View>

          <View
            style={{
              flexDirerction: "row",
              flexDirection: "row",
              alignItems: "center"
            }}
          >
            <FontAwesome5 name="info-circle" />
            <Text>learn more</Text>
          </View>
        </View>
        <View style={styles.midContainer}>
          <Text
            style={{
              fontSize: 13,
              color: "#262626",
              fontFamily: "Poppins-Bold"
            }}
          >
            Kindly enter the amount you wish to cash out
          </Text>
          <View style={styles.amountContainer}>
            <Text
              style={{
                fontFamily: "Poppins-Thin",
                color: "#262626",
                fontSize: 29
              }}
            >
              0
            </Text>
            <Text
              style={{
                fontSize: 29,
                fontFamily: "Poppins-Bold",
                color: "#262626"
              }}
            >
              &nbsp;BTC
            </Text>
          </View>
        </View>
        <View style={styles.atmCard}>
          <View style={{ transform: [{ rotate: "0deg" }] }}>
            <Image source={Chip} />
            {/* <FontAwesome5 name="sim-card" color="#f2e101" size={33} /> */}
          </View>
          <View>
            <Text style={styles.nameLabel}>John Doe</Text>
            <Text style={styles.cardNumber}>XXXX XXXX XXXX XXXX</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={styles.cardLabel}>PayAfrik</Text>
              <Image source={PayAfrikMark} />
            </View>
            <TouchableOpacity
              style={styles.buttonContainer}
              activeOpacity={0.7}
              onPress={() => setvisibility(true)}
            >
              <Image source={require("../../../assets/fingerprint.png")} />
              <Text
                style={{
                  color: "#0115fb",
                  fontSize: 10,
                  fontFamily: "Poppins-Medium"
                }}
              >
                Cash Out
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#ffffff"
  },
  accountDetails: {
    height: 109.3,
    backgroundColor: "#ffffff",
    alignSelf: "center",
    justifyContent: "space-evenly",
    alignItems: "center",
    overflow: "hidden",
    marginTop: 28.6,
    borderRadius: 13,
    width: 208.3,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5
  },
  atmCard: {
    width: "90%",
    height: 218,
    marginTop: 37,
    paddingHorizontal: 20,
    alignSelf: "center",
    justifyContent: "space-evenly",
    backgroundColor: "#000dbb",
    borderRadius: 13,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5
  },
  amountContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignSelf: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#dedede"
  },
  midContainer: { alignSelf: "center", marginTop: 43 },
  nameLabel: {
    fontFamily: "Poppins-Thin",
    color: "#ffffff"
  },
  cardNumber: {
    fontFamily: "Poppins-Bold",
    textAlign: "left",
    color: "#ffffff",
    fontSize: 25
  },
  cardLabel: {
    color: "#ffffff",
    fontSize: 15
  },
  buttonContainer: {
    backgroundColor: "#fec200",
    width: 98,
    height: 33,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25
  },
  modalContainer: {
    backgroundColor: "#f9f9f9",
    height: 197,
    justifyContent: "center",
    width
  },
  buttonLink: {
    backgroundColor: "#ffffff",
    height: 57,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    borderColor: "#e5e5f1",
    borderWidth: 2
  },
  buttonLinkText: {
    fontFamily: "Poppins-Bold",
    color: "#262626",
    fontSize: 16
  }
});

export default CashoutScreen;
