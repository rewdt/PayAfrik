import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  Share,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import QRCode from "react-native-qrcode-svg";
import { Button } from "react-native-paper";
import CurrencyOptionsModal from "../components/CurrencyOptionsModal";

const ReceiveScreen = () => {
  const [visible, setVisible] = useState(false);
  onShare = async () => {
    try {
      const result = await Share.share({
        message:
          "React Native | A framework for building native apps using React"
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };
  showModal = status => {
    setVisible(status);
  };
  return (
    <View style={styles.root}>
      <CurrencyOptionsModal
        visible={visible}
        setVisible={status => showModal(status)}
      />
      <View style={styles.pickerMenuContainer}>
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
            To
          </Text>
        </View>
        <View style={{ flex: 2 }}>
          <TouchableOpacity
            style={styles.btnContainer}
            onPress={() => setVisible(true)}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={require("../../assets/btc.png")}
                style={{ width: 30, height: 30 }}
              />
              <View style={{ marginLeft: 10 }}>
                <Text>0 BTC</Text>
                <Text>BTC wallet</Text>
              </View>
            </View>
            <FontAwesome5 name="chevron-down" color="#aaadcd" />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          height: "100%"
          //   backgroundColor: "red"
          //   borderWidth: 3
        }}
      >
        <View
          style={{
            height: "50%",
            width: "85%",
            borderRadius: 10,
            marginTop: 20,
            alignSelf: "center",
            alignItems: "center",
            justifyContent: "space-around",
            backgroundColor: "#f0f0f7"
          }}
        >
          <View>
            <Text>Wallet Address</Text>
          </View>
          <QRCode value="123456789876543212345678" size={191} />
          <Text>123456789876543212345678</Text>
        </View>
        <Button
          onPress={onShare}
          mode="contained"
          uppercase={false}
          theme={{ colors: { primary: "#ffffff" }, roundness: 20 }}
          style={{ width: 266, marginTop: 30, alignSelf: "center" }}
        >
          Share
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: "#ffffff"
  },
  pickerMenuContainer: {
    marginTop: 18,
    height: 81,
    backgroundColor: "#ffffff",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5
  },
  btnContainer: {
    flex: 1,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  }
});

export default ReceiveScreen;
